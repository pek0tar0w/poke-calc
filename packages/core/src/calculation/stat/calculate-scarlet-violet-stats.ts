import type { StatKey } from "../../common/index.js";
import type { PokemonStats } from "../../model/pokemon/index.js";

const { floor } = Math;

/** HP実数値へ加算する固定値 */
const HP_OFFSET = 10;

/** HP以外の実数値へ加算する固定値 */
const NON_HP_STAT_OFFSET = 5;

/**
 * Scarlet/Violetの計算方式で性格補正前の全実数値を計算する
 */
export function calculateScarletVioletStats({
  baseStats,
  individualValues,
  effortValues,
  level,
}: {
  /** 種族値 */
  baseStats: PokemonStats;

  /** 個体値（0〜31） */
  individualValues: PokemonStats;

  /** 努力値（0〜252） */
  effortValues: PokemonStats;

  /** レベル（1〜100） */
  level: number;
}): PokemonStats {
  const stats = { baseStats, individualValues, effortValues, level };

  return {
    hp:
      calculateLevelScaledStat({
        statKey: "hp",
        stats,
      }) +
      level +
      HP_OFFSET,
    attack:
      calculateLevelScaledStat({
        statKey: "attack",
        stats,
      }) + NON_HP_STAT_OFFSET,
    defense:
      calculateLevelScaledStat({
        statKey: "defense",
        stats,
      }) + NON_HP_STAT_OFFSET,
    specialAttack:
      calculateLevelScaledStat({
        statKey: "specialAttack",
        stats,
      }) + NON_HP_STAT_OFFSET,
    specialDefense:
      calculateLevelScaledStat({
        statKey: "specialDefense",
        stats,
      }) + NON_HP_STAT_OFFSET,
    speed:
      calculateLevelScaledStat({
        statKey: "speed",
        stats,
      }) + NON_HP_STAT_OFFSET,
  };
}

/**
 * 指定した能力へ個体値、努力値、レベル補正を適用する
 */
function calculateLevelScaledStat({
  statKey,
  stats,
}: {
  /** 計算対象の能力 */
  statKey: StatKey;

  /** Scarlet/Violetの育成値 */
  stats: {
    /** 種族値 */
    baseStats: PokemonStats;

    /** 個体値（0〜31） */
    individualValues: PokemonStats;

    /** 努力値（0〜252） */
    effortValues: PokemonStats;

    /** レベル（1〜100） */
    level: number;
  };
}): number {
  const baseStat = stats.baseStats[statKey];
  const individualValue = stats.individualValues[statKey];
  const effortValue = stats.effortValues[statKey];
  const effortBonus = floor(effortValue / 4);

  return floor(
    ((baseStat * 2 + individualValue + effortBonus) * stats.level) / 100,
  );
}
