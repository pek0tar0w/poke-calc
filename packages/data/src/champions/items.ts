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
    consumable: false,
  },
} satisfies Record<string, Item>;
