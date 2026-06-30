import type { NonHpStatKey } from "../../common/index.js";

export type NatureEffect =
  | {
      increasedStat: NonHpStatKey;
      decreasedStat: NonHpStatKey;
    }
  | {
      increasedStat: null;
      decreasedStat: null;
    };
