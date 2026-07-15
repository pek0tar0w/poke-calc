import type { EffectRequirement } from "./effect-requirement.js";

/** HPに直接ダメージを与える効果 */
export type DamageEffect =
  | {
      /** 最大HPの一定割合だけダメージを与える、例: どく、やけど、のろい、やどりぎ */
      effect: "damage";

      /** ダメージが発生するタイミング */
      activationTiming: "afterDamage" | "turnEnd";

      /** 最大HPを割ってダメージ量を求める値 */
      damageDivisor: number;

      /** 発動条件 */
      requirements?: EffectRequirement[];
    }
  | {
      /** もうどくのターン終了時ダメージ */
      effect: "badPoisonDamage";

      /** もうどくはターン終了時に発生する */
      activationTiming: "turnEnd";

      /** もうどくは 最大HP × カウンター ÷ 16 で計算する */
      damageDivisor: 16;

      /** 発動条件 */
      requirements?: EffectRequirement[];
    };
