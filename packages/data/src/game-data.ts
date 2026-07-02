import type { Ability, GameId, Item, Move, Pokemon } from "@poke-calc/core";

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

  /** 道具 */
  items: Readonly<Record<string, Item>>;
};
