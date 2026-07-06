/**
 * 残りHPから道具の消費状態ごとの確率を取得する分布
 *
 * 1段目のキー: 残りHP
 * 2段目のキー: 道具が消費済みか
 * 値: その状態になる確率
 */
export type KoDistribution = Map<number, Map<boolean, number>>;

export type AddKoStateProbabilityParams = {
  /** 追加先の確率分布 */
  distribution: KoDistribution;

  /** 追加する状態の残りHP */
  remainingHp: number;

  /** 道具が消費済みか */
  itemConsumed: boolean;

  /** この状態になる確率 */
  probability: number;
};

/**
 * 状態を確率分布へ追加する
 *
 * 同じ残りHP・道具状態が存在する場合は確率を合計する
 */
export function addKoStateProbability(
  params: AddKoStateProbabilityParams,
): void {
  const { distribution, remainingHp, itemConsumed, probability } = params;
  let itemStates = distribution.get(remainingHp);

  // この残りHPが初めて現れた場合は内側のMapを作る
  if (!itemStates) {
    itemStates = new Map();
    distribution.set(remainingHp, itemStates);
  }

  // 同じ道具状態になる既存確率へ今回の分岐確率を加算する
  itemStates.set(
    itemConsumed,
    (itemStates.get(itemConsumed) ?? 0) + probability,
  );
}
