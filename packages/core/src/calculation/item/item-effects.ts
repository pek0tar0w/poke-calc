import type { ItemEffect } from "./item-effect.js";

/** アイテムキーに対応する計算上の効果 */
export const itemEffects = {
  leftovers: {
    effect: "recovery",
    recoveryDivisor: 16,
    trigger: "turnEnd",
  },
} satisfies Record<string, ItemEffect>;
