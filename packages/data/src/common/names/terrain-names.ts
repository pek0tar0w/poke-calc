import type { LanguageCode, TerrainKey } from "@poke-calc/core";

/** フィールドの表示名 */
export const terrainNames = {
  electric: {
    ja: "エレキフィールド",
    en: "Electric Terrain",
  },
  grassy: {
    ja: "グラスフィールド",
    en: "Grassy Terrain",
  },
  misty: {
    ja: "ミストフィールド",
    en: "Misty Terrain",
  },
  psychic: {
    ja: "サイコフィールド",
    en: "Psychic Terrain",
  },
} satisfies Record<TerrainKey, Record<LanguageCode, string>>;
