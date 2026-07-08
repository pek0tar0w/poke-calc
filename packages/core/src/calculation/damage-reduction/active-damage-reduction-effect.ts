import type { DamageReductionEffect } from "../../model/index.js";

/** 所有者の情報を付加した計算対象のダメージ軽減効果 */
export type ActiveDamageReductionEffect =
  | {
      /** アイテムが持つダメージ軽減効果 */
      effect: DamageReductionEffect & {
        consumable: boolean;
      };

      /** 効果の発生元 */
      source: {
        type: "item";
        key: string;
      };
    }
  | {
      /** 特性が持つダメージ軽減効果 */
      effect: DamageReductionEffect;

      /** 効果の発生元 */
      source: {
        type: "ability";
        key: string;
      };
    };
