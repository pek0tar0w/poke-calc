import type { ActiveEffectSource } from "../effect/index.js";
import type { PokemonStats } from "../../model/index.js";

/** HP変化の発生元 */
export type DamageStepSource =
  | ActiveEffectSource
  | {
      /** 技ダメージ由来 */
      type: "move";
      key: string;
    };

/** そのstepで倒れるか */
export type DamageStepKnockout =
  | {
      /** このstepでは倒れない */
      result: "survive";
    }
  | {
      /** このstepで倒れる可能性がある */
      result: "possible";

      /** このstepで倒れる確率（0〜1） */
      probability: number;
    }
  | {
      /** このstepで必ず倒れる */
      result: "guaranteed";
    };

/** HP幅 */
export type DamageHpRange = {
  /** 最小値 */
  minimum: number;

  /** 最大値 */
  maximum: number;
};

/** HP変化の1行分 */
export type DamageStepResult = {
  /** HP変化の発生元 */
  source: DamageStepSource;

  /** HP変化の種類 */
  kind: "damage" | "recovery";

  /** HP変化が発生するタイミング */
  timing: "moveDamage" | "afterDamage" | "turnEnd";

  /** 適用前の残りHP幅 */
  hpBefore: DamageHpRange;

  /** HP変化量 */
  amount: DamageHpRange;

  /** 適用後の残りHP幅 */
  hpAfter: DamageHpRange;

  /** その時点までの実質累計ダメージ */
  totalDamage: DamageHpRange;

  /** このstepで倒れるか */
  knockout: DamageStepKnockout;
};

/** 攻撃1回分のHP推移 */
export type DamageTurnResult = {
  /** 何発目か */
  hit: number;

  /** この攻撃回数終了時点の累計撃破確率（0〜1） */
  cumulativeKnockoutProbability: number;

  /** その攻撃回数中に起きるHP変化 */
  steps: readonly DamageStepResult[];
};

/** 1種類のダメージ計算結果 */
export type DamageSummary = {
  /** 16段階の乱数ごとのダメージ */
  damages: readonly number[];

  /** 最低ダメージ */
  minimumDamage: number;

  /** 最高ダメージ */
  maximumDamage: number;

  /** 防御側の最大HPに対する最低ダメージ割合 */
  minimumDamageRatio: number;

  /** 防御側の最大HPに対する最高ダメージ割合 */
  maximumDamageRatio: number;

  /** 最高乱数が続いた場合に倒せる最小攻撃回数、倒せない場合はnull */
  possibleHitCount: number | null;

  /** 最低乱数が続いた場合でも倒せる攻撃回数、倒せない場合はnull */
  guaranteedHitCount: number | null;

  /** 最小攻撃回数以内に倒せる確率（0〜1） */
  knockoutProbability: number;

  /** 攻撃回数ごとのHP推移 */
  turns: readonly DamageTurnResult[];
};

/** 通常時と急所時を含むダメージ計算結果 */
export type DamageResult = {
  /** 攻撃側の性格補正適用後の実数値 */
  attackerStats: PokemonStats;

  /** 防御側の性格補正適用後の実数値 */
  defenderStats: PokemonStats;

  /** 通常時 */
  normal: DamageSummary;

  /** 急所時 */
  critical: DamageSummary;
};
