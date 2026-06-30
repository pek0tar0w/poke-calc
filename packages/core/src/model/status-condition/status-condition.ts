import type { LanguageCode } from "../../common/index.js";
import type { StatusConditionKey } from "./status-condition-key.js";

export type StatusCondition = {
  /** 内部識別子 */
  key: StatusConditionKey;

  /** 表示名 */
  names: Record<LanguageCode, string>;
};
