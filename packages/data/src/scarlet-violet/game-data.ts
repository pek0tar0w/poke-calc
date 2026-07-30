import { scarletVioletPokemon } from "./pokemon.js";
import { scarletVioletMoves } from "./moves.js";
import { scarletVioletAbilities } from "./abilities.js";
import { scarletVioletItems } from "./items.js";
import { scarletVioletLearnsets } from "./learnsets.js";
import { scarletVioletPokemonAbilities } from "./pokemon-abilities.js";

export const scarletVioletGameData = {
  pokemon: scarletVioletPokemon,
  moves: scarletVioletMoves,
  abilities: scarletVioletAbilities,
  items: scarletVioletItems,
  learnsets: scarletVioletLearnsets,
  pokemonAbilities: scarletVioletPokemonAbilities,
} as const;
