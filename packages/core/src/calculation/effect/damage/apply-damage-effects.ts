import type { DamageEffect } from "../../../model/index.js";
import type { ActiveDamageEffect } from "./active-damage-effect.js";

import { areRuntimeEffectRequirementsMet } from "../index.js";

/** ダメージ効果の適用前状態 */
export type DamageEffectState = {
  /** 残りHP */
  remainingHp: number;

  /** もうどくの現在カウンター、5なら次のもうどくダメージは5/16 */
  badPoisonCounter: number;
};

/** 指定したタイミングで発動可能なダメージ効果を適用する */
export function applyDamageEffects({
  state,
  maximumHp,
  activationTiming,
  effects,
}: {
  /** 適用前の状態 */
  state: DamageEffectState;

  /** 最大HP */
  maximumHp: number;

  /** 今回処理する発動タイミング */
  activationTiming: DamageEffect["activationTiming"];

  /** 適用候補のダメージ効果 */
  effects: readonly ActiveDamageEffect[];
}): DamageEffectState {
  let remainingHp = state.remainingHp;
  let badPoisonCounter = state.badPoisonCounter;

  for (const activeEffect of effects) {
    const { effect } = activeEffect;

    // 発動タイミングが異なる効果は処理しない
    if (effect.activationTiming !== activationTiming) {
      continue;
    }

    // 現在HPなど、計算中に変化する条件を満たしていなければ処理しない
    if (
      !areRuntimeEffectRequirementsMet({
        requirements: effect.requirements,
        remainingHp,
        maximumHp,
      })
    ) {
      continue;
    }

    if (effect.effect === "damage") {
      // 固定割合ダメージは効果ごとに小数点以下を切り捨てる
      remainingHp -= Math.floor(maximumHp / effect.damageDivisor);
      continue;
    }

    if (effect.effect === "badPoisonDamage") {
      // もうどくは現在カウンターに応じて n/16 ダメージになる
      remainingHp -= Math.floor(
        (maximumHp * badPoisonCounter) / effect.damageDivisor,
      );

      // 次のターン終了時は 1/16 分だけ増える
      badPoisonCounter += 1;
    }
  }

  return {
    remainingHp,
    badPoisonCounter,
  };
}
