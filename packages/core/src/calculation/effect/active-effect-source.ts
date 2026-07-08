/** 計算対象の効果がどこから発生したか */
export type ActiveEffectSource =
  | {
      /** 特性由来の効果 */
      type: "ability";
      key: string;
    }
  | {
      /** アイテム由来の効果 */
      type: "item";
      key: string;
    };
