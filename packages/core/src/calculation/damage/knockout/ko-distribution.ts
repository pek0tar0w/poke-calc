/** 撃破回数計算中に引き継ぐ生存状態 */
export type KoState = {
  /** 現在の残りHP */
  remainingHp: number;

  /** 一度だけ発動する効果のうち、すでに消費済みの効果キー */
  consumedEffectKeys: readonly string[];
};

/**
 * 生存状態ごとの確率分布
 *
 * 同じHPでも、オボンのみ使用済み・ばけのかわ発動済みなどで
 * 以後の計算結果が変わるため、状態全体をキーにする
 */
export type KoDistribution = Map<
  string,
  {
    /** 次の攻撃へ引き継ぐ生存状態 */
    state: KoState;

    /** この状態になる確率 */
    probability: number;
  }
>;

/** 計算開始時の生存状態を作る */
export function createInitialKoState(currentHp: number): KoState {
  return {
    remainingHp: currentHp,
    consumedEffectKeys: [],
  };
}

/** 状態をMapのキーに変換する */
export function createKoStateKey(state: KoState): string {
  return `${state.remainingHp}:${[...state.consumedEffectKeys].sort().join(",")}`;
}

/**
 * 状態を確率分布へ追加する
 *
 * 同じHP・消費済み効果の状態が存在する場合は確率を合計する
 */
export function addKoStateProbability({
  distribution,
  state,
  probability,
}: {
  /** 追加先の確率分布 */
  distribution: KoDistribution;

  /** 追加する生存状態 */
  state: KoState;

  /** この状態になる確率 */
  probability: number;
}): void {
  const stateKey = createKoStateKey(state);
  const current = distribution.get(stateKey);

  distribution.set(stateKey, {
    state,
    probability: (current?.probability ?? 0) + probability,
  });
}
