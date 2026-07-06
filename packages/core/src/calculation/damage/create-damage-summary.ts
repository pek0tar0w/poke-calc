import type { ActiveRecoveryEffect } from "../recovery/index.js";
import type { DamageSummary } from "./damage-result.js";

import { calculateKoProbability } from "./calculate-ko-probability.js";

/** 撃破回数を探索する上限 */
const MAXIMUM_HIT_COUNT = 100;

/** 浮動小数点誤差を考慮して確定とみなす許容値 */
const PROBABILITY_TOLERANCE = 1e-12;

export type CreateDamageSummaryParams = {
  /** 乱数補正ごとのダメージ */
  damages: readonly number[];

  /** 防御側の最大HP */
  defenderHp: number;

  /** 防御側に適用する回復効果 */
  recoveryEffects: readonly ActiveRecoveryEffect[];
};

/** 乱数ごとのダメージと防御側の状態から結果の要約を作る */
export function createDamageSummary(
  params: CreateDamageSummaryParams,
): DamageSummary {
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
