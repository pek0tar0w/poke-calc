import type { DamageClass, NonHpStatKey } from "../../common/index.js";
import type { RecoveryEffect } from "../effect/index.js";

/** ダメージ計算で扱うアイテム効果 */
export type ItemEffect =
  | {
      /** 能力値補正 例: こだわりハチマキ、こだわりメガネ、とつげきチョッキ */
      effect: "statMultiplier";
      stat: NonHpStatKey;
      multiplier: number;
      activationTiming: "always";
    }
  | {
      /** 与ダメージ補正 例: いのちのたま、もくたん、しんぴのしずく */
      effect: "damageMultiplier";
      multiplier: number;
      activationTiming: "always";
      moveTypeId?: number;
      damageClass?: DamageClass;
    }
  | {
      /** 被ダメージ補正 例: 半減きのみ */
      effect: "receivedDamageMultiplier";
      multiplier: number;
      activationTiming: "always" | "superEffective";
      moveTypeId?: number;
      damageClass?: DamageClass;
    }
  | RecoveryEffect;

export type ItemEffectActivationTiming = ItemEffect["activationTiming"];
