export type {
  BattlePokemonState,
  ChampionsDamageState,
  DamageCalculationState,
  DamageResult,
  DamageSummary,
  ScarletVioletDamageState,
} from "./damage/index.js";
export type {
  ApplyNatureModifiersParams,
  CalculateChampionsStatsParams,
  CalculatePokemonStatsParams,
  CalculateScarletVioletStatsParams,
  PokemonStatConfig,
} from "./stat/index.js";

export { calculateDamage } from "./damage/index.js";
export {
  applyNatureModifiers,
  calculateChampionsStats,
  calculateNatureMultiplier,
  calculatePokemonStats,
  calculateScarletVioletStats,
} from "./stat/index.js";
export { calcTypeEffectiveness } from "./type/calculate-type-effectiveness.js";
