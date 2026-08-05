import type { AbilityEffect } from "../model/ability/index.js";

/** タイプ一致補正を1.5倍から2倍へ変更する効果 */
export const adaptabilityEffects = [
  {
    side: "attacker",
    effect: "sameTypeAttackBonusOverride",
    multiplier: 2,
  },
] satisfies readonly AbilityEffect[];

/** 技の威力を1.3倍にする効果、行動順の判定は未対応 */
export const analyticEffects = [
  {
    side: "attacker",
    effect: "movePowerMultiplier",
    multiplier: 1.3,
  },
] satisfies readonly AbilityEffect[];

/** 攻撃を一度だけ防ぎ、最大HPの1/8のダメージを受ける効果 */
export const disguiseEffects = [
  {
    effect: "damageReduction",
    multiplier: 0,
    consumable: true,
    activationDamageDivisor: 8,
  },
] satisfies readonly AbilityEffect[];

/** ゆきのターン終了時に最大HPの1/16を回復する効果 */
export const iceBodyEffects = [
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
] satisfies readonly AbilityEffect[];

/** HP満タン時に受けるダメージを半減する効果 */
export const multiscaleEffects = [
  {
    effect: "damageReduction",
    multiplier: 0.5,
    requirements: [
      {
        requirement: "hpRatioAtFull",
      },
    ],
  },
] satisfies readonly AbilityEffect[];

/** 単体攻撃に0.25倍の追加hitを一回発生させる効果 */
export const parentalBondEffects = [
  {
    side: "attacker",
    effect: "additionalHit",
    hitCount: 1,
    damageMultiplier: 0.25,
  },
] satisfies readonly AbilityEffect[];

/** 接触技を使った相手に最大HPの1/8のダメージを与える効果 */
export const roughSkinEffects = [
  {
    side: "defender",
    effect: "contactDamage",
    hpRatio: {
      numerator: 1,
      denominator: 8,
    },
  },
] satisfies readonly AbilityEffect[];

/** 連続技の攻撃回数を最大にする効果 */
export const skillLinkEffects = [
  {
    side: "attacker",
    effect: "maximizeMoveHitCount",
  },
] satisfies readonly AbilityEffect[];

/** かみつき技の威力を1.5倍にする効果 */
export const strongJawEffects = [
  {
    side: "attacker",
    effect: "movePowerMultiplier",
    multiplier: 1.5,
    requirements: [
      {
        requirement: "moveTag",
        tag: "bite",
      },
    ],
  },
] satisfies readonly AbilityEffect[];

/** HP満タン時に一撃で倒されるダメージをHP1で耐える効果 */
export const sturdyEffects = [
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
] satisfies readonly AbilityEffect[];

/** 威力60以下の技を1.5倍にする効果 */
export const technicianEffects = [
  {
    side: "attacker",
    effect: "movePowerMultiplier",
    multiplier: 1.5,
    requirements: [
      {
        requirement: "movePowerAtOrBelow",
        power: 60,
      },
    ],
  },
] satisfies readonly AbilityEffect[];

/** 接触技の威力を1.3倍にする効果 */
export const toughClawsEffects = [
  {
    side: "attacker",
    effect: "movePowerMultiplier",
    multiplier: 1.3,
    requirements: [
      {
        requirement: "makesContact",
      },
    ],
  },
] satisfies readonly AbilityEffect[];
