import type { GameData } from "../../model/index.js";

import { championsAbilities } from "./abilities.js";
import { championsItems } from "./items.js";
import { championsMoves } from "./moves.js";
import { championsPokemon } from "./pokemon.js";

export const championsData = {
  game: "champions",
  pokemon: championsPokemon,
  moves: championsMoves,
  abilities: championsAbilities,
  items: championsItems,
} satisfies GameData;

export { championsAbilities, championsItems, championsMoves, championsPokemon };
