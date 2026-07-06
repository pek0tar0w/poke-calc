import type { NonHpStatKey } from "../../common/index.js";
import type { ActiveRecoveryEffect } from "../recovery/index.js";
import type { DamageCalculationState } from "./damage-calculation-state.js";
import type { DamageResult, DamageSummary } from "./damage-result.js";

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
import { calculateKoProbability } from "./calculate-ko-probability.js";
import { calculateRandomDamageValues } from "./calculate-random-damage-values.js";

/** Championsのバトルレベル */
const CHAMPIONS_BATTLE_LEVEL = 50;

/** 急所補正倍率 */
const CRITICAL_HIT_MULTIPLIER = 1.5;

/** 撃破回数を探索する上限 */
const MAXIMUM_HIT_COUNT = 100;

/** 浮動小数点誤差を考慮して確定とみなす許容値 */
const PROBABILITY_TOLERANCE = 1e-12;

type CreateDamageSummaryParams = {
  /** 乱数補正ごとのダメージ */
  damages: readonly number[];

  /** 防御側の最大HP */
  defenderHp: number;

  /** 防御側に適用する回復効果 */
  recoveryEffects: readonly ActiveRecoveryEffect[];
};

/**
 * 攻撃側、防御側、技の条件からダメージ計算結果を返す
 *
 * @param state - ダメージ計算時の対戦状態
 * @returns 通常時と急所時のダメージ計算結果
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
  const recoveryEffects = resolveActiveRecoveryEffects(state.defender);

  return {
    attackerStats,
    defenderStats,
    normal: createDamageSummary({
      damages: normalDamages,
      defenderHp: defenderStats.hp,
      recoveryEffects,
    }),
    critical: createDamageSummary({
      damages: criticalDamages,
      defenderHp: defenderStats.hp,
      recoveryEffects,
    }),
  };
}

/**
 * 乱数ごとのダメージと防御側の最大HPから結果の要約を作る
 *
 * @param params - 乱数ごとのダメージと防御側の最大HP
 * @returns ダメージ幅、割合、攻撃回数、撃破確率
 */
function createDamageSummary(params: CreateDamageSummaryParams): DamageSummary {
  const { damages, defenderHp, recoveryEffects } = params;
  const minimumDamage = Math.min(...damages);
  const maximumDamage = Math.max(...damages);

  let possibleHitCount: number | null = null;
  let guaranteedHitCount: number | null = null;
  let knockoutProbability = 0;

  // ダメージが発生しない場合は撃破回数を探索しない
  if (maximumDamage > 0) {
    // 回復を各攻撃後に適用しながら、最短と確定の攻撃回数を探索する
    for (let hitCount = 1; hitCount <= MAXIMUM_HIT_COUNT; hitCount++) {
      const probability = calculateKoProbability({
        damages,
        hitCount,
        currentHp: defenderHp,
        maximumHp: defenderHp,
        recoveryEffects,
      });

      // 初めて撃破確率が生じた回数を最短攻撃回数として記録する
      if (possibleHitCount === null && probability > 0) {
        possibleHitCount = hitCount;
        knockoutProbability = probability;
      }

      // 撃破確率が100%になった回数を確定攻撃回数として記録する
      if (probability >= 1 - PROBABILITY_TOLERANCE) {
        guaranteedHitCount = hitCount;
        break;
      }
    }
  }

  return {
    damages,
    minimumDamage,
    maximumDamage,
    minimumDamageRatio: minimumDamage / defenderHp,
    maximumDamageRatio: maximumDamage / defenderHp,
    possibleHitCount,
    guaranteedHitCount,
    knockoutProbability,
  };
}
