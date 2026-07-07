import type { ActiveRecoveryEffect } from "../recovery/index.js";
import type { KoDistribution } from "./ko-distribution.js";

import { applyRecoveryEffects } from "../recovery/index.js";
import { addKoStateProbability } from "./ko-distribution.js";

/** 撃破回数を探索する上限 */
const MAXIMUM_HIT_COUNT = 100;

/** 浮動小数点誤差を考慮して確定とみなす許容値 */
const PROBABILITY_TOLERANCE = 1e-12;

export type CalculateKnockoutResultParams = {
  /** 乱数ごとのダメージ */
  damages: readonly number[];

  /** 計算開始時のHP */
  currentHp: number;

  /** 最大HP */
  maximumHp: number;

  /** 回復効果 */
  recoveryEffects: readonly ActiveRecoveryEffect[];
};

export type KnockoutResult = {
  /** 初めて倒せる可能性が生じる攻撃回数 */
  possibleHitCount: number | null;

  /** 必ず倒せる攻撃回数 */
  guaranteedHitCount: number | null;

  /** 最短攻撃回数以内に倒せる確率 */
  knockoutProbability: number;
};

type AdvanceKoDistributionParams = {
  /** 攻撃前の生存状態 */
  distribution: KoDistribution;

  /** 乱数ごとのダメージ */
  damages: readonly number[];

  /** 最大HP */
  maximumHp: number;

  /** 回復効果 */
  recoveryEffects: readonly ActiveRecoveryEffect[];
};

type AdvanceKoDistributionResult = {
  /** 次の攻撃へ引き継ぐ生存状態 */
  distribution: KoDistribution;

  /** 今回の攻撃で倒れた確率 */
  knockoutProbability: number;
};

/**
 * 分布を攻撃1回分ずつ更新し、最短と確定の撃破回数を求める
 *
 * @param params - ダメージ、HP、回復効果
 * @returns 最短攻撃回数、確定攻撃回数、最短攻撃回数での撃破確率
 */
export function calculateKnockoutResult(
  params: CalculateKnockoutResultParams,
): KnockoutResult {
  // 攻撃前は現在HP・道具未消費になる確率が100%
  let distribution: KoDistribution = new Map([
    [params.currentHp, new Map([[false, 1]])],
  ]);

  let cumulativeKnockoutProbability = 0;
  let possibleHitCount: number | null = null;
  let guaranteedHitCount: number | null = null;
  let knockoutProbability = 0;

  for (let hitCount = 1; hitCount <= MAXIMUM_HIT_COUNT; hitCount++) {
    const result = advanceKoDistribution({
      distribution,
      damages: params.damages,
      maximumHp: params.maximumHp,
      recoveryEffects: params.recoveryEffects,
    });

    // 生存した状態だけを次の攻撃へ引き継ぐ
    distribution = result.distribution;
    cumulativeKnockoutProbability += result.knockoutProbability;

    // 初めて撃破確率が生じた回数と確率を記録する
    if (possibleHitCount === null && cumulativeKnockoutProbability > 0) {
      possibleHitCount = hitCount;
      knockoutProbability = cumulativeKnockoutProbability;
    }

    // 撃破確率が100%になった回数を確定攻撃回数として記録する
    if (cumulativeKnockoutProbability >= 1 - PROBABILITY_TOLERANCE) {
      guaranteedHitCount = hitCount;
      break;
    }
  }

  return {
    possibleHitCount,
    guaranteedHitCount,
    knockoutProbability,
  };
}

/** 現在の生存状態を攻撃1発分だけ進める */
function advanceKoDistribution(
  params: AdvanceKoDistributionParams,
): AdvanceKoDistributionResult {
  const nextDistribution: KoDistribution = new Map();
  let knockoutProbability = 0;

  for (const [remainingHp, itemStates] of params.distribution) {
    for (const [itemConsumed, probability] of itemStates) {
      for (const damage of params.damages) {
        // 現在の確率を、次に起こり得るダメージ候補へ均等に分ける
        const branchProbability = probability / params.damages.length;

        let nextHp = remainingHp - damage;
        let nextItemConsumed = itemConsumed;

        // ひんしになった分岐は回復せず、撃破済みとして集計する
        if (nextHp <= 0) {
          knockoutProbability += branchProbability;
          continue;
        }

        // ダメージ直後に発動する回復を適用する
        ({ remainingHp: nextHp, itemConsumed: nextItemConsumed } =
          applyRecoveryEffects({
            remainingHp: nextHp,
            itemConsumed: nextItemConsumed,
            maximumHp: params.maximumHp,
            activationTiming: "afterDamage",
            effects: params.recoveryEffects,
          }));

        // ターン終了時に発動する回復を適用する
        ({ remainingHp: nextHp, itemConsumed: nextItemConsumed } =
          applyRecoveryEffects({
            remainingHp: nextHp,
            itemConsumed: nextItemConsumed,
            maximumHp: params.maximumHp,
            activationTiming: "turnEnd",
            effects: params.recoveryEffects,
          }));

        // 生存した分岐を次回攻撃用の分布へ追加する
        addKoStateProbability({
          distribution: nextDistribution,
          remainingHp: nextHp,
          itemConsumed: nextItemConsumed,
          probability: branchProbability,
        });
      }
    }
  }

  return {
    distribution: nextDistribution,
    knockoutProbability,
  };
}
