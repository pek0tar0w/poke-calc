import type { Item } from "@poke-calc/core";

import {
  chilanBerryEffects,
  createSuperEffectiveTypeResistBerryEffects,
  createTypeBoostEffects,
  expertBeltEffects,
  focusSashEffects,
  leftoversEffects,
  lifeOrbEffects,
  muscleBandEffects,
  sitrusBerryEffects,
  wiseGlassesEffects,
} from "../common/item-effects/index.js";

export const championsItems = {
  "bright-powder": {
    id: 190,
    key: "bright-powder",
    names: {
      ja: "ひかりのこな",
      en: "Bright Powder",
    },
    descriptions: {
      ja: "自分に対し相手の使う技の命中率が0.9倍になる。",
      en: "Lowers the accuracy of moves used by opponents against the holder by 10%.",
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
      ja: "能力が下がった時に元に戻す。1度使うとその対戦中は無くなる。",
      en: "Restores the holder’s stats to their usual value when they are lowered. Disappears for the duration of the battle after a single use.",
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
      ja: "20%の確率で、同じ優先度の技の中で最初に行動する。",
      en: "Gives the holder’s moves a 20% chance of going first among moves of the same priority.",
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
      ja: "メロメロ状態・ちょうはつ状態・連続不可状態・わざふうじ状態・かいふくふうじ状態・アンコール状態を回復する。1度使うとその対戦中は無くなる。",
      en: "Cures the holder of the Infatuated, Taunted, Unable to Repeat, Move Disabled, Healing Prevented, and Encore statuses. Disappears for the duration of the battle after a single use.",
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
      ja: "技でダメージを与えた時、10%の確率で相手をひるませる。",
      en: "When the holder deals damage with its moves, there is a 10% chance that targets will flinch.",
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
      ja: "むしタイプの技の威力が1.2倍になる。",
      en: "Boosts the power of the holder’s Bug-type moves by 20%.",
    },
    effects: createTypeBoostEffects("bug"),
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
      ja: "ひんしになる技のダメージを受けると10%の確率でHPを1残して耐える。",
      en: "If the holder takes damage from a move that would knock it out, there’s a 10% chance the holder will endure the hit with 1 HP.",
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
      ja: "きゅうしょアップ+1になる。",
      en: "Gives the holder a 1-stage Critical-Hit Ratio Boost.",
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
      ja: "はがねタイプの技の威力が1.2倍になる。",
      en: "Boosts the power of the holder’s Steel-type moves by 20%.",
    },
    effects: createTypeBoostEffects("steel"),
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
      ja: "ターン終わりに最大HPの1/16回復する。",
      en: "Restores 1/16 of the holder’s max HP at the end of every turn.",
    },
    effects: leftoversEffects,
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
      ja: "じめんタイプの技の威力が1.2倍になる。",
      en: "Boosts the power of the holder’s Ground-type moves by 20%.",
    },
    effects: createTypeBoostEffects("ground"),
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
      ja: "いわタイプの技の威力が1.2倍になる。",
      en: "Boosts the power of the holder’s Rock-type moves by 20%.",
    },
    effects: createTypeBoostEffects("rock"),
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
      ja: "くさタイプの技の威力が1.2倍になる。",
      en: "Boosts the power of the holder’s Grass-type moves by 20%.",
    },
    effects: createTypeBoostEffects("grass"),
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
      ja: "あくタイプの技の威力が1.2倍になる。",
      en: "Boosts the power of the holder’s Dark-type moves by 20%.",
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
      ja: "かくとうタイプの技の威力が1.2倍になる。",
      en: "Boosts the power of the holder’s Fighting-type moves by 20%.",
    },
    effects: createTypeBoostEffects("fighting"),
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
      ja: "でんきタイプの技の威力が1.2倍になる。",
      en: "Boosts the power of the holder’s Electric-type moves by 20%.",
    },
    effects: createTypeBoostEffects("electric"),
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
      ja: "みずタイプの技の威力が1.2倍になる。",
      en: "Boosts the power of the holder’s Water-type moves by 20%.",
    },
    effects: createTypeBoostEffects("water"),
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
      ja: "ひこうタイプの技の威力が1.2倍になる。",
      en: "Boosts the power of the holder’s Flying-type moves by 20%.",
    },
    effects: createTypeBoostEffects("flying"),
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
      ja: "どくタイプの技の威力が1.2倍になる。",
      en: "Boosts the power of the holder’s Poison-type moves by 20%.",
    },
    effects: createTypeBoostEffects("poison"),
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
      ja: "こおりタイプの技の威力が1.2倍になる。",
      en: "Boosts the power of the holder’s Ice-type moves by 20%.",
    },
    effects: createTypeBoostEffects("ice"),
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
      ja: "ゴーストタイプの技の威力が1.2倍になる。",
      en: "Boosts the power of the holder’s Ghost-type moves by 20%.",
    },
    effects: createTypeBoostEffects("ghost"),
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
      ja: "エスパータイプの技の威力が1.2倍になる。",
      en: "Boosts the power of the holder’s Psychic-type moves by 20%.",
    },
    effects: createTypeBoostEffects("psychic"),
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
      ja: "ほのおタイプの技の威力が1.2倍になる。",
      en: "Boosts the power of the holder’s Fire-type moves by 20%.",
    },
    effects: createTypeBoostEffects("fire"),
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
      ja: "ドラゴンタイプの技の威力が1.2倍になる。",
      en: "Boosts the power of the holder’s Dragon-type moves by 20%.",
    },
    effects: createTypeBoostEffects("dragon"),
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
      ja: "ノーマルタイプの技の威力が1.2倍になる。",
      en: "Boosts the power of the holder’s Normal-type moves by 20%.",
    },
    effects: createTypeBoostEffects("normal"),
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
      ja: "技でダメージを与えた時 そのダメージの1/8 自分のHPを回復する。",
      en: "When the holder deals damage with its moves, its HP is restored by 1/8 of the damage dealt.",
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
      ja: "持たせると技の命中率が1.1倍になる。",
      en: "Boosts the accuracy of the holder’s moves by 10%.",
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
      ja: "物理技の威力が1.1倍になる。",
      en: "Boosts the power of the holder’s physical moves by 10%.",
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
      ja: "特殊技の威力が1.1倍になる。",
      en: "Boosts the power of the holder’s special moves by 10%.",
    },
    effects: wiseGlassesEffects,
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
      ja: "使った技が効果バツグンの時、威力が1.2倍になる。",
      en: "Boosts the power of the holder’s supereffective moves by 20%.",
    },
    effects: expertBeltEffects,
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
      ja: "持たせたポケモンが「ひかりのかべ」「リフレクター」「オーロラベール」を使ったとき効果時間が3ターン長くなる。",
      en: "When the holder uses Light Screen, Reflect, or Aurora Veil, the duration is extended by 3 turns. (Total duration: 8 turns)",
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
      ja: "技の威力が1.3倍になるが、攻撃が成功するたび最大HPの1/10減る。",
      en: "Boosts the power of the holder’s moves by 30%. However, the holder also loses 1/10 of its max HP each time it successfully lands an attack.",
    },
    effects: lifeOrbEffects,
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
      ja: "HP満タンの時、一撃でひんしになる技のダメージを受けるとHPを1残して耐える。1度使うとその対戦中は無くなる。",
      en: "If the holder has full HP and takes damage from a move that would knock it out in one hit, it will endure the hit with 1 HP. Disappears for the duration of the battle after a single use.",
    },
    effects: focusSashEffects,
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
      ja: "持たせたポケモンが相手よりも行動するのが遅いとき、技の命中率が1.2倍になる。",
      en: "Boosts the accuracy of the holder’s moves by 20% when the holder acts after the targets.",
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
      ja: "同じ技を連続で使った場合、威力が上がる。2回目で1.2倍、3回目で1.4倍と上がり、最大で2倍まで上がる。やめると元に戻る。",
      en: "Boosts the power of a move that is used repeatedly. This boost will be 20% on the second usage, 40% on the third, and so on, up to a maximum boost of 100%. If the streak is broken, the move’s power returns to its usual value.",
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
      ja: "持たせている間は素早さが半減する。ひこうタイプや特性「ふゆう」のポケモンはじめん技が当たってしまう。",
      en: "Halves the holder’s Speed stat. If the holder is off the ground, it will be grounded, meaning it can be affected by Ground-type moves, as well as the Spikes, Toxic Spikes, and Sticky Web statuses.",
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
      ja: "持たせたポケモンが「ゆきふらし」「ゆきげしき」「さむいギャグ」で天気を「ゆき」にした時の効果時間が3ターン長くなる。",
      en: "When the holder summons snow with its moves or Ability, the duration is extended by 3 turns. (Total duration: 8 turns)",
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
      ja: "持たせたポケモンが「すなあらし」や「すなおこし」で天候をすなあらしにした際に効果時間が3ターン長くなる。",
      en: "When the holder summons a sandstorm with its moves or Ability, the duration is extended by 3 turns. (Total duration: 8 turns)",
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
      ja: "持たせたポケモンが「にほんばれ」「ひでり」「ひひいろのこどう」で天候をはれにした際に効果時間が3ターン長くなる。",
      en: "When the holder summons harsh sunlight with its moves or Ability, the duration is extended by 3 turns. (Total duration: 8 turns)",
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
      ja: "持たせたポケモンが「あまごい」「あめふらし」で天候をあめにした際に効果時間が3ターン長くなる。",
      en: "When the holder summons rain with its moves or Ability, the duration is extended by 3 turns. (Total duration: 8 turns)",
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
      ja: "素早さが1.5倍になるが、1度技を出すと交代するまでその技しか出せなくなる。",
      en: "Boosts the holder’s Speed stat by 50%. However, once the holder uses a move, it becomes unable to use any other move but that one until it switches out of battle.",
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
      ja: "持たせると交代を封じる効果を受けても控えのポケモンと必ず入れ替われる。",
      en: "Enables the holder to ignore any effects that would usually prevent it from switching out of battle and being replaced by another party Pokémon.",
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
      ja: "HPを吸い取る技で回復する量が1.3倍になる。ねをはる、ちからをすいとる等も1.3倍になる。",
      en: "Boosts the amount of HP restored through HP-absorbing moves by 30%. HP restored by moves such as Ingrain and Strength Sap will also be boosted by 30%.",
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
      ja: "まひ状態を回復する。1度使うとその対戦中は無くなる。",
      en: "Cures being paralyzed. Disappears for the duration of the battle after a single use.",
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
      ja: "ねむり状態を回復する。1度使うとその対戦中は無くなる。",
      en: "Cures being asleep. Disappears for the duration of the battle after a single use.",
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
      ja: "どく状態・もうどく状態を回復する。1度使うとその対戦中は無くなる。",
      en: "Cures being poisoned or badly poisoned. Disappears for the duration of the battle after a single use.",
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
      ja: "やけど状態を回復する。1度使うとその対戦中は無くなる。",
      en: "Cures being burned. Disappears for the duration of the battle after a single use.",
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
      ja: "こおり状態を回復する。1度使うとその対戦中は無くなる。",
      en: "Cures being frozen. Disappears for the duration of the battle after a single use.",
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
      ja: "PPが0になった技のPPを10回復する。1度使うとその対戦中は無くなる。",
      en: "Restores 10 PP to a move when its PP is fully depleted. Disappears for the duration of the battle after a single use.",
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
      ja: "残りHPが最大HPの1/2以下になった時10回復する。1度使うとその対戦中は無くなる。",
      en: "Restores 10 HP to the holder when its HP drops to 1/2 or less of its max. Disappears for the duration of the battle after a single use.",
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
      ja: "こんらん状態を回復する。1度使うとその対戦中は無くなる。",
      en: "Cures being confused. Disappears for the duration of the battle after a single use.",
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
      ja: "全ての状態異常、こんらん状態を回復する。1度使うとその対戦中は無くなる。",
      en: "Cures any status condition or confusion. Disappears for the duration of the battle after a single use.",
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
      ja: "残りHPが最大HPの1/2以下になった時、最大HPの1/4回復する。1度使うとその対戦中は無くなる。",
      en: "Restores 1/4 of the holder’s max HP when the holder’s HP drops to 1/2 or less of its max. Disappears for the duration of the battle after a single use.",
    },
    effects: sitrusBerryEffects,
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
      ja: "効果バツグンのほのおタイプの技を受けた時ダメージが半減する。1度使うとその対戦中は無くなる。",
      en: "Halves the damage taken when the holder is hit with a supereffective Fire-type move. Disappears for the duration of the battle after a single use.",
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
      ja: "効果バツグンのみずタイプの技を受けた時ダメージが半減する。1度使うとその対戦中は無くなる。",
      en: "Halves the damage taken when the holder is hit with a supereffective Water-type move. Disappears for the duration of the battle after a single use.",
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
      ja: "効果バツグンのでんきタイプの技を受けた時ダメージが半減する。1度使うとその対戦中は無くなる。",
      en: "Halves the damage taken when the holder is hit with a supereffective Electric-type move. Disappears for the duration of the battle after a single use.",
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
      ja: "効果バツグンのくさタイプの技を受けた時ダメージが半減する。1度使うとその対戦中は無くなる。",
      en: "Halves the damage taken when the holder is hit with a supereffective Grass-type move. Disappears for the duration of the battle after a single use.",
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
      ja: "効果バツグンのこおりタイプの技を受けた時ダメージが半減する。1度使うとその対戦中は無くなる。",
      en: "Halves the damage taken when the holder is hit with a supereffective Ice-type move. Disappears for the duration of the battle after a single use.",
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
      ja: "効果バツグンのかくとうタイプの技を受けた時ダメージを半減する。1度使うとその対戦中は無くなる。",
      en: "Halves the damage taken when the holder is hit with a supereffective Fighting-type move. Disappears for the duration of the battle after a single use.",
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
      ja: "効果バツグンのどくタイプの技を受けた時ダメージが半減する。1度使うとその対戦中は無くなる。",
      en: "Halves the damage taken when the holder is hit with a supereffective Poison-type move. Disappears for the duration of the battle after a single use.",
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
      ja: "効果バツグンのじめんタイプの技を受けた時ダメージを半減する。1度使うとその対戦中は無くなる。",
      en: "Halves the damage taken when the holder is hit with a supereffective Ground-type move. Disappears for the duration of the battle after a single use.",
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
      ja: "効果バツグンのひこうタイプの技を受けた時ダメージが半減する。1度使うとその対戦中は無くなる。",
      en: "Halves the damage taken when the holder is hit with a supereffective Flying-type move. Disappears for the duration of the battle after a single use.",
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
      ja: "効果バツグンのエスパータイプの技を受けた時ダメージを半減する。1度使うとその対戦中は無くなる。",
      en: "Halves the damage taken when the holder is hit with a supereffective Psychic-type move. Disappears for the duration of the battle after a single use.",
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
      ja: "効果バツグンのむしタイプの技を受けた時ダメージが半減する。1度使うとその対戦中は無くなる。",
      en: "Halves the damage taken when the holder is hit with a supereffective Bug-type move. Disappears for the duration of the battle after a single use.",
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
      ja: "効果バツグンのいわタイプの技を受けた時ダメージが半減する。1度使うとその対戦中は無くなる。",
      en: "Halves the damage taken when the holder is hit with a supereffective Rock-type move. Disappears for the duration of the battle after a single use.",
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
      ja: "効果バツグンのゴーストタイプの技を受けた時ダメージが半減する。1度使うとその対戦中は無くなる。",
      en: "Halves the damage taken when the holder is hit with a supereffective Ghost-type move. Disappears for the duration of the battle after a single use.",
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
      ja: "効果バツグンのドラゴンタイプの技を受けた時ダメージが半減する。1度使うとその対戦中は無くなる。",
      en: "Halves the damage taken when the holder is hit with a supereffective Dragon-type move. Disappears for the duration of the battle after a single use.",
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
      ja: "効果バツグンのあくタイプの技を受けた時ダメージが半減する。1度使うとその対戦中は無くなる。",
      en: "Halves the damage taken when the holder is hit with a supereffective Dark-type move. Disappears for the duration of the battle after a single use.",
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
      ja: "効果バツグンのはがねタイプの技を受けた時ダメージが半減する。1度使うとその対戦中は無くなる。",
      en: "Halves the damage taken when the holder is hit with a supereffective Steel-type move. Disappears for the duration of the battle after a single use.",
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
      ja: "効果バツグンのフェアリータイプの技を受けた時ダメージが半減する。1度使うとその対戦中は無くなる。",
      en: "Halves the damage taken when the holder is hit with a supereffective Fairy-type move. Disappears for the duration of the battle after a single use.",
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
      ja: "ノーマルタイプの技を受けた時ダメージが半減する。1度使うとその対戦中は無くなる。",
      en: "Halves the damage taken when the holder is hit with a Normal-type move. Disappears for the duration of the battle after a single use.",
    },
    effects: chilanBerryEffects,
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
      ja: "フェアリータイプの技の威力が1.2倍になる。",
      en: "Boosts the power of the holder’s Fairy-type moves by 20%.",
    },
    effects: createTypeBoostEffects("fairy"),
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
      ja: "ピカチュウの攻撃・特攻が2倍になる。わざ「なげつける」で投げつけると相手をまひ状態にする。",
      en: "When held by a Pikachu, doubles the holder’s Attack and Sp. Atk.",
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
      ja: "オーダイルがバトル中メガシンカ可能になる。",
      en: "A held item that allows Feraligatr to Mega Evolve.",
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
      ja: "メガニウムがバトル中メガシンカ可能になる。",
      en: "A held item that allows Meganium to Mega Evolve.",
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
      ja: "エンブオーがバトル中メガシンカ可能になる。",
      en: "A held item that allows Emboar to Mega Evolve.",
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
      ja: "スピアーがバトル中メガシンカ可能になる。",
      en: "A held item that allows Beedrill to Mega Evolve.",
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
      ja: "デンリュウがバトル中メガシンカ可能になる。",
      en: "A held item that allows Ampharos to Mega Evolve.",
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
      ja: "ガメノデスがバトル中メガシンカ可能になる。",
      en: "A held item that allows Barbaracle to Mega Evolve.",
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
      ja: "スターミーがバトル中メガシンカ可能になる。",
      en: "A held item that allows Starmie to Mega Evolve.",
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
      ja: "ウツボットがバトル中メガシンカ可能になる。",
      en: "A held item that allows Victreebel to Mega Evolve.",
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
      ja: "チルタリスがバトル中メガシンカ可能になる。",
      en: "A held item that allows Altaria to Mega Evolve.",
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
      ja: "ジュペッタがバトル中メガシンカ可能になる。",
      en: "A held item that allows Banette to Mega Evolve.",
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
      ja: "バクーダがバトル中メガシンカ可能になる。",
      en: "A held item that allows Camerupt to Mega Evolve.",
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
      ja: "クチートがバトル中メガシンカ可能になる。",
      en: "A held item that allows Mawile to Mega Evolve.",
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
      ja: "アブソルがバトル中メガシンカ可能になる。",
      en: "A held item that allows Absol to Mega Evolve into Mega Absol.",
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
      ja: "ヤドランがバトル中メガシンカ可能になる。",
      en: "A held item that allows Slowbro to Mega Evolve. It has no effect on Galarian Slowbro.",
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
      ja: "カイリューがバトル中メガシンカ可能になる。",
      en: "A held item that allows Dragonite to Mega Evolve.",
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
      ja: "ユキメノコがバトル中メガシンカ可能になる。",
      en: "A held item that allows Froslass to Mega Evolve.",
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
      ja: "ルチャブルがバトル中メガシンカ可能になる。",
      en: "A held item that allows Hawlucha to Mega Evolve.",
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
      ja: "バンギラスがバトル中メガシンカ可能になる。",
      en: "A held item that allows Tyranitar to Mega Evolve.",
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
      ja: "ピジョットがバトル中メガシンカ可能になる。",
      en: "A held item that allows Pidgeot to Mega Evolve.",
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
      ja: "ライボルトがバトル中メガシンカ可能になる。",
      en: "A held item that allows Manectric to Mega Evolve.",
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
      ja: "ヘルガーがバトル中メガシンカ可能になる。",
      en: "A held item that allows Houndoom to Mega Evolve.",
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
      ja: "タブンネがバトル中メガシンカ可能になる。",
      en: "A held item that allows Audino to Mega Evolve.",
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
      ja: "ミミロップがバトル中メガシンカ可能になる。",
      en: "A held item that allows Lopunny to Mega Evolve.",
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
      ja: "ヤミラミがバトル中メガシンカ可能になる。",
      en: "A held item that allows Sableye to Mega Evolve.",
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
      ja: "サメハダーがバトル中メガシンカ可能になる。",
      en: "A held item that allows Sharpedo to Mega Evolve.",
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
      ja: "ギャラドスがバトル中メガシンカ可能になる。",
      en: "A held item that allows Gyarados to Mega Evolve.",
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
      ja: "ルカリオがバトル中メガシンカ可能になる。",
      en: "A held item that allows Lucario to Mega Evolve into Mega Lucario.",
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
      ja: "ヘラクロスがバトル中メガシンカ可能になる。",
      en: "A held item that allows Heracross to Mega Evolve.",
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
      ja: "プテラがバトル中メガシンカ可能になる。",
      en: "A held item that allows Aerodactyl to Mega Evolve.",
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
      ja: "フーディンがバトル中メガシンカ可能になる。",
      en: "A held item that allows Alakazam to Mega Evolve.",
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
      ja: "ジジーロンがバトル中メガシンカ可能になる。",
      en: "A held item that allows Drampa to Mega Evolve.",
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
      ja: "シビルドンがバトル中メガシンカ可能になる。",
      en: "A held item that allows Eelektross to Mega Evolve.",
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
      ja: "オニゴーリがバトル中メガシンカ可能になる。",
      en: "A held item that allows Glalie to Mega Evolve.",
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
      ja: "カイロスがバトル中メガシンカ可能になる。",
      en: "A held item that allows Pinsir to Mega Evolve.",
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
      ja: "タイレーツがバトル中メガシンカ可能になる。",
      en: "A held item that allows Falinks to Mega Evolve.",
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
      ja: "ペンドラーがバトル中メガシンカ可能になる。",
      en: "A held item that allows Scolipede to Mega Evolve.",
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
      ja: "サーナイトがバトル中メガシンカ可能になる。",
      en: "A held item that allows Gardevoir to Mega Evolve.",
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
      ja: "エルレイドがバトル中メガシンカ可能になる。",
      en: "A held item that allows Gallade to Mega Evolve.",
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
      ja: "エアームドがバトル中メガシンカ可能になる。",
      en: "A held item that allows Skarmory to Mega Evolve.",
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
      ja: "ピクシーがバトル中メガシンカ可能になる。",
      en: "A held item that allows Clefable to Mega Evolve.",
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
      ja: "ドラミドロがバトル中メガシンカ可能になる。",
      en: "A held item that allows Dragalge to Mega Evolve.",
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
      ja: "ズルズキンがバトル中メガシンカ可能になる。",
      en: "A held item that allows Scrafty to Mega Evolve.",
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
      ja: "カエンジシがバトル中メガシンカ可能になる。",
      en: "A held item that allows Pyroar to Mega Evolve.",
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
      ja: "カラマネロがバトル中メガシンカ可能になる。",
      en: "A held item that allows Malamar to Mega Evolve.",
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
      ja: "ドリュウズがバトル中メガシンカ可能になる。",
      en: "A held item that allows Excadrill to Mega Evolve.",
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
      ja: "シャンデラがバトル中メガシンカ可能になる。",
      en: "A held item that allows Chandelure to Mega Evolve.",
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
      ja: "ボスゴドラがバトル中メガシンカ可能になる。",
      en: "A held item that allows Aggron to Mega Evolve.",
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
      ja: "メタグロスがバトル中メガシンカ可能になる。",
      en: "A held item that allows Metagross to Mega Evolve.",
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
      ja: "ゲンガーがバトル中メガシンカ可能になる。",
      en: "A held item that allows Gengar to Mega Evolve.",
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
      ja: "チャーレムがバトル中メガシンカ可能になる。",
      en: "A held item that allows Medicham to Mega Evolve.",
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
      ja: "ユキノオーがバトル中メガシンカ可能になる。",
      en: "A held item that allows Abomasnow to Mega Evolve.",
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
      ja: "ハッサムがバトル中メガシンカ可能になる。",
      en: "A held item that allows Scizor to Mega Evolve.",
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
      ja: "ガブリアスがバトル中メガシンカ可能になる。",
      en: "A held item that allows Garchomp to Mega Evolve into Mega Garchomp.",
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
      ja: "ハガネールがバトル中メガシンカ可能になる。",
      en: "A held item that allows Steelix to Mega Evolve.",
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
      ja: "ガルーラがバトル中メガシンカ可能になる。",
      en: "A held item that allows Kangaskhan to Mega Evolve.",
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
      ja: "リザードンがバトル中メガシンカ可能になる。",
      en: "A held item that allows Charizard to Mega Evolve into Mega Charizard X.",
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
      ja: "リザードンがバトル中メガシンカ可能になる。",
      en: "A held item that allows Charizard to Mega Evolve into Mega Charizard Y.",
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
      ja: "カメックスがバトル中メガシンカ可能になる。",
      en: "A held item that allows Blastoise to Mega Evolve.",
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
      ja: "フシギバナがバトル中メガシンカ可能になる。",
      en: "A held item that allows Venusaur to Mega Evolve.",
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
      ja: "ゲッコウガがバトル中メガシンカ可能になる。",
      en: "A held item that allows Greninja to Mega Evolve.",
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
      ja: "マフォクシーがバトル中メガシンカ可能になる。",
      en: "A held item that allows Delphox to Mega Evolve.",
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
      ja: "ブリガロンがバトル中メガシンカ可能になる。",
      en: "A held item that allows Chesnaught to Mega Evolve.",
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
      ja: "フラエッテ(えいえんのはな)がバトル中メガシンカ可能になる。",
      en: "A held item that allows Eternal Flower Floette to Mega Evolve.",
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
      ja: "ライチュウがバトル中メガシンカ可能になる。",
      en: "A held item that allows Raichu to Mega Evolve into Mega Raichu X. It has no effect on Alolan Raichu.",
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
      ja: "ライチュウがバトル中メガシンカ可能になる。",
      en: "A held item that allows Raichu to Mega Evolve into Mega Raichu Y. It has no effect on Alolan Raichu.",
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
      ja: "ジュカインがバトル中メガシンカ可能になる。",
      en: "A held item that allows Sceptile to Mega Evolve.",
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
      ja: "ラグラージがバトル中メガシンカ可能になる。",
      en: "A held item that allows Swampert to Mega Evolve.",
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
      ja: "バシャーモがバトル中メガシンカ可能になる。",
      en: "A held item that allows Blaziken to Mega Evolve.",
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
      ja: "ムクホークがバトル中メガシンカ可能になる。",
      en: "A held item that allows Staraptor to Mega Evolve.",
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
      ja: "チリーンがバトル中メガシンカ可能になる。",
      en: "A held item that allows Chimecho to Mega Evolve.",
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
      ja: "ケケンカニがバトル中メガシンカ可能になる。",
      en: "A held item that allows Crabominable to Mega Evolve.",
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
      ja: "スコヴィランがバトル中メガシンカ可能になる。",
      en: "A held item that allows Scovillain to Mega Evolve.",
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
      ja: "ゴルーグがバトル中メガシンカ可能になる。",
      en: "A held item that allows Golurk to Mega Evolve.",
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
      ja: "ニャオニクスがバトル中メガシンカ可能になる。",
      en: "A held item that allows Meowstic to Mega Evolve.",
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
      ja: "キラフロルがバトル中メガシンカ可能になる。",
      en: "A held item that allows Glimmora to Mega Evolve.",
    },
    effects: [],
    flingPower: 80,
  },
} satisfies Record<string, Item>;
