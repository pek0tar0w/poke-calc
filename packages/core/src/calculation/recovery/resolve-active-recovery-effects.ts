import type { Ability, Item } from "../../model/index.js";
import type { ActiveRecoveryEffect } from "./active-recovery-effect.js";

export type ResolveActiveRecoveryEffectsParams = {
  /** 選択されている道具 */
  item?: Item;

  /** 選択されている特性 */
  ability?: Ability;
};

/** 道具と特性から、計算対象となる回復効果を取得する */
export function resolveActiveRecoveryEffects(
  params: ResolveActiveRecoveryEffectsParams,
): ActiveRecoveryEffect[] {
  const effects: ActiveRecoveryEffect[] = [];

  if (params.item) {
    for (const effect of params.item.effects) {
      if (effect.effect !== "recovery") {
        continue;
      }

      effects.push({
        effect,
        source: {
          type: "item",
          key: params.item.key,
        },
      });
    }
  }

  if (params.ability) {
    for (const effect of params.ability.effects) {
      if (effect.effect !== "recovery") {
        continue;
      }

      effects.push({
        effect,
        source: {
          type: "ability",
          key: params.ability.key,
        },
      });
    }
  }

  return effects;
}
