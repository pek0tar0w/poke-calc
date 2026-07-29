type StringKeyOf<T> = Extract<keyof T, string>;
type ValueOf<TValues> = TValues[StringKeyOf<TValues>];

type DataMap = Readonly<Record<string, object>>;

type GameDataLike = {
  readonly pokemon: DataMap;
  readonly moves: DataMap;
  readonly abilities: DataMap;
  readonly items: DataMap;
  readonly learnsets: DataMap;
  readonly pokemonAbilities: DataMap;
};

export type DataCollection<TValues extends DataMap> = {
  readonly raw: TValues;
  get: <TKey extends StringKeyOf<TValues>>(key: TKey) => TValues[TKey];
  all: () => ReadonlyArray<ValueOf<TValues>>;
  entries: () => ReadonlyArray<
    readonly [StringKeyOf<TValues>, ValueOf<TValues>]
  >;
  keys: () => ReadonlyArray<StringKeyOf<TValues>>;
};

export type GameDataAccessor<TGameData extends GameDataLike> = {
  readonly raw: TGameData;
  readonly pokemon: DataCollection<TGameData["pokemon"]>;
  readonly moves: DataCollection<TGameData["moves"]>;
  readonly abilities: DataCollection<TGameData["abilities"]>;
  readonly items: DataCollection<TGameData["items"]>;
  readonly learnsets: DataCollection<TGameData["learnsets"]>;
  readonly pokemonAbilities: DataCollection<TGameData["pokemonAbilities"]>;
};

function createDataCollection<const TValues extends DataMap>(
  values: TValues,
): DataCollection<TValues> {
  const keys = (): Array<StringKeyOf<TValues>> => {
    const result: Array<StringKeyOf<TValues>> = [];

    for (const key in values) {
      result.push(key);
    }

    return result;
  };

  return {
    raw: values,
    get: (key) => values[key],
    all: () => keys().map((key) => values[key]),
    entries: () => keys().map((key) => [key, values[key]] as const),
    keys,
  };
}

export function createGameDataAccessor<const TGameData extends GameDataLike>(
  gameData: TGameData,
): GameDataAccessor<TGameData> {
  return {
    raw: gameData,
    pokemon: createDataCollection(gameData.pokemon),
    moves: createDataCollection(gameData.moves),
    abilities: createDataCollection(gameData.abilities),
    items: createDataCollection(gameData.items),
    learnsets: createDataCollection(gameData.learnsets),
    pokemonAbilities: createDataCollection(gameData.pokemonAbilities),
  };
}
