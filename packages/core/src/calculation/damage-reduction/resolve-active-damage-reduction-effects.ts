import type { Ability, Item, WeatherKey } from "../../model/index.js";
import type { ActiveDamageReductionEffect } from "./active-damage-reduction-effect.js";

import { areStaticEffectRequirementsMet } from "../effect/index.js";

/** 防御側の道具と特性から、現在の静的条件で候補になるダメージ軽減効果を集める */
export function resolveActiveDamageReductionEffects({
  item,
  ability,
  weather,
}: {
  /** 防御側の道具 */
  item: Item | undefined;

  /** 防御側の特性 */
  ability: Ability | undefined;

  /** 現在の天候 */
  weather: WeatherKey | null;
}): ActiveDamageReductionEffect[] {
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
