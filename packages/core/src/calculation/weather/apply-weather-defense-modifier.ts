import type { NonHpStatKey } from "../../common/index.js";
import type { TypeKey } from "../../model/type/index.js";
import type { WeatherKey } from "../../model/weather/index.js";

import { roundHalfDown } from "../utils/round-half-down.js";

/**
 * 砂嵐または雪による防御・特防補正を適用する
 *
 * 砂嵐ではいわタイプの特防、雪ではこおりタイプの防御を1.5倍にする
 * ランク補正とは異なるため、急所時にもこの補正は無視されない
 * 補正後は五捨五超入する
 */
export function applyWeatherDefenseModifier({
  stat,
  statKey,
  defenderTypes,
  weather,
}: {
  /** 天候補正前の能力値 */
  stat: number;

  /** ダメージ計算に使用する防御側の能力 */
  statKey: NonHpStatKey;

  /** 防御側の現在のタイプ */
  defenderTypes: readonly TypeKey[];

  /** 現在の天候 */
  weather: WeatherKey | null;
}): number {
  // 砂嵐はいわタイプへ特防補正を適用する
  const isRockSpecialDefenseBoost =
    weather === "sandstorm" &&
    statKey === "specialDefense" &&
    defenderTypes.includes("rock");

  // 雪はこおりタイプへ防御補正を適用する
  const isIceDefenseBoost =
    weather === "snow" &&
    statKey === "defense" &&
    defenderTypes.includes("ice");

  if (isRockSpecialDefenseBoost || isIceDefenseBoost) {
    return roundHalfDown(stat * 1.5);
  }

  return stat;
}
