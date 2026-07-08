import type { EffectRequirement } from "./effect-requirement.js";

/** HPを回復する効果 */
export type RecoveryEffect = {
  /** 効果の種類 */
  effect: "recovery";

  /** 回復が発生するタイミング */
  activationTiming: "afterDamage" | "turnEnd";

  /** 最大HPを割って回復量を求める値 */
  recoveryDivisor: number;

  /** 発動条件 */
  requirements?: EffectRequirement[];
};
