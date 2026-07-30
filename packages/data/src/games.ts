import { championsGameData } from "./champions/index.js";
import { scarletVioletGameData } from "./scarlet-violet/index.js";

import { createGameDataAccessor, type GameDataAccessor } from "./accessor.js";

export const champions: GameDataAccessor<typeof championsGameData> =
  createGameDataAccessor(championsGameData);

export const scarletViolet: GameDataAccessor<typeof scarletVioletGameData> =
  createGameDataAccessor(scarletVioletGameData);

export const games = {
  champions,
  scarletViolet,
} as const;
