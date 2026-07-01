import type { GameData } from "../../model/index.js";

import { championsAbilities } from "./abilities.js";
import { championsMoves } from "./moves.js";
import { championsPokemon } from "./pokemon.js";

export const championsData = {
  game: "champions",
  pokemon: championsPokemon,
  moves: championsMoves,
  abilities: championsAbilities,
} satisfies GameData;

export { championsAbilities, championsMoves, championsPokemon };
