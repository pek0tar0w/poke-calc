import type { Item } from "../../model/item/index.js";

export const championsItems: Record<string, Item> = {
  leftovers: {
    id: 234,
    key: "leftovers",
    names: {
      ja: "たべのこし",
      en: "Leftovers",
    },
    descriptions: {
      ja: "ターン終了時に最大HPの1/16を回復する。",
      en: "Restores 1/16 of the holder's maximum HP at the end of each turn.",
    },
    consumable: false,
    effect: {
      effect: "recovery",
      recoveryDivisor: 16,
      trigger: "turnEnd",
    },
  },
};
