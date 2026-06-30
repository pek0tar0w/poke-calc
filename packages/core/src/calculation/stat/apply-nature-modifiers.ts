import type { NonHpStatKey } from "../../common/index.js";
import type { NatureKey } from "../../model/nature/index.js";
import type { PokemonStats } from "../../model/pokemon/index.js";

import { calculateNatureMultiplier } from "./calculate-nature-multiplier.js";

const { floor } = Math;

/** 性格補正に必要なパラメータ */
export type ApplyNatureModifiersParams = {
  /** 性格補正前の全実数値 */
  stats: PokemonStats;

  /** 適用する性格 */
  natureKey: NatureKey;
};

/** 1つの能力値への性格補正に必要なパラメータ */
type ApplyNatureModifierParams = {
  /** 性格補正前の能力値 */
  stat: number;

  /** 補正対象の能力 */
  statKey: NonHpStatKey;

  /** 適用する性格 */
  natureKey: NatureKey;
};

/**
 * HP以外の全実数値へ性格補正を適用する
 *
 * @param params - 性格補正前の全実数値と性格
 * @returns 性格補正後の全実数値
 */
export function applyNatureModifiers(
  params: ApplyNatureModifiersParams,
): PokemonStats {
  const { stats, natureKey } = params;

  return {
    hp: stats.hp,
    attack: applyNatureModifier({
      stat: stats.attack,
      statKey: "attack",
      natureKey,
    }),
    defense: applyNatureModifier({
      stat: stats.defense,
      statKey: "defense",
      natureKey,
    }),
    specialAttack: applyNatureModifier({
      stat: stats.specialAttack,
      statKey: "specialAttack",
      natureKey,
    }),
    specialDefense: applyNatureModifier({
      stat: stats.specialDefense,
      statKey: "specialDefense",
      natureKey,
    }),
    speed: applyNatureModifier({
      stat: stats.speed,
      statKey: "speed",
      natureKey,
    }),
  };
}

/**
 * 1つの能力値へ性格補正を適用する
 */
function applyNatureModifier(params: ApplyNatureModifierParams): number {
  const { stat, statKey, natureKey } = params;
  const multiplier = calculateNatureMultiplier(natureKey, statKey);

  return floor(stat * multiplier);
}
