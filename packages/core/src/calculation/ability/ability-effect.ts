import type { NonHpStatKey, Ratio } from "../../common/index.js";
import type { AbilityEffectRequirement } from "./ability-effect-requirement.js";

export type AbilityEffect =
  | {
      /** 攻撃側の能力値に補正をかける */
      side: "attacker";
      effect: "statMultiplier";
      stat: NonHpStatKey;
      multiplier: number;
      requirements?: AbilityEffectRequirement[];
    }
  | {
      /** 防御側の特性により、攻撃側の能力値に補正をかける */
      side: "defender";
      effect: "attackerStatMultiplier";
      stat: NonHpStatKey;
      multiplier: number;
      requirements?: AbilityEffectRequirement[];
    }
  | {
      /** ダメージ倍率を変更する */
      side: "attacker";
      effect: "damageMultiplier";
      multiplier: number;
      requirements?: AbilityEffectRequirement[];
    }
  | {
      /** タイプ一致ボーナスを指定倍率に上書きする */
      side: "attacker";
      effect: "sameTypeAttackBonusOverride";
      multiplier: number;
    }
  | {
      /** 接触技を受けたとき、相手に追加ダメージを与える */
      side: "defender";
      effect: "contactDamage";
      hpRatio: Ratio;
    };
