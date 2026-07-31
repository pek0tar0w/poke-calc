import type { TerrainKey } from "../../model/index.js";
import type { BattlePokemonState } from "../damage/index.js";
import type { TerrainState } from "./terrain-state.js";

import { isPokemonGrounded } from "./is-pokemon-grounded.js";

/** 選択中のフィールドと両ポケモンから接地状態を解決する */
export function resolveTerrainState({
  terrain,
  attacker,
  defender,
}: {
  /** 現在のフィールド、展開されていなければ省略 */
  terrain: TerrainKey | undefined;

  /** 攻撃側 */
  attacker: BattlePokemonState;

  /** 防御側 */
  defender: BattlePokemonState;
}): TerrainState | undefined {
  if (terrain === undefined) {
    return undefined;
  }

  return {
    key: terrain,
    attackerGrounded: isPokemonGrounded(attacker),
    defenderGrounded: isPokemonGrounded(defender),
  };
}
