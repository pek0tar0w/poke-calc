import type { DamageClass, LanguageCode } from "../../common/index.js";
import type { TypeKey } from "../type/type-key.js";
import type { DamageRule } from "./damage-rule.js";
import type { MoveHitCount } from "./move-hit-count.js";
import type { MoveTag } from "./move-tag.js";

export type MoveCategory = DamagingMove["category"] | StatusMove["category"];

type MoveBase = {
  /** PokeAPI move.id */
  id: number;

  key: string;

  names: Record<LanguageCode, string>;

  descriptions: Record<LanguageCode, string>;

  type: TypeKey;

  priority: number;

  /** 命中率 必中技はnull */
  accuracy: number | null;

  pp: number;

  /** 複数対象へ命中する可能性があるか */
  isMultiTarget: boolean;

  /** 接触技か */
  makesContact: boolean;

  /** わざのタグ */
  moveTags: MoveTag[];

  /** 1回の行動で発生する攻撃回数 */
  hitCount: MoveHitCount;
};

/** こうげきわざ */
export type DamagingMove = MoveBase & {
  category: "damaging";
  damageClass: DamageClass;
  power: number;
  damageRule?: DamageRule;
};

/** へんかわざ */
export type StatusMove = MoveBase & {
  category: "status";
};

export type Move = DamagingMove | StatusMove;
