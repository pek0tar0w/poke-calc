/**
 * 指定回数以内の攻撃で相手を倒せる確率を計算する
 *
 * @param damages - 1回の攻撃で発生する乱数ごとのダメージ
 * @param hitCount - 攻撃回数
 * @param defenderHp - 防御側のHP
 * @returns 指定回数以内に倒せる確率（0〜1）
 */
export function calculateKoProbability(
  damages: readonly number[],
  hitCount: number,
  defenderHp: number,
): number {
  // let distribution = new Map<number, number>([[0, 1]]);
  //
  // for (let hit = 0; hit < hitCount; hit++) {
  //   const nextDistribution = new Map<number, number>();
  //
  //   for (const [totalDamage, patternCount] of distribution) {
  //     for (const damage of damages) {
  //       const nextDamage = totalDamage + damage;
  //
  //       nextDistribution.set(
  //         nextDamage,
  //         (nextDistribution.get(nextDamage) ?? 0) + patternCount,
  //       );
  //     }
  //   }
  //
  //   distribution = nextDistribution;
  // }
  //
  // const knockoutPatternCount = [...distribution].reduce(
  //   (count, [totalDamage, patternCount]) =>
  //     totalDamage >= defenderHp ? count + patternCount : count,
  //   0,
  // );
  //
  // return knockoutPatternCount / damages.length ** hitCount;

  // 合計ダメージと、その合計ダメージになる確率
  // 攻撃前は合計0ダメージになる確率が100%
  let distribution = new Map<number, number>([[0, 1]]);

  // 攻撃1回ごとに確率分布を更新する
  for (let hit = 0; hit < hitCount; hit++) {
    const nextDistribution = new Map<number, number>();

    // 現在の確率を次の攻撃で発生する各乱数へ均等に分配する
    for (const [totalDamage, probability] of distribution) {
      for (const damage of damages) {
        const nextDamage = totalDamage + damage;
        const nextProbability = probability / damages.length;

        // 同じ合計ダメージになる確率をまとめる
        nextDistribution.set(
          nextDamage,
          (nextDistribution.get(nextDamage) ?? 0) + nextProbability,
        );
      }
    }

    distribution = nextDistribution;
  }

  // 合計ダメージが防御側のHP以上になる確率を合計する
  return [...distribution].reduce(
    (probability, [totalDamage, damageProbability]) =>
      totalDamage >= defenderHp ? probability + damageProbability : probability,
    0,
  );
}
