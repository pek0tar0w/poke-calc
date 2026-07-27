/** 技が1回の行動で何回ダメージを発生させるか */
export type MoveHitCount =
  | {
      /** 通常の1回攻撃 */
      kind: "single";
    }
  | {
      /** タネマシンガンなど、指定回数ぶん命中する連続技 */
      kind: "multiHit";

      /** 選択できる最小hit数 */
      minimumHits: number;

      /** 選択できる最大hit数 */
      maximumHits: number;
    };
