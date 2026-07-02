import type { Move } from "@poke-calc/core";

/** Pokémon Championsの技データ */
export const championsMoves = {
  outrage: {
    id: 200,
    key: "outrage",
    names: {
      ja: "げきりん",
      en: "Outrage",
    },
    descriptions: {
      ja: "2～3ターンの間、攻撃を続ける。攻撃が終わると混乱する。",
      en: "The user rampages and attacks for two to three turns, then becomes confused.",
    },
    type: "dragon",
    priority: 0,
    accuracy: 100,
    pp: 10,
    isMultiTarget: false,
    isProtectable: true,
    makesContact: true,
    moveTags: [],
    category: "damaging",
    damageClass: "physical",
    power: 120,
  },
} satisfies Record<string, Move>;
