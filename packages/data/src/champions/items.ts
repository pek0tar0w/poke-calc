import type { Item } from "@poke-calc/core";

/** Pokémon Championsのアイテムデータ */
export const championsItems = {
  leftovers: {
    id: 234,
    key: "leftovers",
    names: {
      ja: "たべのこし",
      en: "Leftovers",
    },
    descriptions: {
      ja: "ターン終了時に最大HPの1/16を回復する",
      en: "Restores 1/16 of the holder's maximum HP at the end of each turn.",
    },
    effects: [
      {
        effect: "recovery",
        activationTiming: "turnEnd",
        recoveryDivisor: 16,
        consumable: false,
      },
    ],
  },
  sitrusBerry: {
    id: 135,
    key: "sitrusBerry",
    names: {
      ja: "オボンのみ",
      en: "Sitrus Berry",
    },
    descriptions: {
      ja: "HPが最大HPの1/2以下になったとき、最大HPの1/4を回復する",
      en: "Restores 1/4 of the holder's maximum HP when its HP falls to 1/2 or less.",
    },
    effects: [
      {
        effect: "recovery",
        activationTiming: "afterDamage",
        recoveryDivisor: 4,
        requirements: [
          {
            requirement: "hpRatioAtOrBelow",
            hpRatio: 0.5,
          },
        ],
        consumable: true,
      },
    ],
  },
} satisfies Record<string, Item>;
