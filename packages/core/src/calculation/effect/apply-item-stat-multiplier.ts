import type { NonHpStatKey } from "../../common/index.js";
import type { ItemEffect } from "../../model/item/index.js";

import { roundHalfDown } from "../utils/round-half-down.js";

/** 道具による指定能力の倍率補正を適用する */
export function applyItemStatMultiplier({
  stat,
  statKey,
  effects,
}: {
  /** ランク補正後の能力値 */
  stat: number;

  /** ダメージ計算に使用する能力 */
  statKey: NonHpStatKey;

  /** 能力値を使用するポケモンの道具効果 */
  effects: readonly ItemEffect[];
}): number {
  return effects.reduce((adjustedStat, effect) => {
    if (effect.effect !== "statMultiplier" || effect.stat !== statKey) {
      return adjustedStat;
    }

    return roundHalfDown(adjustedStat * effect.multiplier);
  }, stat);
}
