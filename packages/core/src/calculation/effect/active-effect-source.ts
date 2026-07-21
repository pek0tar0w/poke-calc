import type {
  StatusConditionKey,
  VolatileStatus,
  WeatherKey,
} from "../../model/index.js";

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
    }
  | {
      /** 天候由来の効果 */
      type: "weather";
      key: WeatherKey;
    }
  | {
      /** 状態異常由来の効果 */
      type: "status";
      key: StatusConditionKey;
    }
  | {
      /** 付加状態由来の効果 */
      type: "volatile";
      key: VolatileStatus;
    };
