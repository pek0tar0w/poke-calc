import { describe, expect, test } from "vitest";

import type { ItemEffect } from "../src/model/item/index.js";
import type { DamagingMove } from "../src/model/move/index.js";
import type { TypeKey } from "../src/model/type/index.js";

import { applyItemDamageMultiplier } from "../src/calculation/effect/index.js";
import {
  createTypeBoostEffects,
  expertBeltEffects,
  lifeOrbEffects,
  muscleBandEffects,
} from "../src/effect/index.js";

const physicalMove = createMove();

describe("applyItemDamageMultiplier", () => {
  // 条件のない与ダメージ倍率を適用する
  test("applies an unconditional multiplier", () => {
    expect(
      applyMultiplier({
        effects: lifeOrbEffects,
      }),
    ).toBe(130);
  });

  // 指定したタイプの技にだけ倍率を適用する
  test("checks the move type requirement", () => {
    const effects = createTypeBoostEffects("steel");

    expect(applyMultiplier({ effects, moveType: "steel" })).toBe(120);
    expect(applyMultiplier({ effects, moveType: "fire" })).toBe(100);
  });

  // 指定した技分類にだけ倍率を適用する
  test("checks the damage class requirement", () => {
    const effects = muscleBandEffects;

    expect(applyMultiplier({ effects })).toBe(110);
    expect(
      applyMultiplier({
        effects,
        move: createMove({ damageClass: "special" }),
      }),
    ).toBe(100);
  });

  // 効果ばつぐんのときだけ倍率を適用する
  test("checks the super effective requirement", () => {
    const effects = expertBeltEffects;

    expect(
      applyMultiplier({
        effects,
        moveType: "electric",
        defenderTypes: ["water"],
      }),
    ).toBe(120);
    expect(
      applyMultiplier({
        effects,
        moveType: "electric",
        defenderTypes: ["ground"],
      }),
    ).toBe(100);
  });
});

function applyMultiplier({
  effects,
  move = physicalMove,
  moveType = move.type,
  defenderTypes = ["normal"],
}: {
  effects: readonly ItemEffect[];
  move?: DamagingMove;
  moveType?: TypeKey;
  defenderTypes?: readonly TypeKey[];
}): number {
  return applyItemDamageMultiplier({
    damage: 100,
    effects,
    move: {
      ...move,
      type: moveType,
    },
    defenderTypes,
    weather: undefined,
  });
}

function createMove({
  damageClass = "physical",
}: {
  damageClass?: DamagingMove["damageClass"];
} = {}): DamagingMove {
  return {
    id: 1,
    key: "test-move",
    names: { ja: "テスト技", en: "Test Move" },
    descriptions: { ja: "", en: "" },
    type: "normal",
    priority: 0,
    accuracy: 100,
    pp: 10,
    isMultiTarget: false,
    makesContact: false,
    moveTags: [],
    hitCount: { kind: "single" },
    category: "damaging",
    damageClass,
    power: 75,
  };
}
