import { describe, expect, test } from "vitest";

import { championsGameData } from "../src/champions/game-data.js";
import { scarletVioletGameData } from "../src/scarlet-violet/game-data.js";

const gameDataByName = {
  champions: championsGameData,
  "scarlet-violet": scarletVioletGameData,
} as const;

// ゲームデータの整合性
describe("game data integrity", () => {
  for (const [gameName, gameData] of Object.entries(gameDataByName)) {
    // すべてのポケモンにラーンセットと特性セットが存在する
    test(`${gameName} has learnsets and pokemon abilities for every pokemon`, () => {
      const failures: string[] = [];

      for (const pokemonKey of Object.keys(gameData.pokemon)) {
        if (!(pokemonKey in gameData.learnsets)) {
          // ラーンセットが存在しません
          failures.push(`missing learnset for ${pokemonKey}`);
        }

        if (!(pokemonKey in gameData.pokemonAbilities)) {
          // 特性セットが存在しません
          failures.push(`missing pokemon abilities for ${pokemonKey}`);
        }
      }

      expect(failures).toEqual([]);
    });
  }
});
