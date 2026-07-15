import type { Pokemon } from "@poke-calc/core";

/** Pokémon Championsのポケモンデータ */
export const championsPokemon = {
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

  glalie: {
    id: 362,
    key: "glalie",
    names: {
      ja: "オニゴーリ",
      en: "Glalie",
    },
    types: ["ice"],
    baseStats: {
      hp: 80,
      attack: 80,
      defense: 80,
      specialAttack: 80,
      specialDefense: 80,
      speed: 80,
    },
  },

  dragonite: {
    id: 149,
    key: "dragonite",
    names: {
      ja: "カイリュー",
      en: "Dragonite",
    },
    types: ["dragon", "flying"],
    baseStats: {
      hp: 91,
      attack: 134,
      defense: 95,
      specialAttack: 100,
      specialDefense: 100,
      speed: 80,
    },
  },

  mimikyu: {
    id: 778,
    key: "mimikyu",
    names: {
      ja: "ミミッキュ",
      en: "Mimikyu",
    },
    types: ["ghost", "fairy"],
    baseStats: {
      hp: 55,
      attack: 90,
      defense: 80,
      specialAttack: 50,
      specialDefense: 105,
      speed: 96,
    },
  },
} satisfies Record<string, Pokemon>;
