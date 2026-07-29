type StringKeyOf<T> = Extract<keyof T, string>;
type ValueOf<TValues> = TValues[StringKeyOf<TValues>];

type CollectionMap = Readonly<Record<string, unknown>>;
type DataMap = Readonly<Record<string, object>>;

type GameDataLike = {
  readonly pokemon: DataMap;
  readonly moves: DataMap;
  readonly abilities: DataMap;
  readonly items: DataMap;
  readonly learnsets: CollectionMap;
  readonly pokemonAbilities: CollectionMap;
};

/** 1作品分のゲームデータを型付きで取得するためのアクセサ */
export type GameDataAccessor<TGameData extends GameDataLike> = {
  /** ポケモンkeyからポケモンの実データを取得する */
  getPokemon: <TKey extends StringKeyOf<TGameData["pokemon"]>>(
    key: TKey,
  ) => TGameData["pokemon"][TKey];

  /** 技keyから技の実データを取得する */
  getMove: <TKey extends StringKeyOf<TGameData["moves"]>>(
    key: TKey,
  ) => TGameData["moves"][TKey];

  /** 特性keyから特性の実データを取得する */
  getAbility: <TKey extends StringKeyOf<TGameData["abilities"]>>(
    key: TKey,
  ) => TGameData["abilities"][TKey];

  /** 道具keyから道具の実データを取得する */
  getItem: <TKey extends StringKeyOf<TGameData["items"]>>(
    key: TKey,
  ) => TGameData["items"][TKey];

  /** 登録されているポケモンの実データ一覧を取得する */
  getPokemons: () => ReadonlyArray<ValueOf<TGameData["pokemon"]>>;

  /** 登録されているポケモンkeyの一覧を取得する */
  getPokemonKeys: () => ReadonlyArray<StringKeyOf<TGameData["pokemon"]>>;

  /** 登録されている技の実データ一覧を取得する */
  getMoves: () => ReadonlyArray<ValueOf<TGameData["moves"]>>;

  /** 登録されている技keyの一覧を取得する */
  getMoveKeys: () => ReadonlyArray<StringKeyOf<TGameData["moves"]>>;

  /** 登録されている特性の実データ一覧を取得する */
  getAbilities: () => ReadonlyArray<ValueOf<TGameData["abilities"]>>;

  /** 登録されている特性keyの一覧を取得する */
  getAbilityKeys: () => ReadonlyArray<StringKeyOf<TGameData["abilities"]>>;

  /** 登録されている道具の実データ一覧を取得する */
  getItems: () => ReadonlyArray<ValueOf<TGameData["items"]>>;

  /** 登録されている道具keyの一覧を取得する */
  getItemKeys: () => ReadonlyArray<StringKeyOf<TGameData["items"]>>;

  /** 技リストを持つポケモンkeyの一覧を取得する */
  getLearnsetKeys: () => ReadonlyArray<StringKeyOf<TGameData["learnsets"]>>;

  /** 特性リストを持つポケモンkeyの一覧を取得する */
  getPokemonAbilityKeys: () => ReadonlyArray<
    StringKeyOf<TGameData["pokemonAbilities"]>
  >;

  /** ポケモンkeyから、そのポケモンが持てる特性の実データ一覧を取得する */
  getPokemonAbilities: <
    TKey extends StringKeyOf<TGameData["pokemonAbilities"]>,
  >(
    pokemonKey: TKey,
  ) => ReadonlyArray<ValueOf<TGameData["abilities"]>>;

  /** ポケモンkeyから、そのポケモンが覚えられる技の実データ一覧を取得する */
  getPokemonMoves: <TKey extends StringKeyOf<TGameData["learnsets"]>>(
    pokemonKey: TKey,
  ) => ReadonlyArray<ValueOf<TGameData["moves"]>>;
};

/** 生のゲームデータから利用者向けの型付きアクセサを作成する */
export function createGameDataAccessor<const TGameData extends GameDataLike>(
  gameData: TGameData,
): GameDataAccessor<TGameData> {
  const getPokemonAbilities = <
    TKey extends StringKeyOf<TGameData["pokemonAbilities"]>,
  >(
    pokemonKey: TKey,
  ): ReadonlyArray<ValueOf<TGameData["abilities"]>> => {
    const abilityKeys = getValue(gameData.pokemonAbilities, pokemonKey);

    return getStringList({
      value: abilityKeys,
      sourceKey: pokemonKey,
      relationName: "pokemonAbilities",
    }).map((abilityKey) =>
      getRelatedValue<TGameData["abilities"]>({
        values: gameData.abilities,
        key: abilityKey,
        sourceKey: pokemonKey,
        relationName: "pokemonAbilities",
      }),
    );
  };

  const getPokemonMoves = <TKey extends StringKeyOf<TGameData["learnsets"]>>(
    pokemonKey: TKey,
  ): ReadonlyArray<ValueOf<TGameData["moves"]>> => {
    const moveKeys = getValue(gameData.learnsets, pokemonKey);

    return getStringList({
      value: moveKeys,
      sourceKey: pokemonKey,
      relationName: "learnsets",
    }).map((moveKey) =>
      getRelatedValue<TGameData["moves"]>({
        values: gameData.moves,
        key: moveKey,
        sourceKey: pokemonKey,
        relationName: "learnsets",
      }),
    );
  };

  const getPokemon = <TKey extends StringKeyOf<TGameData["pokemon"]>>(
    key: TKey,
  ): TGameData["pokemon"][TKey] =>
    getValue<TGameData["pokemon"], TKey>(gameData.pokemon, key);

  const getMove = <TKey extends StringKeyOf<TGameData["moves"]>>(
    key: TKey,
  ): TGameData["moves"][TKey] =>
    getValue<TGameData["moves"], TKey>(gameData.moves, key);

  const getAbility = <TKey extends StringKeyOf<TGameData["abilities"]>>(
    key: TKey,
  ): TGameData["abilities"][TKey] =>
    getValue<TGameData["abilities"], TKey>(gameData.abilities, key);

  const getItem = <TKey extends StringKeyOf<TGameData["items"]>>(
    key: TKey,
  ): TGameData["items"][TKey] =>
    getValue<TGameData["items"], TKey>(gameData.items, key);

  return {
    getPokemon,
    getMove,
    getAbility,
    getItem,
    getPokemons: () => valuesOf<TGameData["pokemon"]>(gameData.pokemon),
    getPokemonKeys: () => keysOf<TGameData["pokemon"]>(gameData.pokemon),
    getMoves: () => valuesOf<TGameData["moves"]>(gameData.moves),
    getMoveKeys: () => keysOf<TGameData["moves"]>(gameData.moves),
    getAbilities: () => valuesOf<TGameData["abilities"]>(gameData.abilities),
    getAbilityKeys: () => keysOf<TGameData["abilities"]>(gameData.abilities),
    getItems: () => valuesOf<TGameData["items"]>(gameData.items),
    getItemKeys: () => keysOf<TGameData["items"]>(gameData.items),
    getLearnsetKeys: () => keysOf<TGameData["learnsets"]>(gameData.learnsets),
    getPokemonAbilityKeys: () =>
      keysOf<TGameData["pokemonAbilities"]>(gameData.pokemonAbilities),
    getPokemonAbilities,
    getPokemonMoves,
  };
}

/** objectのキーを文字列リテラル型を保ったまま配列化する */
function keysOf<TValues extends CollectionMap>(
  values: TValues,
): Array<StringKeyOf<TValues>> {
  const keys: Array<StringKeyOf<TValues>> = [];

  for (const key in values) {
    keys.push(key);
  }

  return keys;
}

/** objectの値を型を保ったまま配列化する */
function valuesOf<TValues extends CollectionMap>(
  values: TValues,
): Array<ValueOf<TValues>> {
  return keysOf(values).map((key) => getValue(values, key));
}

/** keyに対応する値を取得し、データ不整合時は明示的に失敗する */
function getValue<
  TValues extends CollectionMap,
  TKey extends StringKeyOf<TValues>,
>(values: TValues, key: TKey): TValues[TKey] {
  const value = values[key];

  if (value === undefined) {
    throw new Error(`${key} is not defined.`);
  }

  return value;
}

/** learnsetsやpokemonAbilitiesが参照するkeyから実データを取得する */
function getRelatedValue<TValues extends DataMap>({
  values,
  key,
  sourceKey,
  relationName,
}: {
  values: TValues;
  key: string;
  sourceKey: string;
  relationName: string;
}): ValueOf<TValues> {
  const value = values[key as StringKeyOf<TValues>];

  if (value === undefined) {
    throw new Error(
      `${relationName}.${sourceKey} references unknown key: ${key}`,
    );
  }

  return value;
}

/** 関連テーブルの値が文字列key配列であることを確認する */
function getStringList({
  value,
  sourceKey,
  relationName,
}: {
  value: unknown;
  sourceKey: string;
  relationName: string;
}): readonly string[] {
  if (
    !Array.isArray(value) ||
    value.some((item): item is unknown => typeof item !== "string")
  ) {
    throw new Error(`${relationName}.${sourceKey} must be a string list.`);
  }

  return value;
}
