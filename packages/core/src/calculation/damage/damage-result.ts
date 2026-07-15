import type { PokemonStats } from "../../model/index.js";

/** 1種類のダメージ計算結果 */
export type DamageSummary = {
  /** 16段階の乱数ごとのダメージ */
  damages: readonly number[];

  /** 最低ダメージ */
  minimumDamage: number;

  /** 最高ダメージ */
  maximumDamage: number;

  /** 防御側の最大HPに対する最低ダメージ割合 */
  minimumDamageRatio: number;

  /** 防御側の最大HPに対する最高ダメージ割合 */
  maximumDamageRatio: number;

  /** 最高乱数が続いた場合に倒せる最小攻撃回数、倒せない場合はnull */
  possibleHitCount: number | null;

  /** 最低乱数が続いた場合でも倒せる攻撃回数、倒せない場合はnull */
  guaranteedHitCount: number | null;

  /** 最小攻撃回数以内に倒せる確率（0〜1） */
  knockoutProbability: number;
};

/** 通常時と急所時を含むダメージ計算結果 */
export type DamageResult = {
  /** 攻撃側の性格補正適用後の実数値 */
  attackerStats: PokemonStats;

  /** 防御側の性格補正適用後の実数値 */
  defenderStats: PokemonStats;

  /** 通常時 */
  normal: DamageSummary;

  /** 急所時 */
  critical: DamageSummary;
};
