import type { GameId } from "../../common/index.js";
import type { NatureKey } from "../nature/index.js";
import type { TeraType } from "../terastal/index.js";
import type { PokemonStats } from "./pokemon.js";

type BattlePokemonBase = {
  pokemonKey: string;
  natureKey: NatureKey;
  abilityKey?: string;
  itemKey?: string;
  moveKeys: string[];
};

export type ScarletVioletBattlePokemon = BattlePokemonBase & {
  game: Extract<GameId, "scarletViolet">;
  level: number;
  individualValues: PokemonStats;
  effortValues: PokemonStats;
  teraType: TeraType;
};

export type ChampionsBattlePokemon = BattlePokemonBase & {
  game: Extract<GameId, "champions">;
  statPoints: PokemonStats;
};

export type BattlePokemon = ScarletVioletBattlePokemon | ChampionsBattlePokemon;
