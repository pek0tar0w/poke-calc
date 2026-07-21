import type { ActiveDamageEffect } from "../../effect/damage/index.js";
import type { ActiveDamageReductionEffect } from "../../effect/damage-reduction/index.js";
import type { ActiveRecoveryEffect } from "../../effect/recovery/active-recovery-effect.js";
import type {
  DamageStepResult,
  DamageStepSource,
  DamageTurnResult,
} from "../damage-result.js";
import type { KoDistribution, KoState } from "./ko-distribution.js";

import { applyDamageReductionEffects } from "../../effect/damage-reduction/index.js";
import {
  areRuntimeEffectRequirementsMet,
  createActiveEffectKey,
} from "../../effect/index.js";
import {
  addKoStateProbability,
  createInitialKoState,
  createKoStateKey,
} from "./ko-distribution.js";

/** 撃破回数を探索する上限 */
const MAXIMUM_HIT_COUNT = 100;

/** 浮動小数点誤差を考慮して確定とみなす許容値 */
const PROBABILITY_TOLERANCE = 1e-12;

type StepDistributionResult = {
  /** step適用後に生存している状態 */
  distribution: KoDistribution;

  /** このstepで倒れた確率 */
  knockoutProbability: number;

  /** この処理で発生したHP変化の内訳 */
  step: DamageStepResult | null;
};

/**
 * 分布を攻撃1回分ずつ更新し、追加効果込みのHP推移を作る
 *
 * 攻撃ダメージ欄の撃破回数はcreateDamageSummary側で別計算する
 * ここでは、すなあらしやもうどくなどの各行で倒れる確率を求める
 */
export function calculateKnockoutResult({
  damages,
  currentHp,
  maximumHp,
  damageReductionEffects,
  recoveryEffects,
  damageEffects,
  badPoisonCounter = 1,
}: {
  /** 乱数ごとのダメージ */
  damages: readonly number[];

  /** 計算開始時のHP */
  currentHp: number;

  /** 最大HP */
  maximumHp: number;

  /** 防御側に適用するダメージ軽減効果 */
  damageReductionEffects: readonly ActiveDamageReductionEffect[];

  /** 回復効果 */
  recoveryEffects: readonly ActiveRecoveryEffect[];

  /** HPダメージ効果 */
  damageEffects: readonly ActiveDamageEffect[];

  /** もうどくの現在カウンター */
  badPoisonCounter?: number;
}): {
  /** 初めて倒せる可能性が生じる攻撃回数 */
  possibleHitCount: number | null;

  /** 必ず倒せる攻撃回数 */
  guaranteedHitCount: number | null;

  /** 最短攻撃回数以内に倒せる確率 */
  knockoutProbability: number;

  /** 攻撃回数ごとのHP推移 */
  turns: DamageTurnResult[];
} {
  const initialState = createInitialKoState({ currentHp, badPoisonCounter });

  let distribution: KoDistribution = new Map([
    [
      createKoStateKey(initialState),
      {
        state: initialState,
        probability: 1,
      },
    ],
  ]);

  let cumulativeKnockoutProbability = 0;
  let possibleHitCount: number | null = null;
  let guaranteedHitCount: number | null = null;
  let knockoutProbability = 0;
  const turns: DamageTurnResult[] = [];

  // 生存分岐が残る限り、攻撃1回分ずつ分布を進める
  for (let hitCount = 1; hitCount <= MAXIMUM_HIT_COUNT; hitCount++) {
    const result = advanceKoDistribution({
      distribution,
      damages,
      maximumHp,
      damageReductionEffects,
      recoveryEffects,
      damageEffects,
    });

    // ひんしになった分岐は累計撃破確率へ、耐えた分岐は次の攻撃へ引き継ぐ
    distribution = result.distribution;
    cumulativeKnockoutProbability += result.knockoutProbability;

    turns.push({
      hit: hitCount,
      cumulativeKnockoutProbability,
      steps: result.steps,
    });

    if (possibleHitCount === null && cumulativeKnockoutProbability > 0) {
      possibleHitCount = hitCount;
      knockoutProbability = cumulativeKnockoutProbability;
    }

    if (cumulativeKnockoutProbability >= 1 - PROBABILITY_TOLERANCE) {
      guaranteedHitCount = hitCount;
      break;
    }
  }

  return {
    possibleHitCount,
    guaranteedHitCount,
    knockoutProbability,
    turns,
  };
}

/** 現在の生存状態を攻撃1発分だけ進める */
function advanceKoDistribution({
  distribution,
  damages,
  maximumHp,
  damageReductionEffects,
  recoveryEffects,
  damageEffects,
}: {
  /** 攻撃前の生存状態 */
  distribution: KoDistribution;

  /** 乱数ごとのダメージ */
  damages: readonly number[];

  /** 最大HP */
  maximumHp: number;

  /** 防御側に適用するダメージ軽減効果 */
  damageReductionEffects: readonly ActiveDamageReductionEffect[];

  /** 回復効果 */
  recoveryEffects: readonly ActiveRecoveryEffect[];

  /** HPダメージ効果 */
  damageEffects: readonly ActiveDamageEffect[];
}): {
  /** 次の攻撃へ引き継ぐ生存状態 */
  distribution: KoDistribution;

  /** 今回の攻撃で倒れた確率 */
  knockoutProbability: number;

  /** 今回の攻撃中に起きたHP変化 */
  steps: DamageStepResult[];
} {
  let currentDistribution = distribution;
  let knockoutProbability = 0;
  const steps: DamageStepResult[] = [];

  // 1 攻撃ダメージを適用する
  const moveDamageResult = applyMoveDamageStep({
    distribution: currentDistribution,
    damages,
    maximumHp,
    damageReductionEffects,
  });

  currentDistribution = moveDamageResult.distribution;
  knockoutProbability += moveDamageResult.knockoutProbability;
  pushStep(steps, moveDamageResult.step);

  // 2 オボンのみなど、ダメージ直後に発動する回復を適用する
  const afterDamageRecoveryResult = applyRecoverySteps({
    distribution: currentDistribution,
    maximumHp,
    activationTiming: "afterDamage",
    effects: recoveryEffects,
  });

  currentDistribution = afterDamageRecoveryResult.distribution;
  steps.push(...afterDamageRecoveryResult.steps);

  // 3 たべのこしなど、ターン終了時の回復を適用する
  const turnEndRecoveryResult = applyRecoverySteps({
    distribution: currentDistribution,
    maximumHp,
    activationTiming: "turnEnd",
    effects: recoveryEffects,
  });

  currentDistribution = turnEndRecoveryResult.distribution;
  steps.push(...turnEndRecoveryResult.steps);

  // 4 すなあらし、どく、もうどくなど、ターン終了時のHPダメージを適用する
  const turnEndDamageResult = applyDamageEffectSteps({
    distribution: currentDistribution,
    maximumHp,
    activationTiming: "turnEnd",
    effects: damageEffects,
  });

  currentDistribution = turnEndDamageResult.distribution;
  knockoutProbability += turnEndDamageResult.knockoutProbability;
  steps.push(...turnEndDamageResult.steps);

  return {
    distribution: currentDistribution,
    knockoutProbability,
    steps,
  };
}

/** 攻撃ダメージを分布へ適用する */
function applyMoveDamageStep({
  distribution,
  damages,
  maximumHp,
  damageReductionEffects,
}: {
  distribution: KoDistribution;
  damages: readonly number[];
  maximumHp: number;
  damageReductionEffects: readonly ActiveDamageReductionEffect[];
}): StepDistributionResult {
  const nextDistribution: KoDistribution = new Map();
  const appliedAmounts: number[] = [];
  let knockoutProbability = 0;

  for (const { state, probability } of distribution.values()) {
    for (const damage of damages) {
      // 各乱数ダメージは同じ確率で発生するため、現在の確率を均等に分ける
      const branchProbability = probability / damages.length;
      // ばけのかわ、マルチスケイル、がんじょうなどを攻撃ダメージへ反映する
      const reductionResult = applyDamageReductionEffects({
        damage,
        state,
        maximumHp,
        effects: damageReductionEffects,
      });
      const nextState = {
        ...reductionResult.state,
        remainingHp: reductionResult.state.remainingHp - reductionResult.damage,
      };

      appliedAmounts.push(reductionResult.damage);

      // ここで倒れた分岐は次のstepへ進めず、このstepの撃破確率に加算する
      if (nextState.remainingHp <= 0) {
        knockoutProbability += branchProbability;
        continue;
      }

      addKoStateProbability({
        distribution: nextDistribution,
        state: nextState,
        probability: branchProbability,
      });
    }
  }

  return {
    distribution: nextDistribution,
    knockoutProbability,
    step: createDamageStep({
      source: { type: "move", key: "move" },
      kind: "damage",
      timing: "moveDamage",
      beforeDistribution: distribution,
      afterDistribution: nextDistribution,
      amounts: appliedAmounts,
      knockoutProbability,
      maximumHp,
    }),
  };
}

/** 指定タイミングの回復効果を順番に分布へ適用する */
function applyRecoverySteps({
  distribution,
  maximumHp,
  activationTiming,
  effects,
}: {
  distribution: KoDistribution;
  maximumHp: number;
  activationTiming: ActiveRecoveryEffect["effect"]["activationTiming"];
  effects: readonly ActiveRecoveryEffect[];
}): {
  distribution: KoDistribution;
  steps: DamageStepResult[];
} {
  let currentDistribution = distribution;
  const steps: DamageStepResult[] = [];

  for (const activeEffect of effects) {
    if (activeEffect.effect.activationTiming !== activationTiming) {
      continue;
    }

    const result = applyRecoveryStep({
      distribution: currentDistribution,
      maximumHp,
      activeEffect,
    });

    currentDistribution = result.distribution;
    pushStep(steps, result.step);
  }

  return {
    distribution: currentDistribution,
    steps,
  };
}

/** 1つの回復効果を分布へ適用する */
function applyRecoveryStep({
  distribution,
  maximumHp,
  activeEffect,
}: {
  distribution: KoDistribution;
  maximumHp: number;
  activeEffect: ActiveRecoveryEffect;
}): StepDistributionResult {
  const nextDistribution: KoDistribution = new Map();
  const appliedAmounts: number[] = [];

  for (const { state, probability } of distribution.values()) {
    const effectKey = createActiveEffectKey({
      source: activeEffect.source,
      effect: activeEffect.effect.effect,
    });

    // 消費済みの回復効果は同じ分岐では再発動させない
    if (
      isConsumableRecoveryEffect(activeEffect) &&
      state.consumedEffectKeys.includes(effectKey)
    ) {
      addKoStateProbability({
        distribution: nextDistribution,
        state,
        probability,
      });
      continue;
    }

    // HP条件などを満たさない分岐は、そのまま次へ引き継ぐ
    if (
      !areRuntimeEffectRequirementsMet({
        requirements: activeEffect.effect.requirements,
        remainingHp: state.remainingHp,
        maximumHp,
      })
    ) {
      addKoStateProbability({
        distribution: nextDistribution,
        state,
        probability,
      });
      continue;
    }

    // 回復量は効果ごとに小数点以下を切り捨てる
    const recoveryAmount = Math.floor(
      maximumHp / activeEffect.effect.recoveryDivisor,
    );
    const remainingHp = Math.min(maximumHp, state.remainingHp + recoveryAmount);
    const consumedEffectKeys = isConsumableRecoveryEffect(activeEffect)
      ? [...state.consumedEffectKeys, effectKey]
      : state.consumedEffectKeys;
    const nextState = {
      ...state,
      remainingHp,
      consumedEffectKeys,
    };

    appliedAmounts.push(remainingHp - state.remainingHp);

    addKoStateProbability({
      distribution: nextDistribution,
      state: nextState,
      probability,
    });
  }

  return {
    distribution: nextDistribution,
    knockoutProbability: 0,
    step:
      appliedAmounts.length === 0
        ? null
        : createDamageStep({
            source: activeEffect.source,
            kind: "recovery",
            timing: activeEffect.effect.activationTiming,
            beforeDistribution: distribution,
            afterDistribution: nextDistribution,
            amounts: appliedAmounts,
            knockoutProbability: 0,
            maximumHp,
          }),
  };
}

/** 指定タイミングのHPダメージ効果を順番に分布へ適用する */
function applyDamageEffectSteps({
  distribution,
  maximumHp,
  activationTiming,
  effects,
}: {
  distribution: KoDistribution;
  maximumHp: number;
  activationTiming: ActiveDamageEffect["effect"]["activationTiming"];
  effects: readonly ActiveDamageEffect[];
}): {
  distribution: KoDistribution;
  knockoutProbability: number;
  steps: DamageStepResult[];
} {
  let currentDistribution = distribution;
  let knockoutProbability = 0;
  const steps: DamageStepResult[] = [];

  for (const activeEffect of effects) {
    if (activeEffect.effect.activationTiming !== activationTiming) {
      continue;
    }

    const result = applyDamageEffectStep({
      distribution: currentDistribution,
      maximumHp,
      activeEffect,
    });

    currentDistribution = result.distribution;
    knockoutProbability += result.knockoutProbability;
    pushStep(steps, result.step);
  }

  return {
    distribution: currentDistribution,
    knockoutProbability,
    steps,
  };
}

/** 1つのHPダメージ効果を分布へ適用する */
function applyDamageEffectStep({
  distribution,
  maximumHp,
  activeEffect,
}: {
  distribution: KoDistribution;
  maximumHp: number;
  activeEffect: ActiveDamageEffect;
}): StepDistributionResult {
  const nextDistribution: KoDistribution = new Map();
  const appliedAmounts: number[] = [];
  let knockoutProbability = 0;

  for (const { state, probability } of distribution.values()) {
    if (
      !areRuntimeEffectRequirementsMet({
        requirements: activeEffect.effect.requirements,
        remainingHp: state.remainingHp,
        maximumHp,
      })
    ) {
      addKoStateProbability({
        distribution: nextDistribution,
        state,
        probability,
      });
      continue;
    }

    // どく、すなあらし、もうどくなどの定数ダメージ量を求める
    const damage = calculateDamageEffectAmount({
      state,
      maximumHp,
      activeEffect,
    });
    const nextState = {
      ...state,
      remainingHp: state.remainingHp - damage,
      badPoisonCounter:
        activeEffect.effect.effect === "badPoisonDamage"
          ? state.badPoisonCounter + 1
          : state.badPoisonCounter,
    };

    appliedAmounts.push(damage);

    if (nextState.remainingHp <= 0) {
      knockoutProbability += probability;
      continue;
    }

    addKoStateProbability({
      distribution: nextDistribution,
      state: nextState,
      probability,
    });
  }

  return {
    distribution: nextDistribution,
    knockoutProbability,
    step:
      appliedAmounts.length === 0
        ? null
        : createDamageStep({
            source: activeEffect.source,
            kind: "damage",
            timing: activeEffect.effect.activationTiming,
            beforeDistribution: distribution,
            afterDistribution: nextDistribution,
            amounts: appliedAmounts,
            knockoutProbability,
            maximumHp,
          }),
  };
}

/** 分布の前後からHP変化の内訳を作る */
function createDamageStep({
  source,
  kind,
  timing,
  beforeDistribution,
  afterDistribution,
  amounts,
  knockoutProbability,
  maximumHp,
}: {
  source: DamageStepSource;
  kind: DamageStepResult["kind"];
  timing: DamageStepResult["timing"];
  beforeDistribution: KoDistribution;
  afterDistribution: KoDistribution;
  amounts: readonly number[];
  knockoutProbability: number;
  maximumHp: number;
}): DamageStepResult {
  // 分布に含まれる生存分岐から、HP範囲を作る
  const hpBefore = getHpRange(beforeDistribution);
  const hpAfter = getHpRangeAfterStep({
    distribution: afterDistribution,
    knockoutProbability,
  });
  const amount = getNumberRange(amounts);

  return {
    source,
    kind,
    timing,
    hpBefore,
    amount,
    hpAfter,
    // 実質累計ダメージは「最大HP - 残りHP」で表す
    totalDamage: {
      minimum: maximumHp - hpAfter.maximum,
      maximum: maximumHp - hpAfter.minimum,
    },
    knockout: createStepKnockout({
      afterDistribution,
      knockoutProbability,
    }),
  };
}

/** step内で倒れる確率から、耐え・乱数・確定の判定を作る */
function createStepKnockout({
  afterDistribution,
  knockoutProbability,
}: {
  afterDistribution: KoDistribution;
  knockoutProbability: number;
}): DamageStepResult["knockout"] {
  if (knockoutProbability <= 0) {
    return { result: "survive" };
  }

  if (afterDistribution.size === 0) {
    return { result: "guaranteed" };
  }

  return {
    result: "possible",
    probability: knockoutProbability,
  };
}

/** HPダメージ効果のダメージ量を計算する */
function calculateDamageEffectAmount({
  state,
  maximumHp,
  activeEffect,
}: {
  state: KoState;
  maximumHp: number;
  activeEffect: ActiveDamageEffect;
}): number {
  if (activeEffect.effect.effect === "badPoisonDamage") {
    return Math.floor(
      (maximumHp * state.badPoisonCounter) / activeEffect.effect.damageDivisor,
    );
  }

  return Math.floor(maximumHp / activeEffect.effect.damageDivisor);
}

/** 撃破分岐がある場合は、残りHP範囲に0を含める */
function getHpRangeAfterStep({
  distribution,
  knockoutProbability,
}: {
  distribution: KoDistribution;
  knockoutProbability: number;
}): {
  minimum: number;
  maximum: number;
} {
  const hpRange = getHpRange(distribution);

  if (knockoutProbability <= 0) {
    return hpRange;
  }

  return {
    minimum: 0,
    maximum: hpRange.maximum,
  };
}

/** 生存分岐の残りHP幅を取得する */
function getHpRange(distribution: KoDistribution): {
  minimum: number;
  maximum: number;
} {
  const values = [...distribution.values()].map(
    ({ state }) => state.remainingHp,
  );

  if (values.length === 0) {
    return {
      minimum: 0,
      maximum: 0,
    };
  }

  return getNumberRange(values);
}

function getNumberRange(values: readonly number[]): {
  minimum: number;
  maximum: number;
} {
  return {
    minimum: Math.min(...values),
    maximum: Math.max(...values),
  };
}

function pushStep(steps: DamageStepResult[], step: DamageStepResult | null) {
  if (step !== null) {
    steps.push(step);
  }
}

function isConsumableRecoveryEffect(
  activeEffect: ActiveRecoveryEffect,
): boolean {
  return "consumable" in activeEffect.effect && activeEffect.effect.consumable;
}
