import type { Move } from "@poke-calc/core";

/** Pokémon Scarlet/Violetの技データ */
export const scarletVioletMoves = {
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
    hitCount: { kind: "single" },
  },

  bulletSeed: {
    id: 331,
    key: "bulletSeed",
    names: {
      ja: "タネマシンガン",
      en: "Bullet Seed",
    },
    descriptions: {
      ja: "硬いタネを相手に発射して攻撃する。2～5回の間、連続でだす。",
      en: "The user forcefully shoots seeds at the target two to five times in a row.",
    },
    type: "grass",
    priority: 0,
    accuracy: 100,
    pp: 30,
    isMultiTarget: false,
    isProtectable: true,
    makesContact: false,
    moveTags: [],
    category: "damaging",
    damageClass: "physical",
    power: 25,
    hitCount: {
      kind: "multiHit",
      minimumHits: 2,
      maximumHits: 5,
    },
  },
} satisfies Record<string, Move>;
