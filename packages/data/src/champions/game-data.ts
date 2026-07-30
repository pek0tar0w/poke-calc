import { championsPokemon } from "./pokemon.js";
import { championsMoves } from "./moves.js";
import { championsAbilities } from "./abilities.js";
import { championsItems } from "./items.js";
import { championsLearnsets } from "./learnsets.js";
import { championsPokemonAbilities } from "./pokemon-abilities.js";

export const championsGameData = {
  pokemon: championsPokemon,
  moves: championsMoves,
  abilities: championsAbilities,
  items: championsItems,
  learnsets: championsLearnsets,
  pokemonAbilities: championsPokemonAbilities,
} as const;
