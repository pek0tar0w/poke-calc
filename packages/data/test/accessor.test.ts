import { describe, expect, test } from "vitest";

import { games } from "../src/index.js";

// アクセサがkey指定、一覧取得、関連データ解決の入口として使えることを確認する
describe("game data accessor", () => {
  // key指定でポケモンを取得できる
  test("gets a pokemon by key", () => {
    const garchomp = games.champions.getPokemon("garchomp");

    expect(garchomp.key).toBe("garchomp");
    expect(garchomp.names.ja).toBe("ガブリアス");
  });

  // key一覧を取得
  test("gets pokemon keys", () => {
    expect(games.champions.getPokemonKeys()).toContain("garchomp");
  });

  // value一覧を取得
  test("gets pokemon values", () => {
    expect(games.champions.getPokemons()[0]?.key).toBe("venusaur");
  });

  // ポケモンkeyから特性の実データ一覧を取得
  test("gets pokemon abilities", () => {
    const abilities = games.champions.getPokemonAbilities("garchomp");

    expect(abilities.map((ability) => ability.key)).toEqual([
      "sand-veil",
      "rough-skin",
    ]);
  });

  // ポケモンkeyから技の実データ一覧を取得できる
  test("gets pokemon moves", () => {
    const moves = games.champions.getPokemonMoves("garchomp");

    expect(moves.map((move) => move.key)).toContain("earthquake");
  });

  // 技・特性・道具もtop-level accessorから取得できる
  test("gets top-level data values", () => {
    expect(games.champions.getMove("earthquake").key).toBe("earthquake");
    expect(games.champions.getAbility("rough-skin").key).toBe("rough-skin");
    expect(games.champions.getItem("sitrus-berry").key).toBe("sitrus-berry");
  });
});
