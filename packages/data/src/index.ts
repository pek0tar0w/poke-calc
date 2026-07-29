export { games } from "./games.js";
export {
  resolveChampionsDamageState,
  resolveScarletVioletDamageState,
  type ChampionsDamageStateInput,
  type ScarletVioletDamageStateInput,
} from "./damage-state.js";
export type { GameDataAccessor } from "./accessor.js";
export {
  championsAbilities,
  championsGameData,
  championsItems,
  championsMoves,
  championsPokemon,
} from "./champions/index.js";
export { natureNames, typeNames, weatherNames } from "./common/index.js";
export {
  scarletVioletAbilities,
  scarletVioletGameData,
  scarletVioletItems,
  scarletVioletMoves,
  scarletVioletPokemon,
} from "./scarlet-violet/index.js";
export type { GameData } from "./game-data.js";
