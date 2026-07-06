import type { LanguageCode } from "../../common/language-code.js";
import type { ItemEffect } from "./item-effect.js";

export type Item = {
  /**
   * PokeAPI item.id
   */
  id: number;

  /**
   * 内部識別子
   *
   * 例:
   * - leftovers
   */
  key: string;

  /**
   * 表示名
   */
  names: Record<LanguageCode, string>;

  /**
   * 説明文
   */
  descriptions: Record<LanguageCode, string>;

  /**
   * ダメージ計算で扱う効果
   */
  effects: readonly ItemEffect[];
};
