import type { Ratio } from "../../common/index.js";
import type { MoveTag, TypeKey } from "../index.js";

export type AbilityEffectRequirement =
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
      hpRatio: Ratio;
    }
  | {
      /** 技の威力が指定値以下のときに発動する */
      requirement: "movePowerAtOrBelow";
      power: number;
    };
