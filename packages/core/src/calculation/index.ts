export type {
  BattlePokemonState,
  CalculateKnockoutResultParams,
  ChampionsDamageState,
  DamageCalculationState,
  DamageResult,
  DamageSummary,
  KnockoutResult,
  ScarletVioletDamageState,
} from "./damage/index.js";
export type { ResolvedMove, ResolveMoveParams } from "./move/index.js";
export type {
  ActiveRecoveryEffect,
  ApplyRecoveryEffectsParams,
  ApplyRecoveryEffectsResult,
  ResolveActiveRecoveryEffectsParams,
} from "./recovery/index.js";
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

export { calculateDamage, calculateKnockoutResult } from "./damage/index.js";
export { resolveMove } from "./move/index.js";
export {
  applyRecoveryEffects,
  resolveActiveRecoveryEffects,
} from "./recovery/index.js";
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
