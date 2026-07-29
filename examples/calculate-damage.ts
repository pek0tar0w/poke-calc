import type { StatBoosts } from "../packages/core/src/calculation/stat/index.js";
import type { Ability } from "../packages/core/src/model/ability/index.js";
import type { Item } from "../packages/core/src/model/item/index.js";
import type { DamagingMove } from "../packages/core/src/model/move/index.js";
import type { NatureKey } from "../packages/core/src/model/nature/index.js";
import type {
  ChampionsBattlePokemon,
  Pokemon,
  PokemonStats,
} from "../packages/core/src/model/pokemon/index.js";

import {
  calculateDamage,
  type ChampionsDamageState,
  type DamageCalculationState,
  type DamageSummary,
} from "../packages/core/src/calculation/damage/index.js";
import { games } from "../packages/data/src/index.js";
import { natureNames } from "../packages/data/src/common/index.js";

const neutralBoosts: StatBoosts = {
  attack: 0,
  defense: 0,
  specialAttack: 0,
  specialDefense: 0,
  speed: 0,
};

const garchompConfig: ChampionsBattlePokemon = {
  game: "champions",
  pokemonKey: "garchomp",
  natureKey: "adamant",
  moveKeys: ["earthquake"],
  statPoints: {
    hp: 0,
    attack: 32,
    defense: 0,
    specialAttack: 0,
    specialDefense: 0,
    speed: 0,
  },
};

const mimikyuConfig: ChampionsBattlePokemon = {
  game: "champions",
  pokemonKey: "mimikyu",
  natureKey: "mild",
  moveKeys: [],
  statPoints: {
    hp: 32,
    attack: 0,
    defense: 0,
    specialAttack: 0,
    specialDefense: 0,
    speed: 0,
  },
};

const toucannonConfig: ChampionsBattlePokemon = {
  game: "champions",
  pokemonKey: "toucannon",
  natureKey: "hardy",
  moveKeys: ["bulletSeed"],
  statPoints: {
    hp: 0,
    attack: 0,
    defense: 0,
    specialAttack: 0,
    specialDefense: 0,
    speed: 0,
  },
};

const megaKangaskhanConfig: ChampionsBattlePokemon = {
  game: "champions",
  pokemonKey: "mega-kangaskhan",
  natureKey: "hardy",
  moveKeys: ["thunderPunch"],
  statPoints: {
    hp: 0,
    attack: 32,
    defense: 0,
    specialAttack: 0,
    specialDefense: 0,
    speed: 0,
  },
};

const primarinaConfig: ChampionsBattlePokemon = {
  game: "champions",
  pokemonKey: "primarina",
  natureKey: "hardy",
  moveKeys: [],
  statPoints: {
    hp: 32,
    attack: 0,
    defense: 32,
    specialAttack: 0,
    specialDefense: 0,
    speed: 0,
  },
};

const toucannon: Pokemon = {
  id: 733,
  key: "toucannon",
  names: {
    ja: "ドデカバシ",
    en: "Toucannon",
  },
  types: ["normal", "flying"],
  baseStats: {
    hp: 80,
    attack: 120,
    defense: 75,
    specialAttack: 75,
    specialDefense: 75,
    speed: 60,
  },
};

const megaKangaskhan: Pokemon = {
  id: 115,
  key: "mega-kangaskhan",
  names: {
    ja: "メガガルーラ",
    en: "Mega Kangaskhan",
  },
  types: ["normal"],
  baseStats: {
    hp: 105,
    attack: 125,
    defense: 100,
    specialAttack: 60,
    specialDefense: 100,
    speed: 100,
  },
};

const primarina: Pokemon = {
  id: 730,
  key: "primarina",
  names: {
    ja: "アシレーヌ",
    en: "Primarina",
  },
  types: ["water", "fairy"],
  baseStats: {
    hp: 80,
    attack: 74,
    defense: 74,
    specialAttack: 126,
    specialDefense: 116,
    speed: 60,
  },
};

const sitrusBerry: Item = {
  id: 135,
  key: "sitrus-berry",
  names: {
    ja: "オボンのみ",
    en: "Sitrus Berry",
  },
  descriptions: {
    ja: "HPが半分以下になると最大HPの1/4回復する。",
    en: "Restores 1/4 of maximum HP when HP falls to half or less.",
  },
  effects: [
    {
      effect: "recovery",
      activationTiming: "afterDamage",
      recoveryDivisor: 4,
      consumable: true,
      requirements: [
        {
          requirement: "hpRatioAtOrBelow",
          hpRatio: 0.5,
        },
      ],
    },
  ],
};

const parentalBond: Ability = {
  id: 185,
  key: "parentalBond",
  names: {
    ja: "おやこあい",
    en: "Parental Bond",
  },
  descriptions: {
    ja: "単体攻撃が2回当たり、2回目のダメージが下がる。",
    en: "Makes single-target attacks hit twice, with reduced damage on the second hit.",
  },
  effects: [
    {
      side: "attacker",
      effect: "additionalHit",
      hitCount: 1,
      damageMultiplier: 0.25,
    },
  ],
};

const skillLink: Ability = {
  id: 92,
  key: "skillLink",
  names: {
    ja: "スキルリンク",
    en: "Skill Link",
  },
  descriptions: {
    ja: "連続技が必ず最大回数命中する。",
    en: "Makes multi-hit moves always hit the maximum number of times.",
  },
  effects: [
    {
      side: "attacker",
      effect: "maximizeMoveHitCount",
    },
  ],
};

const bulletSeed: DamagingMove = {
  id: 331,
  key: "bulletSeed",
  names: {
    ja: "タネマシンガン",
    en: "Bullet Seed",
  },
  descriptions: {
    ja: "硬いタネを相手に発射して攻撃する。2～5回の間、連続でだす。",
    en: "The user forcefully shoots seeds at the target two to five times in a row.",
  },
  type: "grass",
  priority: 0,
  accuracy: 100,
  pp: 30,
  isMultiTarget: false,
  isProtectable: true,
  makesContact: false,
  moveTags: [],
  category: "damaging",
  damageClass: "physical",
  power: 25,
  hitCount: {
    kind: "multiHit",
    minimumHits: 2,
    maximumHits: 5,
  },
};

const thunderPunch: DamagingMove = {
  id: 9,
  key: "thunder-punch",
  names: {
    ja: "かみなりパンチ",
    en: "Thunder Punch",
  },
  descriptions: {
    ja: "電撃をこめたパンチで相手を攻撃する。",
    en: "The target is punched with an electrified fist.",
  },
  type: "electric",
  priority: 0,
  accuracy: 100,
  pp: 15,
  isMultiTarget: false,
  isProtectable: true,
  makesContact: true,
  moveTags: ["punch"],
  category: "damaging",
  damageClass: "physical",
  power: 75,
  hitCount: { kind: "single" },
};

const garchomp = games.champions.pokemon.get("garchomp");
const mimikyu = games.champions.pokemon.get("mimikyu");
const earthquake = games.champions.moves.get("earthquake");

if (!garchomp || !mimikyu) {
  throw new Error("Champions Pokemon data not found");
}

if (!earthquake || earthquake.category !== "damaging") {
  throw new Error("Champions damaging move data not found: earthquake");
}

const state: ChampionsDamageState = {
  game: "champions",
  battleType: "single",
  attacker: {
    config: garchompConfig,
    pokemon: garchomp,
    boosts: neutralBoosts,
  },
  defender: {
    config: mimikyuConfig,
    pokemon: mimikyu,
    boosts: neutralBoosts,
    status: "badPoison",
    statusState: {
      badPoisonCounter: 2,
    },
  },
  move: earthquake,
  weather: "sandstorm",
};

printDamageResult("Champions（ばけのかわ無効・すなあらし・もうどく）", state);

const parentalBondThunderPunchState: ChampionsDamageState = {
  game: "champions",
  battleType: "single",
  attacker: {
    config: megaKangaskhanConfig,
    pokemon: megaKangaskhan,
    ability: parentalBond,
    boosts: neutralBoosts,
  },
  defender: {
    config: primarinaConfig,
    pokemon: primarina,
    item: sitrusBerry,
    boosts: neutralBoosts,
  },
  move: thunderPunch,
  weather: null,
};

printDamageResult(
  "Champions（おやこあい・メガガルーラのかみなりパンチ）",
  parentalBondThunderPunchState,
);

const multiHitState: ChampionsDamageState = {
  game: "champions",
  battleType: "single",
  attacker: {
    config: toucannonConfig,
    pokemon: toucannon,
    ability: skillLink,
    boosts: neutralBoosts,
  },
  defender: {
    config: primarinaConfig,
    pokemon: primarina,
    item: sitrusBerry,
    boosts: neutralBoosts,
    status: "badPoison",
    statusState: {
      badPoisonCounter: 2,
    },
    volatiles: ["curse"],
  },
  move: bulletSeed,
  selectedHitCount: 5,
  weather: null,
};

printDamageResult(
  "Champions（スキルリンク・タネマシンガン5回・オボンのみ・もうどく・のろい）",
  multiHitState,
);

/** ダメージ計算結果をコンソールへ表示する */
function printDamageResult(game: string, state: DamageCalculationState): void {
  const result = calculateDamage(state);

  console.log(
    `${game}: ${state.attacker.pokemon.names.ja}の${state.move.names.ja} → ${state.defender.pokemon.names.ja}`,
  );
  console.table([
    formatPokemonStats({
      side: "攻",
      name: state.attacker.pokemon.names.ja,
      stats: result.attackerStats,
      natureKey: state.attacker.config.natureKey,
      boosts: state.attacker.boosts,
    }),
    formatPokemonStats({
      side: "防",
      name: state.defender.pokemon.names.ja,
      stats: result.defenderStats,
      natureKey: state.defender.config.natureKey,
      boosts: state.defender.boosts,
    }),
  ]);
  console.table([
    formatDamageSummary("通常", result.normal),
    formatDamageSummary("急所", result.critical),
  ]);
  printDamageBreakdown({
    summary: result.normal,
    defenderHp: result.defenderStats.hp,
    showMoveDamageSteps: hasAdditionalHitEffect(state),
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
function formatDamageSummary(label: string, summary: DamageSummary) {
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
function formatKnockout(summary: DamageSummary): string {
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
  summary: DamageSummary;
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

function hasAdditionalHitEffect(state: DamageCalculationState): boolean {
  return (
    state.attacker.ability?.effects.some(
      (effect) => "side" in effect && effect.effect === "additionalHit",
    ) ?? false
  );
}

function formatDamageStep({
  step,
  defenderHp,
}: {
  step: DamageSummary["turns"][number]["steps"][number];
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
  step: DamageSummary["turns"][number]["steps"][number],
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
  step: DamageSummary["turns"][number]["steps"][number],
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
  knockout: DamageSummary["turns"][number]["steps"][number]["knockout"],
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
  step: DamageSummary["turns"][number]["steps"][number],
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
