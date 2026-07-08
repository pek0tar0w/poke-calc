import type { DamagingMove } from "../../model/move/index.js";
import type { TypeKey } from "../../model/type/index.js";
import type { WeatherKey } from "../../model/weather/index.js";

/** 天候ごとのウェザーボールのタイプ */
const WEATHER_BALL_TYPES = {
  sun: "fire",
  rain: "water",
  sandstorm: "rock",
  snow: "ice",
} satisfies Record<WeatherKey, TypeKey>;

export type ResolvedMove = {
  /** 条件による変更を反映した威力 */
  power: number;

  /** 条件による変更を反映したタイプ */
  type: TypeKey;
};

/**
 * 天候による技固有の威力・タイプ変更を反映する
 *
 * ウェザーボールは天候がある場合に威力が2倍になり、天候に応じたタイプへ変化する
 * ソーラービームとソーラーブレードは晴れ以外の天候で威力が半減する
 */
export function resolveMove({
  move,
  weather,
}: {
  /** 使用する技 */
  move: DamagingMove;

  /** 現在の天候 */
  weather: WeatherKey | null;
}): ResolvedMove {
  // 天候なしの場合は元のノーマルタイプ・威力を使用する
  if (move.key === "weatherBall" && weather !== null) {
    return {
      power: move.power * 2,
      type: WEATHER_BALL_TYPES[weather],
    };
  }

  // 晴れでは溜めターンのみ省略され、威力は変更されない
  const isSolarMove = move.key === "solarBeam" || move.key === "solarBlade";
  const isSolarMoveWeakened =
    isSolarMove && weather !== null && weather !== "sun";

  if (isSolarMoveWeakened) {
    return {
      power: Math.floor(move.power / 2),
      type: move.type,
    };
  }

  return {
    power: move.power,
    type: move.type,
  };
}
