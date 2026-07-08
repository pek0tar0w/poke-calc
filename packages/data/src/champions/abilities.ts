import type { Ability } from "@poke-calc/core";

/** Pokémon Championsの特性データ */
export const championsAbilities = {
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

  iceBody: {
    id: 115,
    key: "iceBody",
    names: {
      ja: "アイスボディ",
      en: "Ice Body",
    },
    descriptions: {
      ja: "雪のとき、ターン終了時に最大HPの1/16を回復する",
      en: "Restores 1/16 of the holder's maximum HP at the end of each turn during snow.",
    },
    effects: [
      {
        effect: "recovery",
        activationTiming: "turnEnd",
        recoveryDivisor: 16,
        requirements: [
          {
            requirement: "weather",
            weather: "snow",
          },
        ],
      },
    ],
  },

  multiscale: {
    id: 136,
    key: "multiscale",
    names: {
      ja: "マルチスケイル",
      en: "Multiscale",
    },
    descriptions: {
      ja: "HPが満タンのとき、受けるダメージを半減する。",
      en: "Reduces damage taken by half when the holder is at full HP.",
    },
    effects: [
      {
        effect: "damageReduction",
        multiplier: 0.5,
        requirements: [
          {
            requirement: "hpRatioAtFull",
          },
        ],
      },
    ],
  },

  sturdy: {
    id: 5,
    key: "sturdy",
    names: {
      ja: "がんじょう",
      en: "Sturdy",
    },
    descriptions: {
      ja: "HPが満タンのとき、ひんしになるダメージを受けてもHP1で耐える。",
      en: "If at full HP, the holder survives a hit that would knock it out with 1 HP.",
    },
    effects: [
      {
        effect: "damageReduction",
        multiplier: 1,
        minimumRemainingHp: 1,
        requirements: [
          {
            requirement: "hpRatioAtFull",
          },
        ],
      },
    ],
  },

  disguise: {
    id: 209,
    key: "disguise",
    names: {
      ja: "ばけのかわ",
      en: "Disguise",
    },
    descriptions: {
      ja: "一度だけ攻撃技のダメージを防ぎ、最大HPの1/8のダメージを受ける。",
      en: "Prevents damage from a damaging move once, then loses 1/8 of maximum HP.",
    },
    effects: [
      {
        effect: "damageReduction",
        multiplier: 0,
        consumable: true,
        activationDamageDivisor: 8,
      },
    ],
  },
} satisfies Record<string, Ability>;
