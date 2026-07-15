import type { GameId } from "../../common/index.js";
import type { DamagingMove } from "../../model/move/index.js";
import type { BattlePokemon } from "../../model/pokemon/index.js";
import type { WeatherKey } from "../../model/weather/index.js";
import type { BattlePokemonState } from "../damage/damage-calculation-state.js";

/** 計算状態から有効な効果を解決するための共通コンテキスト */
export type EffectResolutionContext = {
  /** 作品 */
  game: GameId;

  /** 攻撃側 */
  attacker: BattlePokemonState<BattlePokemon>;

  /** 防御側 */
  defender: BattlePokemonState<BattlePokemon>;

  /** 使用する技 */
  move: DamagingMove;

  /** 現在の天候 */
  weather: WeatherKey | null;
};
