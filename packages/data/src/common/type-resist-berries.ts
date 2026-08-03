import type { Item } from "@poke-calc/core";

export const typeResistBerries = {
  "occa-berry": {
    id: 161,
    key: "occa-berry",
    names: {
      ja: "オッカのみ",
      en: "Occa Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると こうかばつぐんの　ほのお　わざを うけたとき　いりょくが　よわまる。",
      en: "Weakens a supereffective Fire-type attack against the holding Pokémon.",
    },
    effects: [
      {
        effect: "damageReduction",
        multiplier: 0.5,
        requirements: [
          {
            requirement: "moveType",
            moveType: "fire",
          },
          {
            requirement: "superEffective",
          },
        ],
        consumable: true,
      },
    ],
    flingPower: 10,
  },
  "passho-berry": {
    id: 162,
    key: "passho-berry",
    names: {
      ja: "イトケのみ",
      en: "Passho Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると こうかばつぐんの　みず　わざを うけたとき　いりょくが　よわまる。",
      en: "A Poffin ingredient. If held by a Pokémon, it weakens a foe’s supereffective Water-type attack.",
    },
    effects: [
      {
        effect: "damageReduction",
        multiplier: 0.5,
        requirements: [
          {
            requirement: "moveType",
            moveType: "water",
          },
          {
            requirement: "superEffective",
          },
        ],
        consumable: true,
      },
    ],
    flingPower: 10,
  },
  "wacan-berry": {
    id: 163,
    key: "wacan-berry",
    names: {
      ja: "ソクノのみ",
      en: "Wacan Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると こうかばつぐんの　でんき　わざを うけたとき　いりょくが　よわまる。",
      en: "A Poffin ingredient. If held by a Pokémon, it weakens a foe’s supereffective Electric-type attack.",
    },
    effects: [
      {
        effect: "damageReduction",
        multiplier: 0.5,
        requirements: [
          {
            requirement: "moveType",
            moveType: "electric",
          },
          {
            requirement: "superEffective",
          },
        ],
        consumable: true,
      },
    ],
    flingPower: 10,
  },
  "rindo-berry": {
    id: 164,
    key: "rindo-berry",
    names: {
      ja: "リンドのみ",
      en: "Rindo Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると こうかばつぐんの　くさ　わざを うけたとき　いりょくが　よわまる。",
      en: "A Poffin ingredient. If held by a Pokémon, it weakens a foe’s supereffective Grass-type attack.",
    },
    effects: [
      {
        effect: "damageReduction",
        multiplier: 0.5,
        requirements: [
          {
            requirement: "moveType",
            moveType: "grass",
          },
          {
            requirement: "superEffective",
          },
        ],
        consumable: true,
      },
    ],
    flingPower: 10,
  },
  "yache-berry": {
    id: 165,
    key: "yache-berry",
    names: {
      ja: "ヤチェのみ",
      en: "Yache Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると こうかばつぐんの　こおり　わざを うけたとき　いりょくが　よわまる。",
      en: "A Poffin ingredient. If held by a Pokémon, it weakens a foe’s supereffective Ice-type attack.",
    },
    effects: [
      {
        effect: "damageReduction",
        multiplier: 0.5,
        requirements: [
          {
            requirement: "moveType",
            moveType: "ice",
          },
          {
            requirement: "superEffective",
          },
        ],
        consumable: true,
      },
    ],
    flingPower: 10,
  },
  "chople-berry": {
    id: 166,
    key: "chople-berry",
    names: {
      ja: "ヨプのみ",
      en: "Chople Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると こうかばつぐんの　かくとう　わざを うけたとき　いりょくが　よわまる。",
      en: "A Poffin ingredient. If held by a Pokémon, it weakens a foe’s supereffective Fighting-type attack.",
    },
    effects: [
      {
        effect: "damageReduction",
        multiplier: 0.5,
        requirements: [
          {
            requirement: "moveType",
            moveType: "fighting",
          },
          {
            requirement: "superEffective",
          },
        ],
        consumable: true,
      },
    ],
    flingPower: 10,
  },
  "kebia-berry": {
    id: 167,
    key: "kebia-berry",
    names: {
      ja: "ビアーのみ",
      en: "Kebia Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると こうかばつぐんの　どく　わざを うけたとき　いりょくが　よわまる。",
      en: "A Poffin ingredient. If held by a Pokémon, it weakens a foe’s supereffective Poison-type attack.",
    },
    effects: [
      {
        effect: "damageReduction",
        multiplier: 0.5,
        requirements: [
          {
            requirement: "moveType",
            moveType: "poison",
          },
          {
            requirement: "superEffective",
          },
        ],
        consumable: true,
      },
    ],
    flingPower: 10,
  },
  "shuca-berry": {
    id: 168,
    key: "shuca-berry",
    names: {
      ja: "シュカのみ",
      en: "Shuca Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると こうかばつぐんの　じめん　わざを うけたとき　いりょくが　よわまる。",
      en: "A Poffin ingredient. If held by a Pokémon, it weakens a foe’s supereffective Ground-type attack.",
    },
    effects: [
      {
        effect: "damageReduction",
        multiplier: 0.5,
        requirements: [
          {
            requirement: "moveType",
            moveType: "ground",
          },
          {
            requirement: "superEffective",
          },
        ],
        consumable: true,
      },
    ],
    flingPower: 10,
  },
  "coba-berry": {
    id: 169,
    key: "coba-berry",
    names: {
      ja: "バコウのみ",
      en: "Coba Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると こうかばつぐんの　ひこう　わざを うけたとき　いりょくが　よわまる。",
      en: "A Poffin ingredient. If held by a Pokémon, it weakens a foe’s supereffective Flying-type attack.",
    },
    effects: [
      {
        effect: "damageReduction",
        multiplier: 0.5,
        requirements: [
          {
            requirement: "moveType",
            moveType: "flying",
          },
          {
            requirement: "superEffective",
          },
        ],
        consumable: true,
      },
    ],
    flingPower: 10,
  },
  "payapa-berry": {
    id: 170,
    key: "payapa-berry",
    names: {
      ja: "ウタンのみ",
      en: "Payapa Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると こうかばつぐんの　エスパー　わざを うけたとき　いりょくが　よわまる。",
      en: "A Poffin ingredient. If held by a Pokémon, it weakens a foe’s supereffective Psychic-type attack.",
    },
    effects: [
      {
        effect: "damageReduction",
        multiplier: 0.5,
        requirements: [
          {
            requirement: "moveType",
            moveType: "psychic",
          },
          {
            requirement: "superEffective",
          },
        ],
        consumable: true,
      },
    ],
    flingPower: 10,
  },
  "tanga-berry": {
    id: 171,
    key: "tanga-berry",
    names: {
      ja: "タンガのみ",
      en: "Tanga Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると こうかばつぐんの　むし　わざを うけたとき　いりょくが　よわまる。",
      en: "A Poffin ingredient. If held by a Pokémon, it weakens a foe’s supereffective Bug-type attack.",
    },
    effects: [
      {
        effect: "damageReduction",
        multiplier: 0.5,
        requirements: [
          {
            requirement: "moveType",
            moveType: "bug",
          },
          {
            requirement: "superEffective",
          },
        ],
        consumable: true,
      },
    ],
    flingPower: 10,
  },
  "charti-berry": {
    id: 172,
    key: "charti-berry",
    names: {
      ja: "ヨロギのみ",
      en: "Charti Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると こうかばつぐんの　いわ　わざを うけたとき　いりょくが　よわまる。",
      en: "A Poffin ingredient. If held by a Pokémon, it weakens a foe’s supereffective Rock-type attack.",
    },
    effects: [
      {
        effect: "damageReduction",
        multiplier: 0.5,
        requirements: [
          {
            requirement: "moveType",
            moveType: "rock",
          },
          {
            requirement: "superEffective",
          },
        ],
        consumable: true,
      },
    ],
    flingPower: 10,
  },
  "kasib-berry": {
    id: 173,
    key: "kasib-berry",
    names: {
      ja: "カシブのみ",
      en: "Kasib Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると こうかばつぐんの　ゴースト　わざを うけたとき　いりょくが　よわまる。",
      en: "A Poffin ingredient. If held by a Pokémon, it weakens a foe’s supereffective Ghost-type attack.",
    },
    effects: [
      {
        effect: "damageReduction",
        multiplier: 0.5,
        requirements: [
          {
            requirement: "moveType",
            moveType: "ghost",
          },
          {
            requirement: "superEffective",
          },
        ],
        consumable: true,
      },
    ],
    flingPower: 10,
  },
  "haban-berry": {
    id: 174,
    key: "haban-berry",
    names: {
      ja: "ハバンのみ",
      en: "Haban Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると こうかばつぐんの　ドラゴン　わざを うけたとき　いりょくが　よわまる。",
      en: "A Poffin ingredient. If held by a Pokémon, it weakens a foe’s supereffective Dragon-type attack.",
    },
    effects: [
      {
        effect: "damageReduction",
        multiplier: 0.5,
        requirements: [
          {
            requirement: "moveType",
            moveType: "dragon",
          },
          {
            requirement: "superEffective",
          },
        ],
        consumable: true,
      },
    ],
    flingPower: 10,
  },
  "colbur-berry": {
    id: 175,
    key: "colbur-berry",
    names: {
      ja: "ナモのみ",
      en: "Colbur Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると こうかばつぐんの　あく　わざを うけたとき　いりょくが　よわまる。",
      en: "Weakens a supereffective Dark-type attack against the holding Pokémon.",
    },
    effects: [
      {
        effect: "damageReduction",
        multiplier: 0.5,
        requirements: [
          {
            requirement: "moveType",
            moveType: "dark",
          },
          {
            requirement: "superEffective",
          },
        ],
        consumable: true,
      },
    ],
    flingPower: 10,
  },
  "babiri-berry": {
    id: 176,
    key: "babiri-berry",
    names: {
      ja: "リリバのみ",
      en: "Babiri Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると こうかばつぐんの　はがね　わざを うけたとき　いりょくが　よわまる。",
      en: "A Poffin ingredient. If held by a Pokémon, it weakens a foe’s supereffective Steel-type attack.",
    },
    effects: [
      {
        effect: "damageReduction",
        multiplier: 0.5,
        requirements: [
          {
            requirement: "moveType",
            moveType: "steel",
          },
          {
            requirement: "superEffective",
          },
        ],
        consumable: true,
      },
    ],
    flingPower: 10,
  },
  "roseli-berry": {
    id: 723,
    key: "roseli-berry",
    names: {
      ja: "ロゼルのみ",
      en: "Roseli Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると こうかばつぐんの　フェアリー　わざを うけたとき　いりょくが　よわまる。",
      en: "If held by a Pokémon, this Berry will lessen the damage taken from one supereffective Fairy-type attack.",
    },
    effects: [
      {
        effect: "damageReduction",
        multiplier: 0.5,
        requirements: [
          {
            requirement: "moveType",
            moveType: "fairy",
          },
          {
            requirement: "superEffective",
          },
        ],
        consumable: true,
      },
    ],
    flingPower: 10,
  },
  "chilan-berry": {
    id: 177,
    key: "chilan-berry",
    names: {
      ja: "ホズのみ",
      en: "Chilan Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると ノーマル　わざを　うけたとき いりょくが　よわまる。",
      en: "A Poffin ingredient. If held by a Pokémon, it weakens a foe’s Normal-type attack.",
    },
    effects: [
      {
        effect: "damageReduction",
        multiplier: 0.5,
        requirements: [
          {
            requirement: "moveType",
            moveType: "normal",
          },
        ],
        consumable: true,
      },
    ],
    flingPower: 10,
  },
} satisfies Record<string, Item>;
