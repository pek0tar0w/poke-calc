import { describe, expect, test } from "vitest";

import type { Ability, Item, Pokemon } from "../src/model/index.js";
import type { ChampionsBattlePokemonState } from "../src/calculation/index.js";

import { isPokemonGrounded } from "../src/calculation/terrain/index.js";

const basePokemon = createPokemon("test-pokemon", ["normal"]);

describe("isPokemonGrounded", () => {
  // 通常のポケモンは接地している
  test("treats ordinary Pokémon as grounded", () => {
    expect(isPokemonGrounded(createState())).toBe(true);
  });

  // ひこうタイプ、ふゆう、ふうせんは接地していない
  test.each([
    { pokemon: createPokemon("flying-pokemon", ["flying"]) },
    { ability: createAbility("levitate") },
    { item: createItem("air-balloon") },
  ])("treats airborne Pokémon as ungrounded", (state) => {
    expect(isPokemonGrounded(createState(state))).toBe(false);
  });

  // ねをはる状態では、ひこうタイプでも接地する
  test("Ingrain grounds Flying-type Pokémon", () => {
    expect(
      isPokemonGrounded(
        createState({
          pokemon: createPokemon("flying-pokemon", ["flying"]),
          volatiles: ["ingrain"],
        }),
      ),
    ).toBe(true);
  });

  // くろいてっきゅうは、ひこうタイプでも接地させる
  test("Iron Ball grounds Flying-type Pokémon", () => {
    expect(
      isPokemonGrounded(
        createState({
          pokemon: createPokemon("flying-pokemon", ["flying"]),
          item: createItem("iron-ball"),
        }),
      ),
    ).toBe(true);
  });

  // 特殊な戦闘状態は通常の接地判定を上書きできる
  test("uses an explicit grounded override", () => {
    expect(
      isPokemonGrounded(
        createState({
          pokemon: createPokemon("flying-pokemon", ["flying"]),
          groundedOverride: true,
        }),
      ),
    ).toBe(true);
  });
});

function createState(
  overrides: Partial<ChampionsBattlePokemonState> = {},
): ChampionsBattlePokemonState {
  return {
    game: "champions",
    pokemon: basePokemon,
    natureKey: "serious",
    boosts: {
      attack: 0,
      defense: 0,
      specialAttack: 0,
      specialDefense: 0,
      speed: 0,
    },
    statPoints: {
      hp: 0,
      attack: 0,
      defense: 0,
      specialAttack: 0,
      specialDefense: 0,
      speed: 0,
    },
    ...overrides,
  };
}

function createPokemon(key: string, types: Pokemon["types"]): Pokemon {
  return {
    id: 1,
    key,
    names: { ja: key, en: key },
    types,
    baseStats: {
      hp: 1,
      attack: 1,
      defense: 1,
      specialAttack: 1,
      specialDefense: 1,
      speed: 1,
    },
  };
}

function createAbility(key: string): Ability {
  return {
    id: 1,
    key,
    names: { ja: key, en: key },
    descriptions: { ja: "", en: "" },
    effects: [],
  };
}

function createItem(key: string): Item {
  return {
    id: 1,
    key,
    names: { ja: key, en: key },
    descriptions: { ja: "", en: "" },
    effects: [],
    flingPower: null,
  };
}
