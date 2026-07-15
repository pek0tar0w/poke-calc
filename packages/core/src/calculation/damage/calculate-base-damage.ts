const { floor } = Math;

/**
 * レベル、威力、攻撃、防御から各種補正前の基本ダメージを計算する
 *
 * ポケモンのダメージ計算式のうち、乱数やタイプ補正より前の値を返す
 */
export function calculateBaseDamage({
  attackerLevel,
  movePower,
  attackingStat,
  defendingStat,
}: {
  /** 攻撃側のレベル */
  attackerLevel: number;

  /** 技の威力 */
  movePower: number;

  /** 攻撃に使用する実数値 */
  attackingStat: number;

  /** 防御に使用する実数値 */
  defendingStat: number;
}): number {
  const levelDamageFactor = floor((attackerLevel * 2) / 5) + 2;

  return floor(
    floor((levelDamageFactor * movePower * attackingStat) / defendingStat) /
      50 +
      2,
  );
}
