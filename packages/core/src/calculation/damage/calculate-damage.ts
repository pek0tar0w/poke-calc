import type { NonHpStatKey } from "../../common/index.js";
import type { DamageCalculationState } from "./damage-calculation-state.js";
import type { DamageResult } from "./damage-result.js";

import { resolveActiveDamageReductionEffects } from "../damage-reduction/index.js";
import { resolveMove } from "../move/index.js";
import { resolveActiveRecoveryEffects } from "../recovery/index.js";
import {
  applyNatureModifiers,
  applyStatBoost,
  calculatePokemonStats,
} from "../stat/index.js";
import { roundHalfDown } from "../utils/round-half-down.js";
import {
  applyWeatherDamageModifier,
  applyWeatherDefenseModifier,
} from "../weather/index.js";
import { calculateBaseDamage } from "./calculate-base-damage.js";
import { calculateRandomDamageValues } from "./calculate-random-damage-values.js";
import { createDamageSummary } from "./create-damage-summary.js";

/** Championsのバトルレベル */
const CHAMPIONS_BATTLE_LEVEL = 50;

/** 急所補正倍率 */
const CRITICAL_HIT_MULTIPLIER = 1.5;

/**
 * 攻撃側、防御側、技の条件からダメージ計算結果を返す
 *
 * @param state - ダメージ計算時の対戦状態
 */
export function calculateDamage(state: DamageCalculationState): DamageResult {
  // Stateから解決済みのポケモンデータを取得する
  const attackerPokemonData = state.attacker.pokemon;
  const defenderPokemonData = state.defender.pokemon;

  // 種族値と育成値から性格補正前の実数値を計算する
  const attackerStatsBeforeNature = calculatePokemonStats({
    baseStats: attackerPokemonData.baseStats,
    statConfig: state.attacker.config,
  });
  const defenderStatsBeforeNature = calculatePokemonStats({
    baseStats: defenderPokemonData.baseStats,
    statConfig: state.defender.config,
  });

  // 性格補正を適用し、ランク補正前の実数値を計算する
  const attackerStats = applyNatureModifiers({
    stats: attackerStatsBeforeNature,
    natureKey: state.attacker.config.natureKey,
  });
  const defenderStats = applyNatureModifiers({
    stats: defenderStatsBeforeNature,
    natureKey: state.defender.config.natureKey,
  });

  // 技固有の威力・タイプ変更を反映する
  const resolvedMove = resolveMove({
    move: state.move,
    weather: state.weather,
  });

  // 技の分類に応じて攻撃と防御に使用する能力を決定する
  const attackingStatKey: NonHpStatKey =
    state.move.damageClass === "physical" ? "attack" : "specialAttack";
  const defendingStatKey: NonHpStatKey =
    state.move.damageClass === "physical" ? "defense" : "specialDefense";

  const attackingStatBoost = state.attacker.boosts[attackingStatKey];
  const defendingStatBoost = state.defender.boosts[defendingStatKey];

  const unboostedAttackingStat = attackerStats[attackingStatKey];
  const unboostedDefendingStat = defenderStats[defendingStatKey];

  // 通常時は攻撃側と防御側のランクをそのまま適用する
  const normalAttackingStat = applyStatBoost({
    stat: unboostedAttackingStat,
    boost: attackingStatBoost,
  });
  // 防御側はランク補正後に砂嵐・雪の能力補正を適用する
  const normalDefendingStatBeforeWeather = applyStatBoost({
    stat: unboostedDefendingStat,
    boost: defendingStatBoost,
  });
  const normalDefendingStat = applyWeatherDefenseModifier({
    stat: normalDefendingStatBeforeWeather,
    statKey: defendingStatKey,
    defenderTypes: defenderPokemonData.types,
    weather: state.weather,
  });

  // 急所時に無視される下降ランクと上昇ランクを0へ置き換える
  const criticalAttackingStatBoost =
    attackingStatBoost < 0 ? 0 : attackingStatBoost;
  const criticalDefendingStatBoost =
    defendingStatBoost > 0 ? 0 : defendingStatBoost;

  const criticalAttackingStat = applyStatBoost({
    stat: unboostedAttackingStat,
    boost: criticalAttackingStatBoost,
  });
  // 急所でも砂嵐・雪の能力補正は無視しない
  const criticalDefendingStatBeforeWeather = applyStatBoost({
    stat: unboostedDefendingStat,
    boost: criticalDefendingStatBoost,
  });
  const criticalDefendingStat = applyWeatherDefenseModifier({
    stat: criticalDefendingStatBeforeWeather,
    statKey: defendingStatKey,
    defenderTypes: defenderPokemonData.types,
    weather: state.weather,
  });

  const attackerLevel =
    state.game === "champions"
      ? CHAMPIONS_BATTLE_LEVEL
      : state.attacker.config.level;

  // レベル、威力、攻撃、防御から各種補正前の基本ダメージを計算する
  const normalBaseDamageBeforeWeather = calculateBaseDamage({
    attackerLevel,
    movePower: resolvedMove.power,
    attackingStat: normalAttackingStat,
    defendingStat: normalDefendingStat,
  });
  // 基本ダメージへ晴れ・雨のタイプ別補正を適用する
  const normalBaseDamage = applyWeatherDamageModifier({
    damage: normalBaseDamageBeforeWeather,
    weather: state.weather,
    moveType: resolvedMove.type,
  });

  const criticalBaseDamageBeforeWeather = calculateBaseDamage({
    attackerLevel,
    movePower: resolvedMove.power,
    attackingStat: criticalAttackingStat,
    defendingStat: criticalDefendingStat,
  });
  // 天候補正
  const criticalBaseDamageAfterWeather = applyWeatherDamageModifier({
    damage: criticalBaseDamageBeforeWeather,
    weather: state.weather,
    moveType: resolvedMove.type,
  });

  // 急所補正を適用する
  const criticalBaseDamage = roundHalfDown(
    criticalBaseDamageAfterWeather * CRITICAL_HIT_MULTIPLIER,
  );

  const commonDamageParams = {
    moveType: resolvedMove.type,
    attackerTypes: attackerPokemonData.types,
    defenderTypes: defenderPokemonData.types,
  };

  // 通常時と急所時それぞれの16段階のダメージを計算する
  const normalDamages = calculateRandomDamageValues({
    ...commonDamageParams,
    baseDamage: normalBaseDamage,
  });

  const criticalDamages = calculateRandomDamageValues({
    ...commonDamageParams,
    baseDamage: criticalBaseDamage,
  });

  // 防御側の道具と特性から回復効果を解決する
  const recoveryEffects = resolveActiveRecoveryEffects({
    item: state.defender.item,
    ability: state.defender.ability,
    weather: state.weather,
  });

  // 防御側の道具と特性からダメージ軽減効果を解決する
  const damageReductionEffects = resolveActiveDamageReductionEffects({
    item: state.defender.item,
    ability: state.defender.ability,
    weather: state.weather,
  });

  return {
    attackerStats,
    defenderStats,
    normal: createDamageSummary({
      damages: normalDamages,
      defenderHp: defenderStats.hp,
      damageReductionEffects,
      recoveryEffects,
    }),
    critical: createDamageSummary({
      damages: criticalDamages,
      defenderHp: defenderStats.hp,
      damageReductionEffects,
      recoveryEffects,
    }),
  };
}
