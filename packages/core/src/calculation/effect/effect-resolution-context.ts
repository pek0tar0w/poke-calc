import type { GameId } from "../../common/index.js";
import type { DamagingMove } from "../../model/move/index.js";
import type { WeatherKey } from "../../model/weather/index.js";
import type { BattlePokemonState } from "../damage/damage-calculation-input.js";
import type { TerrainState } from "../terrain/index.js";

/** 計算状態から有効な効果を解決するための共通コンテキスト */
export type EffectResolutionContext = {
  /** 作品 */
  game: GameId;

  /** 攻撃側 */
  attacker: BattlePokemonState;

  /** 防御側 */
  defender: BattlePokemonState;

  /** 使用する技 */
  move: DamagingMove;

  /** 現在の天候 */
  weather: WeatherKey | null;

  /** 現在のフィールドと接地状態 */
  terrain?: TerrainState;
};
