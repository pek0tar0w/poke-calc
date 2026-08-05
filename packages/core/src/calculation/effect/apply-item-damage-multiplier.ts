import type { ItemEffect } from "../../model/item/index.js";
import type { DamagingMove } from "../../model/move/index.js";
import type { TypeKey } from "../../model/type/index.js";
import type { WeatherKey } from "../../model/weather/index.js";

import { areStaticEffectRequirementsMet } from "./effect-requirement.js";
import { roundHalfDown } from "../utils/round-half-down.js";

/**
 * 攻撃側の道具による与ダメージ倍率を適用する
 *
 * タイプ強化道具、ちからのハチマキ、ものしりメガネ、
 * たつじんのおび、いのちのたまなどを扱う
 */
export function applyItemDamageMultiplier({
  damage,
  effects,
  move,
  defenderTypes,
  weather,
}: {
  /** 補正前のダメージ */
  damage: number;

  /** 攻撃側の道具効果 */
  effects: readonly ItemEffect[];

  /** 使用する技 */
  move: DamagingMove;

  /** 防御側のタイプ */
  defenderTypes: readonly TypeKey[];

  /** 現在の天候 */
  weather: WeatherKey | undefined;
}): number {
  return effects.reduce((adjustedDamage, effect) => {
    if (
      effect.effect !== "damageMultiplier" ||
      !areStaticEffectRequirementsMet({
        requirements: effect.requirements,
        move,
        defenderTypes,
        weather,
      })
    ) {
      return adjustedDamage;
    }

    return roundHalfDown(adjustedDamage * effect.multiplier);
  }, damage);
}
