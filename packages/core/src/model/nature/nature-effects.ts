import type { NatureEffect } from "./nature-effect.js";
import type { NatureKey } from "./nature-key.js";

export const natureEffects = {
  /** がんばりや */
  hardy: {
    increasedStat: null,
    decreasedStat: null,
  },

  /** さみしがり */
  lonely: {
    increasedStat: "attack",
    decreasedStat: "defense",
  },

  /** ゆうかん */
  brave: {
    increasedStat: "attack",
    decreasedStat: "speed",
  },

  /** いじっぱり */
  adamant: {
    increasedStat: "attack",
    decreasedStat: "specialAttack",
  },

  /** やんちゃ */
  naughty: {
    increasedStat: "attack",
    decreasedStat: "specialDefense",
  },

  /** ずぶとい */
  bold: {
    increasedStat: "defense",
    decreasedStat: "attack",
  },

  /** すなお */
  docile: {
    increasedStat: null,
    decreasedStat: null,
  },

  /** のんき */
  relaxed: {
    increasedStat: "defense",
    decreasedStat: "speed",
  },

  /** わんぱく */
  impish: {
    increasedStat: "defense",
    decreasedStat: "specialAttack",
  },

  /** のうてんき */
  lax: {
    increasedStat: "defense",
    decreasedStat: "specialDefense",
  },

  /** おくびょう */
  timid: {
    increasedStat: "speed",
    decreasedStat: "attack",
  },

  /** せっかち */
  hasty: {
    increasedStat: "speed",
    decreasedStat: "defense",
  },

  /** まじめ */
  serious: {
    increasedStat: null,
    decreasedStat: null,
  },

  /** ようき */
  jolly: {
    increasedStat: "speed",
    decreasedStat: "specialAttack",
  },

  /** むじゃき */
  naive: {
    increasedStat: "speed",
    decreasedStat: "specialDefense",
  },

  /** ひかえめ */
  modest: {
    increasedStat: "specialAttack",
    decreasedStat: "attack",
  },

  /** おっとり */
  mild: {
    increasedStat: "specialAttack",
    decreasedStat: "defense",
  },

  /** れいせい */
  quiet: {
    increasedStat: "specialAttack",
    decreasedStat: "speed",
  },

  /** てれや */
  bashful: {
    increasedStat: null,
    decreasedStat: null,
  },

  /** うっかりや */
  rash: {
    increasedStat: "specialAttack",
    decreasedStat: "specialDefense",
  },

  /** おだやか */
  calm: {
    increasedStat: "specialDefense",
    decreasedStat: "attack",
  },

  /** おとなしい */
  gentle: {
    increasedStat: "specialDefense",
    decreasedStat: "defense",
  },

  /** なまいき */
  sassy: {
    increasedStat: "specialDefense",
    decreasedStat: "speed",
  },

  /** しんちょう */
  careful: {
    increasedStat: "specialDefense",
    decreasedStat: "specialAttack",
  },

  /** きまぐれ */
  quirky: {
    increasedStat: null,
    decreasedStat: null,
  },
} satisfies Record<NatureKey, NatureEffect>;
