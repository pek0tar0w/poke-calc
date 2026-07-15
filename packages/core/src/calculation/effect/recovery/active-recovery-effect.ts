import type { RecoveryEffect } from "../../../model/index.js";
import type { ActiveEffectSource } from "../index.js";

/** 所有者の情報を付加した計算対象の回復効果 */
export type ActiveRecoveryEffect =
  | {
      /** アイテムが持つ回復効果 */
      effect: RecoveryEffect & {
        consumable: boolean;
      };

      /** 効果の発生元 */
      source: Extract<ActiveEffectSource, { type: "item" }>;
    }
  | {
      /** 特性が持つ回復効果 */
      effect: RecoveryEffect;

      /** 効果の発生元 */
      source: Extract<ActiveEffectSource, { type: "ability" }>;
    };
