import type { KoState } from "../../damage/knockout/ko-distribution.js";
import type { ActiveDamageReductionEffect } from "./active-damage-reduction-effect.js";

import {
  areRuntimeEffectRequirementsMet,
  createActiveEffectKey,
} from "../index.js";
import { roundHalfDown } from "../../utils/round-half-down.js";

/** 状態に応じて発動するダメージ軽減効果を適用する */
export function applyDamageReductionEffects({
  damage,
  state,
  maximumHp,
  effects,
}: {
  /** 軽減前のダメージ */
  damage: number;

  /** 攻撃を受ける前の生存状態 */
  state: KoState;

  /** 最大HP */
  maximumHp: number;

  /** 適用候補のダメージ軽減効果 */
  effects: readonly ActiveDamageReductionEffect[];
}): {
  /** 軽減後のダメージ */
  damage: number;

  /** 軽減効果適用後の生存状態 */
  state: KoState;
} {
  let nextDamage = damage;
  const consumedEffectKeys = [...state.consumedEffectKeys];

  for (const activeEffect of effects) {
    const effectKey = createActiveEffectKey({
      source: activeEffect.source,
      effect: activeEffect.effect.effect,
    });

    if (
      isConsumableDamageReductionEffect(activeEffect) &&
      consumedEffectKeys.includes(effectKey)
    ) {
      continue;
    }

    if (
      !areRuntimeEffectRequirementsMet({
        requirements: activeEffect.effect.requirements,
        remainingHp: state.remainingHp,
        maximumHp,
      })
    ) {
      continue;
    }

    nextDamage = roundHalfDown(nextDamage * activeEffect.effect.multiplier);

    // ばけのかわなど、効果発動時に発生するHP減少を加算する
    if (activeEffect.effect.activationDamageDivisor !== undefined) {
      nextDamage += Math.floor(
        maximumHp / activeEffect.effect.activationDamageDivisor,
      );
    }

    // がんじょうなど、ひんしになるダメージを受けても指定HPで耐える
    if (activeEffect.effect.minimumRemainingHp !== undefined) {
      nextDamage = Math.min(
        nextDamage,
        state.remainingHp - activeEffect.effect.minimumRemainingHp,
      );
    }

    if (isConsumableDamageReductionEffect(activeEffect)) {
      consumedEffectKeys.push(effectKey);
    }
  }

  return {
    damage: nextDamage,
    state: {
      ...state,
      consumedEffectKeys,
    },
  };
}

function isConsumableDamageReductionEffect(
  activeEffect: ActiveDamageReductionEffect,
): boolean {
  return "consumable" in activeEffect.effect && activeEffect.effect.consumable;
}
