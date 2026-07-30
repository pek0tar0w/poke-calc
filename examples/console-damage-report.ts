import type {
  DamageCalculationInput,
  DamageOutcome,
} from "../packages/core/src/calculation/damage/index.js";
import type { StatBoosts } from "../packages/core/src/calculation/stat/index.js";
import type { NatureKey } from "../packages/core/src/model/nature/index.js";
import type { PokemonStats } from "../packages/core/src/model/pokemon/index.js";

import { calculateDamage } from "../packages/core/src/calculation/damage/index.js";
import { natureNames } from "../packages/data/src/index.js";

/** ダメージ計算結果をコンソールへ表示する */
export function printDamageResult(
  game: string,
  input: DamageCalculationInput,
): void {
  const result = calculateDamage(input);

  console.log(
    `${game}: ${input.attacker.pokemon.names.ja}の${input.move.names.ja} → ${input.defender.pokemon.names.ja}`,
  );
  console.table([
    formatPokemonStats({
      side: "攻",
      name: input.attacker.pokemon.names.ja,
      stats: result.attackerStats,
      natureKey: input.attacker.natureKey,
      boosts: input.attacker.boosts,
    }),
    formatPokemonStats({
      side: "防",
      name: input.defender.pokemon.names.ja,
      stats: result.defenderStats,
      natureKey: input.defender.natureKey,
      boosts: input.defender.boosts,
    }),
  ]);
  console.table([
    formatDamageOutcome("通常", result.normal),
    formatDamageOutcome("急所", result.critical),
  ]);
  printDamageBreakdown({
    summary: result.normal,
    defenderHp: result.defenderStats.hp,
    showMoveDamageSteps: hasAdditionalHitEffect(input),
  });
}

/** ポケモンの実数値をコンソール表示用に整形する */
function formatPokemonStats(params: {
  side: "攻" | "防";
  name: string;
  stats: PokemonStats;
  natureKey: NatureKey;
  boosts: StatBoosts;
}) {
  return {
    攻防: params.side,
    ポケモン: params.name,
    性格: natureNames[params.natureKey].ja,
    ランク補正: formatStatBoosts(params.boosts),
    HP: params.stats.hp,
    攻撃: params.stats.attack,
    防御: params.stats.defense,
    特攻: params.stats.specialAttack,
    特防: params.stats.specialDefense,
    素早さ: params.stats.speed,
  };
}

/** 0以外の能力ランクを表示用文字列へ変換する */
function formatStatBoosts(boosts: StatBoosts): string {
  const entries = [
    ["攻撃", boosts.attack],
    ["防御", boosts.defense],
    ["特攻", boosts.specialAttack],
    ["特防", boosts.specialDefense],
    ["素早さ", boosts.speed],
  ] as const;

  const activeBoosts = entries
    .filter(([, boost]) => boost !== 0)
    .map(([stat, boost]) => `${stat}${boost > 0 ? "+" : ""}${boost}`);

  return activeBoosts.length > 0 ? activeBoosts.join("、") : "なし";
}

/** ダメージ計算結果をコンソール表示用に整形する */
function formatDamageOutcome(label: string, summary: DamageOutcome) {
  return {
    区分: label,
    ダメージ: `${summary.minimumDamage}〜${summary.maximumDamage}`,
    割合: `${formatPercentage(summary.minimumDamageRatio)}〜${formatPercentage(summary.maximumDamageRatio)}`,
    撃破回数: formatKnockout(summary),
  };
}

/** ダメージ割合を小数第1位までの百分率へ変換する */
function formatPercentage(ratio: number): string {
  const truncatedPercentage = Math.floor(ratio * 1000) / 10;

  return `${truncatedPercentage.toFixed(1)}%`;
}

/** 攻撃回数と撃破確率を確定または乱数表記へ変換する */
function formatKnockout(summary: DamageOutcome): string {
  if (summary.possibleHitCount === null) {
    return "倒せない";
  }

  if (summary.possibleHitCount === summary.guaranteedHitCount) {
    return `確定${summary.possibleHitCount}発`;
  }

  return `乱数${summary.possibleHitCount}発 ${(
    summary.knockoutProbability * 100
  ).toFixed(2)}%`;
}

/** HP変化内訳を画像の表示内容に合わせてテーブル出力する */
function printDamageBreakdown({
  summary,
  defenderHp,
  showMoveDamageSteps,
}: {
  summary: DamageOutcome;
  defenderHp: number;
  showMoveDamageSteps: boolean;
}): void {
  const firstTurn = summary.turns[0];

  if (firstTurn === undefined) {
    return;
  }

  const visibleSteps = firstTurn.steps
    .filter((step) => showMoveDamageSteps || step.timing !== "moveDamage")
    .map((step) =>
      formatDamageStep({
        step,
        defenderHp,
      }),
    );

  if (visibleSteps.length === 0) {
    return;
  }

  console.table(visibleSteps);
}

function hasAdditionalHitEffect(input: DamageCalculationInput): boolean {
  return (
    input.attacker.ability?.effects.some(
      (effect) => "side" in effect && effect.effect === "additionalHit",
    ) ?? false
  );
}

function formatDamageStep({
  step,
  defenderHp,
}: {
  step: DamageOutcome["turns"][number]["steps"][number];
  defenderHp: number;
}) {
  return {
    発生元: formatBreakdownSource(step),
    初期HP: formatRange(step.hpBefore.minimum, step.hpBefore.maximum),
    残りHP: formatRange(step.hpAfter.minimum, step.hpAfter.maximum),
    変化: formatStepAmount(step, defenderHp),
    発動率: formatPercentage(step.activationProbability),
    累計: formatStepTotalDamage(step, defenderHp),
    判定: formatStepKnockout(step.knockout),
  };
}

function formatStepAmount(
  step: DamageOutcome["turns"][number]["steps"][number],
  defenderHp: number,
): string {
  const label = step.kind === "recovery" ? "回復" : "ダメージ";
  const sign = step.kind === "recovery" ? "+" : "";
  const amount = `${sign}${formatRange(step.amount.minimum, step.amount.maximum)}`;
  const ratio = formatRatioRange({
    minimum: step.amount.minimum,
    maximum: step.amount.maximum,
    maximumHp: defenderHp,
  });

  return `${label} ${amount} (${ratio})`;
}

function formatStepTotalDamage(
  step: DamageOutcome["turns"][number]["steps"][number],
  defenderHp: number,
): string {
  const totalDamage = formatRange(
    step.totalDamage.minimum,
    step.totalDamage.maximum,
  );
  const ratio = formatRatioRange({
    minimum: step.totalDamage.minimum,
    maximum: step.totalDamage.maximum,
    maximumHp: defenderHp,
  });

  return `${totalDamage} (${ratio})`;
}

function formatStepKnockout(
  knockout: DamageOutcome["turns"][number]["steps"][number]["knockout"],
): string {
  if (knockout.result === "survive") {
    return "耐え";
  }

  if (knockout.result === "guaranteed") {
    return "確定";
  }

  return `乱数 ${formatPercentage(knockout.probability)}`;
}

function formatRatioRange({
  minimum,
  maximum,
  maximumHp,
}: {
  minimum: number;
  maximum: number;
  maximumHp: number;
}): string {
  const minimumRatio = formatPercentage(minimum / maximumHp);
  const maximumRatio = formatPercentage(maximum / maximumHp);

  return minimumRatio === maximumRatio
    ? minimumRatio
    : `${minimumRatio}〜${maximumRatio}`;
}

function formatBreakdownSource(
  step: DamageOutcome["turns"][number]["steps"][number],
): string {
  if (step.timing === "moveDamage" && step.moveHit !== undefined) {
    return `${step.moveHit.index}回目`;
  }

  const sourceNames: Record<string, string> = {
    badPoison: "もうどく",
    curse: "のろい",
    sandstorm: "すなあらし",
    "sitrus-berry": "オボンのみ",
  };

  return sourceNames[step.source.key] ?? step.source.key;
}

function formatRange(minimum: number, maximum: number): string {
  return minimum === maximum ? `${minimum}` : `${minimum}〜${maximum}`;
}
