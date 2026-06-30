import type { NonHpStatKey } from "../../common/index.js";

/** 戦闘中の能力ランク（-6〜+6） */
export type StatBoost = -6 | -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6;

/** HP以外の各能力に対するランク */
export type StatBoosts = Record<NonHpStatKey, StatBoost>;
