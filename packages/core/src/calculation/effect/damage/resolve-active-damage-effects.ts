import type {
  DamageEffect,
  StatusConditionKey,
  VolatileStatus,
} from "../../../model/index.js";
import type { ActiveDamageEffect } from "./active-damage-effect.js";

import {
  areStaticEffectRequirementsMet,
  type EffectResolutionContext,
} from "../index.js";

/** 状態異常と付加状態を計算用のHPダメージ効果へ変換する */
const STATUS_DAMAGE_EFFECTS: Partial<Record<StatusConditionKey, DamageEffect>> =
  {
    burn: {
      effect: "damage",
      activationTiming: "turnEnd",
      damageDivisor: 16,
    },
    poison: {
      effect: "damage",
      activationTiming: "turnEnd",
      damageDivisor: 8,
    },
    badPoison: {
      effect: "badPoisonDamage",
      activationTiming: "turnEnd",
      damageDivisor: 16,
    },
  };

type DamageDivisorResolver =
  number | ((context: EffectResolutionContext) => number);

type VolatileDamageEffectDefinition = {
  /** ダメージが発生するタイミング */
  activationTiming: DamageEffect["activationTiming"];

  /** 最大HPを割ってダメージ量を求める値、作品やタイプで変わる場合は関数で解決する */
  damageDivisor: DamageDivisorResolver;
};

/** 付加状態を計算用のHPダメージ効果へ変換する定義 */
const VOLATILE_DAMAGE_EFFECT_DEFINITIONS = {
  bind: {
    activationTiming: "turnEnd",
    damageDivisor: 8,
  },
  curse: {
    activationTiming: "turnEnd",
    damageDivisor: 4,
  },
  leechSeed: {
    activationTiming: "turnEnd",
    damageDivisor: 8,
  },
  saltCure: {
    activationTiming: "turnEnd",
    damageDivisor: ({ game, defender }) => {
      if (game === "scarletViolet") {
        return defender.pokemon.types.some(
          (type) => type === "water" || type === "steel",
        )
          ? 4
          : 8;
      }

      return 8;
    },
  },
} satisfies Record<VolatileStatus, VolatileDamageEffectDefinition>;

/**
 * 道具、特性、状態から、現在の固定条件で有効なダメージ効果を取得する
 *
 * 天候など計算中に変化しない条件はここで判定する
 */
export function resolveActiveDamageEffects(
  context: EffectResolutionContext,
): ActiveDamageEffect[] {
  const { defender, weather } = context;
  const { ability, item, status, volatiles } = defender;
  const effects: ActiveDamageEffect[] = [];

  // 状態異常は、計算用のHPダメージ効果へ変換する
  const statusEffect = status ? STATUS_DAMAGE_EFFECTS[status] : undefined;

  if (status && statusEffect) {
    effects.push({
      effect: statusEffect,
      source: {
        type: "condition",
        key: status,
      },
    });
  }

  // 付加状態は、作品や防御側タイプを見て計算用のHPダメージ効果へ変換する
  for (const volatile of volatiles ?? []) {
    effects.push({
      effect: createVolatileDamageEffect({
        definition: VOLATILE_DAMAGE_EFFECT_DEFINITIONS[volatile],
        context,
      }),
      source: {
        type: "condition",
        key: volatile,
      },
    });
  }

  // 道具が持つHPダメージ効果を集める
  if (item) {
    for (const effect of item.effects) {
      if (!isDamageEffect(effect)) {
        continue;
      }

      if (
        !areStaticEffectRequirementsMet({
          requirements: effect.requirements,
          weather,
        })
      ) {
        continue;
      }

      effects.push({
        effect,
        source: {
          type: "item",
          key: item.key,
        },
      });
    }
  }

  // 特性が持つHPダメージ効果を集める
  if (ability) {
    for (const effect of ability.effects) {
      if (!isDamageEffect(effect)) {
        continue;
      }

      if (
        !areStaticEffectRequirementsMet({
          requirements: effect.requirements,
          weather,
        })
      ) {
        continue;
      }

      effects.push({
        effect,
        source: {
          type: "ability",
          key: ability.key,
        },
      });
    }
  }

  return effects;
}

function isDamageEffect(effect: { effect: string }): effect is DamageEffect {
  return effect.effect === "damage" || effect.effect === "badPoisonDamage";
}

// 付加状態の定義を、KO分布計算で扱うDamageEffectへ変換する
function createVolatileDamageEffect({
  definition,
  context,
}: {
  /** 付加状態のダメージ定義 */
  definition: VolatileDamageEffectDefinition;

  /** 効果解決用コンテキスト */
  context: EffectResolutionContext;
}): DamageEffect {
  return {
    effect: "damage",
    activationTiming: definition.activationTiming,
    damageDivisor: resolveDamageDivisor({
      damageDivisor: definition.damageDivisor,
      context,
    }),
  };
}

// 分母が固定値ならそのまま使い、条件依存なら現在の計算状態から求める
function resolveDamageDivisor({
  damageDivisor,
  context,
}: {
  /** 固定値またはコンテキスト依存の分母 */
  damageDivisor: DamageDivisorResolver;

  /** 効果解決用コンテキスト */
  context: EffectResolutionContext;
}): number {
  return typeof damageDivisor === "function"
    ? damageDivisor(context)
    : damageDivisor;
}
