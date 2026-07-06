import type { ActiveRecoveryEffect } from "../recovery/index.js";
import type { KoDistribution } from "./ko-distribution.js";

import { applyRecoveryEffects } from "../recovery/index.js";
import { addKoStateProbability } from "./ko-distribution.js";

export type CalculateKoProbabilityParams = {
  /** 乱数ごとのダメージ */
  damages: readonly number[];

  /** 計算する攻撃回数 */
  hitCount: number;

  /** 計算開始時のHP */
  currentHp: number;

  /** 最大HP */
  maximumHp: number;

  /** 回復効果 */
  recoveryEffects: readonly ActiveRecoveryEffect[];
};

/**
 * 回復効果を含め、指定回数以内に相手を倒せる確率を計算する
 *
 * 各攻撃後の残りHPと道具の消費状態を確率分布として保持する
 */
export function calculateKoProbability(
  params: CalculateKoProbabilityParams,
): number {
  const { damages, hitCount, currentHp, maximumHp, recoveryEffects } = params;

  // 攻撃前は現在HP・道具未消費になる確率が100%
  let distribution: KoDistribution = new Map([
    [currentHp, new Map([[false, 1]])],
  ]);

  // 指定回数以内にひんしになった分岐の確率
  let knockoutProbability = 0;

  // 攻撃1回ごとに生存状態の確率分布を更新する
  for (let hit = 0; hit < hitCount; hit++) {
    const nextDistribution: KoDistribution = new Map();

    // 現在存在する残りHPごとの状態を処理する
    for (const [remainingHp, itemStates] of distribution) {
      // 同じ残りHPでも道具の消費状態ごとに処理する
      for (const [itemConsumed, probability] of itemStates) {
        // 現在の状態から乱数ごとのダメージへ分岐する
        for (const damage of damages) {
          const branchProbability = probability / damages.length;
          let nextHp = remainingHp - damage;
          let nextItemConsumed = itemConsumed;

          // ひんしになった分岐は回復せず撃破確率へ加算する
          if (nextHp <= 0) {
            knockoutProbability += branchProbability;
            continue;
          }

          // オボンのみなど、ダメージ直後に発動する回復を適用する
          ({ remainingHp: nextHp, itemConsumed: nextItemConsumed } =
            applyRecoveryEffects({
              remainingHp: nextHp,
              itemConsumed: nextItemConsumed,
              maximumHp,
              activationTiming: "afterDamage",
              effects: recoveryEffects,
            }));

          // たべのこしやアイスボディなど、ターン終了時の回復を適用する
          ({ remainingHp: nextHp, itemConsumed: nextItemConsumed } =
            applyRecoveryEffects({
              remainingHp: nextHp,
              itemConsumed: nextItemConsumed,
              maximumHp,
              activationTiming: "turnEnd",
              effects: recoveryEffects,
            }));

          // 生存した状態を次回攻撃用の確率分布へ追加する
          addKoStateProbability({
            distribution: nextDistribution,
            remainingHp: nextHp,
            itemConsumed: nextItemConsumed,
            probability: branchProbability,
          });
        }
      }
    }

    distribution = nextDistribution;
  }

  return knockoutProbability;
}
