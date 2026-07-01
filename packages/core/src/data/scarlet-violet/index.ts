import type { GameData } from "../../model/index.js";

import { scarletVioletAbilities } from "./abilities.js";
import { scarletVioletMoves } from "./moves.js";
import { scarletVioletPokemon } from "./pokemon.js";

export const scarletVioletData = {
  game: "scarletViolet",
  pokemon: scarletVioletPokemon,
  moves: scarletVioletMoves,
  abilities: scarletVioletAbilities,
} satisfies GameData;

export { scarletVioletAbilities, scarletVioletMoves, scarletVioletPokemon };
