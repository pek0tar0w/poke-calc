import type { Ability } from "../../model/ability/index.js";
import type { Item } from "../../model/item/index.js";
import type { DamagingMove } from "../../model/move/index.js";
import type {
  BattlePokemon,
  ChampionsBattlePokemon,
  Pokemon,
  ScarletVioletBattlePokemon,
} from "../../model/pokemon/index.js";
import type { WeatherKey } from "../../model/weather/index.js";
import type { StatBoosts } from "../stat/index.js";

/** 実データを解決した計算時のポケモン */
export type BattlePokemonState<TConfig extends BattlePokemon> = {
  /** 保存可能な育成・選択設定 */
  config: TConfig;

  /** ポケモンの実データ */
  pokemon: Pokemon;

  /** 選択された特性の実データ */
  ability?: Ability;

  /** 選択された道具の実データ */
  item?: Item;

  /** 戦闘中の能力ランク（HPを除く各能力の-6〜+6） */
  boosts: StatBoosts;
};

/** ダメージ計算時の対戦状態 */
export type DamageCalculationState =
  ScarletVioletDamageState | ChampionsDamageState;

type DamageStateBase<TConfig extends BattlePokemon> = {
  /** 攻撃側 */
  attacker: BattlePokemonState<TConfig>;

  /** 防御側 */
  defender: BattlePokemonState<TConfig>;

  /** 使用する技 */
  move: DamagingMove;

  /** 現在の天候 */
  weather: WeatherKey | null;
};

/** Scarlet/Violetのダメージ計算状態 */
export type ScarletVioletDamageState =
  DamageStateBase<ScarletVioletBattlePokemon> & {
    /** 作品 */
    game: "scarletViolet";

    /** 攻撃側がテラスタルしているか */
    attackerTerastallized: boolean;

    /** 防御側がテラスタルしているか */
    defenderTerastallized: boolean;
  };

/** Championsのダメージ計算状態 */
export type ChampionsDamageState = DamageStateBase<ChampionsBattlePokemon> & {
  /** 作品 */
  game: "champions";
};
