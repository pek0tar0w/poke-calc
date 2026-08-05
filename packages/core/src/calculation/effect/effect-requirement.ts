import type {
  DamagingMove,
  EffectRequirement,
  TypeKey,
  WeatherKey,
} from "../../model/index.js";

import { calcTypeEffectiveness } from "../type/calculate-type-effectiveness.js";

/** 計算中に変化しない条件を満たしているか判定する */
export function areStaticEffectRequirementsMet({
  requirements,
  move,
  defenderTypes,
  weather,
}: {
  /** 発動条件 */
  requirements?: readonly EffectRequirement[] | undefined;

  /** 威力とタイプの変更を反映した使用技 */
  move: DamagingMove;

  /** 防御側のタイプ */
  defenderTypes: readonly TypeKey[];

  /** 現在の天候 */
  weather: WeatherKey | undefined;
}): boolean {
  return (requirements ?? []).every((requirement) => {
    switch (requirement.requirement) {
      case "weather":
        return weather === requirement.weather;

      case "moveType":
        return move.type === requirement.moveType;

      case "moveTag":
        return move.moveTags.includes(requirement.tag);

      case "makesContact":
        return move.makesContact;

      case "movePowerAtOrBelow":
        return move.power <= requirement.power;

      case "damageClass":
        return move.damageClass === requirement.damageClass;

      case "superEffective":
        return calcTypeEffectiveness(move.type, defenderTypes) > 1;

      case "hpRatioAtFull":
      case "hpRatioAtOrBelow":
        return true;
    }
  });
}

/** 計算中に変化する条件を満たしているか判定する */
export function areRuntimeEffectRequirementsMet({
  requirements,
  remainingHp,
  maximumHp,
}: {
  /** 発動条件 */
  requirements?: readonly EffectRequirement[] | undefined;

  /** 現在HP */
  remainingHp: number;

  /** 最大HP */
  maximumHp: number;
}): boolean {
  return (requirements ?? []).every((requirement) => {
    switch (requirement.requirement) {
      case "hpRatioAtOrBelow":
        return remainingHp / maximumHp <= requirement.hpRatio;

      case "hpRatioAtFull":
        return remainingHp === maximumHp;

      case "movePowerAtOrBelow":
      case "moveTag":
      case "makesContact":
      case "moveType":
      case "damageClass":
      case "superEffective":
      case "weather":
        return true;
    }
  });
}
