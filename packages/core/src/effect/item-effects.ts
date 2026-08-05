import type { ItemEffect } from "../model/item/index.js";
import type { TypeKey } from "../model/type/index.js";

/** ターン終了時に最大HPの1/16を回復する効果 */
export const leftoversEffects = [
  {
    effect: "recovery",
    activationTiming: "turnEnd",
    recoveryDivisor: 16,
    consumable: false,
  },
] satisfies readonly ItemEffect[];

/** HPが半分以下になった直後に最大HPの1/4を回復する効果 */
export const sitrusBerryEffects = [
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
] satisfies readonly ItemEffect[];

/** 与えるダメージを1.3倍にし、攻撃後に最大HPの1/10を失う効果 */
export const lifeOrbEffects = [
  {
    effect: "damageMultiplier",
    multiplier: 1.3,
    consumable: false,
  },
  {
    effect: "damage",
    activationTiming: "afterDamage",
    damageDivisor: 10,
    consumable: false,
  },
] satisfies readonly ItemEffect[];

/** 指定タイプの技で与えるダメージを1.2倍にする効果を作る */
export function createTypeBoostEffects(
  moveType: TypeKey,
): readonly ItemEffect[] {
  return [
    {
      effect: "damageMultiplier",
      multiplier: 1.2,
      requirements: [
        {
          requirement: "moveType",
          moveType,
        },
      ],
      consumable: false,
    },
  ];
}

/** 物理技で与えるダメージを1.1倍にする効果 */
export const muscleBandEffects = [
  {
    effect: "damageMultiplier",
    multiplier: 1.1,
    requirements: [
      {
        requirement: "damageClass",
        damageClass: "physical",
      },
    ],
    consumable: false,
  },
] satisfies readonly ItemEffect[];

/** 特殊技で与えるダメージを1.1倍にする効果 */
export const wiseGlassesEffects = [
  {
    effect: "damageMultiplier",
    multiplier: 1.1,
    requirements: [
      {
        requirement: "damageClass",
        damageClass: "special",
      },
    ],
    consumable: false,
  },
] satisfies readonly ItemEffect[];

/** 効果バツグンの技で与えるダメージを1.2倍にする効果 */
export const expertBeltEffects = [
  {
    effect: "damageMultiplier",
    multiplier: 1.2,
    requirements: [
      {
        requirement: "superEffective",
      },
    ],
    consumable: false,
  },
] satisfies readonly ItemEffect[];

/** HP満タン時に一撃で倒されるダメージをHP1で耐える効果 */
export const focusSashEffects = [
  {
    effect: "damageReduction",
    multiplier: 0,
    requirements: [
      {
        requirement: "hpRatioAtFull",
      },
    ],
    minimumRemainingHp: 1,
    consumable: true,
  },
] satisfies readonly ItemEffect[];

/** 指定タイプの効果バツグン技を一度だけ半減する効果を作る */
export function createSuperEffectiveTypeResistBerryEffects(
  moveType: TypeKey,
): readonly ItemEffect[] {
  return [
    {
      effect: "damageReduction",
      multiplier: 0.5,
      requirements: [
        {
          requirement: "moveType",
          moveType,
        },
        {
          requirement: "superEffective",
        },
      ],
      consumable: true,
    },
  ];
}

/** ノーマルタイプの技を一度だけ半減する効果 */
export const chilanBerryEffects = [
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
] satisfies readonly ItemEffect[];

/** こうげきを1.5倍にする効果 */
export const choiceBandEffects = [
  {
    effect: "statMultiplier",
    stat: "attack",
    multiplier: 1.5,
    consumable: false,
  },
] satisfies readonly ItemEffect[];

/** とくこうを1.5倍にする効果 */
export const choiceSpecsEffects = [
  {
    effect: "statMultiplier",
    stat: "specialAttack",
    multiplier: 1.5,
    consumable: false,
  },
] satisfies readonly ItemEffect[];

/** ぼうぎょととくぼうを1.5倍にする効果 */
export const evioliteEffects = [
  {
    effect: "statMultiplier",
    stat: "defense",
    multiplier: 1.5,
    consumable: false,
  },
  {
    effect: "statMultiplier",
    stat: "specialDefense",
    multiplier: 1.5,
    consumable: false,
  },
] satisfies readonly ItemEffect[];

/** とくぼうを1.5倍にする効果 */
export const assaultVestEffects = [
  {
    effect: "statMultiplier",
    stat: "specialDefense",
    multiplier: 1.5,
    consumable: false,
  },
] satisfies readonly ItemEffect[];
