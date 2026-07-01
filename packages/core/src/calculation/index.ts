export type {
  BattlePokemonState,
  ChampionsDamageState,
  DamageCalculationState,
  DamageResult,
  DamageSummary,
  ScarletVioletDamageState,
} from "./damage/index.js";
export type { ItemEffect, ItemEffectTrigger } from "./item/index.js";
export type { ResolvedMove, ResolveMoveParams } from "./move/index.js";
export type {
  ApplyNatureModifiersParams,
  CalculateChampionsStatsParams,
  CalculatePokemonStatsParams,
  CalculateScarletVioletStatsParams,
  PokemonStatConfig,
} from "./stat/index.js";
export type {
  ApplyWeatherDamageModifierParams,
  ApplyWeatherDefenseModifierParams,
} from "./weather/index.js";

export { calculateDamage } from "./damage/index.js";
export { itemEffects } from "./item/index.js";
export { resolveMove } from "./move/index.js";
export {
  applyNatureModifiers,
  calculateChampionsStats,
  calculateNatureMultiplier,
  calculatePokemonStats,
  calculateScarletVioletStats,
} from "./stat/index.js";
export { calcTypeEffectiveness } from "./type/calculate-type-effectiveness.js";

export {
  applyWeatherDamageModifier,
  applyWeatherDefenseModifier,
} from "./weather/index.js";
