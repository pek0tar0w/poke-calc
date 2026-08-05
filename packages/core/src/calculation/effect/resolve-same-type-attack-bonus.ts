import type { AbilityEffect } from "../../model/ability/index.js";

/** 通常のタイプ一致補正倍率 */
const DEFAULT_SAME_TYPE_ATTACK_BONUS = 1.5;

/** 攻撃側の特性を考慮したタイプ一致補正倍率を返す */
export function resolveSameTypeAttackBonus(
  effects: readonly AbilityEffect[],
): number {
  const overrideEffect = effects.find(
    (
      effect,
    ): effect is Extract<
      AbilityEffect,
      { effect: "sameTypeAttackBonusOverride" }
    > =>
      "side" in effect &&
      effect.side === "attacker" &&
      effect.effect === "sameTypeAttackBonusOverride",
  );

  return overrideEffect?.multiplier ?? DEFAULT_SAME_TYPE_ATTACK_BONUS;
}
