import type { DamageClass, NonHpStatKey } from "../../common/index.js";

export type ItemEffectTrigger = ItemEffect["trigger"];

export type ItemEffect =
  | {
      /**
       * 能力値補正
       * 例: こだわりハチマキ、こだわりメガネ、とつげきチョッキ
       */
      effect: "statMultiplier";
      stat: NonHpStatKey;
      multiplier: number;
      trigger: "always";
    }
  | {
      /**
       * 与ダメージ補正
       * 例: いのちのたま、もくたん、しんぴのしずく
       */
      effect: "damageMultiplier";
      multiplier: number;
      trigger: "always";

      moveTypeId?: number;
      damageClass?: DamageClass;
    }
  | {
      /**
       * 被ダメージ補正
       * 例: 半減きのみ
       */
      effect: "receivedDamageMultiplier";
      multiplier: number;
      trigger: "always" | "superEffective";

      moveTypeId?: number;
      damageClass?: DamageClass;
    }
  | {
      /**
       * HP回復
       * 例: たべのこし、オボンのみ
       */
      effect: "recovery";
      recoveryDivisor: number;
      //hpRatio: number;
      trigger: "afterDamage" | "turnEnd";

      hpRatioAtOrBelow?: number;
    };
