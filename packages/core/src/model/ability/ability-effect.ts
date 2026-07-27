import type { NonHpStatKey, Ratio } from "../../common/index.js";
import type {
  DamageEffect,
  DamageReductionEffect,
  EffectRequirement,
  RecoveryEffect,
} from "../effect/index.js";

export type AbilityEffect =
  | {
      /** 攻撃側の能力値に補正をかける */
      side: "attacker";
      effect: "statMultiplier";
      stat: NonHpStatKey;
      multiplier: number;
      requirements?: EffectRequirement[];
    }
  | {
      /** 防御側の特性により、攻撃側の能力値に補正をかける */
      side: "defender";
      effect: "attackerStatMultiplier";
      stat: NonHpStatKey;
      multiplier: number;
      requirements?: EffectRequirement[];
    }
  | {
      /** ダメージ倍率を変更する */
      side: "attacker";
      effect: "damageMultiplier";
      multiplier: number;
      requirements?: EffectRequirement[];
    }
  | {
      /** 連続技の攻撃回数を最大にする 例: スキルリンク */
      side: "attacker";
      effect: "maximizeMoveHitCount";
    }
  | {
      /** 単体攻撃に追加hitを発生させる 例: おやこあい */
      side: "attacker";
      effect: "additionalHit";
      hitCount: number;
      damageMultiplier: number;
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
    }
  | RecoveryEffect
  | DamageEffect
  | DamageReductionEffect;
