import type { Ability } from "../../model/ability/index.js";
import type { Item } from "../../model/item/index.js";
import type { DamagingMove } from "../../model/move/index.js";
import type { NatureKey } from "../../model/nature/index.js";
import type { Pokemon } from "../../model/pokemon/index.js";
import type { StatusConditionKey } from "../../model/status-condition/index.js";
import type { VolatileStatus } from "../../model/volatile-status/index.js";
import type { WeatherKey } from "../../model/weather/index.js";
import type { PokemonStatConfig, StatBoosts } from "../stat/index.js";

/** 実データを解決した計算時のポケモン */
type BattlePokemonStateBase = {
  /** ポケモンの実データ */
  pokemon: Pokemon;

  /** 性格 */
  natureKey: NatureKey;

  /** 選択された特性の実データ */
  ability?: Ability;

  /** 選択された道具の実データ */
  item?: Item;

  /** 戦闘中の能力ランク（HPを除く各能力の-6〜+6） */
  boosts: StatBoosts;

  /** どく、もうどく、やけどなどの主要状態異常 */
  status?: StatusConditionKey;

  /** 状態異常の計算用状態 */
  statusState?: {
    /** もうどくの現在カウンター、2なら次のもうどくダメージは2/16 */
    badPoisonCounter?: number;
  };

  /** やどりぎ、のろいなど、通常の状態異常とは別枠で付与される状態 */
  volatiles?: readonly VolatileStatus[];
};

export type BattlePokemonState = BattlePokemonStateBase & PokemonStatConfig;

export type ScarletVioletBattlePokemonState = BattlePokemonStateBase &
  Extract<PokemonStatConfig, { game: "scarletViolet" }>;

export type ChampionsBattlePokemonState = BattlePokemonStateBase &
  Extract<PokemonStatConfig, { game: "champions" }>;

/** 対戦形式 */
export type BattleType = "single" | "double";

/** ダメージ計算時の対戦状態 */
export type DamageCalculationState =
  ScarletVioletDamageState | ChampionsDamageState;

type DamageStateBase<TPokemonState extends BattlePokemonState> = {
  /** シングル・ダブルの対戦形式 */
  battleType: BattleType;

  /** 攻撃側 */
  attacker: TPokemonState;

  /** 防御側 */
  defender: TPokemonState;

  /** 使用する技 */
  move: DamagingMove;

  /** 連続技のhit数を手動指定する場合の回数 */
  selectedHitCount?: number;

  /** 現在の天候 */
  weather: WeatherKey | null;
};

/** Scarlet/Violetのダメージ計算状態 */
export type ScarletVioletDamageState =
  DamageStateBase<ScarletVioletBattlePokemonState> & {
    /** 作品 */
    game: "scarletViolet";

    /** 攻撃側がテラスタルしているか */
    attackerTerastallized: boolean;

    /** 防御側がテラスタルしているか */
    defenderTerastallized: boolean;
  };

/** Championsのダメージ計算状態 */
export type ChampionsDamageState =
  DamageStateBase<ChampionsBattlePokemonState> & {
    /** 作品 */
    game: "champions";
  };
