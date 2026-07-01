import type { GameData } from "../game-data.js";

import { championsAbilities } from "./abilities.js";
import { championsItems } from "./items.js";
import { championsMoves } from "./moves.js";
import { championsPokemon } from "./pokemon.js";

/** Pokémon Championsの実データ */
export const championsData: GameData = {
  game: "champions",
  pokemon: championsPokemon,
  moves: championsMoves,
  abilities: championsAbilities,
  items: championsItems,
};

export { championsAbilities, championsItems, championsMoves, championsPokemon };
