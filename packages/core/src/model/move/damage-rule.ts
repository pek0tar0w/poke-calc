export type DamageRule =
  /** 使用者の防御を攻撃として使用する。例: ボディプレス */
  | { rule: "usesDefenseAsAttack" }
  /** 対象の攻撃を使用する。例: イカサマ */
  | { rule: "usesTargetAttack" }
  /** 固定ダメージを与える。例: りゅうのいかり */
  | { rule: "fixedDamage"; damage: number };
