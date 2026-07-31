import type { DamageClass } from "../../common/index.js";
import type { StatusConditionKey } from "../../model/index.js";

import { roundHalfDown } from "../utils/round-half-down.js";

/** やけどによる物理ダメージの補正倍率 */
const BURN_DAMAGE_MULTIPLIER = 0.5;

/**
 * 攻撃側がやけど状態の場合、物理技のダメージを半減する
 *
 * やけど補正は乱数、タイプ一致、タイプ相性補正の後に適用する
 */
export function applyBurnDamageModifier({
  damage,
  damageClass,
  attackerStatus,
}: {
  /** やけど補正前のダメージ */
  damage: number;

  /** 技のダメージ分類 */
  damageClass: DamageClass;

  /** 攻撃側の状態異常 */
  attackerStatus: StatusConditionKey | undefined;
}): number {
  if (attackerStatus !== "burn" || damageClass !== "physical") {
    return damage;
  }

  return roundHalfDown(damage * BURN_DAMAGE_MULTIPLIER);
}
