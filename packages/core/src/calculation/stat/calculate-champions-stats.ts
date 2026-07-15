import type { PokemonStats } from "../../model/pokemon/index.js";

/** HP実数値の固定加算値 */
const CHAMPIONS_HP_OFFSET = 75;

/** HP以外の実数値の固定加算値 */
const CHAMPIONS_NON_HP_STAT_OFFSET = 20;

/**
 * Championsの計算方式で、性格補正前の全実数値を計算する
 */
export function calculateChampionsStats({
  baseStats,
  statPoints,
}: {
  /** 種族値 */
  baseStats: PokemonStats;

  /** 能力ポイント */
  statPoints: PokemonStats;
}): PokemonStats {
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
