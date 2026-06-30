import type { Ratio } from "../../common/index.js";
import type { MoveTag } from "../move/move-tag.js";
import type { TypeKey } from "../type/type-key.js";

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
      /** 残りHPが指定割合以下のときに発動する */
      requirement: "movePowerAtOrBelow";
      power: number;
    };
