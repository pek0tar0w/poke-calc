import { describe, expect, test } from "vitest";

import type { ItemEffect } from "../src/model/item/index.js";

import { applyItemStatMultiplier } from "../src/calculation/effect/index.js";

// 能力値補正道具の倍率と対象能力を確認する
describe("applyItemStatMultiplier", () => {
  test.each([
    ["attack", "attack", 150, 225],
    ["specialAttack", "specialAttack", 151, 226],
    ["defense", "defense", 125, 187],
    ["specialDefense", "specialDefense", 125, 187],
  ] as const)(
    "applies the %s item multiplier to %s",
    (effectStat, statKey, stat, expected) => {
      const effects: ItemEffect[] = [
        {
          effect: "statMultiplier",
          stat: effectStat,
          multiplier: 1.5,
          consumable: false,
        },
      ];

      expect(applyItemStatMultiplier({ stat, statKey, effects })).toBe(
        expected,
      );
    },
  );

  // 対象外の能力値は変更しない
  test("ignores multipliers for other stats", () => {
    const effects: ItemEffect[] = [
      {
        effect: "statMultiplier",
        stat: "attack",
        multiplier: 1.5,
        consumable: false,
      },
    ];

    expect(
      applyItemStatMultiplier({
        stat: 150,
        statKey: "specialAttack",
        effects,
      }),
    ).toBe(150);
  });
});
