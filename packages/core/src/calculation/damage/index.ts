export type {
  BattlePokemonState,
  ChampionsBattlePokemonState,
  BattleType,
  ChampionsDamageInput,
  DamageCalculationInput,
  ScarletVioletBattlePokemonState,
  ScarletVioletDamageInput,
} from "./damage-calculation-input.js";
export type {
  DamageHpRange,
  DamageOutcome,
  DamageResult,
  DamageStepKnockout,
  DamageStepResult,
  DamageStepSource,
  DamageTurnResult,
} from "./damage-result.js";

export { calculateDamage } from "./calculate-damage.js";
