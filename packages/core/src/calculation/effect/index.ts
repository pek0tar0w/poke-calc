export type { EffectResolutionContext } from "./effect-resolution-context.js";
export type { ActiveEffectSource } from "./active-effect-source.js";
export { applyItemDamageMultiplier } from "./apply-item-damage-multiplier.js";
export { applyItemStatMultiplier } from "./apply-item-stat-multiplier.js";
export { createActiveEffectKey } from "./active-effect-key.js";
export {
  areRuntimeEffectRequirementsMet,
  areStaticEffectRequirementsMet,
} from "./effect-requirement.js";
export type { ActiveEffects } from "./active-effects.js";
export { resolveActiveEffects } from "./resolve-active-effects.js";
