import type { StatBoost } from "./stat-boost.js";

/**
 * 実数値にランク補正を適用する
 *
 * ランクが0以上の場合は `(2 + ランク) ÷ 2`、
 * 0未満の場合は `2 ÷ (2 - ランク)` を実数値に掛ける
 */
export function applyStatBoost({
  stat,
  boost,
}: {
  /** ランク補正前の実数値 */
  stat: number;

  /** 適用するランク */
  boost: StatBoost;
}): number {
  // 上昇時は分子、下降時は分母にランクの絶対値を加える
  const numerator = boost >= 0 ? 2 + boost : 2;
  const denominator = boost >= 0 ? 2 : 2 - boost;

  return Math.floor((stat * numerator) / denominator);
}
