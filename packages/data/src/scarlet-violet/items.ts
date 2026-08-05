import {
  assaultVestEffects,
  chilanBerryEffects,
  choiceBandEffects,
  choiceSpecsEffects,
  createSuperEffectiveTypeResistBerryEffects,
  createTypeBoostEffects,
  evioliteEffects,
  expertBeltEffects,
  focusSashEffects,
  leftoversEffects,
  lifeOrbEffects,
  muscleBandEffects,
  wiseGlassesEffects,
  type Item,
} from "@poke-calc/core";

export const scarletVioletItems = {
  "occa-berry": {
    id: 161,
    key: "occa-berry",
    names: {
      ja: "オッカのみ",
      en: "Occa Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると こうかばつぐんの　ほのお　わざを うけたとき　いりょくが　よわまる。",
      en: "Weakens a supereffective Fire-type attack against the holding Pokémon.",
    },
    effects: createSuperEffectiveTypeResistBerryEffects("fire"),
    flingPower: 10,
  },
  "passho-berry": {
    id: 162,
    key: "passho-berry",
    names: {
      ja: "イトケのみ",
      en: "Passho Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると こうかばつぐんの　みず　わざを うけたとき　いりょくが　よわまる。",
      en: "A Poffin ingredient. If held by a Pokémon, it weakens a foe’s supereffective Water-type attack.",
    },
    effects: createSuperEffectiveTypeResistBerryEffects("water"),
    flingPower: 10,
  },
  "wacan-berry": {
    id: 163,
    key: "wacan-berry",
    names: {
      ja: "ソクノのみ",
      en: "Wacan Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると こうかばつぐんの　でんき　わざを うけたとき　いりょくが　よわまる。",
      en: "A Poffin ingredient. If held by a Pokémon, it weakens a foe’s supereffective Electric-type attack.",
    },
    effects: createSuperEffectiveTypeResistBerryEffects("electric"),
    flingPower: 10,
  },
  "rindo-berry": {
    id: 164,
    key: "rindo-berry",
    names: {
      ja: "リンドのみ",
      en: "Rindo Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると こうかばつぐんの　くさ　わざを うけたとき　いりょくが　よわまる。",
      en: "A Poffin ingredient. If held by a Pokémon, it weakens a foe’s supereffective Grass-type attack.",
    },
    effects: createSuperEffectiveTypeResistBerryEffects("grass"),
    flingPower: 10,
  },
  "yache-berry": {
    id: 165,
    key: "yache-berry",
    names: {
      ja: "ヤチェのみ",
      en: "Yache Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると こうかばつぐんの　こおり　わざを うけたとき　いりょくが　よわまる。",
      en: "A Poffin ingredient. If held by a Pokémon, it weakens a foe’s supereffective Ice-type attack.",
    },
    effects: createSuperEffectiveTypeResistBerryEffects("ice"),
    flingPower: 10,
  },
  "chople-berry": {
    id: 166,
    key: "chople-berry",
    names: {
      ja: "ヨプのみ",
      en: "Chople Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると こうかばつぐんの　かくとう　わざを うけたとき　いりょくが　よわまる。",
      en: "A Poffin ingredient. If held by a Pokémon, it weakens a foe’s supereffective Fighting-type attack.",
    },
    effects: createSuperEffectiveTypeResistBerryEffects("fighting"),
    flingPower: 10,
  },
  "kebia-berry": {
    id: 167,
    key: "kebia-berry",
    names: {
      ja: "ビアーのみ",
      en: "Kebia Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると こうかばつぐんの　どく　わざを うけたとき　いりょくが　よわまる。",
      en: "A Poffin ingredient. If held by a Pokémon, it weakens a foe’s supereffective Poison-type attack.",
    },
    effects: createSuperEffectiveTypeResistBerryEffects("poison"),
    flingPower: 10,
  },
  "shuca-berry": {
    id: 168,
    key: "shuca-berry",
    names: {
      ja: "シュカのみ",
      en: "Shuca Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると こうかばつぐんの　じめん　わざを うけたとき　いりょくが　よわまる。",
      en: "A Poffin ingredient. If held by a Pokémon, it weakens a foe’s supereffective Ground-type attack.",
    },
    effects: createSuperEffectiveTypeResistBerryEffects("ground"),
    flingPower: 10,
  },
  "coba-berry": {
    id: 169,
    key: "coba-berry",
    names: {
      ja: "バコウのみ",
      en: "Coba Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると こうかばつぐんの　ひこう　わざを うけたとき　いりょくが　よわまる。",
      en: "A Poffin ingredient. If held by a Pokémon, it weakens a foe’s supereffective Flying-type attack.",
    },
    effects: createSuperEffectiveTypeResistBerryEffects("flying"),
    flingPower: 10,
  },
  "payapa-berry": {
    id: 170,
    key: "payapa-berry",
    names: {
      ja: "ウタンのみ",
      en: "Payapa Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると こうかばつぐんの　エスパー　わざを うけたとき　いりょくが　よわまる。",
      en: "A Poffin ingredient. If held by a Pokémon, it weakens a foe’s supereffective Psychic-type attack.",
    },
    effects: createSuperEffectiveTypeResistBerryEffects("psychic"),
    flingPower: 10,
  },
  "tanga-berry": {
    id: 171,
    key: "tanga-berry",
    names: {
      ja: "タンガのみ",
      en: "Tanga Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると こうかばつぐんの　むし　わざを うけたとき　いりょくが　よわまる。",
      en: "A Poffin ingredient. If held by a Pokémon, it weakens a foe’s supereffective Bug-type attack.",
    },
    effects: createSuperEffectiveTypeResistBerryEffects("bug"),
    flingPower: 10,
  },
  "charti-berry": {
    id: 172,
    key: "charti-berry",
    names: {
      ja: "ヨロギのみ",
      en: "Charti Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると こうかばつぐんの　いわ　わざを うけたとき　いりょくが　よわまる。",
      en: "A Poffin ingredient. If held by a Pokémon, it weakens a foe’s supereffective Rock-type attack.",
    },
    effects: createSuperEffectiveTypeResistBerryEffects("rock"),
    flingPower: 10,
  },
  "kasib-berry": {
    id: 173,
    key: "kasib-berry",
    names: {
      ja: "カシブのみ",
      en: "Kasib Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると こうかばつぐんの　ゴースト　わざを うけたとき　いりょくが　よわまる。",
      en: "A Poffin ingredient. If held by a Pokémon, it weakens a foe’s supereffective Ghost-type attack.",
    },
    effects: createSuperEffectiveTypeResistBerryEffects("ghost"),
    flingPower: 10,
  },
  "haban-berry": {
    id: 174,
    key: "haban-berry",
    names: {
      ja: "ハバンのみ",
      en: "Haban Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると こうかばつぐんの　ドラゴン　わざを うけたとき　いりょくが　よわまる。",
      en: "A Poffin ingredient. If held by a Pokémon, it weakens a foe’s supereffective Dragon-type attack.",
    },
    effects: createSuperEffectiveTypeResistBerryEffects("dragon"),
    flingPower: 10,
  },
  "colbur-berry": {
    id: 175,
    key: "colbur-berry",
    names: {
      ja: "ナモのみ",
      en: "Colbur Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると こうかばつぐんの　あく　わざを うけたとき　いりょくが　よわまる。",
      en: "Weakens a supereffective Dark-type attack against the holding Pokémon.",
    },
    effects: createSuperEffectiveTypeResistBerryEffects("dark"),
    flingPower: 10,
  },
  "babiri-berry": {
    id: 176,
    key: "babiri-berry",
    names: {
      ja: "リリバのみ",
      en: "Babiri Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると こうかばつぐんの　はがね　わざを うけたとき　いりょくが　よわまる。",
      en: "A Poffin ingredient. If held by a Pokémon, it weakens a foe’s supereffective Steel-type attack.",
    },
    effects: createSuperEffectiveTypeResistBerryEffects("steel"),
    flingPower: 10,
  },
  "roseli-berry": {
    id: 723,
    key: "roseli-berry",
    names: {
      ja: "ロゼルのみ",
      en: "Roseli Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると こうかばつぐんの　フェアリー　わざを うけたとき　いりょくが　よわまる。",
      en: "If held by a Pokémon, this Berry will lessen the damage taken from one supereffective Fairy-type attack.",
    },
    effects: createSuperEffectiveTypeResistBerryEffects("fairy"),
    flingPower: 10,
  },
  "chilan-berry": {
    id: 177,
    key: "chilan-berry",
    names: {
      ja: "ホズのみ",
      en: "Chilan Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると ノーマル　わざを　うけたとき いりょくが　よわまる。",
      en: "A Poffin ingredient. If held by a Pokémon, it weakens a foe’s Normal-type attack.",
    },
    effects: chilanBerryEffects,
    flingPower: 10,
  },
  "covert-cloak": {
    id: 1701,
    key: "covert-cloak",
    names: {
      ja: "おんみつマント",
      en: "Covert Cloak",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: null,
  },
  "ability-shield": {
    id: 1697,
    key: "ability-shield",
    names: {
      ja: "とくせいガード",
      en: "Ability Shield",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: null,
  },
  "loaded-dice": {
    id: 1702,
    key: "loaded-dice",
    names: {
      ja: "いかさまダイス",
      en: "Loaded Dice",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: null,
  },
  "punching-glove": {
    id: 1700,
    key: "punching-glove",
    names: {
      ja: "パンチグローブ",
      en: "Punching Glove",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: null,
  },
  "clear-amulet": {
    id: 1698,
    key: "clear-amulet",
    names: {
      ja: "クリアチャーム",
      en: "Clear Amulet",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: null,
  },
  "mirror-herb": {
    id: 1699,
    key: "mirror-herb",
    names: {
      ja: "ものまねハーブ",
      en: "Mirror Herb",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: null,
  },
  "booster-energy": {
    id: 1696,
    key: "booster-energy",
    names: {
      ja: "ブーストエナジー",
      en: "Booster Energy",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: null,
  },
  "fairy-feather": {
    id: 2105,
    key: "fairy-feather",
    names: {
      ja: "ようせいのハネ",
      en: "Fairy Feather",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: createTypeBoostEffects("fairy"),
    flingPower: null,
  },
  "miracle-seed": {
    id: 216,
    key: "miracle-seed",
    names: {
      ja: "きせきのタネ",
      en: "Miracle Seed",
    },
    descriptions: {
      ja: "せいめいが　やどる　タネ。 もたせると　くさタイプの わざの　いりょくが　あがる。",
      en: "A hold item that raises the power of GRASS-type moves.",
    },
    effects: createTypeBoostEffects("grass"),
    flingPower: 30,
  },
  charcoal: {
    id: 226,
    key: "charcoal",
    names: {
      ja: "もくたん",
      en: "Charcoal",
    },
    descriptions: {
      ja: "ものを　もやす　ねんりょう。 もたせると　ほのおタイプの わざの　いりょくが　あがる。",
      en: "A hold item that raises the power of FIRE-type moves.",
    },
    effects: createTypeBoostEffects("fire"),
    flingPower: 30,
  },
  "mystic-water": {
    id: 220,
    key: "mystic-water",
    names: {
      ja: "しんぴのしずく",
      en: "Mystic Water",
    },
    descriptions: {
      ja: "しずくの　かたちの　ほうせき。 もたせると　みずタイプの わざの　いりょくが　あがる。",
      en: "A hold item that raises the power of WATER-type moves.",
    },
    effects: createTypeBoostEffects("water"),
    flingPower: 30,
  },
  "silk-scarf": {
    id: 228,
    key: "silk-scarf",
    names: {
      ja: "シルクのスカーフ",
      en: "Silk Scarf",
    },
    descriptions: {
      ja: "はだざわりの　よい　スカーフ。 もたせると　ノーマルタイプの わざの　いりょくが　あがる。",
      en: "A hold item that raises the power of NORMAL-type moves.",
    },
    effects: createTypeBoostEffects("normal"),
    flingPower: 10,
  },
  "sharp-beak": {
    id: 221,
    key: "sharp-beak",
    names: {
      ja: "するどいくちばし",
      en: "Sharp Beak",
    },
    descriptions: {
      ja: "ながく　とがった　くちばし。 もたせると　ひこうタイプの わざの　いりょくが　あがる。",
      en: "A hold item that raises the power of FLYING-type moves.",
    },
    effects: createTypeBoostEffects("flying"),
    flingPower: 50,
  },
  "silver-powder": {
    id: 199,
    key: "silver-powder",
    names: {
      ja: "ぎんのこな",
      en: "Silver Powder",
    },
    descriptions: {
      ja: "ぎんいろに　かがやく　こな。 もたせると　むしタイプの わざの　いりょくが　あがる。",
      en: "A hold item that raises the power of BUG-type moves.",
    },
    effects: createTypeBoostEffects("bug"),
    flingPower: 10,
  },
  "muscle-band": {
    id: 243,
    key: "muscle-band",
    names: {
      ja: "ちからのハチマキ",
      en: "Muscle Band",
    },
    descriptions: {
      ja: "ちからが　わいてくる　ハチマキ。 もたせると　ぶつりわざの いりょくが　すこし　あがる。",
      en: "An item to be held by a Pokémon. It is a headband that slightly boosts the power of physical moves.",
    },
    effects: muscleBandEffects,
    flingPower: 10,
  },
  "wise-glasses": {
    id: 244,
    key: "wise-glasses",
    names: {
      ja: "ものしりメガネ",
      en: "Wise Glasses",
    },
    descriptions: {
      ja: "ぶあつい　レンズの　ついた　メガネ。 もたせると　とくしゅわざの いりょくが　すこし　あがる。",
      en: "An item to be held by a Pokémon. It is a thick pair of glasses that slightly boosts the power of special moves.",
    },
    effects: wiseGlassesEffects,
    flingPower: 10,
  },
  "focus-band": {
    id: 207,
    key: "focus-band",
    names: {
      ja: "きあいのハチマキ",
      en: "Focus Band",
    },
    descriptions: {
      ja: "もたせると　ひんしに　なりそうな わざを　うけても　ＨＰを　１だけ のこして　たえることが　ある。",
      en: "A hold item that occasionally prevents fainting.",
    },
    effects: [],
    flingPower: 10,
  },
  "quick-claw": {
    id: 194,
    key: "quick-claw",
    names: {
      ja: "せんせいのツメ",
      en: "Quick Claw",
    },
    descriptions: {
      ja: "かるくて　するどい　ツメ。 もたせると　あいてより　さきに こうどう　できることが　ある。",
      en: "A hold item that occasionally allows the first strike.",
    },
    effects: [],
    flingPower: 80,
  },
  "expert-belt": {
    id: 245,
    key: "expert-belt",
    names: {
      ja: "たつじんのおび",
      en: "Expert Belt",
    },
    descriptions: {
      ja: "つかいこまれた　くろい　おび。 もたせると　こうかばつぐんの　とき わざの　いりょくが　すこし　あがる。",
      en: "An item to be held by a Pokémon. It is a well-worn belt that slightly boosts the power of supereffective moves.",
    },
    effects: expertBeltEffects,
    flingPower: 10,
  },
  "focus-sash": {
    id: 252,
    key: "focus-sash",
    names: {
      ja: "きあいのタスキ",
      en: "Focus Sash",
    },
    descriptions: {
      ja: "もたせると　ＨＰが　まんたんのとき ひんしになりそうな　わざを　うけても ＨＰ１で　いちどだけ　たえる。",
      en: "An item to be held by a Pokémon. If it has full HP, the holder will endure one potential KO attack, leaving 1 HP.",
    },
    effects: focusSashEffects,
    flingPower: 10,
  },
  "choice-scarf": {
    id: 264,
    key: "choice-scarf",
    names: {
      ja: "こだわりスカーフ",
      en: "Choice Scarf",
    },
    descriptions: {
      ja: "ちょっと　こだわった　スカーフ。 もたせると　すばやさは　あがるが おなじ　わざしか　だせなくなる。",
      en: "An item to be held by a Pokémon. This scarf boosts Speed, but allows the use of only one kind of move.",
    },
    effects: [],
    flingPower: 10,
  },
  "choice-band": {
    id: 197,
    key: "choice-band",
    names: {
      ja: "こだわりハチマキ",
      en: "Choice Band",
    },
    descriptions: {
      ja: "ちょっと　こだわった　ハチマキ。 もたせると　こうげきは　あがるが おなじ　わざしか　だせなくなる。",
      en: "Raises a move’s power, but permits only that move.",
    },
    effects: choiceBandEffects,
    flingPower: 10,
  },
  "choice-specs": {
    id: 274,
    key: "choice-specs",
    names: {
      ja: "こだわりメガネ",
      en: "Choice Specs",
    },
    descriptions: {
      ja: "ちょっと　こだわった　メガネ。 もたせると　とくこうは　あがるが おなじ　わざしか　だせなくなる。",
      en: "An item to be held by a Pokémon. These distinctive glasses boost Sp. Atk, but allow only one kind of move to be used.",
    },
    effects: choiceSpecsEffects,
    flingPower: 10,
  },
  "rocky-helmet": {
    id: 583,
    key: "rocky-helmet",
    names: {
      ja: "ゴツゴツメット",
      en: "Rocky Helmet",
    },
    descriptions: {
      ja: "ポケモンに　もたせると だげきわざを　うけたとき あいてにも　ダメージを　あたえる。",
      en: "If the holder of this item takes damage, the attacker will also be damaged upon contact.",
    },
    effects: [],
    flingPower: 60,
  },
  "razor-claw": {
    id: 303,
    key: "razor-claw",
    names: {
      ja: "するどいツメ",
      en: "Razor Claw",
    },
    descriptions: {
      ja: "するどく　とがった　ツメ。 もたせると　わざが　きゅうしょに あたりやすくなる。",
      en: "An item to be held by a Pokémon. It is a sharply hooked claw that ups the holder’s critical-hit ratio.",
    },
    effects: [],
    flingPower: 80,
  },
  "grip-claw": {
    id: 263,
    key: "grip-claw",
    names: {
      ja: "ねばりのかぎづめ",
      en: "Grip Claw",
    },
    descriptions: {
      ja: "もたせると　しめつける　まきつくなど ダメージを　あたえつづける　わざの ターンすうが　ふえる。",
      en: "A Pokémon hold item that extends the duration of multiturn attacks like Bind and Wrap.",
    },
    effects: [],
    flingPower: 90,
  },
  "kings-rock": {
    id: 198,
    key: "kings-rock",
    names: {
      ja: "おうじゃのしるし",
      en: "King’s Rock",
    },
    descriptions: {
      ja: "もたせると　こうげきして ダメージを　あたえたときに あいてを　ひるませることが　ある。",
      en: "A hold item that may cause flinching when the foe is hit.",
    },
    effects: [],
    flingPower: 30,
  },
  "throat-spray": {
    id: 1176,
    key: "throat-spray",
    names: {
      ja: "のどスプレー",
      en: "Throat Spray",
    },
    descriptions: {
      ja: "おとに　かんする　わざを　つかうと とくこうが　あがる。",
      en: "Raises Sp. Atk when a Pokémon uses a sound-based move.",
    },
    effects: [],
    flingPower: 30,
  },
  "destiny-knot": {
    id: 257,
    key: "destiny-knot",
    names: {
      ja: "あかいいと",
      en: "Destiny Knot",
    },
    descriptions: {
      ja: "ほそくて　ながい　まっかな　いと。 もたせると　メロメロに　なったとき あいても　メロメロに　できる。",
      en: "A long, thin, bright red string to be held by a Pokémon. If the holder becomes infatuated, the foe does too.",
    },
    effects: [],
    flingPower: 10,
  },
  "life-orb": {
    id: 247,
    key: "life-orb",
    names: {
      ja: "いのちのたま",
      en: "Life Orb",
    },
    descriptions: {
      ja: "もたせると　こうげきする　たびに ＨＰが　すこし　へってしまうが わざの　いりょくが　あがる。",
      en: "An item to be held by a Pokémon. It boosts the power of moves, but at the cost of some HP on each hit.",
    },
    effects: lifeOrbEffects,
    flingPower: 30,
  },
  eviolite: {
    id: 581,
    key: "eviolite",
    names: {
      ja: "しんかのきせき",
      en: "Eviolite",
    },
    descriptions: {
      ja: "しんかの　ふしぎな　かたまり。 もたせると　しんかまえ　ポケモンの ぼうぎょと　とくぼうが　あがる。",
      en: "A mysterious evolutionary lump. When held, it raises the Defense and Sp. Def of a Pokémon that can still evolve.",
    },
    effects: evioliteEffects,
    flingPower: 40,
  },
  "assault-vest": {
    id: 683,
    key: "assault-vest",
    names: {
      ja: "とつげきチョッキ",
      en: "Assault Vest",
    },
    descriptions: {
      ja: "こうげきてきに　なる　チョッキ。 もたせると　とくぼうが　あがるが へんかわざを　だせなくなる。",
      en: "An item to be held by a Pokémon. This offensive vest raises Sp. Def but prevents the use of status moves.",
    },
    effects: assaultVestEffects,
    flingPower: 80,
  },
  "weakness-policy": {
    id: 682,
    key: "weakness-policy",
    names: {
      ja: "じゃくてんほけん",
      en: "Weakness Policy",
    },
    descriptions: {
      ja: "じゃくてんを　つかれたとき こうげきと　とくこうが それぞれ　ぐーんと　あがる。",
      en: "An item to be held by a Pokémon. Attack and Sp. Atk sharply increase if the holder is hit with a move it’s weak to.",
    },
    effects: [],
    flingPower: 80,
  },
  "blunder-policy": {
    id: 1179,
    key: "blunder-policy",
    names: {
      ja: "からぶりほけん",
      en: "Blunder Policy",
    },
    descriptions: {
      ja: "めいちゅうりつに　よって わざが　はずれたとき すばやさが　ぐーんと　あがる。",
      en: "Raises Speed sharply when a Pokémon misses with a move because of accuracy.",
    },
    effects: [],
    flingPower: 80,
  },
  "soft-sand": {
    id: 214,
    key: "soft-sand",
    names: {
      ja: "やわらかいすな",
      en: "Soft Sand",
    },
    descriptions: {
      ja: "さわると　サラサラする　すな。 もたせると　じめんタイプの わざの　いりょくが　あがる。",
      en: "A hold item that raises the power of GROUND-type moves.",
    },
    effects: createTypeBoostEffects("ground"),
    flingPower: 10,
  },
  "black-glasses": {
    id: 217,
    key: "black-glasses",
    names: {
      ja: "くろいメガネ",
      en: "Black Glasses",
    },
    descriptions: {
      ja: "あやしく　みえる　メガネ。 もたせると　あくタイプの わざの　いりょくが　あがる。",
      en: "A hold item that raises the power of DARK-type moves.",
    },
    effects: createTypeBoostEffects("dark"),
    flingPower: 30,
  },
  "black-belt": {
    id: 218,
    key: "black-belt",
    names: {
      ja: "くろおび",
      en: "Black Belt",
    },
    descriptions: {
      ja: "きが　ひきしまる　おび。 もたせると　かくとうタイプの わざの　いりょくが　あがる。",
      en: "A hold item that boosts FIGHTING- type moves.",
    },
    effects: createTypeBoostEffects("fighting"),
    flingPower: 30,
  },
  "never-melt-ice": {
    id: 223,
    key: "never-melt-ice",
    names: {
      ja: "とけないこおり",
      en: "Never-Melt Ice",
    },
    descriptions: {
      ja: "ねつを　よせつけない　こおり。 もたせると　こおりタイプの わざの　いりょくが　あがる。",
      en: "A hold item that raises the power of ICE-type moves.",
    },
    effects: createTypeBoostEffects("ice"),
    flingPower: 30,
  },
  "twisted-spoon": {
    id: 225,
    key: "twisted-spoon",
    names: {
      ja: "まがったスプーン",
      en: "Twisted Spoon",
    },
    descriptions: {
      ja: "ねんりきを　こめた　スプーン。 もたせると　エスパータイプの わざの　いりょくが　あがる。",
      en: "A hold item that boosts PSYCHIC- type moves.",
    },
    effects: createTypeBoostEffects("psychic"),
    flingPower: 30,
  },
  "metal-coat": {
    id: 210,
    key: "metal-coat",
    names: {
      ja: "メタルコート",
      en: "Metal Coat",
    },
    descriptions: {
      ja: "とくしゅな　きんぞくの　まく。 もたせると　はがねタイプの わざの　いりょくが　あがる。",
      en: "A hold item that raises the power of STEEL-type moves.",
    },
    effects: createTypeBoostEffects("steel"),
    flingPower: 30,
  },
  "shell-bell": {
    id: 230,
    key: "shell-bell",
    names: {
      ja: "かいがらのすず",
      en: "Shell Bell",
    },
    descriptions: {
      ja: "もたせた　ポケモンが　こうげきして あいてに　ダメージを　あたえたとき ＨＰを　すこし　かいふく　できる。",
      en: "A hold item that restores HP upon striking the foe.",
    },
    effects: [],
    flingPower: 30,
  },
  metronome: {
    id: 254,
    key: "metronome",
    names: {
      ja: "メトロノーム",
      en: "Metronome",
    },
    descriptions: {
      ja: "もたせると　おなじわざを　れんぞくで つかったとき　いりょくが　あがる。 やめると　いりょくは　もどる。",
      en: "A Pokémon hold item that boosts a move used consecutively. Its effect is reset if another move is used.",
    },
    effects: [],
    flingPower: 30,
  },
  "scope-lens": {
    id: 209,
    key: "scope-lens",
    names: {
      ja: "ピントレンズ",
      en: "Scope Lens",
    },
    descriptions: {
      ja: "じゃくてんが　みえる　レンズ。 もたせた　ポケモンの　わざが きゅうしょに　あたりやすくなる。",
      en: "A hold item that raises the critical- hit rate.",
    },
    effects: [],
    flingPower: 30,
  },
  "wide-lens": {
    id: 242,
    key: "wide-lens",
    names: {
      ja: "こうかくレンズ",
      en: "Wide Lens",
    },
    descriptions: {
      ja: "ものが　おおきく　みえる　レンズ。 もたせると　わざの　めいちゅうりつが すこし　あがる。",
      en: "An item to be held by a Pokémon. It is a magnifying lens that slightly boosts the accuracy of moves.",
    },
    effects: [],
    flingPower: 10,
  },
  "zoom-lens": {
    id: 253,
    key: "zoom-lens",
    names: {
      ja: "フォーカスレンズ",
      en: "Zoom Lens",
    },
    descriptions: {
      ja: "もたせた　ポケモンが　あいてよりも こうどうするのが　おそいとき わざが　めいちゅう　しやすくなる。",
      en: "An item to be held by a Pokémon. If the holder moves after the foe, its critical-hit ratio will be boosted.",
    },
    effects: [],
    flingPower: 10,
  },
  "safety-goggles": {
    id: 690,
    key: "safety-goggles",
    names: {
      ja: "ぼうじんゴーグル",
      en: "Safety Goggles",
    },
    descriptions: {
      ja: "てんこうの　ダメージだけでなく こなを　だす　わざの こうかも　ふせげる　ゴーグル。",
      en: "An item to be held by a Pokémon. These goggles protect the holder from both weather-related damage and powder.",
    },
    effects: [],
    flingPower: 80,
  },
  "protective-pads": {
    id: 897,
    key: "protective-pads",
    names: {
      ja: "ぼうごパット",
      en: "Protective Pads",
    },
    descriptions: {
      ja: "こうげき　する　あいてに さわって　うける　こうかを うけないように　する。",
      en: "An item to be held by a Pokémon. These pads protect the holder from effects caused by making direct contact with the target.",
    },
    effects: [],
    flingPower: 30,
  },
  "heavy-duty-boots": {
    id: 1178,
    key: "heavy-duty-boots",
    names: {
      ja: "あつぞこブーツ",
      en: "Heavy-Duty Boots",
    },
    descriptions: {
      ja: "あしばに　しかけられた わななどの　えいきょうを　うけなくなる。",
      en: "These boots prevent the effects of traps set on the battlefield.",
    },
    effects: [],
    flingPower: 80,
  },
  "eject-button": {
    id: 590,
    key: "eject-button",
    names: {
      ja: "だっしゅつボタン",
      en: "Eject Button",
    },
    descriptions: {
      ja: "もたせて　わざを　うけると せんとうから　だっしゅつして てもちと　いれかわる　ことができる。",
      en: "If the holder is hit by an attack, it will switch with another Pokémon in your party.",
    },
    effects: [],
    flingPower: 30,
  },
  "eject-pack": {
    id: 1177,
    key: "eject-pack",
    names: {
      ja: "だっしゅつパック",
      en: "Eject Pack",
    },
    descriptions: {
      ja: "もたせた　ポケモンの のうりょくが　さがると てもちと　いれかわる。",
      en: "An item to be held by a Pokémon. When the holder’s stats are lowered, it will be switched out of battle.",
    },
    effects: [],
    flingPower: 50,
  },
  "adrenaline-orb": {
    id: 883,
    key: "adrenaline-orb",
    names: {
      ja: "ビビリだま",
      en: "Adrenaline Orb",
    },
    descriptions: {
      ja: "つかうと　なかまを　よびやすくなる。 もたせると　いかくを　うけたとき すばやさが　あがる。　つかうとなくなる。",
      en: "Using it makes wild Pokémon more likely to call for help. If held by a Pokémon, it boosts Speed when intimidated. It can be used only once.",
    },
    effects: [],
    flingPower: 30,
  },
  "black-sludge": {
    id: 258,
    key: "black-sludge",
    names: {
      ja: "くろいヘドロ",
      en: "Black Sludge",
    },
    descriptions: {
      ja: "もたせると　どくタイプの　ポケモンは すこしずつ　ＨＰを　かいふくする。 それいがいは　ＨＰが　へってしまう。",
      en: "A hold item that gradually restores the HP of Poison-type Pokémon. It inflicts damage on all other types.",
    },
    effects: [],
    flingPower: 30,
  },
  "binding-band": {
    id: 587,
    key: "binding-band",
    names: {
      ja: "しめつけバンド",
      en: "Binding Band",
    },
    descriptions: {
      ja: "しめつけるわざを　ほじょする　バンド。 もたせると　しめつけるわざの いりょくが　つよく　なる。",
      en: "A band that increases the power of binding moves when held.",
    },
    effects: [],
    flingPower: 30,
  },
  "flame-orb": {
    id: 250,
    key: "flame-orb",
    names: {
      ja: "かえんだま",
      en: "Flame Orb",
    },
    descriptions: {
      ja: "さわると　ねつをだす　ふしぎなたま。 もたせると　せんとうちゅうに やけどの　じょうたいに　なる。",
      en: "An item to be held by a Pokémon. It is a bizarre orb that inflicts a burn on the holder in battle.",
    },
    effects: [],
    flingPower: 30,
  },
  "toxic-orb": {
    id: 249,
    key: "toxic-orb",
    names: {
      ja: "どくどくだま",
      en: "Toxic Orb",
    },
    descriptions: {
      ja: "さわると　どくをだす　ふしぎなたま。 もたせると　せんとうちゅうに もうどくの　じょうたいに　なる。",
      en: "An item to be held by a Pokémon. It is a bizarre orb that badly poisons the holder in battle.",
    },
    effects: [],
    flingPower: 30,
  },
  "red-card": {
    id: 585,
    key: "red-card",
    names: {
      ja: "レッドカード",
      en: "Red Card",
    },
    descriptions: {
      ja: "ふしぎな　ちからのある　カード。 もたせると　わざをうけた　あいてを たいじょう　させることが　できる。",
      en: "A card with a mysterious power. When the holder is struck by a foe, the attacker is removed from battle.",
    },
    effects: [],
    flingPower: 10,
  },
  "room-service": {
    id: 1180,
    key: "room-service",
    names: {
      ja: "ルームサービス",
      en: "Room Service",
    },
    descriptions: {
      ja: "ポケモンに　もたせると トリックルームのときに　つかって すばやさが　さがる。",
      en: "An item to be held by a Pokémon. Lowers Speed when Trick Room takes effect.",
    },
    effects: [],
    flingPower: 100,
  },
  "lagging-tail": {
    id: 256,
    key: "lagging-tail",
    names: {
      ja: "こうこうのしっぽ",
      en: "Lagging Tail",
    },
    descriptions: {
      ja: "とても　おもたい　なにかの　しっぽ。 もたせると　いつもより　こうどうが おそくなる。",
      en: "An item to be held by a Pokémon. It is tremendously heavy and makes the holder move slower than usual.",
    },
    effects: [],
    flingPower: 10,
  },
  "sticky-barb": {
    id: 265,
    key: "sticky-barb",
    names: {
      ja: "くっつきバリ",
      en: "Sticky Barb",
    },
    descriptions: {
      ja: "もたせると　まいターン　ダメージを うける。　じぶんに　ふれてきた あいてに　くっつくことも　ある。",
      en: "A hold item that damages the holder on every turn. It may latch on to foes that touch the holder.",
    },
    effects: [],
    flingPower: 80,
  },
  "ring-target": {
    id: 586,
    key: "ring-target",
    names: {
      ja: "ねらいのまと",
      en: "Ring Target",
    },
    descriptions: {
      ja: "ポケモンの　タイプの　あいしょうで むこう　だった　わざが あたるように　なってしまう。",
      en: "Moves that would otherwise have no effect will land on the Pokémon that holds it.",
    },
    effects: [],
    flingPower: 10,
  },
  magnet: {
    id: 219,
    key: "magnet",
    names: {
      ja: "じしゃく",
      en: "Magnet",
    },
    descriptions: {
      ja: "きょうりょくな　じしゃく。 もたせると　でんきタイプの わざの　いりょくが　あがる。",
      en: "A hold item that boosts ELECTRIC- type moves.",
    },
    effects: createTypeBoostEffects("electric"),
    flingPower: 30,
  },
  "hard-stone": {
    id: 215,
    key: "hard-stone",
    names: {
      ja: "かたいいし",
      en: "Hard Stone",
    },
    descriptions: {
      ja: "ぜったいに　われない　いし。 もたせると　いわタイプの わざの　いりょくが　あがる。",
      en: "A hold item that raises the power of ROCK-type moves.",
    },
    effects: createTypeBoostEffects("rock"),
    flingPower: 100,
  },
  "poison-barb": {
    id: 222,
    key: "poison-barb",
    names: {
      ja: "どくバリ",
      en: "Poison Barb",
    },
    descriptions: {
      ja: "どくのある　ちいさな　ハリ。 もたせると　どくタイプの わざの　いりょくが　あがる。",
      en: "A hold item that raises the power of POISON-type moves.",
    },
    effects: createTypeBoostEffects("poison"),
    flingPower: 70,
  },
  "spell-tag": {
    id: 224,
    key: "spell-tag",
    names: {
      ja: "のろいのおふだ",
      en: "Spell Tag",
    },
    descriptions: {
      ja: "あやしくて　ぶきみな　おふだ。 もたせると　ゴーストタイプの わざの　いりょくが　あがる。",
      en: "A hold item that raises the power of GHOST-type moves.",
    },
    effects: createTypeBoostEffects("ghost"),
    flingPower: 30,
  },
  "dragon-fang": {
    id: 227,
    key: "dragon-fang",
    names: {
      ja: "りゅうのキバ",
      en: "Dragon Fang",
    },
    descriptions: {
      ja: "かたくて　するどい　キバ。 もたせると　ドラゴンタイプの わざの　いりょくが　あがる。",
      en: "A hold item that raises the power of DRAGON-type moves.",
    },
    effects: createTypeBoostEffects("dragon"),
    flingPower: 70,
  },
  "normal-gem": {
    id: 669,
    key: "normal-gem",
    names: {
      ja: "ノーマルジュエル",
      en: "Normal Gem",
    },
    descriptions: {
      ja: "ノーマルの　タイプの　ジュエル。 もたせると　いちどだけ　ノーマルの わざの　いりょくが　つよまる。",
      en: "A gem with an ordinary essence. When held, it strengthens the power of a Normal-type move only once.",
    },
    effects: [],
    flingPower: null,
  },
  leftovers: {
    id: 211,
    key: "leftovers",
    names: {
      ja: "たべのこし",
      en: "Leftovers",
    },
    descriptions: {
      ja: "もたせると　ポケモンの　ＨＰが せんとうの　あいだ　すこしずつ かいふくする。",
      en: "A hold item that gradually restores HP in battle.",
    },
    effects: leftoversEffects,
    flingPower: 10,
  },
  "big-root": {
    id: 273,
    key: "big-root",
    names: {
      ja: "おおきなねっこ",
      en: "Big Root",
    },
    descriptions: {
      ja: "もたせると　ＨＰを　すいとる　わざで いつもより　おおく　じぶんの　ＨＰを かいふくできる。",
      en: "A Pokémon hold item that boosts the power of HP-stealing moves to let the holder recover more HP.",
    },
    effects: [],
    flingPower: 10,
  },
  "light-clay": {
    id: 246,
    key: "light-clay",
    names: {
      ja: "ひかりのねんど",
      en: "Light Clay",
    },
    descriptions: {
      ja: "もたせた　ポケモンが　ひかりのかべや リフレクターを　つかったとき いつもよりも　ながく　のこる。",
      en: "A Pokémon hold item that extends the duration of barrier moves like Light Screen and Reflect used by the holder.",
    },
    effects: [],
    flingPower: 30,
  },
  "utility-umbrella": {
    id: 1181,
    key: "utility-umbrella",
    names: {
      ja: "ばんのうがさ",
      en: "Utility Umbrella",
    },
    descriptions: {
      ja: "もたせた　ポケモンは あめと　ひざしがつよいときの えいきょうを　うけなくなる。",
      en: "An item to be held by a Pokémon. This sturdy umbrella protects the holder from the effects of rain and harsh sunlight.",
    },
    effects: [],
    flingPower: 60,
  },
  "air-balloon": {
    id: 584,
    key: "air-balloon",
    names: {
      ja: "ふうせん",
      en: "Air Balloon",
    },
    descriptions: {
      ja: "ポケモンに　もたせると ポケモンが　ちゅうに　うく。 こうげきを　うけると　われてしまう。",
      en: "When held by a Pokémon, the Pokémon will float into the air. When the holder is attacked, this item will burst.",
    },
    effects: [],
    flingPower: 10,
  },
  "shed-shell": {
    id: 272,
    key: "shed-shell",
    names: {
      ja: "きれいなぬけがら",
      en: "Shed Shell",
    },
    descriptions: {
      ja: "じょうぶで　かたい　ぬけがら。 もたせた　ポケモンは　ひかえの ポケモンと　かならず　いれかわれる。",
      en: "A tough, discarded carapace to be held by a Pokémon. It enables the holder to switch with a waiting Pokémon in battle.",
    },
    effects: [],
    flingPower: 10,
  },
  "white-herb": {
    id: 191,
    key: "white-herb",
    names: {
      ja: "しろいハーブ",
      en: "White Herb",
    },
    descriptions: {
      ja: "もたせた　ポケモンの　のうりょくが さがったとき　いちどだけ　もとの じょうたいに　もどす。",
      en: "A hold item that restores any lowered stat.",
    },
    effects: [],
    flingPower: 10,
  },
  "mental-herb": {
    id: 196,
    key: "mental-herb",
    names: {
      ja: "メンタルハーブ",
      en: "Mental Herb",
    },
    descriptions: {
      ja: "もたせた　ポケモンが　じゆうに わざを　だせなくなったときに いちどだけ　かいふくする。",
      en: "A hold item that snaps POKéMON out of infatuation.",
    },
    effects: [],
    flingPower: 10,
  },
  "absorb-bulb": {
    id: 588,
    key: "absorb-bulb",
    names: {
      ja: "きゅうこん",
      en: "Absorb Bulb",
    },
    descriptions: {
      ja: "つかいすての　きゅうこん。 もたせて　みずの　わざを　うけると とくこうが　あがる。",
      en: "A consumable bulb. If the holder is hit by a Water-type move, its Sp. Atk will rise.",
    },
    effects: [],
    flingPower: 30,
  },
  "cell-battery": {
    id: 589,
    key: "cell-battery",
    names: {
      ja: "じゅうでんち",
      en: "Cell Battery",
    },
    descriptions: {
      ja: "つかいすての　じゅうでんち。 もたせて　でんきの　わざを　うけると こうげきが　あがる。",
      en: "A consumable battery. If the holder is hit by an Electric-type move, its Attack will rise.",
    },
    effects: [],
    flingPower: 30,
  },
  "luminous-moss": {
    id: 688,
    key: "luminous-moss",
    names: {
      ja: "ひかりごけ",
      en: "Luminous Moss",
    },
    descriptions: {
      ja: "つかいすての　ひかりごけ。 もたせて　みずの　わざを　うけると とくぼうが　あがる。",
      en: "An item to be held by a Pokémon. It boosts Sp. Def if hit with a Water- type attack. It can only be used once.",
    },
    effects: [],
    flingPower: 30,
  },
  snowball: {
    id: 689,
    key: "snowball",
    names: {
      ja: "ゆきだま",
      en: "Snowball",
    },
    descriptions: {
      ja: "つかいすての　ゆきだま。 もたせて　こおりの　わざを　うけると こうげきが　あがる。",
      en: "An item to be held by a Pokémon. It boosts Attack if hit with an Ice-type attack. It can only be used once.",
    },
    effects: [],
    flingPower: 30,
  },
  "heat-rock": {
    id: 261,
    key: "heat-rock",
    names: {
      ja: "あついいわ",
      en: "Heat Rock",
    },
    descriptions: {
      ja: "もたせた　ポケモンが　にほんばれを つかうと　いつもより　はれの じかんが　ながくなる。",
      en: "A Pokémon hold item that extends the duration of the move Sunny Day used by the holder.",
    },
    effects: [],
    flingPower: 60,
  },
  "damp-rock": {
    id: 262,
    key: "damp-rock",
    names: {
      ja: "しめったいわ",
      en: "Damp Rock",
    },
    descriptions: {
      ja: "もたせた　ポケモンが　あまごいを つかうと　いつもより　あめの じかんが　ながくなる。",
      en: "A Pokémon hold item that extends the duration of the move Rain Dance used by the holder.",
    },
    effects: [],
    flingPower: 60,
  },
  "smooth-rock": {
    id: 260,
    key: "smooth-rock",
    names: {
      ja: "さらさらいわ",
      en: "Smooth Rock",
    },
    descriptions: {
      ja: "もたせた　ポケモンが　すなあらしを つかうと　いつもより　すなあらしの じかんが　ながくなる。",
      en: "A Pokémon hold item that extends the duration of the move Sandstorm used by the holder.",
    },
    effects: [],
    flingPower: 10,
  },
  "icy-rock": {
    id: 259,
    key: "icy-rock",
    names: {
      ja: "つめたいいわ",
      en: "Icy Rock",
    },
    descriptions: {
      ja: "もたせた　ポケモンが　あられを つかうと　いつもより　あられの じかんが　ながくなる。",
      en: "A Pokémon hold item that extends the duration of the move Hail used by the holder.",
    },
    effects: [],
    flingPower: 40,
  },
  "bright-powder": {
    id: 190,
    key: "bright-powder",
    names: {
      ja: "ひかりのこな",
      en: "Bright Powder",
    },
    descriptions: {
      ja: "キラキラ　ひかるこな。　もたせると ひかりが　あいてを　まどわして わざが　めいちゅう　しにくくなる。",
      en: "A hold item that casts a glare to reduce accuracy.",
    },
    effects: [],
    flingPower: 10,
  },
  "terrain-extender": {
    id: 896,
    key: "terrain-extender",
    names: {
      ja: "グランドコート",
      en: "Terrain Extender",
    },
    descriptions: {
      ja: "もたせた　ポケモンが　わざや とくせいで　フィールドを　はったとき いつもよりも　ながく　のこる。",
      en: "An item to be held by a Pokémon. It extends the duration of the terrain caused by the holder’s move or Ability.",
    },
    effects: [],
    flingPower: 60,
  },
  "power-herb": {
    id: 248,
    key: "power-herb",
    names: {
      ja: "パワフルハーブ",
      en: "Power Herb",
    },
    descriptions: {
      ja: "もたせた　ポケモンは　いちどだけ １ターンめに　ちからを　ためるわざを すぐに　つかうことが　できる。",
      en: "A single-use item to be held by a Pokémon. It allows the immediate use of a move that charges on the first turn.",
    },
    effects: [],
    flingPower: 10,
  },
  "electric-seed": {
    id: 898,
    key: "electric-seed",
    names: {
      ja: "エレキシード",
      en: "Electric Seed",
    },
    descriptions: {
      ja: "ポケモンに　もたせると エレキフィールドのときに　つかって ぼうぎょが　あがる。",
      en: "An item to be held by a Pokémon. It boosts Defense on Electric Terrain. It can only be used once.",
    },
    effects: [],
    flingPower: 10,
  },
  "psychic-seed": {
    id: 899,
    key: "psychic-seed",
    names: {
      ja: "サイコシード",
      en: "Psychic Seed",
    },
    descriptions: {
      ja: "ポケモンに　もたせると サイコフィールドのときに　つかって とくぼうが　あがる。",
      en: "An item to be held by a Pokémon. It boosts Sp. Def on Psychic Terrain. It can only be used once.",
    },
    effects: [],
    flingPower: 10,
  },
  "misty-seed": {
    id: 900,
    key: "misty-seed",
    names: {
      ja: "ミストシード",
      en: "Misty Seed",
    },
    descriptions: {
      ja: "ポケモンに　もたせると ミストフィールドのときに　つかって とくぼうが　あがる。",
      en: "An item to be held by a Pokémon. It boosts Sp. Def on Misty Terrain. It can only be used once.",
    },
    effects: [],
    flingPower: 10,
  },
  "grassy-seed": {
    id: 901,
    key: "grassy-seed",
    names: {
      ja: "グラスシード",
      en: "Grassy Seed",
    },
    descriptions: {
      ja: "ポケモンに　もたせると グラスフィールドのときに　つかって ぼうぎょが　あがる。",
      en: "An item to be held by a Pokémon. It boosts Defense on Grassy Terrain. It can only be used once.",
    },
    effects: [],
    flingPower: 10,
  },
  "flame-plate": {
    id: 275,
    key: "flame-plate",
    names: {
      ja: "ひのたまプレート",
      en: "Flame Plate",
    },
    descriptions: {
      ja: "ほのおの　タイプの　せきばん。 もたせると　ほのおタイプの わざの　いりょくが　つよまる。",
      en: "An item to be held by a Pokémon. It is a stone tablet that boosts the power of Fire-type moves.",
    },
    effects: [],
    flingPower: 90,
  },
  "splash-plate": {
    id: 276,
    key: "splash-plate",
    names: {
      ja: "しずくプレート",
      en: "Splash Plate",
    },
    descriptions: {
      ja: "みずの　タイプの　せきばん。 もたせると　みずタイプの わざの　いりょくが　つよまる。",
      en: "An item to be held by a Pokémon. It is a stone tablet that boosts the power of Water-type moves.",
    },
    effects: [],
    flingPower: 90,
  },
  "zap-plate": {
    id: 277,
    key: "zap-plate",
    names: {
      ja: "いかずちプレート",
      en: "Zap Plate",
    },
    descriptions: {
      ja: "でんきの　タイプの　せきばん。 もたせると　でんきタイプの わざの　いりょくが　つよまる。",
      en: "An item to be held by a Pokémon. It is a stone tablet that boosts the power of Electric-type moves.",
    },
    effects: [],
    flingPower: 90,
  },
  "meadow-plate": {
    id: 278,
    key: "meadow-plate",
    names: {
      ja: "みどりのプレート",
      en: "Meadow Plate",
    },
    descriptions: {
      ja: "くさの　タイプの　せきばん。 もたせると　くさタイプの わざの　いりょくが　つよまる。",
      en: "An item to be held by a Pokémon. It is a stone tablet that boosts the power of Grass-type moves.",
    },
    effects: [],
    flingPower: 90,
  },
  "icicle-plate": {
    id: 279,
    key: "icicle-plate",
    names: {
      ja: "つららのプレート",
      en: "Icicle Plate",
    },
    descriptions: {
      ja: "こおりの　タイプの　せきばん。 もたせると　こおりタイプの わざの　いりょくが　つよまる。",
      en: "An item to be held by a Pokémon. It is a stone tablet that boosts the power of Ice-type moves.",
    },
    effects: [],
    flingPower: 90,
  },
  "fist-plate": {
    id: 280,
    key: "fist-plate",
    names: {
      ja: "こぶしのプレート",
      en: "Fist Plate",
    },
    descriptions: {
      ja: "かくとうの　タイプの　せきばん。 もたせると　かくとうタイプの わざの　いりょくが　つよまる。",
      en: "An item to be held by a Pokémon. It is a stone tablet that boosts the power of Fighting-type moves.",
    },
    effects: [],
    flingPower: 90,
  },
  "toxic-plate": {
    id: 281,
    key: "toxic-plate",
    names: {
      ja: "もうどくプレート",
      en: "Toxic Plate",
    },
    descriptions: {
      ja: "どくの　タイプの　せきばん。 もたせると　どくタイプの わざの　いりょくが　つよまる。",
      en: "An item to be held by a Pokémon. It is a stone tablet that boosts the power of Poison-type moves.",
    },
    effects: [],
    flingPower: 90,
  },
  "earth-plate": {
    id: 282,
    key: "earth-plate",
    names: {
      ja: "だいちのプレート",
      en: "Earth Plate",
    },
    descriptions: {
      ja: "じめんの　タイプの　せきばん。 もたせると　じめんタイプの わざの　いりょくが　つよまる。",
      en: "An item to be held by a Pokémon. It is a stone tablet that boosts the power of Ground-type moves.",
    },
    effects: [],
    flingPower: 90,
  },
  "sky-plate": {
    id: 283,
    key: "sky-plate",
    names: {
      ja: "あおぞらプレート",
      en: "Sky Plate",
    },
    descriptions: {
      ja: "ひこうの　タイプの　せきばん。 もたせると　ひこうタイプの わざの　いりょくが　つよまる。",
      en: "An item to be held by a Pokémon. It is a stone tablet that boosts the power of Flying-type moves.",
    },
    effects: [],
    flingPower: 90,
  },
  "mind-plate": {
    id: 284,
    key: "mind-plate",
    names: {
      ja: "ふしぎのプレート",
      en: "Mind Plate",
    },
    descriptions: {
      ja: "エスパーの　タイプの　せきばん。 もたせると　エスパータイプの わざの　いりょくが　つよまる。",
      en: "An item to be held by a Pokémon. It is a stone tablet that boosts the power of Psychic-type moves.",
    },
    effects: [],
    flingPower: 90,
  },
  "insect-plate": {
    id: 285,
    key: "insect-plate",
    names: {
      ja: "たまむしプレート",
      en: "Insect Plate",
    },
    descriptions: {
      ja: "むしの　タイプの　せきばん。 もたせると　むしタイプの わざの　いりょくが　つよまる。",
      en: "An item to be held by a Pokémon. It is a stone tablet that boosts the power of Bug-type moves.",
    },
    effects: [],
    flingPower: 90,
  },
  "stone-plate": {
    id: 286,
    key: "stone-plate",
    names: {
      ja: "がんせきプレート",
      en: "Stone Plate",
    },
    descriptions: {
      ja: "いわの　タイプの　せきばん。 もたせると　いわタイプの わざの　いりょくが　つよまる。",
      en: "An item to be held by a Pokémon. It is a stone tablet that boosts the power of Rock-type moves.",
    },
    effects: [],
    flingPower: 90,
  },
  "spooky-plate": {
    id: 287,
    key: "spooky-plate",
    names: {
      ja: "もののけプレート",
      en: "Spooky Plate",
    },
    descriptions: {
      ja: "ゴーストの　タイプの　せきばん。 もたせると　ゴーストタイプの わざの　いりょくが　つよまる。",
      en: "An item to be held by a Pokémon. It is a stone tablet that boosts the power of Ghost-type moves.",
    },
    effects: [],
    flingPower: 90,
  },
  "draco-plate": {
    id: 288,
    key: "draco-plate",
    names: {
      ja: "りゅうのプレート",
      en: "Draco Plate",
    },
    descriptions: {
      ja: "ドラゴンの　タイプの　せきばん。 もたせると　ドラゴンタイプの わざの　いりょくが　つよまる。",
      en: "An item to be held by a Pokémon. It is a stone tablet that boosts the power of Dragon-type moves.",
    },
    effects: [],
    flingPower: 90,
  },
  "dread-plate": {
    id: 289,
    key: "dread-plate",
    names: {
      ja: "こわもてプレート",
      en: "Dread Plate",
    },
    descriptions: {
      ja: "あくの　タイプの　せきばん。 もたせると　あくタイプの わざの　いりょくが　つよまる。",
      en: "An item to be held by a Pokémon. It is a stone tablet that boosts the power of Dark-type moves.",
    },
    effects: [],
    flingPower: 90,
  },
  "iron-plate": {
    id: 290,
    key: "iron-plate",
    names: {
      ja: "こうてつプレート",
      en: "Iron Plate",
    },
    descriptions: {
      ja: "はがねの　タイプの　せきばん。 もたせると　はがねタイプの わざの　いりょくが　つよまる。",
      en: "An item to be held by a Pokémon. It is a stone tablet that boosts the power of Steel-type moves.",
    },
    effects: [],
    flingPower: 90,
  },
  "pixie-plate": {
    id: 684,
    key: "pixie-plate",
    names: {
      ja: "せいれいプレート",
      en: "Pixie Plate",
    },
    descriptions: {
      ja: "フェアリーの　タイプの　せきばん。 もたせると　フェアリータイプの わざの　いりょくが　つよまる。",
      en: "An item to be held by a Pokémon. It is a stone tablet that boosts the power of Fairy-type moves.",
    },
    effects: [],
    flingPower: 90,
  },
  "soul-dew": {
    id: 202,
    key: "soul-dew",
    names: {
      ja: "こころのしずく",
      en: "Soul Dew",
    },
    descriptions: {
      ja: "ラティオス　または　ラティアスに もたせると　とくこうと　とくぼうが あがる　ふしぎな　たま。",
      en: "Hold item: Raises SP. ATK & SP. DEF of LATIOS & LATIAS.",
    },
    effects: [],
    flingPower: 30,
  },
  "adamant-orb": {
    id: 112,
    key: "adamant-orb",
    names: {
      ja: "こんごうだま",
      en: "Adamant Orb",
    },
    descriptions: {
      ja: "ディアルガに　もたせると　ドラゴンと はがねタイプの　わざの　いりょくが あがる　ひかり　かがやく　たま。",
      en: "A brightly gleaming orb to be held by DIALGA. It boosts the power of Dragon-​ and Steel-type moves.",
    },
    effects: [],
    flingPower: 60,
  },
  "adamant-crystal": {
    id: 1659,
    key: "adamant-crystal",
    names: {
      ja: "だいこんごうだま",
      en: "Adamant Crystal",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: null,
  },
  "lustrous-orb": {
    id: 113,
    key: "lustrous-orb",
    names: {
      ja: "しらたま",
      en: "Lustrous Orb",
    },
    descriptions: {
      ja: "パルキアに　もたせると　ドラゴンと みずタイプの　わざの　いりょくが あがる　うつくしく　かがやく　たま。",
      en: "A beautifully glowing orb to be held by PALKIA. It boosts the power of Dragon-​ and Water-type moves.",
    },
    effects: [],
    flingPower: 60,
  },
  "lustrous-globe": {
    id: 1660,
    key: "lustrous-globe",
    names: {
      ja: "だいしらたま",
      en: "Lustrous Globe",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: null,
  },
  "griseous-orb": {
    id: 442,
    key: "griseous-orb",
    names: {
      ja: "はっきんだま",
      en: "Griseous Orb",
    },
    descriptions: {
      ja: "ギラティナに　もたせると　ドラゴンと ゴーストタイプの　わざの　いりょくが あがる　ひかり　かがやく　たま。",
      en: "A glowing orb to be held by GIRATINA. It boosts the power of Dragon- and Ghost-type moves.",
    },
    effects: [],
    flingPower: 60,
  },
  "griseous-core": {
    id: 1661,
    key: "griseous-core",
    names: {
      ja: "だいはっきんだま",
      en: "Griseous Core",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: null,
  },
  "rusted-sword": {
    id: 1161,
    key: "rusted-sword",
    names: {
      ja: "くちたけん",
      en: "Rusted Sword",
    },
    descriptions: {
      ja: "おおむかしの　えいゆうが　さいやくを うちはらったと　つたえられる　けん　だが いまは　さびて　ボロボロに　なっている。",
      en: "It is said that a hero used this sword to halt a terrible disaster in ancient times. But it’s grown rusty and worn.",
    },
    effects: [],
    flingPower: null,
  },
  "rusted-shield": {
    id: 1162,
    key: "rusted-shield",
    names: {
      ja: "くちたたて",
      en: "Rusted Shield",
    },
    descriptions: {
      ja: "おおむかしの　えいゆうが　さいやくを うちはらったと　つたえられる　たて　だが いまは　さびて　ボロボロに　なっている。",
      en: "It is said that a hero used this shield to halt a terrible disaster in ancient times. But it’s grown rusty and worn.",
    },
    effects: [],
    flingPower: null,
  },
  "light-ball": {
    id: 213,
    key: "light-ball",
    names: {
      ja: "でんきだま",
      en: "Light Ball",
    },
    descriptions: {
      ja: "ピカチュウに　もたせると こうげきと　とくこうの　いりょくが あがる　ふしぎな　たま。",
      en: "A hold item that raises the SP. ATK of PIKACHU.",
    },
    effects: [],
    flingPower: 30,
  },
  "float-stone": {
    id: 582,
    key: "float-stone",
    names: {
      ja: "かるいし",
      en: "Float Stone",
    },
    descriptions: {
      ja: "とても　かるい　いし。 もたせると　ポケモンの たいじゅうが　かるくなる。",
      en: "A very light stone. It reduces the weight of a Pokémon when held.",
    },
    effects: [],
    flingPower: 30,
  },
} satisfies Record<string, Item>;
