import type { LanguageCode } from "../../common/index.js";
import type { WeatherKey } from "../../model/weather/index.js";

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
