import type { ActiveEffects } from "./active-effects.js";
import type { EffectResolutionContext } from "./effect-resolution-context.js";

import { resolveActiveDamageReductionEffects } from "./damage-reduction/index.js";
import { resolveActiveDamageEffects } from "./damage/index.js";
import { resolveActiveRecoveryEffects } from "./recovery/index.js";

/**
 * 計算状態から、ダメージ計算に参加する効果をまとめて解決する
 *
 * 個別の効果種別はこの層に閉じ込め、calculateDamage側は解決済み効果だけを扱う
 */
export function resolveActiveEffects(
  context: EffectResolutionContext,
): ActiveEffects {
  return {
    recovery: resolveActiveRecoveryEffects(context),
    damage: resolveActiveDamageEffects(context),
    damageReduction: resolveActiveDamageReductionEffects(context),
  };
}
