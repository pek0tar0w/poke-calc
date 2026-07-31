import { describe, expect, test } from "vitest";

import type { TerrainState } from "../src/calculation/index.js";

import { applyTerrainPowerModifier } from "../src/calculation/terrain/index.js";

const groundedTerrain = (key: TerrainState["key"]): TerrainState => ({
  key,
  attackerGrounded: true,
  defenderGrounded: true,
});

describe("applyTerrainPowerModifier", () => {
  // 接地した攻撃側が対応タイプの技を使うと威力を1.3倍にする
  test.each([
    ["electric", "electric"],
    ["grassy", "grass"],
    ["psychic", "psychic"],
  ] as const)("boosts %s terrain moves", (terrainKey, moveType) => {
    expect(
      applyTerrainPowerModifier({
        power: 75,
        moveKey: "test-move",
        moveType,
        terrain: groundedTerrain(terrainKey),
      }),
    ).toBe(97);
  });

  // 攻撃側が接地していなければタイプ一致のフィールドでも補正しない
  test("does not boost moves used by an ungrounded attacker", () => {
    expect(
      applyTerrainPowerModifier({
        power: 75,
        moveKey: "test-move",
        moveType: "electric",
        terrain: {
          key: "electric",
          attackerGrounded: false,
          defenderGrounded: true,
        },
      }),
    ).toBe(75);
  });

  // ミストフィールドでは接地した防御側へのドラゴン技を半減する
  test("reduces Dragon move power in Misty Terrain", () => {
    expect(
      applyTerrainPowerModifier({
        power: 80,
        moveKey: "dragon-claw",
        moveType: "dragon",
        terrain: groundedTerrain("misty"),
      }),
    ).toBe(40);
  });

  // グラスフィールドでは接地した防御側へのじしん・じならしを半減する
  test.each(["earthquake", "bulldoze"])(
    "reduces %s power in Grassy Terrain",
    (moveKey) => {
      expect(
        applyTerrainPowerModifier({
          power: 100,
          moveKey,
          moveType: "ground",
          terrain: groundedTerrain("grassy"),
        }),
      ).toBe(50);
    },
  );
});
