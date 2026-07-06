import type { Ability } from "@poke-calc/core";

/** Pokémon Scarlet/Violetの特性データ */
export const scarletVioletAbilities = {
  roughSkin: {
    id: 24,
    key: "roughSkin",
    names: {
      ja: "さめはだ",
      en: "Rough Skin",
    },
    descriptions: {
      ja: "接触技で攻撃した相手に、相手の最大HPの1/8のダメージを与える。",
      en: "Damages an attacker that makes contact by 1/8 of its maximum HP.",
    },
    effects: [
      {
        side: "defender",
        effect: "contactDamage",
        hpRatio: {
          numerator: 1,
          denominator: 8,
        },
      },
    ],
  },
} satisfies Record<string, Ability>;
