import type { ActiveDamageReductionEffect } from "./damage-reduction/index.js";
import type { ActiveDamageEffect } from "./damage/index.js";
import type { ActiveRecoveryEffect } from "./recovery/index.js";

/** ダメージ計算で参照する有効化済み効果 */
export type ActiveEffects = {
  /** 防御側に適用する回復効果 */
  recovery: readonly ActiveRecoveryEffect[];

  /** 防御側に適用する定数HPダメージ効果 */
  damage: readonly ActiveDamageEffect[];

  /** 技ダメージへ適用する軽減効果 */
  damageReduction: readonly ActiveDamageReductionEffect[];
};
