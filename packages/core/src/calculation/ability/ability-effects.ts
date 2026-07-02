import type { AbilityEffect } from "./ability-effect.js";

/** 特性キーに対応する計算上の効果 */
export const abilityEffects = {
  roughSkin: [
    {
      side: "defender",
      effect: "contactDamage",
      hpRatio: {
        numerator: 1,
        denominator: 8,
      },
    },
  ],
} satisfies Record<string, AbilityEffect[]>;
