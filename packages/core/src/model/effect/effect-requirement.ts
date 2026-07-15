import type { MoveTag } from "../move/index.js";
import type { TypeKey } from "../type/index.js";
import type { WeatherKey } from "../weather/index.js";

/** 効果が発動するための条件 */
export type EffectRequirement =
  | {
      /** 指定したタイプの技で発動する */
      requirement: "moveType";
      moveType: TypeKey;
    }
  | {
      /** 指定した分類タグを持つ技で発動する */
      requirement: "moveTag";
      tag: MoveTag;
    }
  | {
      /** 残りHPが指定割合以下のときに発動する */
      requirement: "hpRatioAtOrBelow";
      hpRatio: number;
    }
  | {
      /** HPが満タンのときに発動する */
      requirement: "hpRatioAtFull";
    }
  | {
      /** 技の威力が指定値以下のときに発動する */
      requirement: "movePowerAtOrBelow";
      power: number;
    }
  | {
      /** 指定した天候のときに発動する */
      requirement: "weather";
      weather: WeatherKey;
    };
