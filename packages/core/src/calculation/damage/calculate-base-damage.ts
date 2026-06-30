const { floor } = Math;

/** 基本ダメージ計算に必要なパラメータ */
type CalculateBaseDamageParams = {
  /** 攻撃側のレベル */
  attackerLevel: number;

  /** 技の威力 */
  movePower: number;

  /** 攻撃に使用する実数値 */
  attackingStat: number;

  /** 防御に使用する実数値 */
  defendingStat: number;
};

/**
 * レベル、威力、攻撃、防御から各種補正前の基本ダメージを計算する
 *
 * @param params - 基本ダメージ計算に必要な値
 * @returns 各種補正前の基本ダメージ
 */
export function calculateBaseDamage(params: CalculateBaseDamageParams): number {
  const { attackerLevel, movePower, attackingStat, defendingStat } = params;
  const levelDamageFactor = floor((attackerLevel * 2) / 5) + 2;

  return floor(
    floor((levelDamageFactor * movePower * attackingStat) / defendingStat) /
      50 +
      2,
  );
}
