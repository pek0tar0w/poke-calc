import type { GameData } from "../game-data.js";

import { scarletVioletAbilities } from "./abilities.js";
import { scarletVioletItems } from "./items.js";
import { scarletVioletMoves } from "./moves.js";
import { scarletVioletPokemon } from "./pokemon.js";

/** Pokémon Scarlet/Violetの実データ */
export const scarletVioletData: GameData = {
  game: "scarletViolet",
  pokemon: scarletVioletPokemon,
  moves: scarletVioletMoves,
  abilities: scarletVioletAbilities,
  items: scarletVioletItems,
};

export {
  scarletVioletAbilities,
  scarletVioletItems,
  scarletVioletMoves,
  scarletVioletPokemon,
};
