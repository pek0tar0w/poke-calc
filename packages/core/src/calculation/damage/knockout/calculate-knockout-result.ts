import type { ActiveDamageEffect } from "../../effect/damage/index.js";
import type { ActiveDamageReductionEffect } from "../../effect/damage-reduction/index.js";
import type { ActiveRecoveryEffect } from "../../effect/recovery/active-recovery-effect.js";
import type { KoDistribution } from "./ko-distribution.js";

import { applyDamageEffects } from "../../effect/damage/index.js";
import { applyDamageReductionEffects } from "../../effect/damage-reduction/index.js";
import { applyRecoveryEffects } from "../../effect/recovery/apply-recovery-effects.js";
import {
  addKoStateProbability,
  createInitialKoState,
  createKoStateKey,
} from "./ko-distribution.js";

/** 撃破回数を探索する上限 */
const MAXIMUM_HIT_COUNT = 100;

/** 浮動小数点誤差を考慮して確定とみなす許容値 */
const PROBABILITY_TOLERANCE = 1e-12;

/**
 * 分布を攻撃1回分ずつ更新し、最短と確定の撃破回数を求める
 *
 * 回復で生存した分岐は次の攻撃へ引き継ぎ
 * ひんしになった分岐は撃破確率へ加算する
 */
export function calculateKnockoutResult({
  damages,
  currentHp,
  maximumHp,
  damageReductionEffects,
  recoveryEffects,
  damageEffects,
}: {
  /** 乱数ごとのダメージ */
  damages: readonly number[];

  /** 計算開始時のHP */
  currentHp: number;

  /** 最大HP */
  maximumHp: number;

  /** 防御側に適用するダメージ軽減効果 */
  damageReductionEffects: readonly ActiveDamageReductionEffect[];

  /** 回復効果 */
  recoveryEffects: readonly ActiveRecoveryEffect[];

  /** HPダメージ効果 */
  damageEffects: readonly ActiveDamageEffect[];
}): {
  /** 初めて倒せる可能性が生じる攻撃回数 */
  possibleHitCount: number | null;

  /** 必ず倒せる攻撃回数 */
  guaranteedHitCount: number | null;

  /** 最短攻撃回数以内に倒せる確率 */
  knockoutProbability: number;
} {
  const initialState = createInitialKoState(currentHp);

  // 攻撃前は現在HP・消費済み効果なしになる確率が100%
  let distribution: KoDistribution = new Map([
    [
      createKoStateKey(initialState),
      {
        state: initialState,
        probability: 1,
      },
    ],
  ]);

  let cumulativeKnockoutProbability = 0;
  let possibleHitCount: number | null = null;
  let guaranteedHitCount: number | null = null;
  let knockoutProbability = 0;

  for (let hitCount = 1; hitCount <= MAXIMUM_HIT_COUNT; hitCount++) {
    const result = advanceKoDistribution({
      distribution,
      damages,
      maximumHp,
      damageReductionEffects,
      recoveryEffects,
      damageEffects,
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
function advanceKoDistribution({
  distribution,
  damages,
  maximumHp,
  damageReductionEffects,
  recoveryEffects,
  damageEffects,
}: {
  /** 攻撃前の生存状態 */
  distribution: KoDistribution;

  /** 乱数ごとのダメージ */
  damages: readonly number[];

  /** 最大HP */
  maximumHp: number;

  /** 防御側に適用するダメージ軽減効果 */
  damageReductionEffects: readonly ActiveDamageReductionEffect[];

  /** 回復効果 */
  recoveryEffects: readonly ActiveRecoveryEffect[];

  /** HPダメージ効果 */
  damageEffects: readonly ActiveDamageEffect[];
}): {
  /** 次の攻撃へ引き継ぐ生存状態 */
  distribution: KoDistribution;

  /** 今回の攻撃で倒れた確率 */
  knockoutProbability: number;
} {
  const nextDistribution: KoDistribution = new Map();
  let knockoutProbability = 0;

  for (const { state, probability } of distribution.values()) {
    for (const damage of damages) {
      // 現在の確率を、次に起こり得るダメージ候補へ均等に分ける
      const branchProbability = probability / damages.length;

      // ダメージ軽減効果を適用する
      const reductionResult = applyDamageReductionEffects({
        damage,
        state,
        maximumHp,
        effects: damageReductionEffects,
      });

      let nextState = {
        ...reductionResult.state,
        remainingHp: reductionResult.state.remainingHp - reductionResult.damage,
      };

      // ひんしになった分岐は回復せず、撃破済みとして集計する
      if (nextState.remainingHp <= 0) {
        knockoutProbability += branchProbability;
        continue;
      }

      // ダメージ直後に発動する回復を適用する
      const afterDamageRecoveryState = applyRecoveryEffects({
        remainingHp: nextState.remainingHp,
        consumedEffectKeys: nextState.consumedEffectKeys,
        maximumHp,
        activationTiming: "afterDamage",
        effects: recoveryEffects,
      });

      nextState = {
        ...nextState,
        ...afterDamageRecoveryState,
      };

      // ターン終了時に発動する回復を適用する
      const turnEndRecoveryState = applyRecoveryEffects({
        remainingHp: nextState.remainingHp,
        consumedEffectKeys: nextState.consumedEffectKeys,
        maximumHp,
        activationTiming: "turnEnd",
        effects: recoveryEffects,
      });

      nextState = {
        ...nextState,
        ...turnEndRecoveryState,
      };

      // ターン終了時に発動するHPダメージを適用する、例: どく、もうどく、やけど
      const turnEndDamageState = applyDamageEffects({
        state: {
          remainingHp: nextState.remainingHp,
          badPoisonCounter: nextState.badPoisonCounter,
        },
        maximumHp,
        activationTiming: "turnEnd",
        effects: damageEffects,
      });

      nextState = {
        ...nextState,
        ...turnEndDamageState,
      };

      // ターン終了時ダメージでひんしになった分岐は撃破済みとして集計する
      if (nextState.remainingHp <= 0) {
        knockoutProbability += branchProbability;
        continue;
      }

      // 生存した分岐を次回攻撃用の分布へ追加する
      addKoStateProbability({
        distribution: nextDistribution,
        state: nextState,
        probability: branchProbability,
      });
    }
  }

  return {
    distribution: nextDistribution,
    knockoutProbability,
  };
}
