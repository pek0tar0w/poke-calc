import type { ActiveRecoveryEffect } from "./active-recovery-effect.js";

export type ApplyRecoveryEffectsParams = {
  /** 回復前の残りHP */
  remainingHp: number;

  /** 道具が消費済みか */
  itemConsumed: boolean;

  /** 最大HP */
  maximumHp: number;

  /** 今回処理する発動タイミング */
  activationTiming: ActiveRecoveryEffect["effect"]["activationTiming"];

  /** 適用候補の回復効果 */
  effects: readonly ActiveRecoveryEffect[];
};

export type ApplyRecoveryEffectsResult = {
  /** 回復後の残りHP */
  remainingHp: number;

  /** 回復処理後の道具消費状態 */
  itemConsumed: boolean;
};

/** 指定したタイミングで発動可能な回復効果を適用する */
export function applyRecoveryEffects(
  params: ApplyRecoveryEffectsParams,
): ApplyRecoveryEffectsResult {
  let { remainingHp, itemConsumed } = params;

  for (const activeEffect of params.effects) {
    const { effect, source } = activeEffect;

    // 発動タイミングが異なる効果は処理しない
    if (effect.activationTiming !== params.activationTiming) {
      continue;
    }

    // 消費済みの道具は再発動させない
    if (source.type === "item" && source.consumable && itemConsumed) {
      continue;
    }

    // 現在HPが発動条件を満たしていなければ処理しない
    if (
      effect.hpRatioAtOrBelow !== undefined &&
      remainingHp / params.maximumHp > effect.hpRatioAtOrBelow
    ) {
      continue;
    }

    // 回復量は効果ごとに小数点以下を切り捨てる
    const recoveryAmount = Math.floor(
      params.maximumHp / effect.recoveryDivisor,
    );

    // 最大HPを超えない範囲で回復する
    remainingHp = Math.min(params.maximumHp, remainingHp + recoveryAmount);

    // 消費する道具が発動した場合は使用済みにする
    if (source.type === "item" && source.consumable) {
      itemConsumed = true;
    }
  }

  return {
    remainingHp,
    itemConsumed,
  };
}
