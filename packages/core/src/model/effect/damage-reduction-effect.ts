import type { EffectRequirement } from "./effect-requirement.js";

/** 受けるダメージを軽減、または無効化する効果 */
export type DamageReductionEffect = {
  /** ダメージ軽減 */
  effect: "damageReduction";

  /** ダメージにかける倍率 */
  multiplier: number;

  /** 効果が発動するための条件 */
  requirements?: EffectRequirement[];

  /** 効果の発動後に消費されるか */
  consumable?: boolean;

  /** 効果発動時に受ける最大HP割合ダメージの分母 */
  activationDamageDivisor?: number;

  /** 効果発動時に最低限残すHP */
  minimumRemainingHp?: number;
};
