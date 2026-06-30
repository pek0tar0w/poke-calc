import type { TypeKey } from "../../model/type/index.js";

import { calcTypeEffectiveness } from "../type/calculate-type-effectiveness.js";
import { roundHalfDown } from "../utils/round-half-down.js";

/** 乱数補正に使用する百分率 */
const DAMAGE_RANDOM_PERCENTAGES = [
  85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
] as const;

/** 乱数ごとのダメージ計算に必要なパラメータ */
type CalculateRandomDamageValuesParams = {
  /** 基本ダメージ */
  baseDamage: number;

  /** 技のタイプ */
  moveType: TypeKey;

  /** 攻撃側のタイプ */
  attackerTypes: readonly TypeKey[];

  /** 防御側のタイプ */
  defenderTypes: readonly TypeKey[];
};

/** 指定した乱数補正でのダメージ計算に必要なパラメータ */
type CalculateDamageAtRandomPercentageParams =
  CalculateRandomDamageValuesParams & {
    /** 乱数補正の百分率 */
    randomPercentage: number;
  };

/**
 * 16段階の乱数補正ごとのダメージを計算する
 *
 * 同じダメージになる乱数補正が複数ある場合も、
 * 発生確率を保つため値を重複させて返す
 *
 * @param params - 基本ダメージと各補正に必要な条件
 * @returns 乱数補正ごとのダメージ
 */
export function calculateRandomDamageValues(
  params: CalculateRandomDamageValuesParams,
): number[] {
  return DAMAGE_RANDOM_PERCENTAGES.map((randomPercentage) =>
    calculateDamageAtRandomPercentage({
      ...params,
      randomPercentage,
    }),
  );
}

/**
 * 基本ダメージへ指定した乱数、タイプ一致、タイプ相性補正を適用する
 */
function calculateDamageAtRandomPercentage(
  params: CalculateDamageAtRandomPercentageParams,
): number {
  const {
    baseDamage,
    randomPercentage,
    moveType,
    attackerTypes,
    defenderTypes,
  } = params;

  // 乱数補正を適用して小数点以下を切り捨てる
  const randomAdjustedDamage = Math.floor(
    (baseDamage * randomPercentage) / 100,
  );

  // 攻撃側に技と同じタイプが含まれる場合はタイプ一致補正を適用する
  const sameTypeAttackBonus = attackerTypes.includes(moveType) ? 1.5 : 1;
  const sameTypeAdjustedDamage = roundHalfDown(
    randomAdjustedDamage * sameTypeAttackBonus,
  );

  // 防御側のタイプに応じた相性補正を適用する
  const typeEffectiveness = calcTypeEffectiveness(moveType, defenderTypes);

  return Math.floor(sameTypeAdjustedDamage * typeEffectiveness);
}
