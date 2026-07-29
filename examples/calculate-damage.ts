import {
  games,
  resolveChampionsDamageState,
} from "../packages/data/src/index.js";

import { printDamageResult } from "./console-damage-report.js";

const champions = games.champions;

const garchomp = champions.getPokemon("garchomp");
const garchompAbilities = champions.getPokemonAbilities("garchomp");
const garchompMoves = champions.getPokemonMoves("garchomp");

console.log({
  ...garchomp,
  abilities: garchompAbilities.map((ability) => ability.names),
  moves: garchompMoves.map((move) => move.names),
});

const state = resolveChampionsDamageState({
  battleType: "single",
  attacker: {
    pokemonKey: "garchomp",
    natureKey: "adamant",
    statPoints: {
      hp: 0,
      attack: 32,
      defense: 0,
      specialAttack: 0,
      specialDefense: 0,
      speed: 0,
    },
    boosts: {
      attack: 0,
      defense: 0,
      specialAttack: 0,
      specialDefense: 0,
      speed: 0,
    },
  },
  defender: {
    pokemonKey: "mimikyu",
    abilityKey: "disguise",
    natureKey: "mild",
    statPoints: {
      hp: 32,
      attack: 0,
      defense: 0,
      specialAttack: 0,
      specialDefense: 0,
      speed: 0,
    },
    boosts: {
      attack: 0,
      defense: 0,
      specialAttack: 0,
      specialDefense: 0,
      speed: 0,
    },
    status: "badPoison",
    statusState: {
      badPoisonCounter: 2,
    },
  },
  moveKey: "earthquake",
  weather: "sandstorm",
});

printDamageResult("Champions（ばけのかわ有効・すなあらし・もうどく）", state);
