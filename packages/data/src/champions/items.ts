import type { Item } from "@poke-calc/core";

export const championsItems = {
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
    effects: [
      {
        effect: "damageMultiplier",
        multiplier: 1.2,
        requirements: [
          {
            requirement: "moveType",
            moveType: "bug",
          },
        ],
        consumable: false,
      },
    ],
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
    effects: [
      {
        effect: "damageMultiplier",
        multiplier: 1.2,
        requirements: [
          {
            requirement: "moveType",
            moveType: "steel",
          },
        ],
        consumable: false,
      },
    ],
    flingPower: 30,
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
    effects: [
      {
        effect: "recovery",
        activationTiming: "turnEnd",
        recoveryDivisor: 16,
        consumable: false,
      },
    ],
    flingPower: 10,
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
    effects: [
      {
        effect: "damageMultiplier",
        multiplier: 1.2,
        requirements: [
          {
            requirement: "moveType",
            moveType: "ground",
          },
        ],
        consumable: false,
      },
    ],
    flingPower: 10,
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
    effects: [
      {
        effect: "damageMultiplier",
        multiplier: 1.2,
        requirements: [
          {
            requirement: "moveType",
            moveType: "rock",
          },
        ],
        consumable: false,
      },
    ],
    flingPower: 100,
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
    effects: [
      {
        effect: "damageMultiplier",
        multiplier: 1.2,
        requirements: [
          {
            requirement: "moveType",
            moveType: "grass",
          },
        ],
        consumable: false,
      },
    ],
    flingPower: 30,
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
    effects: [
      {
        effect: "damageMultiplier",
        multiplier: 1.2,
        requirements: [
          {
            requirement: "moveType",
            moveType: "dark",
          },
        ],
        consumable: false,
      },
    ],
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
    effects: [
      {
        effect: "damageMultiplier",
        multiplier: 1.2,
        requirements: [
          {
            requirement: "moveType",
            moveType: "fighting",
          },
        ],
        consumable: false,
      },
    ],
    flingPower: 30,
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
    effects: [
      {
        effect: "damageMultiplier",
        multiplier: 1.2,
        requirements: [
          {
            requirement: "moveType",
            moveType: "electric",
          },
        ],
        consumable: false,
      },
    ],
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
    effects: [
      {
        effect: "damageMultiplier",
        multiplier: 1.2,
        requirements: [
          {
            requirement: "moveType",
            moveType: "water",
          },
        ],
        consumable: false,
      },
    ],
    flingPower: 30,
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
    effects: [
      {
        effect: "damageMultiplier",
        multiplier: 1.2,
        requirements: [
          {
            requirement: "moveType",
            moveType: "flying",
          },
        ],
        consumable: false,
      },
    ],
    flingPower: 50,
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
    effects: [
      {
        effect: "damageMultiplier",
        multiplier: 1.2,
        requirements: [
          {
            requirement: "moveType",
            moveType: "poison",
          },
        ],
        consumable: false,
      },
    ],
    flingPower: 70,
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
    effects: [
      {
        effect: "damageMultiplier",
        multiplier: 1.2,
        requirements: [
          {
            requirement: "moveType",
            moveType: "ice",
          },
        ],
        consumable: false,
      },
    ],
    flingPower: 30,
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
    effects: [
      {
        effect: "damageMultiplier",
        multiplier: 1.2,
        requirements: [
          {
            requirement: "moveType",
            moveType: "ghost",
          },
        ],
        consumable: false,
      },
    ],
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
    effects: [
      {
        effect: "damageMultiplier",
        multiplier: 1.2,
        requirements: [
          {
            requirement: "moveType",
            moveType: "psychic",
          },
        ],
        consumable: false,
      },
    ],
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
    effects: [
      {
        effect: "damageMultiplier",
        multiplier: 1.2,
        requirements: [
          {
            requirement: "moveType",
            moveType: "fire",
          },
        ],
        consumable: false,
      },
    ],
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
    effects: [
      {
        effect: "damageMultiplier",
        multiplier: 1.2,
        requirements: [
          {
            requirement: "moveType",
            moveType: "dragon",
          },
        ],
        consumable: false,
      },
    ],
    flingPower: 70,
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
    effects: [
      {
        effect: "damageMultiplier",
        multiplier: 1.2,
        requirements: [
          {
            requirement: "moveType",
            moveType: "normal",
          },
        ],
        consumable: false,
      },
    ],
    flingPower: 10,
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
    effects: [
      {
        effect: "damageMultiplier",
        multiplier: 1.1,
        requirements: [
          {
            requirement: "damageClass",
            damageClass: "physical",
          },
        ],
        consumable: false,
      },
    ],
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
    effects: [
      {
        effect: "damageMultiplier",
        multiplier: 1.1,
        requirements: [
          {
            requirement: "damageClass",
            damageClass: "special",
          },
        ],
        consumable: false,
      },
    ],
    flingPower: 10,
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
    effects: [
      {
        effect: "damageMultiplier",
        multiplier: 1.2,
        requirements: [
          {
            requirement: "superEffective",
          },
        ],
        consumable: false,
      },
    ],
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
    effects: [
      {
        effect: "damageMultiplier",
        multiplier: 1.3,
        consumable: false,
      },
      {
        effect: "damage",
        activationTiming: "afterDamage",
        damageDivisor: 10,
        consumable: false,
      },
    ],
    flingPower: 30,
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
    effects: [
      {
        effect: "damageReduction",
        multiplier: 0,
        requirements: [
          {
            requirement: "hpRatioAtFull",
          },
        ],
        minimumRemainingHp: 1,
        consumable: true,
      },
    ],
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
  "iron-ball": {
    id: 255,
    key: "iron-ball",
    names: {
      ja: "くろいてっきゅう",
      en: "Iron Ball",
    },
    descriptions: {
      ja: "もたせると　すばやさが　さがる。 ひこうタイプや　ふゆう　ポケモンは じめんわざが　あたって　しまう。",
      en: "A Pokémon hold item that cuts Speed. It makes Flying-type and levitating holders susceptible to Ground moves.",
    },
    effects: [],
    flingPower: 130,
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
  "cheri-berry": {
    id: 126,
    key: "cheri-berry",
    names: {
      ja: "クラボのみ",
      en: "Cheri Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると まひを　かいふくする。 ",
      en: "A hold item that heals paralysis in battle.",
    },
    effects: [],
    flingPower: 10,
  },
  "chesto-berry": {
    id: 127,
    key: "chesto-berry",
    names: {
      ja: "カゴのみ",
      en: "Chesto Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると ねむりを　かいふくする。 ",
      en: "A hold item that awakens POKéMON in battle.",
    },
    effects: [],
    flingPower: 10,
  },
  "pecha-berry": {
    id: 128,
    key: "pecha-berry",
    names: {
      ja: "モモンのみ",
      en: "Pecha Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると どくを　かいふくする。 ",
      en: "A hold item that heals poisoning in battle.",
    },
    effects: [],
    flingPower: 10,
  },
  "rawst-berry": {
    id: 129,
    key: "rawst-berry",
    names: {
      ja: "チーゴのみ",
      en: "Rawst Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると やけどを　かいふくする。 ",
      en: "A hold item that heals a burn in battle.",
    },
    effects: [],
    flingPower: 10,
  },
  "aspear-berry": {
    id: 130,
    key: "aspear-berry",
    names: {
      ja: "ナナシのみ",
      en: "Aspear Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると こおりを　かいふくする。 ",
      en: "A hold item that defrosts POKéMON in battle.",
    },
    effects: [],
    flingPower: 10,
  },
  "leppa-berry": {
    id: 131,
    key: "leppa-berry",
    names: {
      ja: "ヒメリのみ",
      en: "Leppa Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると ＰＰを　１０だけ　かいふくする。 ",
      en: "A hold item that restores 10 PP in battle.",
    },
    effects: [],
    flingPower: 10,
  },
  "oran-berry": {
    id: 132,
    key: "oran-berry",
    names: {
      ja: "オレンのみ",
      en: "Oran Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると ＨＰを　１０だけ　かいふくする。 ",
      en: "A hold item that restores 10 HP in battle.",
    },
    effects: [],
    flingPower: 10,
  },
  "persim-berry": {
    id: 133,
    key: "persim-berry",
    names: {
      ja: "キーのみ",
      en: "Persim Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると こんらんを　かいふくする。 ",
      en: "A hold item that heals confusion in battle.",
    },
    effects: [],
    flingPower: 10,
  },
  "lum-berry": {
    id: 134,
    key: "lum-berry",
    names: {
      ja: "ラムのみ",
      en: "Lum Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると すべての　じょうたい　いじょうを かいふくする。",
      en: "A hold item that heals status in battle.",
    },
    effects: [],
    flingPower: 10,
  },
  "sitrus-berry": {
    id: 135,
    key: "sitrus-berry",
    names: {
      ja: "オボンのみ",
      en: "Sitrus Berry",
    },
    descriptions: {
      ja: "ポケモンに　もたせると ＨＰを　すこしだけ　かいふくする。 ",
      en: "A hold item that restores 30 HP in battle.",
    },
    effects: [
      {
        effect: "recovery",
        activationTiming: "afterDamage",
        recoveryDivisor: 4,
        requirements: [
          {
            requirement: "hpRatioAtOrBelow",
            hpRatio: 0.5,
          },
        ],
        consumable: true,
      },
    ],
    flingPower: 10,
  },
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
    effects: [
      {
        effect: "receivedDamageMultiplier",
        multiplier: 0.5,
        requirements: [
          {
            requirement: "moveType",
            moveType: "fire",
          },
          {
            requirement: "superEffective",
          },
        ],
        consumable: true,
      },
    ],
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
    effects: [
      {
        effect: "receivedDamageMultiplier",
        multiplier: 0.5,
        requirements: [
          {
            requirement: "moveType",
            moveType: "water",
          },
          {
            requirement: "superEffective",
          },
        ],
        consumable: true,
      },
    ],
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
    effects: [
      {
        effect: "receivedDamageMultiplier",
        multiplier: 0.5,
        requirements: [
          {
            requirement: "moveType",
            moveType: "electric",
          },
          {
            requirement: "superEffective",
          },
        ],
        consumable: true,
      },
    ],
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
    effects: [
      {
        effect: "receivedDamageMultiplier",
        multiplier: 0.5,
        requirements: [
          {
            requirement: "moveType",
            moveType: "grass",
          },
          {
            requirement: "superEffective",
          },
        ],
        consumable: true,
      },
    ],
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
    effects: [
      {
        effect: "receivedDamageMultiplier",
        multiplier: 0.5,
        requirements: [
          {
            requirement: "moveType",
            moveType: "ice",
          },
          {
            requirement: "superEffective",
          },
        ],
        consumable: true,
      },
    ],
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
    effects: [
      {
        effect: "receivedDamageMultiplier",
        multiplier: 0.5,
        requirements: [
          {
            requirement: "moveType",
            moveType: "fighting",
          },
          {
            requirement: "superEffective",
          },
        ],
        consumable: true,
      },
    ],
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
    effects: [
      {
        effect: "receivedDamageMultiplier",
        multiplier: 0.5,
        requirements: [
          {
            requirement: "moveType",
            moveType: "poison",
          },
          {
            requirement: "superEffective",
          },
        ],
        consumable: true,
      },
    ],
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
    effects: [
      {
        effect: "receivedDamageMultiplier",
        multiplier: 0.5,
        requirements: [
          {
            requirement: "moveType",
            moveType: "ground",
          },
          {
            requirement: "superEffective",
          },
        ],
        consumable: true,
      },
    ],
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
    effects: [
      {
        effect: "receivedDamageMultiplier",
        multiplier: 0.5,
        requirements: [
          {
            requirement: "moveType",
            moveType: "flying",
          },
          {
            requirement: "superEffective",
          },
        ],
        consumable: true,
      },
    ],
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
    effects: [
      {
        effect: "receivedDamageMultiplier",
        multiplier: 0.5,
        requirements: [
          {
            requirement: "moveType",
            moveType: "psychic",
          },
          {
            requirement: "superEffective",
          },
        ],
        consumable: true,
      },
    ],
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
    effects: [
      {
        effect: "receivedDamageMultiplier",
        multiplier: 0.5,
        requirements: [
          {
            requirement: "moveType",
            moveType: "bug",
          },
          {
            requirement: "superEffective",
          },
        ],
        consumable: true,
      },
    ],
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
    effects: [
      {
        effect: "receivedDamageMultiplier",
        multiplier: 0.5,
        requirements: [
          {
            requirement: "moveType",
            moveType: "rock",
          },
          {
            requirement: "superEffective",
          },
        ],
        consumable: true,
      },
    ],
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
    effects: [
      {
        effect: "receivedDamageMultiplier",
        multiplier: 0.5,
        requirements: [
          {
            requirement: "moveType",
            moveType: "ghost",
          },
          {
            requirement: "superEffective",
          },
        ],
        consumable: true,
      },
    ],
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
    effects: [
      {
        effect: "receivedDamageMultiplier",
        multiplier: 0.5,
        requirements: [
          {
            requirement: "moveType",
            moveType: "dragon",
          },
          {
            requirement: "superEffective",
          },
        ],
        consumable: true,
      },
    ],
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
    effects: [
      {
        effect: "receivedDamageMultiplier",
        multiplier: 0.5,
        requirements: [
          {
            requirement: "moveType",
            moveType: "dark",
          },
          {
            requirement: "superEffective",
          },
        ],
        consumable: true,
      },
    ],
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
    effects: [
      {
        effect: "receivedDamageMultiplier",
        multiplier: 0.5,
        requirements: [
          {
            requirement: "moveType",
            moveType: "steel",
          },
          {
            requirement: "superEffective",
          },
        ],
        consumable: true,
      },
    ],
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
    effects: [
      {
        effect: "receivedDamageMultiplier",
        multiplier: 0.5,
        requirements: [
          {
            requirement: "moveType",
            moveType: "fairy",
          },
          {
            requirement: "superEffective",
          },
        ],
        consumable: true,
      },
    ],
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
    effects: [
      {
        effect: "receivedDamageMultiplier",
        multiplier: 0.5,
        requirements: [
          {
            requirement: "moveType",
            moveType: "normal",
          },
        ],
        consumable: true,
      },
    ],
    flingPower: 10,
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
    effects: [
      {
        effect: "damageMultiplier",
        multiplier: 1.2,
        requirements: [
          {
            requirement: "moveType",
            moveType: "fairy",
          },
        ],
        consumable: false,
      },
    ],
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
  feraligite: {
    id: 2238,
    key: "feraligite",
    names: {
      ja: "",
      en: "",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: 80,
  },
  meganiumite: {
    id: 2237,
    key: "meganiumite",
    names: {
      ja: "",
      en: "",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: 80,
  },
  emboarite: {
    id: 2243,
    key: "emboarite",
    names: {
      ja: "",
      en: "",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: 80,
  },
  beedrillite: {
    id: 811,
    key: "beedrillite",
    names: {
      ja: "スピアナイト",
      en: "Beedrillite",
    },
    descriptions: {
      ja: "スピアーに　もたせておくと たたかいのとき　メガシンカが　できる ふしぎな　メガストーンの　いっしゅ。",
      en: "One of a variety of mysterious Mega Stones. Have Beedrill hold it, and this stone will enable it to Mega Evolve during battle.",
    },
    effects: [],
    flingPower: 80,
  },
  ampharosite: {
    id: 697,
    key: "ampharosite",
    names: {
      ja: "デンリュウナイト",
      en: "Ampharosite",
    },
    descriptions: {
      ja: "デンリュウに　もたせておくと たたかいのとき　メガシンカが　できる ふしぎな　メガストーンの　いっしゅ。",
      en: "One variety of the mysterious Mega Stones. Have Ampharos hold it, and this stone will enable it to Mega Evolve during battle.",
    },
    effects: [],
    flingPower: 80,
  },
  barbaracite: {
    id: 2255,
    key: "barbaracite",
    names: {
      ja: "",
      en: "",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: 80,
  },
  starminite: {
    id: 2235,
    key: "starminite",
    names: {
      ja: "",
      en: "",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: 80,
  },
  victreebelite: {
    id: 2234,
    key: "victreebelite",
    names: {
      ja: "",
      en: "",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: 80,
  },
  altarianite: {
    id: 796,
    key: "altarianite",
    names: {
      ja: "チルタリスナイト",
      en: "Altarianite",
    },
    descriptions: {
      ja: "チルタリスに　もたせておくと たたかいのとき　メガシンカが　できる ふしぎな　メガストーンの　いっしゅ。",
      en: "One of a variety of mysterious Mega Stones. Have Altaria hold it, and this stone will enable it to Mega Evolve during battle.",
    },
    effects: [],
    flingPower: 80,
  },
  banettite: {
    id: 707,
    key: "banettite",
    names: {
      ja: "ジュペッタナイト",
      en: "Banettite",
    },
    descriptions: {
      ja: "ジュペッタに　もたせておくと たたかいのとき　メガシンカが　できる ふしぎな　メガストーンの　いっしゅ。",
      en: "One variety of the mysterious Mega Stones. Have Banette hold it, and this stone will enable it to Mega Evolve during battle.",
    },
    effects: [],
    flingPower: 80,
  },
  cameruptite: {
    id: 808,
    key: "cameruptite",
    names: {
      ja: "バクーダナイト",
      en: "Cameruptite",
    },
    descriptions: {
      ja: "バクーダに　もたせておくと たたかいのとき　メガシンカが　できる ふしぎな　メガストーンの　いっしゅ。",
      en: "One of a variety of mysterious Mega Stones. Have Camerupt hold it, and this stone will enable it to Mega Evolve during battle.",
    },
    effects: [],
    flingPower: 80,
  },
  mawilite: {
    id: 720,
    key: "mawilite",
    names: {
      ja: "クチートナイト",
      en: "Mawilite",
    },
    descriptions: {
      ja: "クチートに　もたせておくと たたかいのとき　メガシンカが　できる ふしぎな　メガストーンの　いっしゅ。",
      en: "One variety of the mysterious Mega Stones. Have Mawile hold it, and this stone will enable it to Mega Evolve during battle.",
    },
    effects: [],
    flingPower: 80,
  },
  absolite: {
    id: 716,
    key: "absolite",
    names: {
      ja: "アブソルナイト",
      en: "Absolite",
    },
    descriptions: {
      ja: "アブソルに　もたせておくと たたかいのとき　メガシンカが　できる ふしぎな　メガストーンの　いっしゅ。",
      en: "One variety of the mysterious Mega Stones. Have Absol hold it, and this stone will enable it to Mega Evolve during battle.",
    },
    effects: [],
    flingPower: 80,
  },
  slowbronite: {
    id: 801,
    key: "slowbronite",
    names: {
      ja: "ヤドランナイト",
      en: "Slowbronite",
    },
    descriptions: {
      ja: "ヤドランに　もたせておくと たたかいのとき　メガシンカが　できる ふしぎな　メガストーンの　いっしゅ。",
      en: "One of a variety of mysterious Mega Stones. Have Slowbro hold it, and this stone will enable it to Mega Evolve during battle.",
    },
    effects: [],
    flingPower: 80,
  },
  dragoninite: {
    id: 2236,
    key: "dragoninite",
    names: {
      ja: "",
      en: "",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: 80,
  },
  froslassite: {
    id: 2240,
    key: "froslassite",
    names: {
      ja: "",
      en: "",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: 80,
  },
  hawluchanite: {
    id: 2257,
    key: "hawluchanite",
    names: {
      ja: "",
      en: "",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: 80,
  },
  tyranitarite: {
    id: 708,
    key: "tyranitarite",
    names: {
      ja: "バンギラスナイト",
      en: "Tyranitarite",
    },
    descriptions: {
      ja: "バンギラスに　もたせておくと たたかいのとき　メガシンカが　できる ふしぎな　メガストーンの　いっしゅ。",
      en: "One variety of the mysterious Mega Stones. Have Tyranitar hold it, and this stone will enable it to Mega Evolve during battle.",
    },
    effects: [],
    flingPower: 80,
  },
  pidgeotite: {
    id: 803,
    key: "pidgeotite",
    names: {
      ja: "ピジョットナイト",
      en: "Pidgeotite",
    },
    descriptions: {
      ja: "ピジョットに　もたせておくと たたかいのとき　メガシンカが　できる ふしぎな　メガストーンの　いっしゅ。",
      en: "One of a variety of mysterious Mega Stones. Have Pidgeot hold it, and this stone will enable it to Mega Evolve during battle.",
    },
    effects: [],
    flingPower: 80,
  },
  manectite: {
    id: 721,
    key: "manectite",
    names: {
      ja: "ライボルトナイト",
      en: "Manectite",
    },
    descriptions: {
      ja: "ライボルトに　もたせておくと たたかいのとき　メガシンカが　できる ふしぎな　メガストーンの　いっしゅ。",
      en: "One variety of the mysterious Mega Stones. Have Manectric hold it, and this stone will enable it to Mega Evolve during battle.",
    },
    effects: [],
    flingPower: 80,
  },
  houndoominite: {
    id: 705,
    key: "houndoominite",
    names: {
      ja: "ヘルガナイト",
      en: "Houndoominite",
    },
    descriptions: {
      ja: "ヘルガーに　もたせておくと たたかいのとき　メガシンカが　できる ふしぎな　メガストーンの　いっしゅ。",
      en: "One variety of the mysterious Mega Stones. Have Houndoom hold it, and this stone will enable it to Mega Evolve during battle.",
    },
    effects: [],
    flingPower: 80,
  },
  audinite: {
    id: 798,
    key: "audinite",
    names: {
      ja: "タブンネナイト",
      en: "Audinite",
    },
    descriptions: {
      ja: "タブンネに　もたせておくと たたかいのとき　メガシンカが　できる ふしぎな　メガストーンの　いっしゅ。",
      en: "One of a variety of mysterious Mega Stones. Have Audino hold it, and this stone will enable it to Mega Evolve during battle.",
    },
    effects: [],
    flingPower: 80,
  },
  lopunnite: {
    id: 809,
    key: "lopunnite",
    names: {
      ja: "ミミロップナイト",
      en: "Lopunnite",
    },
    descriptions: {
      ja: "ミミロップに　もたせておくと たたかいのとき　メガシンカが　できる ふしぎな　メガストーンの　いっしゅ。",
      en: "One of a variety of mysterious Mega Stones. Have Lopunny hold it, and this stone will enable it to Mega Evolve during battle.",
    },
    effects: [],
    flingPower: 80,
  },
  sablenite: {
    id: 795,
    key: "sablenite",
    names: {
      ja: "ヤミラミナイト",
      en: "Sablenite",
    },
    descriptions: {
      ja: "ヤミラミに　もたせておくと たたかいのとき　メガシンカが　できる ふしぎな　メガストーンの　いっしゅ。",
      en: "One of a variety of mysterious Mega Stones. Have Sableye hold it, and this stone will enable it to Mega Evolve during battle.",
    },
    effects: [],
    flingPower: 80,
  },
  sharpedonite: {
    id: 800,
    key: "sharpedonite",
    names: {
      ja: "サメハダナイト",
      en: "Sharpedonite",
    },
    descriptions: {
      ja: "サメハダーに　もたせておくと たたかいのとき　メガシンカが　できる ふしぎな　メガストーンの　いっしゅ。",
      en: "One of a variety of mysterious Mega Stones. Have Sharpedo hold it, and this stone will enable it to Mega Evolve during battle.",
    },
    effects: [],
    flingPower: 80,
  },
  gyaradosite: {
    id: 715,
    key: "gyaradosite",
    names: {
      ja: "ギャラドスナイト",
      en: "Gyaradosite",
    },
    descriptions: {
      ja: "ギャラドスに　もたせておくと たたかいのとき　メガシンカが　できる ふしぎな　メガストーンの　いっしゅ。",
      en: "One variety of the mysterious Mega Stones. Have Gyarados hold it, and this stone will enable it to Mega Evolve during battle.",
    },
    effects: [],
    flingPower: 80,
  },
  lucarionite: {
    id: 712,
    key: "lucarionite",
    names: {
      ja: "ルカリオナイト",
      en: "Lucarionite",
    },
    descriptions: {
      ja: "ルカリオに　もたせておくと たたかいのとき　メガシンカが　できる ふしぎな　メガストーンの　いっしゅ。",
      en: "One variety of the mysterious Mega Stones. Have Lucario hold it, and this stone will enable it to Mega Evolve during battle.",
    },
    effects: [],
    flingPower: 80,
  },
  heracronite: {
    id: 719,
    key: "heracronite",
    names: {
      ja: "ヘラクロスナイト",
      en: "Heracronite",
    },
    descriptions: {
      ja: "ヘラクロスに　もたせておくと たたかいのとき　メガシンカが　できる ふしぎな　メガストーンの　いっしゅ。",
      en: "One variety of the mysterious Mega Stones. Have Heracross hold it, and this stone will enable it to Mega Evolve during battle.",
    },
    effects: [],
    flingPower: 80,
  },
  aerodactylite: {
    id: 711,
    key: "aerodactylite",
    names: {
      ja: "プテラナイト",
      en: "Aerodactylite",
    },
    descriptions: {
      ja: "プテラに　もたせておくと たたかいのとき　メガシンカが　できる ふしぎな　メガストーンの　いっしゅ。",
      en: "One variety of the mysterious Mega Stones. Have Aerodactyl hold it, and this stone will enable it to Mega Evolve during battle.",
    },
    effects: [],
    flingPower: 80,
  },
  alakazite: {
    id: 718,
    key: "alakazite",
    names: {
      ja: "フーディナイト",
      en: "Alakazite",
    },
    descriptions: {
      ja: "フーディンに　もたせておくと たたかいのとき　メガシンカが　できる ふしぎな　メガストーンの　いっしゅ。",
      en: "One variety of the mysterious Mega Stones. Have Alakazam hold it, and this stone will enable it to Mega Evolve during battle.",
    },
    effects: [],
    flingPower: 80,
  },
  drampanite: {
    id: 2259,
    key: "drampanite",
    names: {
      ja: "",
      en: "",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: 80,
  },
  eelektrossite: {
    id: 2247,
    key: "eelektrossite",
    names: {
      ja: "",
      en: "",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: 80,
  },
  glalitite: {
    id: 804,
    key: "glalitite",
    names: {
      ja: "オニゴーリナイト",
      en: "Glalitite",
    },
    descriptions: {
      ja: "オニゴーリに　もたせておくと たたかいのとき　メガシンカが　できる ふしぎな　メガストーンの　いっしゅ。",
      en: "One of a variety of mysterious Mega Stones. Have Glalie hold it, and this stone will enable it to Mega Evolve during battle.",
    },
    effects: [],
    flingPower: 80,
  },
  pinsirite: {
    id: 710,
    key: "pinsirite",
    names: {
      ja: "カイロスナイト",
      en: "Pinsirite",
    },
    descriptions: {
      ja: "カイロスに　もたせておくと たたかいのとき　メガシンカが　できる ふしぎな　メガストーンの　いっしゅ。",
      en: "One variety of the mysterious Mega Stones. Have Pinsir hold it, and this stone will enable it to Mega Evolve during battle.",
    },
    effects: [],
    flingPower: 80,
  },
  falinksite: {
    id: 2261,
    key: "falinksite",
    names: {
      ja: "",
      en: "",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: 80,
  },
  scolipite: {
    id: 2245,
    key: "scolipite",
    names: {
      ja: "",
      en: "",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: 80,
  },
  gardevoirite: {
    id: 696,
    key: "gardevoirite",
    names: {
      ja: "サーナイトナイト",
      en: "Gardevoirite",
    },
    descriptions: {
      ja: "サーナイトに　もたせておくと たたかいのとき　メガシンカが　できる ふしぎな　メガストーンの　いっしゅ。",
      en: "One variety of the mysterious Mega Stones. Have Gardevoir hold it, and this stone will enable it to Mega Evolve during battle.",
    },
    effects: [],
    flingPower: 80,
  },
  galladite: {
    id: 797,
    key: "galladite",
    names: {
      ja: "エルレイドナイト",
      en: "Galladite",
    },
    descriptions: {
      ja: "エルレイドに　もたせておくと たたかいのとき　メガシンカが　できる ふしぎな　メガストーンの　いっしゅ。",
      en: "One of a variety of mysterious Mega Stones. Have Gallade hold it, and this stone will enable it to Mega Evolve during battle.",
    },
    effects: [],
    flingPower: 80,
  },
  skarmorite: {
    id: 2239,
    key: "skarmorite",
    names: {
      ja: "",
      en: "",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: 80,
  },
  clefablite: {
    id: 2233,
    key: "clefablite",
    names: {
      ja: "",
      en: "",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: 80,
  },
  dragalgite: {
    id: 2256,
    key: "dragalgite",
    names: {
      ja: "",
      en: "",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: 80,
  },
  scraftinite: {
    id: 2246,
    key: "scraftinite",
    names: {
      ja: "",
      en: "",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: 80,
  },
  pyroarite: {
    id: 2252,
    key: "pyroarite",
    names: {
      ja: "",
      en: "",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: 80,
  },
  malamarite: {
    id: 2254,
    key: "malamarite",
    names: {
      ja: "",
      en: "",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: 80,
  },
  excadrite: {
    id: 2244,
    key: "excadrite",
    names: {
      ja: "",
      en: "",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: 80,
  },
  chandelurite: {
    id: 2248,
    key: "chandelurite",
    names: {
      ja: "",
      en: "",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: 80,
  },
  aggronite: {
    id: 706,
    key: "aggronite",
    names: {
      ja: "ボスゴドラナイト",
      en: "Aggronite",
    },
    descriptions: {
      ja: "ボスゴドラに　もたせておくと たたかいのとき　メガシンカが　できる ふしぎな　メガストーンの　いっしゅ。",
      en: "One variety of the mysterious Mega Stones. Have Aggron hold it, and this stone will enable it to Mega Evolve during battle.",
    },
    effects: [],
    flingPower: 80,
  },
  metagrossite: {
    id: 799,
    key: "metagrossite",
    names: {
      ja: "メタグロスナイト",
      en: "Metagrossite",
    },
    descriptions: {
      ja: "メタグロスに　もたせておくと たたかいのとき　メガシンカが　できる ふしぎな　メガストーンの　いっしゅ。",
      en: "One of a variety of mysterious Mega Stones. Have Metagross hold it, and this stone will enable it to Mega Evolve during battle.",
    },
    effects: [],
    flingPower: 80,
  },
  gengarite: {
    id: 695,
    key: "gengarite",
    names: {
      ja: "ゲンガナイト",
      en: "Gengarite",
    },
    descriptions: {
      ja: "ゲンガーに　もたせておくと たたかいのとき　メガシンカが　できる ふしぎな　メガストーンの　いっしゅ。",
      en: "One variety of the mysterious Mega Stones. Have Gengar hold it, and this stone will enable it to Mega Evolve during battle.",
    },
    effects: [],
    flingPower: 80,
  },
  medichamite: {
    id: 704,
    key: "medichamite",
    names: {
      ja: "チャーレムナイト",
      en: "Medichamite",
    },
    descriptions: {
      ja: "チャーレムに　もたせておくと たたかいのとき　メガシンカが　できる ふしぎな　メガストーンの　いっしゅ。",
      en: "One variety of the mysterious Mega Stones. Have Medicham hold it, and this stone will enable it to Mega Evolve during battle.",
    },
    effects: [],
    flingPower: 80,
  },
  abomasite: {
    id: 713,
    key: "abomasite",
    names: {
      ja: "ユキノオナイト",
      en: "Abomasite",
    },
    descriptions: {
      ja: "ユキノオーに　もたせておくと たたかいのとき　メガシンカが　できる ふしぎな　メガストーンの　いっしゅ。",
      en: "One variety of the mysterious Mega Stones. Have Abomasnow hold it, and this stone will enable it to Mega Evolve during battle.",
    },
    effects: [],
    flingPower: 80,
  },
  scizorite: {
    id: 709,
    key: "scizorite",
    names: {
      ja: "ハッサムナイト",
      en: "Scizorite",
    },
    descriptions: {
      ja: "ハッサムに　もたせておくと たたかいのとき　メガシンカが　できる ふしぎな　メガストーンの　いっしゅ。",
      en: "One variety of the mysterious Mega Stones. Have Scizor hold it, and this stone will enable it to Mega Evolve during battle.",
    },
    effects: [],
    flingPower: 80,
  },
  garchompite: {
    id: 722,
    key: "garchompite",
    names: {
      ja: "ガブリアスナイト",
      en: "Garchompite",
    },
    descriptions: {
      ja: "ガブリアスに　もたせておくと たたかいのとき　メガシンカが　できる ふしぎな　メガストーンの　いっしゅ。",
      en: "One variety of the mysterious Mega Stones. Have Garchomp hold it, and this stone will enable it to Mega Evolve during battle.",
    },
    effects: [],
    flingPower: 80,
  },
  steelixite: {
    id: 802,
    key: "steelixite",
    names: {
      ja: "ハガネールナイト",
      en: "Steelixite",
    },
    descriptions: {
      ja: "ハガネールに　もたせておくと たたかいのとき　メガシンカが　できる ふしぎな　メガストーンの　いっしゅ。",
      en: "One of a variety of mysterious Mega Stones. Have Steelix hold it, and this stone will enable it to Mega Evolve during battle.",
    },
    effects: [],
    flingPower: 80,
  },
  kangaskhanite: {
    id: 714,
    key: "kangaskhanite",
    names: {
      ja: "ガルーラナイト",
      en: "Kangaskhanite",
    },
    descriptions: {
      ja: "ガルーラに　もたせておくと たたかいのとき　メガシンカが　できる ふしぎな　メガストーンの　いっしゅ。",
      en: "One variety of the mysterious Mega Stones. Have Kangaskhan hold it, and this stone will enable it to Mega Evolve during battle.",
    },
    effects: [],
    flingPower: 80,
  },
  "charizardite-x": {
    id: 699,
    key: "charizardite-x",
    names: {
      ja: "リザードナイトＸ",
      en: "Charizardite X",
    },
    descriptions: {
      ja: "リザードンに　もたせておくと たたかいのとき　メガシンカが　できる ふしぎな　メガストーンの　いっしゅ。",
      en: "One variety of the mysterious Mega Stones. Have Charizard hold it, and this stone will enable it to Mega Evolve during battle.",
    },
    effects: [],
    flingPower: 80,
  },
  "charizardite-y": {
    id: 717,
    key: "charizardite-y",
    names: {
      ja: "リザードナイトＹ",
      en: "Charizardite Y",
    },
    descriptions: {
      ja: "リザードンに　もたせておくと たたかいのとき　メガシンカが　できる ふしぎな　メガストーンの　いっしゅ。",
      en: "One variety of the mysterious Mega Stones. Have Charizard hold it, and this stone will enable it to Mega Evolve during battle.",
    },
    effects: [],
    flingPower: 80,
  },
  blastoisinite: {
    id: 700,
    key: "blastoisinite",
    names: {
      ja: "カメックスナイト",
      en: "Blastoisinite",
    },
    descriptions: {
      ja: "カメックスに　もたせておくと たたかいのとき　メガシンカが　できる ふしぎな　メガストーンの　いっしゅ。",
      en: "One variety of the mysterious Mega Stones. Have Blastoise hold it, and this stone will enable it to Mega Evolve during battle.",
    },
    effects: [],
    flingPower: 80,
  },
  venusaurite: {
    id: 698,
    key: "venusaurite",
    names: {
      ja: "フシギバナイト",
      en: "Venusaurite",
    },
    descriptions: {
      ja: "フシギバナに　もたせておくと たたかいのとき　メガシンカが　できる ふしぎな　メガストーンの　いっしゅ。",
      en: "One variety of the mysterious Mega Stones. Have Venusaur hold it, and this stone will enable it to Mega Evolve during battle.",
    },
    effects: [],
    flingPower: 80,
  },
  greninjite: {
    id: 2251,
    key: "greninjite",
    names: {
      ja: "",
      en: "",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: 80,
  },
  delphoxite: {
    id: 2250,
    key: "delphoxite",
    names: {
      ja: "",
      en: "",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: 80,
  },
  chesnaughtite: {
    id: 2249,
    key: "chesnaughtite",
    names: {
      ja: "",
      en: "",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: 80,
  },
  floettite: {
    id: 2253,
    key: "floettite",
    names: {
      ja: "",
      en: "",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: 80,
  },
  "raichunite-x": {
    id: 2262,
    key: "raichunite-x",
    names: {
      ja: "",
      en: "",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: 80,
  },
  "raichunite-y": {
    id: 2263,
    key: "raichunite-y",
    names: {
      ja: "",
      en: "",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: 80,
  },
  sceptilite: {
    id: 794,
    key: "sceptilite",
    names: {
      ja: "ジュカインナイト",
      en: "Sceptilite",
    },
    descriptions: {
      ja: "ジュカインに　もたせておくと たたかいのとき　メガシンカが　できる ふしぎな　メガストーンの　いっしゅ。",
      en: "One of a variety of mysterious Mega Stones. Have Sceptile hold it, and this stone will enable it to Mega Evolve during battle.",
    },
    effects: [],
    flingPower: 80,
  },
  swampertite: {
    id: 793,
    key: "swampertite",
    names: {
      ja: "ラグラージナイト",
      en: "Swampertite",
    },
    descriptions: {
      ja: "ラグラージに　もたせておくと たたかいのとき　メガシンカが　できる ふしぎな　メガストーンの　いっしゅ。",
      en: "One of a variety of mysterious Mega Stones. Have Swampert hold it, and this stone will enable it to Mega Evolve during battle.",
    },
    effects: [],
    flingPower: 80,
  },
  blazikenite: {
    id: 703,
    key: "blazikenite",
    names: {
      ja: "バシャーモナイト",
      en: "Blazikenite",
    },
    descriptions: {
      ja: "バシャーモに　もたせておくと たたかいのとき　メガシンカが　できる ふしぎな　メガストーンの　いっしゅ。",
      en: "One variety of the mysterious Mega Stones. Have Blaziken hold it, and this stone will enable it to Mega Evolve during battle.",
    },
    effects: [],
    flingPower: 80,
  },
  staraptite: {
    id: 2266,
    key: "staraptite",
    names: {
      ja: "",
      en: "",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: 80,
  },
  chimechite: {
    id: 2264,
    key: "chimechite",
    names: {
      ja: "",
      en: "",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: 80,
  },
  crabominite: {
    id: 2271,
    key: "crabominite",
    names: {
      ja: "",
      en: "",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: 80,
  },
  scovillainite: {
    id: 2274,
    key: "scovillainite",
    names: {
      ja: "",
      en: "",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: 80,
  },
  golurkite: {
    id: 2269,
    key: "golurkite",
    names: {
      ja: "",
      en: "",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: 80,
  },
  meowsticite: {
    id: 2270,
    key: "meowsticite",
    names: {
      ja: "",
      en: "",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: 80,
  },
  glimmoranite: {
    id: 2277,
    key: "glimmoranite",
    names: {
      ja: "",
      en: "",
    },
    descriptions: {
      ja: "",
      en: "",
    },
    effects: [],
    flingPower: 80,
  },
} satisfies Record<string, Item>;
