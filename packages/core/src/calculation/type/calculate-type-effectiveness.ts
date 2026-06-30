import type { TypeKey } from "../../model/type/type-key.js";

import { typeChart } from "../../model/type/type-chart.js";

/**
 * 攻撃タイプと防御タイプから相性倍率を返す
 *
 * @param attackType 攻撃タイプ
 * @param defenseTypes 防御タイプ
 * @returns タイプ相性倍率（無効: 0、かなりいまひとつ: 0.25、いまひとつ: 0.5、等倍: 1、ばつぐん: 2、ちょうばつぐん: 4）
 */
export function calcTypeEffectiveness(
  attackType: TypeKey,
  defenseTypes: readonly TypeKey[],
): number {
  return defenseTypes.reduce(
    (multiplier, defenseType) =>
      multiplier * (typeChart[attackType]?.[defenseType] ?? 1),
    1,
  );
}
