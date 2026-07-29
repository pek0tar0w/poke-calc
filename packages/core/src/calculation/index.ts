export type {
  BattlePokemonState,
  BattleType,
  ChampionsBattlePokemonState,
  ChampionsDamageState,
  DamageCalculationState,
  DamageResult,
  DamageSummary,
  ScarletVioletBattlePokemonState,
  ScarletVioletDamageState,
} from "./damage/index.js";
export type { PokemonStatConfig, StatBoost, StatBoosts } from "./stat/index.js";

export { calculateDamage } from "./damage/index.js";
