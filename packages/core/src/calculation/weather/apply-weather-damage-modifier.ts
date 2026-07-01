import type { TypeKey } from "../../model/type/index.js";
import type { WeatherKey } from "../../model/weather/index.js";

import { roundHalfDown } from "../utils/round-half-down.js";

export type ApplyWeatherDamageModifierParams = {
  /** 天候補正前のダメージ */
  damage: number;

  /** 現在の天候 */
  weather: WeatherKey | null;

  /** 使用する技のタイプ */
  moveType: TypeKey;
};

/**
 * 晴れまたは雨によるダメージ補正を適用する
 *
 * 晴れはほのお技を1.5倍、みず技を0.5倍にする
 * 雨はみず技を1.5倍、ほのお技を0.5倍にする
 * 補正後は五捨五超入する
 *
 * @param params - ダメージ、天候、技のタイプ
 * @returns 天候補正後のダメージ
 */
export function applyWeatherDamageModifier(
  params: ApplyWeatherDamageModifierParams,
): number {
  const { damage, weather, moveType } = params;

  // 晴れによるほのお・みず技への補正
  if (weather === "sun") {
    if (moveType === "fire") return roundHalfDown(damage * 1.5);
    if (moveType === "water") return roundHalfDown(damage * 0.5);
  }

  // 雨によるみず・ほのお技への補正
  if (weather === "rain") {
    if (moveType === "water") return roundHalfDown(damage * 1.5);
    if (moveType === "fire") return roundHalfDown(damage * 0.5);
  }

  return damage;
}
