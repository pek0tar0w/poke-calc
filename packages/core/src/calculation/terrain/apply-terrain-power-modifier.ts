import type { TypeKey } from "../../model/index.js";
import type { TerrainState } from "./terrain-state.js";

import { roundHalfDown } from "../utils/round-half-down.js";

/** グラスフィールドで威力が半減する技 */
const GRASSY_TERRAIN_REDUCED_MOVE_KEYS = new Set(["bulldoze", "earthquake"]);

/** 第8世代以降のフィールドによる威力上昇倍率 */
const TERRAIN_POWER_MULTIPLIER = 1.3;

/** フィールドによる威力減少倍率 */
const TERRAIN_POWER_REDUCTION_MULTIPLIER = 0.5;

/** フィールドと接地状態に応じて技の威力を補正する */
export function applyTerrainPowerModifier({
  power,
  moveKey,
  moveType,
  terrain,
}: {
  /** 補正前の威力 */
  power: number;

  /** 技のキー */
  moveKey: string;

  /** 解決済みの技タイプ */
  moveType: TypeKey;

  /** 現在のフィールドと接地状態 */
  terrain?: TerrainState;
}): number {
  if (!terrain) {
    return power;
  }

  if (
    terrain.attackerGrounded &&
    ((terrain.key === "electric" && moveType === "electric") ||
      (terrain.key === "grassy" && moveType === "grass") ||
      (terrain.key === "psychic" && moveType === "psychic"))
  ) {
    return roundHalfDown(power * TERRAIN_POWER_MULTIPLIER);
  }

  if (
    terrain.defenderGrounded &&
    ((terrain.key === "misty" && moveType === "dragon") ||
      (terrain.key === "grassy" &&
        GRASSY_TERRAIN_REDUCED_MOVE_KEYS.has(moveKey)))
  ) {
    return roundHalfDown(power * TERRAIN_POWER_REDUCTION_MULTIPLIER);
  }

  return power;
}
