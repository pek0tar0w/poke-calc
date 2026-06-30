import type { LanguageCode } from "../../common/index.js";
import type { AbilityEffect } from "./ability-effect.js";

export type Ability = {
  /** PokeAPI ability.id */
  id: number;

  /** 内部識別子 */
  key: string;

  /** 表示名 */
  names: Record<LanguageCode, string>;

  /** 説明文 */
  descriptions: Record<LanguageCode, string>;

  /** ダメージ計算で使用する効果 */
  effects?: AbilityEffect[];
};
