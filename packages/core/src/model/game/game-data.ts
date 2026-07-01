import type { GameId } from "../../common/index.js";
import type { Ability } from "../ability/index.js";
import type { Move } from "../move/index.js";
import type { Pokemon } from "../pokemon/index.js";

/** 1作品分の実データ */
export type GameData = {
  /** 作品 */
  game: GameId;

  /** ポケモン */
  pokemon: Readonly<Record<string, Pokemon>>;

  /** 技 */
  moves: Readonly<Record<string, Move>>;

  /** 特性 */
  abilities: Readonly<Record<string, Ability>>;
};
