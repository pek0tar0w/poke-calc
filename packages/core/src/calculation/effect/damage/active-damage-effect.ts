import type { DamageEffect } from "../../../model/index.js";
import type { ActiveEffectSource } from "../index.js";

/** 発生元を付加した計算対象のダメージ効果 */
export type ActiveDamageEffect = {
  /** HPに直接ダメージを与える効果 */
  effect: DamageEffect;

  /** 効果の発生元 */
  source: ActiveEffectSource;
};
