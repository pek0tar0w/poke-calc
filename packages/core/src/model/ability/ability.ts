import type { LanguageCode } from "../../common/index.js";

export type Ability = {
  /** PokeAPI ability.id */
  id: number;

  /** 内部識別子 */
  key: string;

  /** 表示名 */
  names: Record<LanguageCode, string>;

  /** 説明文 */
  descriptions: Record<LanguageCode, string>;
};
