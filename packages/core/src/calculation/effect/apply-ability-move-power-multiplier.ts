import type { AbilityEffect } from "../../model/ability/index.js";
import type { DamagingMove } from "../../model/move/index.js";
import type { TypeKey } from "../../model/type/index.js";
import type { WeatherKey } from "../../model/weather/index.js";

import { roundHalfDown } from "../utils/round-half-down.js";
import { areStaticEffectRequirementsMet } from "./effect-requirement.js";

/** 攻撃側の特性による技の威力補正を適用する */
export function applyAbilityMovePowerMultiplier({
  power,
  effects,
  move,
  defenderTypes,
  weather,
}: {
  /** 補正前の技の威力 */
  power: number;

  /** 攻撃側の特性効果 */
  effects: readonly AbilityEffect[];

  /** 威力とタイプの変更を反映した使用技 */
  move: DamagingMove;

  /** 防御側のタイプ */
  defenderTypes: readonly TypeKey[];

  /** 現在の天候 */
  weather: WeatherKey | undefined;
}): number {
  return effects.reduce((adjustedPower, effect) => {
    if (
      !("side" in effect) ||
      effect.side !== "attacker" ||
      effect.effect !== "movePowerMultiplier" ||
      !areStaticEffectRequirementsMet({
        requirements: effect.requirements,
        move,
        defenderTypes,
        weather,
      })
    ) {
      return adjustedPower;
    }

    return roundHalfDown(adjustedPower * effect.multiplier);
  }, power);
}
