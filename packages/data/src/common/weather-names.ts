import type { LanguageCode, WeatherKey } from "@poke-calc/core";

export const weatherNames = {
  sun: {
    ja: "晴れ",
    en: "Harsh Sunlight",
  },
  rain: {
    ja: "雨",
    en: "Rain",
  },
  sandstorm: {
    ja: "砂嵐",
    en: "Sandstorm",
  },
  snow: {
    ja: "雪",
    en: "Snow",
  },
} satisfies Record<WeatherKey, Record<LanguageCode, string>>;
