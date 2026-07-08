import type { EffectRequirement, WeatherKey } from "../../model/index.js";

/** 計算中に変化しない条件を満たしているか判定する */
export function areStaticEffectRequirementsMet({
  requirements,
  weather,
}: {
  /** 発動条件 */
  requirements?: readonly EffectRequirement[] | undefined;

  /** 現在の天候 */
  weather: WeatherKey | null;
}): boolean {
  return (requirements ?? []).every((requirement) => {
    switch (requirement.requirement) {
      case "weather":
        return weather === requirement.weather;

      case "hpRatioAtFull":
      case "hpRatioAtOrBelow":
      case "movePowerAtOrBelow":
      case "moveTag":
      case "moveType":
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
      case "moveType":
      case "weather":
        return true;
    }
  });
}
