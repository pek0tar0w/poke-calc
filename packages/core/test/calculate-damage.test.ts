import { describe, expect, test } from "vitest";

import type { Ability, Item, Pokemon, TypeKey } from "../src/model/index.js";
import type {
  ChampionsBattlePokemonState,
  ChampionsDamageInput,
} from "../src/calculation/index.js";
import type { DamagingMove } from "../src/model/move/index.js";

import { calculateDamage } from "../src/calculation/index.js";

const defaultBoosts = {
  attack: 0,
  defense: 0,
  specialAttack: 0,
  specialDefense: 0,
  speed: 0,
} as const;

const garchomp = createPokemon({
  key: "garchomp",
  types: ["dragon", "ground"],
  baseStats: {
    hp: 108,
    attack: 130,
    defense: 95,
    specialAttack: 80,
    specialDefense: 85,
    speed: 102,
  },
});

const corviknight = createPokemon({
  key: "corviknight",
  types: ["flying", "steel"],
  baseStats: {
    hp: 98,
    attack: 87,
    defense: 105,
    specialAttack: 53,
    specialDefense: 85,
    speed: 67,
  },
});

const mimikyu = createPokemon({
  key: "mimikyu",
  types: ["ghost", "fairy"],
  baseStats: {
    hp: 55,
    attack: 90,
    defense: 80,
    specialAttack: 50,
    specialDefense: 105,
    speed: 96,
  },
});

const toucannon = createPokemon({
  key: "toucannon",
  types: ["normal", "flying"],
  baseStats: {
    hp: 80,
    attack: 120,
    defense: 75,
    specialAttack: 75,
    specialDefense: 75,
    speed: 60,
  },
});

const primarina = createPokemon({
  key: "primarina",
  types: ["water", "fairy"],
  baseStats: {
    hp: 80,
    attack: 74,
    defense: 74,
    specialAttack: 126,
    specialDefense: 116,
    speed: 60,
  },
});

const kangaskhanMega = createPokemon({
  key: "kangaskhan-mega",
  types: ["normal"],
  baseStats: {
    hp: 105,
    attack: 125,
    defense: 100,
    specialAttack: 60,
    specialDefense: 100,
    speed: 100,
  },
});

const firePunch = createMove({
  key: "fire-punch",
  type: "fire",
  power: 75,
});

const flamethrower = createMove({
  key: "flamethrower",
  type: "fire",
  power: 90,
  damageClass: "special",
});

const bulletSeed = createMove({
  key: "bullet-seed",
  type: "grass",
  power: 25,
  hitCount: {
    kind: "multiHit",
    minimumHits: 2,
    maximumHits: 5,
  },
});

const dizzyPunch = createMove({
  key: "dizzy-punch",
  type: "normal",
  power: 70,
});

const leftovers = createItem({
  key: "leftovers",
  effects: [
    {
      effect: "recovery",
      activationTiming: "turnEnd",
      recoveryDivisor: 16,
      consumable: false,
    },
  ],
});

const sitrusBerry = createItem({
  key: "sitrus-berry",
  effects: [
    {
      effect: "recovery",
      activationTiming: "afterDamage",
      recoveryDivisor: 4,
      consumable: true,
      requirements: [
        {
          requirement: "hpRatioAtOrBelow",
          hpRatio: 0.5,
        },
      ],
    },
  ],
});

const parentalBond = createAbility({
  key: "parental-bond",
  effects: [
    {
      side: "attacker",
      effect: "additionalHit",
      hitCount: 1,
      damageMultiplier: 0.25,
    },
  ],
});

const skillLink = createAbility({
  key: "skill-link",
  effects: [
    {
      side: "attacker",
      effect: "maximizeMoveHitCount",
    },
  ],
});

// 公開APIの代表的な返り値を固定する
// UIはnormal/critical、KO結果、turnsのHP推移に依存する

describe("calculateDamage", () => {
  // 通常時と急所時のダメージ結果を取得できる
  test("returns stable normal and critical outcomes", () => {
    const result = calculateDamage(
      createChampionsInput({
        attacker: {
          pokemon: garchomp,
          statPoints: {
            hp: 0,
            attack: 32,
            defense: 0,
            specialAttack: 0,
            specialDefense: 0,
            speed: 0,
          },
        },
        defender: {
          pokemon: corviknight,
          statPoints: {
            hp: 32,
            attack: 0,
            defense: 32,
            specialAttack: 0,
            specialDefense: 0,
            speed: 0,
          },
        },
        move: firePunch,
      }),
    );

    expect(result.normal.minimumDamage).toBeLessThanOrEqual(
      result.normal.maximumDamage,
    );
    expect(result.critical.minimumDamage).toBeGreaterThan(
      result.normal.minimumDamage,
    );
    expect(result.normal.turns[0]?.steps[0]?.source.type).toBe("move");
  });

  // やけど状態では物理技だけ通常時、急所時ともにダメージが半減する
  test("halves physical damage from a burned attacker", () => {
    const physicalInput = createChampionsInput({
      attacker: {
        pokemon: garchomp,
        statPoints: {
          hp: 0,
          attack: 32,
          defense: 0,
          specialAttack: 32,
          specialDefense: 0,
          speed: 0,
        },
      },
      defender: {
        pokemon: corviknight,
        statPoints: {
          hp: 32,
          attack: 0,
          defense: 32,
          specialAttack: 0,
          specialDefense: 32,
          speed: 0,
        },
      },
      move: firePunch,
    });
    const physicalResult = calculateDamage(physicalInput);
    const burnedPhysicalResult = calculateDamage({
      ...physicalInput,
      attacker: {
        ...physicalInput.attacker,
        status: "burn",
      },
    });

    expect(burnedPhysicalResult.normal.minimumDamage).toBe(
      Math.floor(physicalResult.normal.minimumDamage / 2),
    );
    expect(burnedPhysicalResult.normal.maximumDamage).toBe(
      Math.floor(physicalResult.normal.maximumDamage / 2),
    );
    expect(burnedPhysicalResult.critical.minimumDamage).toBe(
      Math.floor(physicalResult.critical.minimumDamage / 2),
    );
    expect(burnedPhysicalResult.critical.maximumDamage).toBe(
      Math.floor(physicalResult.critical.maximumDamage / 2),
    );

    const specialInput = {
      ...physicalInput,
      move: flamethrower,
    };
    const specialResult = calculateDamage(specialInput);
    const burnedSpecialResult = calculateDamage({
      ...specialInput,
      attacker: {
        ...specialInput.attacker,
        status: "burn",
      },
    });

    expect(burnedSpecialResult.normal.minimumDamage).toBe(
      specialResult.normal.minimumDamage,
    );
    expect(burnedSpecialResult.normal.maximumDamage).toBe(
      specialResult.normal.maximumDamage,
    );
  });

  // ターン終了時の回復と定数ダメージをHP推移へ反映する
  test("includes turn-end recovery and damage effects in turns", () => {
    const result = calculateDamage(
      createChampionsInput({
        attacker: {
          pokemon: garchomp,
          statPoints: {
            hp: 0,
            attack: 32,
            defense: 0,
            specialAttack: 0,
            specialDefense: 0,
            speed: 0,
          },
        },
        defender: {
          pokemon: mimikyu,
          item: leftovers,
          status: "badPoison",
          statusState: {
            badPoisonCounter: 2,
          },
          statPoints: {
            hp: 32,
            attack: 0,
            defense: 0,
            specialAttack: 0,
            specialDefense: 0,
            speed: 0,
          },
        },
        move: firePunch,
        weather: "sandstorm",
      }),
    );

    const firstTurnSteps = result.normal.turns[0]?.steps ?? [];

    expect(firstTurnSteps.map((step) => step.source.type)).toEqual([
      "move",
      "item",
      "weather",
      "status",
    ]);
    expect(firstTurnSteps.some((step) => step.kind === "recovery")).toBe(true);
    expect(firstTurnSteps.some((step) => step.kind === "damage")).toBe(true);
  });

  // 連続技の各攻撃間でオボンのみが発動する
  test("uses selected multi-hit count and lets Sitrus Berry activate between hits", () => {
    const result = calculateDamage(
      createChampionsInput({
        attacker: {
          pokemon: toucannon,
          ability: skillLink,
          statPoints: {
            hp: 0,
            attack: 0,
            defense: 0,
            specialAttack: 0,
            specialDefense: 0,
            speed: 0,
          },
        },
        defender: {
          pokemon: primarina,
          item: sitrusBerry,
          statPoints: {
            hp: 32,
            attack: 0,
            defense: 32,
            specialAttack: 0,
            specialDefense: 0,
            speed: 0,
          },
        },
        move: bulletSeed,
      }),
    );

    const moveSteps = result.normal.turns[0]?.steps.filter(
      (step) => step.source.type === "move",
    );
    const recoverySteps = result.normal.turns[0]?.steps.filter(
      (step) => step.kind === "recovery",
    );

    expect(moveSteps).toHaveLength(5);
    expect(moveSteps?.map((step) => step.moveHit?.index)).toEqual([
      1, 2, 3, 4, 5,
    ]);
    expect(recoverySteps?.[0]?.source.key).toBe("sitrus-berry");
  });

  // 単発技におやこあいの追加攻撃を適用する
  test("adds Parental Bond second hit to single-hit moves", () => {
    const result = calculateDamage(
      createChampionsInput({
        attacker: {
          pokemon: kangaskhanMega,
          ability: parentalBond,
          statPoints: {
            hp: 0,
            attack: 32,
            defense: 0,
            specialAttack: 0,
            specialDefense: 0,
            speed: 0,
          },
        },
        defender: {
          pokemon: primarina,
          item: sitrusBerry,
          statPoints: {
            hp: 32,
            attack: 0,
            defense: 32,
            specialAttack: 0,
            specialDefense: 0,
            speed: 0,
          },
        },
        move: dizzyPunch,
      }),
    );

    const moveSteps = result.normal.turns[0]?.steps.filter(
      (step) => step.source.type === "move",
    );

    expect(moveSteps).toHaveLength(2);
    expect(moveSteps?.map((step) => step.moveHit?.index)).toEqual([1, 2]);
    expect(moveSteps?.[1]?.amount.maximum).toBeLessThan(
      moveSteps?.[0]?.amount.maximum ?? 0,
    );
  });
});

type ChampionsPokemonInput = Omit<
  Partial<ChampionsBattlePokemonState>,
  "game" | "pokemon" | "statPoints"
> &
  Pick<ChampionsBattlePokemonState, "pokemon" | "statPoints">;

function createChampionsInput({
  attacker,
  defender,
  move,
  weather = null,
}: {
  attacker: ChampionsPokemonInput;
  defender: ChampionsPokemonInput;
  move: DamagingMove;
  weather?: ChampionsDamageInput["weather"];
}): ChampionsDamageInput {
  return {
    game: "champions",
    battleType: "single",
    attacker: {
      game: "champions",
      natureKey: "serious",
      boosts: defaultBoosts,
      ...attacker,
    },
    defender: {
      game: "champions",
      natureKey: "serious",
      boosts: defaultBoosts,
      ...defender,
    },
    move,
    weather,
  };
}

function createPokemon({
  key,
  types,
  baseStats,
}: {
  key: string;
  types: Pokemon["types"];
  baseStats: Pokemon["baseStats"];
}): Pokemon {
  return {
    id: 1,
    key,
    names: {
      ja: key,
      en: key,
    },
    types,
    baseStats,
  };
}

function createMove({
  key,
  type,
  power,
  hitCount = { kind: "single" },
  damageClass = "physical",
}: {
  key: string;
  type: TypeKey;
  power: number;
  hitCount?: DamagingMove["hitCount"];
  damageClass?: DamagingMove["damageClass"];
}): DamagingMove {
  return {
    id: 1,
    key,
    names: {
      ja: key,
      en: key,
    },
    descriptions: {
      ja: "",
      en: "",
    },
    type,
    priority: 0,
    accuracy: 100,
    pp: 10,
    isMultiTarget: false,
    makesContact: true,
    moveTags: [],
    hitCount,
    category: "damaging",
    damageClass,
    power,
  };
}

function createAbility({
  key,
  effects,
}: {
  key: string;
  effects: Ability["effects"];
}): Ability {
  return {
    id: 1,
    key,
    names: {
      ja: key,
      en: key,
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects,
  };
}

function createItem({
  key,
  effects,
}: {
  key: string;
  effects: Item["effects"];
}): Item {
  return {
    id: 1,
    key,
    names: {
      ja: key,
      en: key,
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects,
    flingPower: null,
  };
}
