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

  earthquake: {
    id: 89,
    key: "earthquake",
    names: {
      ja: "じしん",
      en: "Earthquake",
    },
    descriptions: {
      ja: "地震の衝撃で自分の周りにいるものを攻撃する。",
      en: "The user attacks everything around it by causing an earthquake.",
    },
    type: "ground",
    priority: 0,
    accuracy: 100,
    pp: 10,
    isMultiTarget: true,
    isProtectable: true,
    makesContact: false,
    moveTags: [],
    category: "damaging",
    damageClass: "physical",
    power: 100,
  },
} satisfies Record<string, Move>;
