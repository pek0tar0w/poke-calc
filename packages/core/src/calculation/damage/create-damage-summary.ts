import type { ActiveDamageEffect } from "../effect/damage/index.js";
import type { ActiveDamageReductionEffect } from "../effect/damage-reduction/index.js";
import type { ActiveRecoveryEffect } from "../effect/recovery/active-recovery-effect.js";
import type { DamageSummary } from "./damage-result.js";

import { applyDamageReductionEffects } from "../effect/damage-reduction/index.js";
import { calculateKnockoutResult } from "./knockout/calculate-knockout-result.js";
import { createInitialKoState } from "./knockout/ko-distribution.js";

/**
 * 乱数ごとのダメージと防御側の状態から結果の要約を作る
 *
 * 攻撃ダメージ自体の撃破回数は、追加効果を含めずに計算する
 * 回復や定数ダメージは、別枠のHP推移としてturnsに持たせる
 */
export function createDamageSummary({
  damages,
  defenderHp,
  damageReductionEffects,
  recoveryEffects,
  damageEffects,
  badPoisonCounter = 1,
}: {
  /** 乱数補正ごとのダメージ */
  damages: readonly number[];

  /** 防御側の最大HP */
  defenderHp: number;

  /** 防御側に適用するダメージ軽減効果 */
  damageReductionEffects: readonly ActiveDamageReductionEffect[];

  /** 防御側に適用する回復効果 */
  recoveryEffects: readonly ActiveRecoveryEffect[];

  /** 防御側に適用するHPダメージ効果 */
  damageEffects: readonly ActiveDamageEffect[];

  /** もうどくの現在カウンター */
  badPoisonCounter?: number;
}): DamageSummary {
  // 1発目にだけ効く軽減効果を反映した、攻撃ダメージ範囲を作る
  const initialState = createInitialKoState({
    currentHp: defenderHp,
    badPoisonCounter,
  });
  const initialDamages = damages.map(
    (damage) =>
      applyDamageReductionEffects({
        damage,
        state: initialState,
        maximumHp: defenderHp,
        effects: damageReductionEffects,
      }).damage,
  );

  const minimumDamage = Math.min(...initialDamages);
  const maximumDamage = Math.max(...initialDamages);
  const maximumRawDamage = Math.max(...damages);

  // 「確定n発」「乱数n発」は追加効果を含めず、攻撃ダメージだけで計算する
  const attackOnlyKnockout = calculateAttackOnlyKnockout({
    damages: initialDamages,
    defenderHp,
  });

  // 追加効果欄のHP推移と、その効果で倒れる確率は分布計算から作る
  const knockoutResult =
    maximumRawDamage === 0
      ? {
          turns: [],
        }
      : calculateKnockoutResult({
          damages,
          currentHp: defenderHp,
          maximumHp: defenderHp,
          damageReductionEffects,
          recoveryEffects,
          damageEffects,
          badPoisonCounter,
        });

  return {
    damages: initialDamages,
    minimumDamage,
    maximumDamage,
    minimumDamageRatio: minimumDamage / defenderHp,
    maximumDamageRatio: maximumDamage / defenderHp,
    ...attackOnlyKnockout,
    turns: knockoutResult.turns,
  };
}

/** 攻撃ダメージだけを使って、撃破回数を計算する */
function calculateAttackOnlyKnockout({
  damages,
  defenderHp,
}: {
  /** 乱数ごとの攻撃ダメージ */
  damages: readonly number[];

  /** 防御側の最大HP */
  defenderHp: number;
}): {
  possibleHitCount: number | null;
  guaranteedHitCount: number | null;
  knockoutProbability: number;
} {
  const minimumDamage = Math.min(...damages);
  const maximumDamage = Math.max(...damages);

  if (maximumDamage <= 0) {
    return {
      possibleHitCount: null,
      guaranteedHitCount: null,
      knockoutProbability: 0,
    };
  }

  // 最高乱数が続いた場合に倒せる最短回数
  const possibleHitCount = Math.ceil(defenderHp / maximumDamage);

  // 最低乱数が続いても倒せる確定回数
  const guaranteedHitCount = Math.ceil(defenderHp / minimumDamage);

  return {
    possibleHitCount,
    guaranteedHitCount,
    knockoutProbability: calculateAttackOnlyKoProbability({
      damages,
      defenderHp,
      hitCount: possibleHitCount,
    }),
  };
}

/** 攻撃ダメージだけでpossibleHitCount回以内に倒せる確率を計算する */
function calculateAttackOnlyKoProbability({
  damages,
  defenderHp,
  hitCount,
}: {
  damages: readonly number[];
  defenderHp: number;
  hitCount: number;
}): number {
  // key: 合計ダメージ、value: その合計ダメージになる確率
  let distribution = new Map<number, number>([[0, 1]]);

  for (let hit = 0; hit < hitCount; hit++) {
    const nextDistribution = new Map<number, number>();

    for (const [totalDamage, probability] of distribution) {
      for (const damage of damages) {
        const nextDamage = totalDamage + damage;

        // 16段階の乱数は同じ確率で発生するため、現在の確率を均等に分ける
        const nextProbability = probability / damages.length;

        nextDistribution.set(
          nextDamage,
          (nextDistribution.get(nextDamage) ?? 0) + nextProbability,
        );
      }
    }

    distribution = nextDistribution;
  }

  // 指定回数後に合計ダメージがHP以上になった確率を合計する
  return [...distribution].reduce(
    (probability, [totalDamage, damageProbability]) =>
      totalDamage >= defenderHp ? probability + damageProbability : probability,
    0,
  );
}
