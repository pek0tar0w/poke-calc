import type { ActiveRecoveryEffect } from "./active-recovery-effect.js";

import { areRuntimeEffectRequirementsMet } from "../effect/index.js";

/**
 * 指定したタイミングで発動可能な回復効果を適用する
 *
 * HP割合など計算中に変化する条件はここで判定する
 */
export function applyRecoveryEffects({
  remainingHp,
  consumedEffectKeys,
  maximumHp,
  activationTiming,
  effects,
}: {
  /** 回復前の残りHP */
  remainingHp: number;

  /** すでに消費済みの効果キー */
  consumedEffectKeys: readonly string[];

  /** 最大HP */
  maximumHp: number;

  /** 今回処理する発動タイミング */
  activationTiming: ActiveRecoveryEffect["effect"]["activationTiming"];

  /** 適用候補の回復効果 */
  effects: readonly ActiveRecoveryEffect[];
}): {
  /** 回復後の残りHP */
  remainingHp: number;

  /** 回復処理後の消費済み効果キー */
  consumedEffectKeys: readonly string[];
} {
  const nextConsumedEffectKeys = [...consumedEffectKeys];

  for (const activeEffect of effects) {
    const { effect } = activeEffect;
    const effectKey = createActiveRecoveryEffectKey(activeEffect);

    // 発動タイミングが異なる効果は処理しない
    if (effect.activationTiming !== activationTiming) {
      continue;
    }

    // 一度だけ発動する効果は、消費済みなら再発動させない
    if (
      isConsumableRecoveryEffect(activeEffect) &&
      nextConsumedEffectKeys.includes(effectKey)
    ) {
      continue;
    }

    // 現在HPなど、計算中に変化する条件を満たしていなければ処理しない
    if (
      !areRuntimeEffectRequirementsMet({
        requirements: effect.requirements,
        remainingHp,
        maximumHp,
      })
    ) {
      continue;
    }

    // 回復量は効果ごとに小数点以下を切り捨てる
    const recoveryAmount = Math.floor(maximumHp / effect.recoveryDivisor);

    // 最大HPを超えない範囲で回復する
    remainingHp = Math.min(maximumHp, remainingHp + recoveryAmount);

    // 一度だけ発動する効果が発動した場合は消費済みにする
    if (isConsumableRecoveryEffect(activeEffect)) {
      nextConsumedEffectKeys.push(effectKey);
    }
  }

  return {
    remainingHp,
    consumedEffectKeys: nextConsumedEffectKeys,
  };
}

function isConsumableRecoveryEffect(
  activeEffect: ActiveRecoveryEffect,
): boolean {
  return "consumable" in activeEffect.effect && activeEffect.effect.consumable;
}

function createActiveRecoveryEffectKey(
  activeEffect: ActiveRecoveryEffect,
): string {
  return `${activeEffect.source.type}:${activeEffect.source.key}:recovery`;
}
