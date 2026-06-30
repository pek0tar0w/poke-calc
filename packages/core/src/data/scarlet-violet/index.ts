import type { GameData } from "../../model/index.js";

import { scarletVioletAbilities } from "./abilities.js";
import { scarletVioletItems } from "./items.js";
import { scarletVioletMoves } from "./moves.js";
import { scarletVioletPokemon } from "./pokemon.js";

export const scarletVioletData = {
  game: "scarletViolet",
  pokemon: scarletVioletPokemon,
  moves: scarletVioletMoves,
  abilities: scarletVioletAbilities,
  items: scarletVioletItems,
} satisfies GameData;

export {
  scarletVioletAbilities,
  scarletVioletItems,
  scarletVioletMoves,
  scarletVioletPokemon,
};
