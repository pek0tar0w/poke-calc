import type { ItemEffect } from "../../model/item/index.js";
import type { DamagingMove } from "../../model/move/index.js";
import type { TypeKey } from "../../model/type/index.js";

import { calcTypeEffectiveness } from "../type/calculate-type-effectiveness.js";
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
  moveType,
  defenderTypes,
}: {
  /** 補正前のダメージ */
  damage: number;

  /** 攻撃側の道具効果 */
  effects: readonly ItemEffect[];

  /** 使用する技 */
  move: DamagingMove;

  /** タイプ変更を反映した技タイプ */
  moveType: TypeKey;

  /** 防御側のタイプ */
  defenderTypes: readonly TypeKey[];
}): number {
  return effects.reduce((adjustedDamage, effect) => {
    if (
      effect.effect !== "damageMultiplier" ||
      !areDamageMultiplierRequirementsMet({
        requirements: effect.requirements,
        move,
        moveType,
        defenderTypes,
      })
    ) {
      return adjustedDamage;
    }

    return roundHalfDown(adjustedDamage * effect.multiplier);
  }, damage);
}

/** 与ダメージ倍率の発動条件を満たしているか判定する */
function areDamageMultiplierRequirementsMet({
  requirements,
  move,
  moveType,
  defenderTypes,
}: {
  /** 発動条件 */
  requirements:
    | Extract<ItemEffect, { effect: "damageMultiplier" }>["requirements"]
    | undefined;

  /** 使用する技 */
  move: DamagingMove;

  /** タイプ変更を反映した技タイプ */
  moveType: TypeKey;

  /** 防御側のタイプ */
  defenderTypes: readonly TypeKey[];
}): boolean {
  return (requirements ?? []).every((requirement) => {
    switch (requirement.requirement) {
      case "moveType":
        return moveType === requirement.moveType;

      case "damageClass":
        return move.damageClass === requirement.damageClass;

      case "superEffective":
        return calcTypeEffectiveness(moveType, defenderTypes) > 1;

      case "movePowerAtOrBelow":
        return move.power <= requirement.power;

      case "moveTag":
        return move.moveTags.includes(requirement.tag);

      case "hpRatioAtFull":
      case "hpRatioAtOrBelow":
      case "weather":
        return true;
    }
  });
}
