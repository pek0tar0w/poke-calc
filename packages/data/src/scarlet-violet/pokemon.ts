import type { Pokemon } from "@poke-calc/core";

/** Pokémon Scarlet/Violetのポケモンデータ */
export const scarletVioletPokemon = {
  garchomp: {
    id: 445,
    key: "garchomp",
    names: {
      ja: "ガブリアス",
      en: "Garchomp",
    },
    types: ["dragon", "ground"],
    baseStats: {
      hp: 108,
      attack: 130,
      defense: 95,
      specialAttack: 80,
      specialDefense: 85,
      speed: 102,
    },
  },

  corviknight: {
    id: 823,
    key: "corviknight",
    names: {
      ja: "アーマーガア",
      en: "Corviknight",
    },
    types: ["flying", "steel"],
    baseStats: {
      hp: 98,
      attack: 87,
      defense: 105,
      specialAttack: 53,
      specialDefense: 85,
      speed: 67,
    },
  },
} satisfies Record<string, Pokemon>;
