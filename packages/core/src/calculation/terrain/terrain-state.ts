import type { TerrainKey } from "../../model/index.js";

/** フィールド効果の計算に使用する解決済み状態 */
export type TerrainState = {
  /** 現在のフィールド */
  key: TerrainKey;

  /** 攻撃側がフィールドの影響を受ける接地状態か */
  attackerGrounded: boolean;

  /** 防御側がフィールドの影響を受ける接地状態か */
  defenderGrounded: boolean;
};
