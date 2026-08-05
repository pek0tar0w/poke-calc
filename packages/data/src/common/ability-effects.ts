import type { AbilityEffect } from "@poke-calc/core";

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
