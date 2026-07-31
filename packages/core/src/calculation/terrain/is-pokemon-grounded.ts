import type { BattlePokemonState } from "../damage/index.js";

/** ポケモンのタイプ、特性、道具、上書き状態から接地状態を判定する */
export function isPokemonGrounded(pokemon: BattlePokemonState): boolean {
  // うちおとす、ねをはる、じゅうりょくなど、通常判定より優先する状態
  if (pokemon.groundedOverride !== undefined) {
    return pokemon.groundedOverride;
  }

  // ねをはる状態のポケモンは接地している
  if (pokemon.volatiles?.includes("ingrain")) {
    return true;
  }

  // くろいてっきゅうは、ひこうタイプやふゆうを持つポケモンも接地させる
  if (pokemon.item?.key === "iron-ball") {
    return true;
  }

  if (pokemon.pokemon.types.includes("flying")) {
    return false;
  }

  if (pokemon.ability?.key === "levitate") {
    return false;
  }

  if (pokemon.item?.key === "air-balloon") {
    return false;
  }

  return true;
}
