import type { PokemonStats } from "../../model/pokemon/index.js";

/** HP実数値の固定加算値 */
const CHAMPIONS_HP_OFFSET = 75;

/** HP以外の実数値の固定加算値 */
const CHAMPIONS_NON_HP_STAT_OFFSET = 20;

/** Championsの全実数値計算に必要なパラメータ */
export type CalculateChampionsStatsParams = {
  /** 種族値 */
  baseStats: PokemonStats;

  /** 能力ポイント */
  statPoints: PokemonStats;
};

/**
 * Championsの計算方式で、性格補正前の全実数値を計算する
 *
 * @param params - 種族値と能力ポイント
 * @returns 性格補正前の全実数値
 */
export function calculateChampionsStats(
  params: CalculateChampionsStatsParams,
): PokemonStats {
  const { baseStats, statPoints } = params;

  return {
    hp: baseStats.hp + CHAMPIONS_HP_OFFSET + statPoints.hp,

    attack: baseStats.attack + CHAMPIONS_NON_HP_STAT_OFFSET + statPoints.attack,

    defense:
      baseStats.defense + CHAMPIONS_NON_HP_STAT_OFFSET + statPoints.defense,

    specialAttack:
      baseStats.specialAttack +
      CHAMPIONS_NON_HP_STAT_OFFSET +
      statPoints.specialAttack,

    specialDefense:
      baseStats.specialDefense +
      CHAMPIONS_NON_HP_STAT_OFFSET +
      statPoints.specialDefense,

    speed: baseStats.speed + CHAMPIONS_NON_HP_STAT_OFFSET + statPoints.speed,
  };
}
