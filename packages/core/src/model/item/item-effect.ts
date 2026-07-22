import type { DamageClass, NonHpStatKey } from "../../common/index.js";
import type {
  DamageEffect,
  DamageReductionEffect,
  EffectRequirement,
  RecoveryEffect,
} from "../effect/index.js";

/** 道具効果が発動する条件 */
export type ItemEffectRequirement =
  | EffectRequirement
  | {
      /** 指定したダメージ分類の技で発動する */
      requirement: "damageClass";
      damageClass: DamageClass;
    }
  | {
      /** 効果ばつぐんの技を受けたときに発動する */
      requirement: "superEffective";
    };

/** ダメージ計算で扱うアイテム効果 */
type ItemEffectDetails =
  | {
      /** 能力値補正 例: こだわりハチマキ、こだわりメガネ、とつげきチョッキ */
      effect: "statMultiplier";
      stat: NonHpStatKey;
      multiplier: number;
      requirements?: ItemEffectRequirement[];
    }
  | {
      /** 与ダメージ補正 例: いのちのたま、もくたん、メタルコート */
      effect: "damageMultiplier";
      multiplier: number;
      requirements?: ItemEffectRequirement[];
    }
  | {
      /** 被ダメージ補正 例: 半減きのみ */
      effect: "receivedDamageMultiplier";
      multiplier: number;
      requirements?: ItemEffectRequirement[];
    }
  | RecoveryEffect
  | DamageEffect
  | DamageReductionEffect;

/** アイテムが持つ計算上の効果 */
export type ItemEffect = ItemEffectDetails & {
  /** 効果の発動後にアイテムが消費されるか */
  consumable: boolean;
};

export type ItemEffectActivationTiming = Extract<
  ItemEffect,
  { activationTiming: string }
>["activationTiming"];
