import type { ActiveRecoveryEffect } from "../recovery/index.js";
import type { DamageSummary } from "./damage-result.js";

import { calculateKnockoutResult } from "./calculate-knockout-result.js";

export type CreateDamageSummaryParams = {
  /** 乱数補正ごとのダメージ */
  damages: readonly number[];

  /** 防御側の最大HP */
  defenderHp: number;

  /** 防御側に適用する回復効果 */
  recoveryEffects: readonly ActiveRecoveryEffect[];
};

/**
 * 乱数ごとのダメージと防御側の状態から結果の要約を作る
 *
 * @param params - 乱数ごとのダメージ、防御側のHP、回復効果
 * @returns ダメージ幅、割合、撃破回数、撃破確率
 */
export function createDamageSummary(
  params: CreateDamageSummaryParams,
): DamageSummary {
  const { damages, defenderHp, recoveryEffects } = params;
  const minimumDamage = Math.min(...damages);
  const maximumDamage = Math.max(...damages);

  const knockoutResult =
    maximumDamage === 0
      ? {
          possibleHitCount: null,
          guaranteedHitCount: null,
          knockoutProbability: 0,
        }
      : calculateKnockoutResult({
          damages,
          currentHp: defenderHp,
          maximumHp: defenderHp,
          recoveryEffects,
        });

  return {
    damages,
    minimumDamage,
    maximumDamage,
    minimumDamageRatio: minimumDamage / defenderHp,
    maximumDamageRatio: maximumDamage / defenderHp,
    ...knockoutResult,
  };
}
