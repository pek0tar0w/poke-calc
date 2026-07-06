import type { RecoveryEffect } from "../../model/index.js";

/** 所有者の情報を付加した計算対象の回復効果 */
export type ActiveRecoveryEffect = {
  /** 適用する回復効果 */
  effect: RecoveryEffect;

  /** 効果の発生元 */
  source:
    | {
        /** 道具による効果 */
        type: "item";
        key: string;
        consumable: boolean;
      }
    | {
        /** 特性による効果 */
        type: "ability";
        key: string;
      };
};
