import type { NonHpStatKey } from "../../common/index.js";
import type { AbilityEffect } from "../../model/ability/index.js";
import type { DamagingMove } from "../../model/move/index.js";
import type { DamageCalculationInput } from "./damage-calculation-input.js";
import type { DamageResult } from "./damage-result.js";

import { resolveActiveEffects } from "../effect/index.js";
import { resolveHitCount, resolveMove } from "../move/index.js";
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
import { createDamageOutcome } from "./create-damage-outcome.js";

/** Championsのバトルレベル */
const CHAMPIONS_BATTLE_LEVEL = 50;

/** 急所補正倍率 */
const CRITICAL_HIT_MULTIPLIER = 1.5;

/** ダブルで複数対象に当たる技の範囲補正倍率 */
const SPREAD_DAMAGE_MULTIPLIER = 0.75;

/**
 * 攻撃側、防御側、技の条件からダメージ計算結果を返す
 *
 * @param input - ダメージ計算に必要な入力
 */
export function calculateDamage(input: DamageCalculationInput): DamageResult {
  // 入力から解決済みのポケモンデータを取得する
  const attackerPokemonData = input.attacker.pokemon;
  const defenderPokemonData = input.defender.pokemon;

  // 種族値と育成値から性格補正前の実数値を計算する
  const attackerStatsBeforeNature = calculatePokemonStats({
    baseStats: attackerPokemonData.baseStats,
    statConfig: input.attacker,
  });
  const defenderStatsBeforeNature = calculatePokemonStats({
    baseStats: defenderPokemonData.baseStats,
    statConfig: input.defender,
  });

  // 性格補正を適用し、ランク補正前の実数値を計算する
  const attackerStats = applyNatureModifiers({
    stats: attackerStatsBeforeNature,
    natureKey: input.attacker.natureKey,
  });
  const defenderStats = applyNatureModifiers({
    stats: defenderStatsBeforeNature,
    natureKey: input.defender.natureKey,
  });

  // 技固有の威力・タイプ変更を反映する
  const resolvedMove = resolveMove({
    move: input.move,
    weather: input.weather,
  });

  // 技の分類に応じて攻撃と防御に使用する能力を決定する
  const attackingStatKey: NonHpStatKey =
    input.move.damageClass === "physical" ? "attack" : "specialAttack";
  const defendingStatKey: NonHpStatKey =
    input.move.damageClass === "physical" ? "defense" : "specialDefense";

  const attackingStatBoost = input.attacker.boosts[attackingStatKey];
  const defendingStatBoost = input.defender.boosts[defendingStatKey];

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
    weather: input.weather,
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
    weather: input.weather,
  });

  const attackerLevel =
    input.game === "champions" ? CHAMPIONS_BATTLE_LEVEL : input.attacker.level;

  const hitCount = resolveHitCount({
    move: input.move,
    attacker: input.attacker,
    selectedHitCount: input.selectedHitCount,
  });

  // レベル、威力、攻撃、防御から各種補正前の基本ダメージを計算する
  const normalBaseDamageBeforeSpread = calculateBaseDamage({
    attackerLevel,
    movePower: resolvedMove.power,
    attackingStat: normalAttackingStat,
    defendingStat: normalDefendingStat,
  });
  // ダブルで複数対象に当たる技だけ範囲補正を適用する
  const normalBaseDamageBeforeWeather = applySpreadDamageModifier({
    damage: normalBaseDamageBeforeSpread,
    battleType: input.battleType,
    isMultiTarget: input.move.isMultiTarget,
  });
  // 基本ダメージへ晴れ・雨のタイプ別補正を適用する
  const normalBaseDamage = applyWeatherDamageModifier({
    damage: normalBaseDamageBeforeWeather,
    weather: input.weather,
    moveType: resolvedMove.type,
  });

  const criticalBaseDamageBeforeSpread = calculateBaseDamage({
    attackerLevel,
    movePower: resolvedMove.power,
    attackingStat: criticalAttackingStat,
    defendingStat: criticalDefendingStat,
  });
  // 急所時も範囲補正は急所補正より前に適用する
  const criticalBaseDamageBeforeWeather = applySpreadDamageModifier({
    damage: criticalBaseDamageBeforeSpread,
    battleType: input.battleType,
    isMultiTarget: input.move.isMultiTarget,
  });
  // 天候補正
  const criticalBaseDamageAfterWeather = applyWeatherDamageModifier({
    damage: criticalBaseDamageBeforeWeather,
    weather: input.weather,
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

  // 通常時と急所時それぞれの1hit分の乱数ダメージを計算する
  // 連続技はKO分布側でhitごとに処理し、オボンのみなどの途中発動を扱う
  const normalDamageRolls = calculateRandomDamageValues({
    ...commonDamageParams,
    baseDamage: normalBaseDamage,
  });
  const normalDamageSequences = applyAdditionalHitEffects({
    damageSequences: createDamageSequences({
      damageRolls: normalDamageRolls,
      hitCount,
    }),
    move: input.move,
    attackerAbilityEffects: input.attacker.ability?.effects ?? [],
  });

  const criticalDamageRolls = calculateRandomDamageValues({
    ...commonDamageParams,
    baseDamage: criticalBaseDamage,
  });
  const criticalDamageSequences = applyAdditionalHitEffects({
    damageSequences: createDamageSequences({
      damageRolls: criticalDamageRolls,
      hitCount,
    }),
    move: input.move,
    attackerAbilityEffects: input.attacker.ability?.effects ?? [],
  });

  const effectResolutionContext = {
    game: input.game,
    attacker: input.attacker,
    defender: input.defender,
    move: input.move,
    weather: input.weather,
  };

  // 特性、道具、状態異常、付加状態、天候から計算に参加する効果を解決する
  const activeEffects = resolveActiveEffects(effectResolutionContext);
  const badPoisonCounter = input.defender.statusState?.badPoisonCounter ?? 1;

  return {
    attackerStats,
    defenderStats,
    normal: createDamageOutcome({
      damageSequences: normalDamageSequences,
      defenderHp: defenderStats.hp,
      damageReductionEffects: activeEffects.damageReduction,
      recoveryEffects: activeEffects.recovery,
      damageEffects: activeEffects.damage,
      badPoisonCounter,
    }),
    critical: createDamageOutcome({
      damageSequences: criticalDamageSequences,
      defenderHp: defenderStats.hp,
      damageReductionEffects: activeEffects.damageReduction,
      recoveryEffects: activeEffects.recovery,
      damageEffects: activeEffects.damage,
      badPoisonCounter,
    }),
  };
}

/** 乱数枠ごとに、この行動で発生するhit列を作る */
function createDamageSequences({
  damageRolls,
  hitCount,
}: {
  /** 1hit分の乱数ダメージ */
  damageRolls: readonly number[];

  /** この行動で発生するhit数 */
  hitCount: number;
}): readonly (readonly number[])[] {
  return damageRolls.map((damage) =>
    Array.from({ length: hitCount }, () => damage),
  );
}

/** おやこあいなど、特性による追加hitをダメージ列へ反映する */
function applyAdditionalHitEffects({
  damageSequences,
  move,
  attackerAbilityEffects,
}: {
  /** 乱数枠ごとのhit列 */
  damageSequences: readonly (readonly number[])[];

  /** 使用する攻撃技 */
  move: DamagingMove;

  /** 攻撃側の特性効果 */
  attackerAbilityEffects: readonly AbilityEffect[];
}): readonly (readonly number[])[] {
  if (move.isMultiTarget || move.hitCount.kind !== "single") {
    return damageSequences;
  }

  const additionalHitEffects = attackerAbilityEffects.filter(
    (effect): effect is Extract<AbilityEffect, { effect: "additionalHit" }> =>
      "side" in effect &&
      effect.side === "attacker" &&
      effect.effect === "additionalHit",
  );

  if (additionalHitEffects.length === 0) {
    return damageSequences;
  }

  return damageSequences.map((damageSequence) => {
    const additionalHits = additionalHitEffects.flatMap((effect) =>
      damageSequence.flatMap((damage) =>
        Array.from({ length: effect.hitCount }, () =>
          roundHalfDown(damage * effect.damageMultiplier),
        ),
      ),
    );

    return [...damageSequence, ...additionalHits];
  });
}

/** ダブルで複数対象に当たる技へ範囲補正を適用する */
function applySpreadDamageModifier({
  damage,
  battleType,
  isMultiTarget,
}: {
  /** 補正前のダメージ */
  damage: number;

  /** シングル・ダブルの対戦形式 */
  battleType: DamageCalculationInput["battleType"];

  /** 複数対象に当たる攻撃技か */
  isMultiTarget: boolean;
}): number {
  if (battleType !== "double" || !isMultiTarget) {
    return damage;
  }

  return roundHalfDown(damage * SPREAD_DAMAGE_MULTIPLIER);
}
