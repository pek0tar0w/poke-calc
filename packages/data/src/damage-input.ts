import type {
  BattleType,
  ChampionsBattlePokemonState,
  ChampionsDamageInput,
  DamagingMove,
  NatureKey,
  PokemonStats,
  ScreenKey,
  ScarletVioletBattlePokemonState,
  ScarletVioletDamageInput,
  StatBoosts,
  StatusConditionKey,
  TerrainKey,
  VolatileStatus,
  WeatherKey,
} from "@poke-calc/core";

import { championsGameData } from "./champions/game-data.js";
import { champions, scarletViolet } from "./games.js";
import { scarletVioletGameData } from "./scarlet-violet/game-data.js";

type StringKeyOf<T> = Extract<keyof T, string>;

type ChampionsPokemonKey = StringKeyOf<typeof championsGameData.pokemon>;
type ChampionsMoveKey = StringKeyOf<typeof championsGameData.moves>;
type ChampionsAbilityKey = StringKeyOf<typeof championsGameData.abilities>;
type ChampionsItemKey = StringKeyOf<typeof championsGameData.items>;

type ScarletVioletPokemonKey = StringKeyOf<
  typeof scarletVioletGameData.pokemon
>;
type ScarletVioletMoveKey = StringKeyOf<typeof scarletVioletGameData.moves>;
type ScarletVioletAbilityKey = StringKeyOf<
  typeof scarletVioletGameData.abilities
>;
type ScarletVioletItemKey = StringKeyOf<typeof scarletVioletGameData.items>;

type BattlePokemonStateInput<TPokemonKey, TAbilityKey, TItemKey> = {
  /** ポケモンのキー */
  pokemonKey: TPokemonKey;

  /** 性格のキー */
  natureKey: NatureKey;

  /** 選択する特性のキー */
  abilityKey?: TAbilityKey;

  /** 選択する道具のキー */
  itemKey?: TItemKey;

  /** 戦闘中の能力ランク */
  boosts: StatBoosts;

  /** 状態異常 */
  status?: StatusConditionKey;

  /** 状態異常の計算用状態 */
  statusState?: {
    /** もうどくの現在カウンター、2なら次のもうどくダメージは2/16 */
    badPoisonCounter?: number;
  };

  /** 通常の状態異常とは別枠で付与される状態 */
  volatiles?: readonly VolatileStatus[];

  /** 通常の接地判定を上書きする特殊状態、通常は指定しない */
  groundedOverride?: boolean;
};

type ChampionsBattlePokemonStateInput = BattlePokemonStateInput<
  ChampionsPokemonKey,
  ChampionsAbilityKey,
  ChampionsItemKey
> & {
  /** Pokémon Championsの能力ポイント */
  statPoints: PokemonStats;
};

type ScarletVioletBattlePokemonStateInput = BattlePokemonStateInput<
  ScarletVioletPokemonKey,
  ScarletVioletAbilityKey,
  ScarletVioletItemKey
> & {
  /** レベル */
  level: number;

  /** 個体値 */
  individualValues: PokemonStats;

  /** 努力値 */
  effortValues: PokemonStats;
};

export type ChampionsDamageConfig = {
  /** シングル・ダブルの対戦形式 */
  battleType: BattleType;

  /** 攻撃側 */
  attacker: ChampionsBattlePokemonStateInput;

  /** 防御側 */
  defender: ChampionsBattlePokemonStateInput;

  /** 使用する技のキー */
  moveKey: ChampionsMoveKey;

  /** 連続技のhit数を手動指定する場合の回数 */
  selectedHitCount?: number;

  /** 現在の天候 */
  weather: WeatherKey | null;

  /** 現在のフィールド、展開されていなければ省略 */
  terrain?: TerrainKey;

  /** 防御側の場に展開されている壁 */
  defenderScreens?: readonly ScreenKey[];
};

export type ScarletVioletDamageConfig = {
  /** シングル・ダブルの対戦形式 */
  battleType: BattleType;

  /** 攻撃側 */
  attacker: ScarletVioletBattlePokemonStateInput;

  /** 防御側 */
  defender: ScarletVioletBattlePokemonStateInput;

  /** 使用する技のキー */
  moveKey: ScarletVioletMoveKey;

  /** 連続技のhit数を手動指定する場合の回数 */
  selectedHitCount?: number;

  /** 現在の天候 */
  weather: WeatherKey | null;

  /** 現在のフィールド、展開されていなければ省略 */
  terrain?: TerrainKey;

  /** 防御側の場に展開されている壁 */
  defenderScreens?: readonly ScreenKey[];

  /** 攻撃側がテラスタルしているか */
  attackerTerastallized: boolean;

  /** 防御側がテラスタルしているか */
  defenderTerastallized: boolean;
};

/** keyベースの入力からChampions用のダメージ計算入力を組み立てる */
export function resolveChampionsDamageInput(
  input: ChampionsDamageConfig,
): ChampionsDamageInput {
  return {
    game: "champions",
    battleType: input.battleType,
    attacker: resolveChampionsBattlePokemonState(input.attacker),
    defender: resolveChampionsBattlePokemonState(input.defender),
    move: assertDamagingMove(champions.getMove(input.moveKey)),
    ...(input.selectedHitCount === undefined
      ? {}
      : { selectedHitCount: input.selectedHitCount }),
    weather: input.weather,
    ...(input.terrain === undefined ? {} : { terrain: input.terrain }),
    ...(input.defenderScreens === undefined
      ? {}
      : { defenderScreens: input.defenderScreens }),
  };
}

/** keyベースの入力からScarlet/Violet用のダメージ計算入力を組み立てる */
export function resolveScarletVioletDamageInput(
  input: ScarletVioletDamageConfig,
): ScarletVioletDamageInput {
  return {
    game: "scarletViolet",
    battleType: input.battleType,
    attacker: resolveScarletVioletBattlePokemonState(input.attacker),
    defender: resolveScarletVioletBattlePokemonState(input.defender),
    move: assertDamagingMove(scarletViolet.getMove(input.moveKey)),
    ...(input.selectedHitCount === undefined
      ? {}
      : { selectedHitCount: input.selectedHitCount }),
    weather: input.weather,
    ...(input.terrain === undefined ? {} : { terrain: input.terrain }),
    ...(input.defenderScreens === undefined
      ? {}
      : { defenderScreens: input.defenderScreens }),
    attackerTerastallized: input.attackerTerastallized,
    defenderTerastallized: input.defenderTerastallized,
  };
}

function resolveChampionsBattlePokemonState(
  input: ChampionsBattlePokemonStateInput,
): ChampionsBattlePokemonState {
  return {
    game: "champions",
    pokemon: champions.getPokemon(input.pokemonKey),
    natureKey: input.natureKey,
    statPoints: input.statPoints,
    boosts: input.boosts,
    ...resolveChampionsOptionalBattlePokemonState(input),
  };
}

function resolveScarletVioletBattlePokemonState(
  input: ScarletVioletBattlePokemonStateInput,
): ScarletVioletBattlePokemonState {
  return {
    game: "scarletViolet",
    pokemon: scarletViolet.getPokemon(input.pokemonKey),
    natureKey: input.natureKey,
    level: input.level,
    individualValues: input.individualValues,
    effortValues: input.effortValues,
    boosts: input.boosts,
    ...resolveScarletVioletOptionalBattlePokemonState(input),
  };
}

function resolveChampionsOptionalBattlePokemonState(
  input: ChampionsBattlePokemonStateInput,
): Partial<ChampionsBattlePokemonState> {
  return {
    ...(input.abilityKey === undefined
      ? {}
      : { ability: champions.getAbility(input.abilityKey) }),
    ...(input.itemKey === undefined
      ? {}
      : { item: champions.getItem(input.itemKey) }),
    ...(input.status === undefined ? {} : { status: input.status }),
    ...(input.statusState === undefined
      ? {}
      : { statusState: input.statusState }),
    ...(input.volatiles === undefined ? {} : { volatiles: input.volatiles }),
    ...(input.groundedOverride === undefined
      ? {}
      : { groundedOverride: input.groundedOverride }),
  };
}

function resolveScarletVioletOptionalBattlePokemonState(
  input: ScarletVioletBattlePokemonStateInput,
): Partial<ScarletVioletBattlePokemonState> {
  return {
    ...(input.abilityKey === undefined
      ? {}
      : { ability: scarletViolet.getAbility(input.abilityKey) }),
    ...(input.itemKey === undefined
      ? {}
      : { item: scarletViolet.getItem(input.itemKey) }),
    ...(input.status === undefined ? {} : { status: input.status }),
    ...(input.statusState === undefined
      ? {}
      : { statusState: input.statusState }),
    ...(input.volatiles === undefined ? {} : { volatiles: input.volatiles }),
    ...(input.groundedOverride === undefined
      ? {}
      : { groundedOverride: input.groundedOverride }),
  };
}

function assertDamagingMove(
  move:
    | (typeof championsGameData.moves)[ChampionsMoveKey]
    | (typeof scarletVioletGameData.moves)[ScarletVioletMoveKey],
): DamagingMove {
  if (move.category !== "damaging") {
    throw new Error(`${move.key} is not a damaging move.`);
  }

  return move;
}
