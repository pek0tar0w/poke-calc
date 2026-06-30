import type { LanguageCode, StatKey } from "../../common/index.js";
import type { TypeKey } from "../type/index.js";

export type PokemonStats = Record<StatKey, number>;

export type Pokemon = {
  /** PokeAPI pokemon.id */
  id: number;
  key: string;
  names: Record<LanguageCode, string>;
  types: [TypeKey] | [TypeKey, TypeKey];
  baseStats: PokemonStats;
};
