export type {
  BattlePokemonState,
  ChampionsDamageState,
  DamageCalculationState,
  ScarletVioletDamageState,
} from "./damage-calculation-state.js";
export type { DamageResult, DamageSummary } from "./damage-result.js";

export { calculateDamage } from "./calculate-damage.js";

export { calculateBaseDamage } from "./calculate-base-damage.js";
export { calculateRandomDamageValues } from "./calculate-random-damage-values.js";
export { createDamageSummary } from "./create-damage-summary.js";
