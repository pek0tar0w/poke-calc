import type { StatBoosts } from "../packages/core/src/calculation/stat/index.js";
import type { NatureKey } from "../packages/core/src/model/nature/index.js";
import type {
  ChampionsBattlePokemon,
  PokemonStats,
  ScarletVioletBattlePokemon,
} from "../packages/core/src/model/pokemon/index.js";

import {
  calculateDamage,
  type ChampionsDamageState,
  type DamageCalculationState,
  type DamageSummary,
  type ScarletVioletDamageState,
} from "../packages/core/src/calculation/damage/index.js";
import { championsData } from "../packages/data/src/champions/index.js";
import { natureNames } from "../packages/data/src/common/index.js";
import { scarletVioletData } from "../packages/data/src/scarlet-violet/index.js";

const maximumIndividualValues: PokemonStats = {
  hp: 31,
  attack: 31,
  defense: 31,
  specialAttack: 31,
  specialDefense: 31,
  speed: 31,
};

const neutralBoosts: StatBoosts = {
  attack: 0,
  defense: 0,
  specialAttack: 0,
  specialDefense: 0,
  speed: 0,
};

const championsAttackerConfig: ChampionsBattlePokemon = {
  game: "champions",
  pokemonKey: "garchomp",
  natureKey: "adamant",
  moveKeys: ["outrage"],
  statPoints: {
    hp: 0,
    attack: 32,
    defense: 0,
    specialAttack: 0,
    specialDefense: 0,
    speed: 0,
  },
};

const championsDefenderConfig: ChampionsBattlePokemon = {
  game: "champions",
  pokemonKey: "corviknight",
  natureKey: "bold",
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

const championsAttackerPokemon =
  championsData.pokemon[championsAttackerConfig.pokemonKey];
const championsDefenderPokemon =
  championsData.pokemon[championsDefenderConfig.pokemonKey];
const championsMove = championsData.moves.outrage;
const championsDefenderItem = championsData.items.sitrusBerry;
const championsLeftovers = championsData.items.leftovers;

if (!championsAttackerPokemon || !championsDefenderPokemon) {
  throw new Error("Champions Pokemon data not found");
}

if (!championsMove || championsMove.category !== "damaging") {
  throw new Error("Champions damaging move data not found: outrage");
}

if (!championsDefenderItem || !championsLeftovers) {
  throw new Error("Champions recovery item data not found");
}

const championsState: ChampionsDamageState = {
  game: "champions",
  attacker: {
    config: championsAttackerConfig,
    pokemon: championsAttackerPokemon,
    boosts: { ...neutralBoosts, attack: 1 },
  },
  defender: {
    config: championsDefenderConfig,
    pokemon: championsDefenderPokemon,
    boosts: { ...neutralBoosts, defense: 3 },
  },
  move: championsMove,
  weather: null,
};

const scarletVioletAttackerConfig: ScarletVioletBattlePokemon = {
  game: "scarletViolet",
  pokemonKey: "garchomp",
  natureKey: "adamant",
  moveKeys: ["outrage"],
  level: 50,
  individualValues: maximumIndividualValues,
  effortValues: {
    hp: 0,
    attack: 252,
    defense: 0,
    specialAttack: 0,
    specialDefense: 0,
    speed: 0,
  },
  teraType: "dragon",
};

const scarletVioletDefenderConfig: ScarletVioletBattlePokemon = {
  game: "scarletViolet",
  pokemonKey: "corviknight",
  natureKey: "bold",
  moveKeys: [],
  level: 50,
  individualValues: maximumIndividualValues,
  effortValues: {
    hp: 252,
    attack: 0,
    defense: 252,
    specialAttack: 0,
    specialDefense: 0,
    speed: 0,
  },
  teraType: "flying",
};

const scarletVioletAttackerPokemon =
  scarletVioletData.pokemon[scarletVioletAttackerConfig.pokemonKey];
const scarletVioletDefenderPokemon =
  scarletVioletData.pokemon[scarletVioletDefenderConfig.pokemonKey];
const scarletVioletMove = scarletVioletData.moves.outrage;
const scarletVioletDefenderItem = scarletVioletData.items.sitrusBerry;
const scarletVioletLeftovers = scarletVioletData.items.leftovers;

if (!scarletVioletAttackerPokemon || !scarletVioletDefenderPokemon) {
  throw new Error("Scarlet/Violet Pokemon data not found");
}

if (!scarletVioletMove || scarletVioletMove.category !== "damaging") {
  throw new Error("Scarlet/Violet damaging move data not found: outrage");
}

if (!scarletVioletDefenderItem || !scarletVioletLeftovers) {
  throw new Error("Scarlet/Violet recovery item data not found");
}

const scarletVioletState: ScarletVioletDamageState = {
  game: "scarletViolet",
  attacker: {
    config: scarletVioletAttackerConfig,
    pokemon: scarletVioletAttackerPokemon,
    boosts: { ...neutralBoosts, attack: 1 },
  },
  defender: {
    config: scarletVioletDefenderConfig,
    pokemon: scarletVioletDefenderPokemon,
    boosts: { ...neutralBoosts, defense: 3 },
  },
  move: scarletVioletMove,
  weather: null,
  attackerTerastallized: false,
  defenderTerastallized: false,
};

const championsSitrusBerryState: ChampionsDamageState = {
  ...championsState,
  defender: {
    ...championsState.defender,
    config: {
      ...championsDefenderConfig,
      itemKey: championsDefenderItem.key,
    },
    item: championsDefenderItem,
  },
};

const championsLeftoversState: ChampionsDamageState = {
  ...championsState,
  defender: {
    ...championsState.defender,
    config: {
      ...championsDefenderConfig,
      itemKey: championsLeftovers.key,
    },
    item: championsLeftovers,
  },
};

const scarletVioletSitrusBerryState: ScarletVioletDamageState = {
  ...scarletVioletState,
  defender: {
    ...scarletVioletState.defender,
    config: {
      ...scarletVioletDefenderConfig,
      itemKey: scarletVioletDefenderItem.key,
    },
    item: scarletVioletDefenderItem,
  },
};

const scarletVioletLeftoversState: ScarletVioletDamageState = {
  ...scarletVioletState,
  defender: {
    ...scarletVioletState.defender,
    config: {
      ...scarletVioletDefenderConfig,
      itemKey: scarletVioletLeftovers.key,
    },
    item: scarletVioletLeftovers,
  },
};

printDamageResult("Champions", championsState);
printDamageResult("Champions（オボンのみ）", championsSitrusBerryState);
printDamageResult("Champions（たべのこし）", championsLeftoversState);

printDamageResult("Scarlet/Violet", scarletVioletState);
printDamageResult(
  "Scarlet/Violet（オボンのみ）",
  scarletVioletSitrusBerryState,
);
printDamageResult("Scarlet/Violet（たべのこし）", scarletVioletLeftoversState);

/** ダメージ計算結果をコンソールへ表示する */
function printDamageResult(game: string, state: DamageCalculationState): void {
  const result = calculateDamage(state);

  console.log(`${game}: ガブリアスのげきりん → アーマーガア`);
  console.table([
    formatPokemonStats({
      side: "攻",
      name: "ガブリアス",
      stats: result.attackerStats,
      natureKey: state.attacker.config.natureKey,
      boosts: state.attacker.boosts,
    }),
    formatPokemonStats({
      side: "防",
      name: "アーマーガア",
      stats: result.defenderStats,
      natureKey: state.defender.config.natureKey,
      boosts: state.defender.boosts,
    }),
  ]);
  console.table([
    formatDamageSummary("通常", result.normal),
    formatDamageSummary("急所", result.critical),
  ]);
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
