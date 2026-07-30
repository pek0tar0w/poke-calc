import type { AbilityEffect } from "../../model/ability/index.js";
import type { DamagingMove } from "../../model/move/index.js";
import type { BattlePokemonState } from "../damage/damage-calculation-input.js";

/** coreで扱う連続技の最大hit数 */
const MAX_MOVE_HIT_COUNT = 10;

/**
 * 技と攻撃側の特性から、この行動で発生するhit数を決定する
 *
 * 連続技はUI側で回数を選ぶ想定
 * スキルリンクなどの特性がある場合は、選択値より特性を優先して最大hit数にする
 */
export function resolveHitCount({
  move,
  attacker,
  selectedHitCount,
}: {
  /** 使用する攻撃技 */
  move: DamagingMove;

  /** 攻撃側 */
  attacker: BattlePokemonState;

  /** ユーザーが選択したhit数 */
  selectedHitCount: number | undefined;
}): number {
  if (move.hitCount.kind === "single") {
    return 1;
  }

  validateMoveHitCountRange({
    moveKey: move.key,
    minimumHits: move.hitCount.minimumHits,
    maximumHits: move.hitCount.maximumHits,
  });

  if (hasMaximizeMoveHitCountEffect(attacker.ability?.effects ?? [])) {
    return move.hitCount.maximumHits;
  }

  const hitCount = selectedHitCount ?? move.hitCount.maximumHits;

  if (
    hitCount < move.hitCount.minimumHits ||
    hitCount > move.hitCount.maximumHits
  ) {
    throw new RangeError(
      `${move.key} hit count must be between ${move.hitCount.minimumHits} and ${move.hitCount.maximumHits}.`,
    );
  }

  return hitCount;
}

/** 連続技のhit数を最大にする特性を持つか */
function hasMaximizeMoveHitCountEffect(
  effects: readonly AbilityEffect[],
): boolean {
  return effects.some((effect) => effect.effect === "maximizeMoveHitCount");
}

/** 技データ側のhit数範囲がcoreの扱える範囲に収まっているか検証する */
function validateMoveHitCountRange({
  moveKey,
  minimumHits,
  maximumHits,
}: {
  moveKey: string;
  minimumHits: number;
  maximumHits: number;
}): void {
  if (minimumHits < 1) {
    throw new RangeError(`${moveKey} minimum hit count must be 1 or more.`);
  }

  if (maximumHits > MAX_MOVE_HIT_COUNT) {
    throw new RangeError(
      `${moveKey} maximum hit count must be ${MAX_MOVE_HIT_COUNT} or less.`,
    );
  }

  if (minimumHits > maximumHits) {
    throw new RangeError(
      `${moveKey} minimum hit count must be less than or equal to maximum hit count.`,
    );
  }
}
