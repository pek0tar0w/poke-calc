import type { StatBoosts } from "../packages/core/src/calculation/stat/index.js";
import type { NatureKey } from "../packages/core/src/model/nature/index.js";
import type {
  ChampionsBattlePokemon,
  PokemonStats,
} from "../packages/core/src/model/pokemon/index.js";

import {
  calculateDamage,
  type ChampionsDamageState,
  type DamageCalculationState,
  type DamageSummary,
} from "../packages/core/src/calculation/damage/index.js";
import { championsData } from "../packages/data/src/champions/index.js";
import { natureNames } from "../packages/data/src/common/index.js";
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

const glalieConfig: ChampionsBattlePokemon = {
  game: "champions",
  pokemonKey: "glalie",
  natureKey: "bold",
  moveKeys: [],
  statPoints: {
    hp: 32,
    attack: 0,
    defense: 32,
    specialAttack: 0,
    specialDefense: 32,
    speed: 0,
  },
};

const dragoniteConfig: ChampionsBattlePokemon = {
  ...glalieConfig,
  pokemonKey: "dragonite",
};

const mimikyuConfig: ChampionsBattlePokemon = {
  ...glalieConfig,
  pokemonKey: "mimikyu",
};

const championsAttackerPokemon =
  championsData.pokemon[championsAttackerConfig.pokemonKey];
const glalie = championsData.pokemon[glalieConfig.pokemonKey];
const dragonite = championsData.pokemon[dragoniteConfig.pokemonKey];
const mimikyu = championsData.pokemon[mimikyuConfig.pokemonKey];
const championsMove = championsData.moves.outrage;
const championsDisguiseMove = championsData.moves.earthquake;
const championsDefenderMultiscale = championsData.abilities.multiscale;
const championsDefenderSturdy = championsData.abilities.sturdy;
const championsDefenderDisguise = championsData.abilities.disguise;
const championsDefenderLeftovers = championsData.items.leftovers;

if (!championsAttackerPokemon || !glalie || !dragonite || !mimikyu) {
  throw new Error("Champions Pokemon data not found");
}

if (!championsMove || championsMove.category !== "damaging") {
  throw new Error("Champions damaging move data not found: outrage");
}

if (!championsDisguiseMove || championsDisguiseMove.category !== "damaging") {
  throw new Error("Champions damaging move data not found: earthquake");
}

if (
  !championsDefenderMultiscale ||
  !championsDefenderSturdy ||
  !championsDefenderDisguise ||
  !championsDefenderLeftovers
) {
  throw new Error("Champions damage reduction ability data not found");
}

const championsState: ChampionsDamageState = {
  game: "champions",
  attacker: {
    config: championsAttackerConfig,
    pokemon: championsAttackerPokemon,
    boosts: { ...neutralBoosts, attack: 1 },
  },
  defender: {
    config: glalieConfig,
    pokemon: glalie,
    boosts: { ...neutralBoosts, defense: 3, specialDefense: 3 },
  },
  move: championsMove,
  weather: null,
};

const championsMultiscaleState: ChampionsDamageState = {
  ...championsState,
  defender: {
    ...championsState.defender,
    config: {
      ...dragoniteConfig,
      abilityKey: championsDefenderMultiscale.key,
    },
    pokemon: dragonite,
    ability: championsDefenderMultiscale,
  },
};

const championsDisguiseState: ChampionsDamageState = {
  ...championsState,
  defender: {
    ...championsState.defender,
    config: {
      ...mimikyuConfig,
      abilityKey: championsDefenderDisguise.key,
      itemKey: championsDefenderLeftovers.key,
    },
    pokemon: mimikyu,
    ability: championsDefenderDisguise,
    item: championsDefenderLeftovers,
  },
  move: championsDisguiseMove,
};

const championsSturdyState: ChampionsDamageState = {
  ...championsState,
  defender: {
    ...championsState.defender,
    config: {
      ...glalieConfig,
      abilityKey: championsDefenderSturdy.key,
    },
    ability: championsDefenderSturdy,
  },
};

printDamageResult("Champions（軽減なし）", championsState);
printDamageResult("Champions（マルチスケイル）", championsMultiscaleState);
printDamageResult("Champions（がんじょう）", championsSturdyState);
printDamageResult(
  "Champions（ばけのかわ・たべのこし）",
  championsDisguiseState,
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
