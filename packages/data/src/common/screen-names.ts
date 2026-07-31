import type { LanguageCode, ScreenKey } from "@poke-calc/core";

/** 壁の表示名 */
export const screenNames = {
  reflect: {
    ja: "リフレクター",
    en: "Reflect",
  },
  lightScreen: {
    ja: "ひかりのかべ",
    en: "Light Screen",
  },
  auroraVeil: {
    ja: "オーロラベール",
    en: "Aurora Veil",
  },
} satisfies Record<ScreenKey, Record<LanguageCode, string>>;
