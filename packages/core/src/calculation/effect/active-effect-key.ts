import type { ActiveEffectSource } from "./active-effect-source.js";

/** 消費済み効果を識別するキーを作る */
export function createActiveEffectKey({
  source,
  effect,
}: {
  /** 効果の発生元 */
  source: ActiveEffectSource;

  /** 効果の種類 */
  effect: string;
}): string {
  return `${source.type}:${source.key}:${effect}`;
}
