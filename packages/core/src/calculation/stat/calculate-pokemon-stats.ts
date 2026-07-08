import type { PokemonStats } from "../../model/pokemon/index.js";

import { calculateChampionsStats } from "./calculate-champions-stats.js";
import { calculateScarletVioletStats } from "./calculate-scarlet-violet-stats.js";

/** ゲーム別の実数値計算に必要な育成値 */
export type PokemonStatConfig =
  | {
      /** Pokémon Champions */
      game: "champions";

      /** 能力ポイント */
      statPoints: PokemonStats;
    }
  | {
      /** Pokémon Scarlet/Violet */
      game: "scarletViolet";

      /** 個体値 */
      individualValues: PokemonStats;

      /** 努力値 */
      effortValues: PokemonStats;

      /** レベル */
      level: number;
    };

/**
 * ゲーム別の計算方式で性格補正前の全実数値を計算する
 */
export function calculatePokemonStats({
  baseStats,
  statConfig,
}: {
  /** 種族値 */
  baseStats: PokemonStats;

  /** ゲーム別の育成値 */
  statConfig: PokemonStatConfig;
}): PokemonStats {
  if (statConfig.game === "champions") {
    return calculateChampionsStats({
      baseStats,
      statPoints: statConfig.statPoints,
    });
  }

  return calculateScarletVioletStats({
    baseStats,
    individualValues: statConfig.individualValues,
    effortValues: statConfig.effortValues,
    level: statConfig.level,
  });
}
