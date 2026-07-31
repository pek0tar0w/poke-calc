import type { DamageClass } from "../../common/index.js";
import type { ScreenKey } from "../../model/index.js";
import type { BattleType } from "../damage/index.js";

import { roundHalfDown } from "../utils/round-half-down.js";

/** シングルバトルでの壁補正倍率 */
const SINGLE_BATTLE_SCREEN_MULTIPLIER = 0.5;

/** ダブルバトルでの壁補正倍率 */
const DOUBLE_BATTLE_SCREEN_MULTIPLIER = 2 / 3;

/**
 * リフレクター、ひかりのかべ、オーロラベールによるダメージ補正を適用する
 *
 * 同じ分類へ複数の壁が有効な場合も、補正は1回だけ適用する
 */
export function applyScreenDamageModifier({
  damage,
  damageClass,
  battleType,
  defenderScreens,
}: {
  /** 壁補正前のダメージ */
  damage: number;

  /** 技のダメージ分類 */
  damageClass: DamageClass;

  /** シングル・ダブルの対戦形式 */
  battleType: BattleType;

  /** 防御側の場に展開されている壁 */
  defenderScreens: readonly ScreenKey[];
}): number {
  if (!hasMatchingScreen({ damageClass, defenderScreens })) {
    return damage;
  }

  const multiplier =
    battleType === "single"
      ? SINGLE_BATTLE_SCREEN_MULTIPLIER
      : DOUBLE_BATTLE_SCREEN_MULTIPLIER;

  return roundHalfDown(damage * multiplier);
}

/** 技の分類に対応する壁が有効か判定する */
function hasMatchingScreen({
  damageClass,
  defenderScreens,
}: {
  damageClass: DamageClass;
  defenderScreens: readonly ScreenKey[];
}): boolean {
  if (defenderScreens.includes("auroraVeil")) {
    return true;
  }

  return damageClass === "physical"
    ? defenderScreens.includes("reflect")
    : defenderScreens.includes("lightScreen");
}
