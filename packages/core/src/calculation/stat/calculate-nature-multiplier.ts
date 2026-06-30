import type { NonHpStatKey } from "../../common/index.js";
import type { NatureKey } from "../../model/nature/nature-key.js";

import { natureEffects } from "../../model/nature/nature-effects.js";

/**
 * 性格による能力補正倍率を取得する
 */
export function calculateNatureMultiplier(
  natureKey: NatureKey,
  stat: NonHpStatKey,
): number {
  const effect = natureEffects[natureKey];

  if (effect.increasedStat === stat) return 1.1;
  if (effect.decreasedStat === stat) return 0.9;

  return 1;
}
