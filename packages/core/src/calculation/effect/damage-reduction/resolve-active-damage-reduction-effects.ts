import type { EffectResolutionContext } from "../index.js";
import type { ActiveDamageReductionEffect } from "./active-damage-reduction-effect.js";

import { areStaticEffectRequirementsMet } from "../index.js";

/** 防御側の道具と特性から、現在の静的条件で候補になるダメージ軽減効果を集める */
export function resolveActiveDamageReductionEffects({
  defender,
  weather,
}: EffectResolutionContext): ActiveDamageReductionEffect[] {
  const { item, ability } = defender;
  const effects: ActiveDamageReductionEffect[] = [];

  if (item) {
    for (const effect of item.effects) {
      if (effect.effect !== "damageReduction") {
        continue;
      }

      if (
        !areStaticEffectRequirementsMet({
          requirements: effect.requirements,
          weather,
        })
      ) {
        continue;
      }

      effects.push({
        effect,
        source: {
          type: "item",
          key: item.key,
        },
      });
    }
  }

  if (ability) {
    for (const effect of ability.effects) {
      if (effect.effect !== "damageReduction") {
        continue;
      }

      if (
        !areStaticEffectRequirementsMet({
          requirements: effect.requirements,
          weather,
        })
      ) {
        continue;
      }

      effects.push({
        effect,
        source: {
          type: "ability",
          key: ability.key,
        },
      });
    }
  }

  return effects;
}
