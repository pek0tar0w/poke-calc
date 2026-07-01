import type { StatBoosts } from "../../core/src/calculation/stat/index.js";
import type {
  ChampionsBattlePokemon,
  PokemonStats,
  ScarletVioletBattlePokemon,
} from "../../core/src/model/pokemon/index.js";

import {
  calculateDamage,
  type ChampionsDamageState,
  type DamageSummary,
  type ScarletVioletDamageState,
} from "../../core/src/calculation/damage/index.js";
import { championsData } from "../src/champions/index.js";
import { scarletVioletData } from "../src/scarlet-violet/index.js";

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

if (!championsAttackerPokemon || !championsDefenderPokemon) {
  throw new Error("Champions Pokemon data not found");
}

if (!championsMove || championsMove.category !== "damaging") {
  throw new Error("Champions damaging move data not found: outrage");
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

if (!scarletVioletAttackerPokemon || !scarletVioletDefenderPokemon) {
  throw new Error("Scarlet/Violet Pokemon data not found");
}

if (!scarletVioletMove || scarletVioletMove.category !== "damaging") {
  throw new Error("Scarlet/Violet damaging move data not found: outrage");
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

const championsResult = calculateDamage(championsState);
const scarletVioletResult = calculateDamage(scarletVioletState);

printDamageResult("Champions", championsResult);
printDamageResult("Scarlet/Violet", scarletVioletResult);

/** ダメージ計算結果をコンソールへ表示する */
function printDamageResult(
  game: string,
  result: {
    normal: DamageSummary;
    critical: DamageSummary;
  },
): void {
  console.log(`${game}: ガブリアスのげきりん → アーマーガア`);
  console.table([
    formatDamageSummary("通常", result.normal),
    formatDamageSummary("急所", result.critical),
  ]);
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
