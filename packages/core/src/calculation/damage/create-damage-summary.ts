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
 * 回復効果を考慮して、最短撃破回数と確定撃破回数も計算する
 */
export function createDamageSummary({
  damages,
  defenderHp,
  damageReductionEffects,
  recoveryEffects,
  damageEffects,
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
}): DamageSummary {
  const initialState = createInitialKoState(defenderHp);
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

  const knockoutResult =
    maximumRawDamage === 0
      ? {
          possibleHitCount: null,
          guaranteedHitCount: null,
          knockoutProbability: 0,
        }
      : calculateKnockoutResult({
          damages,
          currentHp: defenderHp,
          maximumHp: defenderHp,
          damageReductionEffects,
          recoveryEffects,
          damageEffects,
        });

  return {
    damages: initialDamages,
    minimumDamage,
    maximumDamage,
    minimumDamageRatio: minimumDamage / defenderHp,
    maximumDamageRatio: maximumDamage / defenderHp,
    ...knockoutResult,
  };
}
