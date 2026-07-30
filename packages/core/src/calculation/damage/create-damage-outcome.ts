import type { ActiveDamageEffect } from "../effect/damage/index.js";
import type { ActiveDamageReductionEffect } from "../effect/damage-reduction/index.js";
import type { ActiveRecoveryEffect } from "../effect/recovery/active-recovery-effect.js";
import type { DamageOutcome } from "./damage-result.js";

import { applyDamageReductionEffects } from "../effect/damage-reduction/index.js";
import { calculateKnockoutResult } from "./knockout/calculate-knockout-result.js";
import { createInitialKoState } from "./knockout/ko-distribution.js";

/**
 * ダメージ分布と防御側の状態から結果の要約を作る
 *
 * 攻撃ダメージ自体の撃破回数は、追加効果を含めずに計算する
 * 回復や定数ダメージは、別枠のHP推移としてturnsに持たせる
 */
export function createDamageOutcome({
  damageSequences,
  defenderHp,
  damageReductionEffects,
  recoveryEffects,
  damageEffects,
  badPoisonCounter = 1,
}: {
  /** 乱数枠ごとのhit列 */
  damageSequences: readonly (readonly number[])[];

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
}): DamageOutcome {
  // 1発目にだけ効く軽減効果を反映した、攻撃ダメージ分布を作る
  const initialState = createInitialKoState({
    currentHp: defenderHp,
    badPoisonCounter,
  });
  const initialActionDamages = calculateInitialActionDamageRolls({
    damageSequences,
    defenderHp,
    initialState,
    damageReductionEffects,
  });
  const hasMoveDamage = damageSequences.some((damages) =>
    damages.some((damage) => damage > 0),
  );

  const minimumDamage = Math.min(...initialActionDamages);
  const maximumDamage = Math.max(...initialActionDamages);

  // HP推移と、回復・定数ダメージ・hit途中の分岐を含めた撃破確率を分布計算から作る
  const knockoutResult = hasMoveDamage
    ? calculateKnockoutResult({
        damageSequences,
        currentHp: defenderHp,
        maximumHp: defenderHp,
        damageReductionEffects,
        recoveryEffects,
        damageEffects,
        badPoisonCounter,
      })
    : {
        possibleHitCount: null,
        guaranteedHitCount: null,
        knockoutProbability: 0,
        turns: [],
      };

  const attackOnlyKnockout = calculateAttackOnlyKnockout({
    damages: initialActionDamages,
    defenderHp,
  });
  const shouldUseEffectKnockout =
    damageSequences.length > 1 &&
    recoveryEffects.some(
      (activeEffect) => activeEffect.effect.activationTiming === "afterDamage",
    );

  return {
    damages: initialActionDamages,
    minimumDamage,
    maximumDamage,
    minimumDamageRatio: minimumDamage / defenderHp,
    maximumDamageRatio: maximumDamage / defenderHp,
    ...(shouldUseEffectKnockout ? knockoutResult : attackOnlyKnockout),
    turns: knockoutResult.turns,
  };
}

/** 1hit目にだけ発動しうる軽減込みで、1行動ぶんの合計ダメージ候補を作る */
function calculateInitialActionDamageRolls({
  damageSequences,
  defenderHp,
  initialState,
  damageReductionEffects,
}: {
  damageSequences: readonly (readonly number[])[];
  defenderHp: number;
  initialState: ReturnType<typeof createInitialKoState>;
  damageReductionEffects: readonly ActiveDamageReductionEffect[];
}): readonly number[] {
  return damageSequences.map((damageSequence) => {
    const [firstDamage, ...restDamages] = damageSequence;

    if (firstDamage === undefined) {
      return 0;
    }

    const initialFirstDamage = applyDamageReductionEffects({
      damage: firstDamage,
      state: initialState,
      maximumHp: defenderHp,
      effects: damageReductionEffects,
    }).damage;

    return [initialFirstDamage, ...restDamages].reduce(
      (totalDamage, damage) => totalDamage + damage,
      0,
    );
  });
}

/** 攻撃ダメージだけを使って、撃破回数を計算する */
function calculateAttackOnlyKnockout({
  damages,
  defenderHp,
}: {
  /** 1行動ごとの攻撃ダメージ候補 */
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

  const possibleHitCount = Math.ceil(defenderHp / maximumDamage);
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
  let distribution = new Map<number, number>([[0, 1]]);

  for (let hit = 0; hit < hitCount; hit++) {
    const nextDistribution = new Map<number, number>();

    for (const [totalDamage, probability] of distribution) {
      for (const damage of damages) {
        const nextDamage = totalDamage + damage;
        const nextProbability = probability / damages.length;

        nextDistribution.set(
          nextDamage,
          (nextDistribution.get(nextDamage) ?? 0) + nextProbability,
        );
      }
    }

    distribution = nextDistribution;
  }

  return [...distribution].reduce(
    (probability, [totalDamage, damageProbability]) =>
      totalDamage >= defenderHp ? probability + damageProbability : probability,
    0,
  );
}
