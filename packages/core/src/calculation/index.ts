export type {
  BattlePokemonState,
  ChampionsBattlePokemonState,
  BattleType,
  ChampionsDamageInput,
  DamageCalculationInput,
  DamageOutcome,
  DamageResult,
  DamageStepResult,
  ScarletVioletBattlePokemonState,
  ScarletVioletDamageInput,
} from "./damage/index.js";
export type { PokemonStatConfig, StatBoost, StatBoosts } from "./stat/index.js";

export { calculateDamage } from "./damage/index.js";
export type { TerrainState } from "./terrain/index.js";
