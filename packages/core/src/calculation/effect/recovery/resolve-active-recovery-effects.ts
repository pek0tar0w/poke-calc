import type { Ability, Item, WeatherKey } from "../../../model/index.js";
import type { ActiveRecoveryEffect } from "./active-recovery-effect.js";

import { areStaticEffectRequirementsMet } from "../index.js";

/**
 * 道具と特性から、現在の固定条件で有効な回復効果を取得する
 *
 * 天候など計算中に変化しない条件はここで判定する
 */
export function resolveActiveRecoveryEffects({
  item,
  ability,
  weather,
}: {
  /** 選択されている道具 */
  item?: Item | undefined;

  /** 選択されている特性 */
  ability?: Ability | undefined;

  /** 現在の天候 */
  weather: WeatherKey | null;
}): ActiveRecoveryEffect[] {
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
