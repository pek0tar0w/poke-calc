import { describe, expect, test } from "vitest";

import { applyItemStatMultiplier } from "../src/calculation/effect/index.js";
import {
  assaultVestEffects,
  choiceBandEffects,
  choiceSpecsEffects,
  evioliteEffects,
} from "../src/effect/index.js";

// 能力値補正道具の倍率と対象能力を確認する
describe("applyItemStatMultiplier", () => {
  test.each([
    [choiceBandEffects, "attack", 150, 225],
    [choiceSpecsEffects, "specialAttack", 151, 226],
    [evioliteEffects, "defense", 125, 187],
    [assaultVestEffects, "specialDefense", 125, 187],
  ] as const)(
    "applies an item multiplier to %s",
    (effects, statKey, stat, expected) => {
      expect(applyItemStatMultiplier({ stat, statKey, effects })).toBe(
        expected,
      );
    },
  );

  // 対象外の能力値は変更しない
  test("ignores multipliers for other stats", () => {
    expect(
      applyItemStatMultiplier({
        stat: 150,
        statKey: "specialAttack",
        effects: choiceBandEffects,
      }),
    ).toBe(150);
  });
});
