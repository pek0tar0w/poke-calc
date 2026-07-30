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
    // すべてのポケモンがlearnsetsとpokemonAbilitiesに存在する
    test(`${gameName} has learnsets and pokemon abilities for every pokemon`, () => {
      const failures: string[] = [];

      for (const pokemonKey of Object.keys(gameData.pokemon)) {
        if (!(pokemonKey in gameData.learnsets)) {
          failures.push(`missing learnset for ${pokemonKey}`);
        }

        if (!(pokemonKey in gameData.pokemonAbilities)) {
          failures.push(`missing pokemon abilities for ${pokemonKey}`);
        }
      }

      expect(failures).toEqual([]);
    });

    // learnsets内のすべての技がmovesに存在する
    test(`${gameName} learnsets only reference existing moves`, () => {
      const failures: string[] = [];

      for (const [pokemonKey, moveKeys] of Object.entries(gameData.learnsets)) {
        for (const moveKey of moveKeys) {
          if (!(moveKey in gameData.moves)) {
            // 技が存在しない
            failures.push(`${pokemonKey}: missing move ${moveKey}`);
          }
        }
      }

      expect(failures).toEqual([]);
    });

    // pokemonAbilitiesのすべての特性がabilitiesに存在する
    test(`${gameName} pokemon abilities only reference existing abilities`, () => {
      const failures: string[] = [];

      for (const [pokemonKey, abilityKeys] of Object.entries(
        gameData.pokemonAbilities,
      )) {
        for (const abilityKey of abilityKeys) {
          if (!(abilityKey in gameData.abilities)) {
            failures.push(`${pokemonKey}: missing ability ${abilityKey}`);
          }
        }
      }

      expect(failures).toEqual([]);
    });
  }
});
