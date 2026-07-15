import type { EffectResolutionContext } from "../index.js";
import type { ActiveRecoveryEffect } from "./active-recovery-effect.js";

import { areStaticEffectRequirementsMet } from "../index.js";

/**
 * 道具と特性から、現在の固定条件で有効な回復効果を取得する
 *
 * 天候など計算中に変化しない条件はここで判定する
 */
export function resolveActiveRecoveryEffects({
  defender,
  weather,
}: EffectResolutionContext): ActiveRecoveryEffect[] {
  const { item, ability } = defender;
  const effects: ActiveRecoveryEffect[] = [];

  if (item) {
    for (const effect of item.effects) {
      if (effect.effect !== "recovery") {
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
      if (effect.effect !== "recovery") {
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
