import type { StatKey } from "../../common/index.js";
import type { PokemonStats } from "../../model/pokemon/index.js";

const { floor } = Math;

/** HP実数値へ加算する固定値 */
const HP_OFFSET = 10;

/** HP以外の実数値へ加算する固定値 */
const NON_HP_STAT_OFFSET = 5;

/** Scarlet/Violetの全実数値計算に必要なパラメータ */
export type CalculateScarletVioletStatsParams = {
  /** 種族値 */
  baseStats: PokemonStats;

  /** 個体値（0〜31） */
  individualValues: PokemonStats;

  /** 努力値（0〜252） */
  effortValues: PokemonStats;

  /** レベル（1〜100） */
  level: number;
};

/** レベル補正に必要なパラメータ */
type CalculateLevelScaledStatParams = {
  /** 計算対象の能力 */
  statKey: StatKey;

  /** Scarlet/Violetの育成値 */
  stats: CalculateScarletVioletStatsParams;
};

/**
 * Scarlet/Violetの計算方式で性格補正前の全実数値を計算する
 *
 * @param params - 種族値、個体値、努力値、レベル
 * @returns 性格補正前の全実数値
 */
export function calculateScarletVioletStats(
  params: CalculateScarletVioletStatsParams,
): PokemonStats {
  return {
    hp:
      calculateLevelScaledStat({
        statKey: "hp",
        stats: params,
      }) +
      params.level +
      HP_OFFSET,
    attack:
      calculateLevelScaledStat({
        statKey: "attack",
        stats: params,
      }) + NON_HP_STAT_OFFSET,
    defense:
      calculateLevelScaledStat({
        statKey: "defense",
        stats: params,
      }) + NON_HP_STAT_OFFSET,
    specialAttack:
      calculateLevelScaledStat({
        statKey: "specialAttack",
        stats: params,
      }) + NON_HP_STAT_OFFSET,
    specialDefense:
      calculateLevelScaledStat({
        statKey: "specialDefense",
        stats: params,
      }) + NON_HP_STAT_OFFSET,
    speed:
      calculateLevelScaledStat({
        statKey: "speed",
        stats: params,
      }) + NON_HP_STAT_OFFSET,
  };
}

/**
 * 指定した能力へ個体値、努力値、レベル補正を適用する
 */
function calculateLevelScaledStat(
  params: CalculateLevelScaledStatParams,
): number {
  const { statKey, stats } = params;
  const baseStat = stats.baseStats[statKey];
  const individualValue = stats.individualValues[statKey];
  const effortValue = stats.effortValues[statKey];
  const effortBonus = floor(effortValue / 4);

  return floor(
    ((baseStat * 2 + individualValue + effortBonus) * stats.level) / 100,
  );
}
