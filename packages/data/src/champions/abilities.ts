import {
  adaptabilityEffects,
  analyticEffects,
  disguiseEffects,
  iceBodyEffects,
  multiscaleEffects,
  parentalBondEffects,
  roughSkinEffects,
  skillLinkEffects,
  strongJawEffects,
  sturdyEffects,
  technicianEffects,
  toughClawsEffects,
  type Ability,
} from "@poke-calc/core";

export const championsAbilities = {
  adaptability: {
    id: 91,
    key: "adaptability",
    names: {
      ja: "てきおうりょく",
      en: "Adaptability",
    },
    descriptions: {
      ja: "タイプが　おなじ　わざの いりょくが　あがる。",
      en: "Powers up moves of the same type.",
    },
    effects: adaptabilityEffects,
  },
  aerilate: {
    id: 184,
    key: "aerilate",
    names: {
      ja: "スカイスキン",
      en: "Aerilate",
    },
    descriptions: {
      ja: "ノーマルタイプの　わざが ひこうタイプになる。",
      en: "Normal-type moves become Flying-type moves.",
    },
    effects: [],
  },
  aftermath: {
    id: 106,
    key: "aftermath",
    names: {
      ja: "ゆうばく",
      en: "Aftermath",
    },
    descriptions: {
      ja: "ひんしの　ときに　ふれた あいてに　ダメージ。",
      en: "Damages the foe landing the finishing hit.",
    },
    effects: [],
  },
  analytic: {
    id: 148,
    key: "analytic",
    names: {
      ja: "アナライズ",
      en: "Analytic",
    },
    descriptions: {
      ja: "いちばん　さいごに わざをだすと　つよくなる。",
      en: "Boosts move power when the Pokémon moves last.",
    },
    effects: analyticEffects,
  },
  "anger-point": {
    id: 83,
    key: "anger-point",
    names: {
      ja: "いかりのつぼ",
      en: "Anger Point",
    },
    descriptions: {
      ja: "きゅうしょに　うけると こうげきが　あがる。",
      en: "Raises Attack upon taking a critical hit.",
    },
    effects: [],
  },
  anticipation: {
    id: 107,
    key: "anticipation",
    names: {
      ja: "きけんよち",
      en: "Anticipation",
    },
    descriptions: {
      ja: "あいての　もつ　きけんな わざを　さっちする。",
      en: "Senses the foe’s dangerous moves.",
    },
    effects: [],
  },
  "armor-tail": {
    id: 296,
    key: "armor-tail",
    names: {
      ja: "テイルアーマー",
      en: "Armor Tail",
    },
    descriptions: {
      ja: "頭を包む　謎のしっぽが こちらに　むかって　先制技を 出せない　ようにする。",
      en: "The mysterious tail covering the Pokémon's head makes opponents unable to use priority moves against the Pokémon or its allies.",
    },
    effects: [],
  },
  "aroma-veil": {
    id: 165,
    key: "aroma-veil",
    names: {
      ja: "アロマベール",
      en: "Aroma Veil",
    },
    descriptions: {
      ja: "みかたへの　メンタル こうげきを　ふせぐ。",
      en: "Protects allies from attacks that limit their move choices.",
    },
    effects: [],
  },
  "battle-armor": {
    id: 4,
    key: "battle-armor",
    names: {
      ja: "カブトアーマー",
      en: "Battle Armor",
    },
    descriptions: {
      ja: "あいての　こうげきが きゅうしょに　あたらない。",
      en: "Blocks critical hits.",
    },
    effects: [],
  },
  berserk: {
    id: 201,
    key: "berserk",
    names: {
      ja: "ぎゃくじょう",
      en: "Berserk",
    },
    descriptions: {
      ja: "あいての　こうげきで ＨＰが　はんぶんに　なると とくこうが　あがる。",
      en: "Boosts the Pokémon’s Sp. Atk stat when it takes a hit that causes its HP to become half or less.",
    },
    effects: [],
  },
  "big-pecks": {
    id: 145,
    key: "big-pecks",
    names: {
      ja: "はとむね",
      en: "Big Pecks",
    },
    descriptions: {
      ja: "ぼうぎょを　さげる こうげきを　うけない。",
      en: "Protects the Pokémon from Defense-lowering attacks.",
    },
    effects: [],
  },
  blaze: {
    id: 66,
    key: "blaze",
    names: {
      ja: "もうか",
      en: "Blaze",
    },
    descriptions: {
      ja: "ピンチのとき　ほのおの いりょくが　あがる。",
      en: "Ups FIRE moves in a pinch.",
    },
    effects: [],
  },
  bulletproof: {
    id: 171,
    key: "bulletproof",
    names: {
      ja: "ぼうだん",
      en: "Bulletproof",
    },
    descriptions: {
      ja: "たまや　ばくだんに あたらない。",
      en: "Protects the Pokémon from some ball and bomb moves.",
    },
    effects: [],
  },
  "cheek-pouch": {
    id: 167,
    key: "cheek-pouch",
    names: {
      ja: "ほおぶくろ",
      en: "Cheek Pouch",
    },
    descriptions: {
      ja: "きのみを　たべると ＨＰも　かいふくする。",
      en: "Restores HP as well when the Pokémon eats a Berry.",
    },
    effects: [],
  },
  chlorophyll: {
    id: 34,
    key: "chlorophyll",
    names: {
      ja: "ようりょくそ",
      en: "Chlorophyll",
    },
    descriptions: {
      ja: "はれのとき　すばやさが あがる。",
      en: "Raises SPEED in sunshine.",
    },
    effects: [],
  },
  "clear-body": {
    id: 29,
    key: "clear-body",
    names: {
      ja: "クリアボディ",
      en: "Clear Body",
    },
    descriptions: {
      ja: "あいてに　のうりょくを さげられない。",
      en: "Prevents ability reduction.",
    },
    effects: [],
  },
  "cloud-nine": {
    id: 13,
    key: "cloud-nine",
    names: {
      ja: "ノーてんき",
      en: "Cloud Nine",
    },
    descriptions: {
      ja: "てんきの　えいきょうが なくなる。",
      en: "Negates weather effects.",
    },
    effects: [],
  },
  competitive: {
    id: 172,
    key: "competitive",
    names: {
      ja: "かちき",
      en: "Competitive",
    },
    descriptions: {
      ja: "のうりょくが　さがると とくこうが　あがる。",
      en: "Boosts the Sp. Atk stat when a stat is lowered.",
    },
    effects: [],
  },
  "compound-eyes": {
    id: 14,
    key: "compound-eyes",
    names: {
      ja: "ふくがん",
      en: "Compound Eyes",
    },
    descriptions: {
      ja: "わざの　めいちゅうりつが あがる。",
      en: "Raises accuracy.",
    },
    effects: [],
  },
  contrary: {
    id: 126,
    key: "contrary",
    names: {
      ja: "あまのじゃく",
      en: "Contrary",
    },
    descriptions: {
      ja: "のうりょくの　へんかが ぎゃくてんする。",
      en: "Makes stat changes have an opposite effect.",
    },
    effects: [],
  },
  corrosion: {
    id: 212,
    key: "corrosion",
    names: {
      ja: "ふしょく",
      en: "Corrosion",
    },
    descriptions: {
      ja: "はがねタイプや　どくタイプも どく　じょうたいに　することが　できる。",
      en: "The Pokémon can poison the target even if it’s a Steel or Poison type.",
    },
    effects: [],
  },
  "cud-chew": {
    id: 291,
    key: "cud-chew",
    names: {
      ja: "はんすう",
      en: "Cud Chew",
    },
    descriptions: {
      ja: "きのみを　食べると 次のターンの　終わりに　胃から 出して　もう1回だけ　食べる。",
      en: "When the Pokémon eats a Berry, it will regurgitate that Berry at the end of the next turn and eat it one more time.",
    },
    effects: [],
  },
  "cursed-body": {
    id: 130,
    key: "cursed-body",
    names: {
      ja: "のろわれボディ",
      en: "Cursed Body",
    },
    descriptions: {
      ja: "こうげきされると　たまに かなしばりにする。",
      en: "May disable a move used on the Pokémon.",
    },
    effects: [],
  },
  "cute-charm": {
    id: 56,
    key: "cute-charm",
    names: {
      ja: "メロメロボディ",
      en: "Cute Charm",
    },
    descriptions: {
      ja: "ふれると　メロメロに することがある。",
      en: "Infatuates on contact.",
    },
    effects: [],
  },
  damp: {
    id: 6,
    key: "damp",
    names: {
      ja: "しめりけ",
      en: "Damp",
    },
    descriptions: {
      ja: "だれも　ばくはつが できなくなる。",
      en: "Prevents self-destruction.",
    },
    effects: [],
  },
  defiant: {
    id: 128,
    key: "defiant",
    names: {
      ja: "まけんき",
      en: "Defiant",
    },
    descriptions: {
      ja: "のうりょくが　さがると こうげきが　あがる。",
      en: "When its stats are lowered its Attack increases.",
    },
    effects: [],
  },
  disguise: {
    id: 209,
    key: "disguise",
    names: {
      ja: "ばけのかわ",
      en: "Disguise",
    },
    descriptions: {
      ja: "からだを　おおう　ばけのかわで　 １かい　こうげきを　ふせぐことが　できる。",
      en: "Once per battle, the shroud that covers the Pokémon can protect it from an attack.",
    },
    effects: disguiseEffects,
  },
  dragonize: {
    id: 309,
    key: "dragonize",
    names: {
      ja: "ドラゴンスキン",
      en: "Dragonize",
    },
    descriptions: {
      ja: "ノーマルタイプの技がドラゴンタイプになり 威力が1.2倍になる。",
      en: "The Pokémon's Normal-type moves become Dragon-type moves and their power is boosted by 20%.",
    },
    effects: [],
  },
  drizzle: {
    id: 2,
    key: "drizzle",
    names: {
      ja: "あめふらし",
      en: "Drizzle",
    },
    descriptions: {
      ja: "せんとうに　でると あめを　ふらす。",
      en: "Summons rain in battle.",
    },
    effects: [],
  },
  drought: {
    id: 70,
    key: "drought",
    names: {
      ja: "ひでり",
      en: "Drought",
    },
    descriptions: {
      ja: "せんとうに　でると ひざしが　つよくなる。",
      en: "Summons sunlight in battle.",
    },
    effects: [],
  },
  "dry-skin": {
    id: 87,
    key: "dry-skin",
    names: {
      ja: "かんそうはだ",
      en: "Dry Skin",
    },
    descriptions: {
      ja: "あついと　ＨＰが　へる。 みずで　ＨＰを　かいふく。",
      en: "Reduces HP if it is hot. Water restores HP.",
    },
    effects: [],
  },
  "early-bird": {
    id: 48,
    key: "early-bird",
    names: {
      ja: "はやおき",
      en: "Early Bird",
    },
    descriptions: {
      ja: "おきるのが　はやくなる。 ",
      en: "Awakens quickly from sleep.",
    },
    effects: [],
  },
  "earth-eater": {
    id: 297,
    key: "earth-eater",
    names: {
      ja: "どしょく",
      en: "Earth Eater",
    },
    descriptions: {
      ja: "じめんタイプの　技を　受けると ダメージを　受けずに　回復する。",
      en: "If hit by a Ground-type move, the Pokémon has its HP restored instead of taking damage.",
    },
    effects: [],
  },
  eelevate: {
    id: 312,
    key: "eelevate",
    names: {
      ja: "Eelevate",
      en: "Eelevate",
    },
    descriptions: {
      ja: "The Pokémon floats off the ground, making it immune to Ground-type moves, as well as the Spikes, Toxic Spikes, and Sticky Web statuses. When the Pokémon knocks out a target with an attack, its highest stat is boosted by 1 stage.",
      en: "The Pokémon floats off the ground, making it immune to Ground-type moves, as well as the Spikes, Toxic Spikes, and Sticky Web statuses. When the Pokémon knocks out a target with an attack, its highest stat is boosted by 1 stage.",
    },
    effects: [],
  },
  "effect-spore": {
    id: 27,
    key: "effect-spore",
    names: {
      ja: "ほうし",
      en: "Effect Spore",
    },
    descriptions: {
      ja: "ふれると　どく　まひ ねむりに　することがある。",
      en: "Leaves spores on contact.",
    },
    effects: [],
  },
  "electric-surge": {
    id: 226,
    key: "electric-surge",
    names: {
      ja: "エレキメイカー",
      en: "Electric Surge",
    },
    descriptions: {
      ja: "とうじょう　したときに エレキフィールドを　はりめぐらせる。",
      en: "Turns the ground into Electric Terrain when the Pokémon enters a battle.",
    },
    effects: [],
  },
  electromorphosis: {
    id: 280,
    key: "electromorphosis",
    names: {
      ja: "でんきにかえる",
      en: "Electromorphosis",
    },
    descriptions: {
      ja: "ダメージを　受けると じゅうでん　状態に　なる。",
      en: "The Pokémon becomes charged when it takes damage, boosting the power of the next Electric-type move the Pokémon uses.",
    },
    effects: [],
  },
  "fairy-aura": {
    id: 187,
    key: "fairy-aura",
    names: {
      ja: "フェアリーオーラ",
      en: "Fairy Aura",
    },
    descriptions: {
      ja: "ぜんいんの　フェアリー わざが　つよくなる。",
      en: "Powers up each Pokémon’s Fairy-type moves.",
    },
    effects: [],
  },
  filter: {
    id: 111,
    key: "filter",
    names: {
      ja: "フィルター",
      en: "Filter",
    },
    descriptions: {
      ja: "こうかばつぐん　のとき いりょくを　よわめる。",
      en: "Powers down super­ effective moves.",
    },
    effects: [],
  },
  "fire-mane": {
    id: 313,
    key: "fire-mane",
    names: {
      ja: "Fire Mane",
      en: "Fire Mane",
    },
    descriptions: {
      ja: "Boosts the power of the Pokémon's Fire-type moves by 50%.",
      en: "Boosts the power of the Pokémon's Fire-type moves by 50%.",
    },
    effects: [],
  },
  "flame-body": {
    id: 49,
    key: "flame-body",
    names: {
      ja: "ほのおのからだ",
      en: "Flame Body",
    },
    descriptions: {
      ja: "ふれた　あいてを　やけど させることがある。",
      en: "Burns the foe on contact.",
    },
    effects: [],
  },
  "flash-fire": {
    id: 18,
    key: "flash-fire",
    names: {
      ja: "もらいび",
      en: "Flash Fire",
    },
    descriptions: {
      ja: "ほのおを　うけると ほのおわざが　つよくなる。",
      en: "Powers up if hit by fire.",
    },
    effects: [],
  },
  "flower-veil": {
    id: 166,
    key: "flower-veil",
    names: {
      ja: "フラワーベール",
      en: "Flower Veil",
    },
    descriptions: {
      ja: "みかたの　くさポケモンは のうりょくが　さがらない。",
      en: "Prevents lowering of ally Grass-type Pokémon’s stats.",
    },
    effects: [],
  },
  fluffy: {
    id: 218,
    key: "fluffy",
    names: {
      ja: "もふもふ",
      en: "Fluffy",
    },
    descriptions: {
      ja: "あいてから　うけた　せっしょくする　わざの ダメージを　はんげんするが　ほのおタイプの わざの　ダメージは　２ばいになる。",
      en: "Halves the damage taken from moves that make direct contact, but doubles that of Fire-type moves.",
    },
    effects: [],
  },
  forecast: {
    id: 59,
    key: "forecast",
    names: {
      ja: "てんきや",
      en: "Forecast",
    },
    descriptions: {
      ja: "てんきで　ポワルンが へんかする。",
      en: "Changes with the weather.",
    },
    effects: [],
  },
  forewarn: {
    id: 108,
    key: "forewarn",
    names: {
      ja: "よちむ",
      en: "Forewarn",
    },
    descriptions: {
      ja: "あいての　もつ　わざを よみとることが　できる。",
      en: "Determines what moves the foe has.",
    },
    effects: [],
  },
  "friend-guard": {
    id: 132,
    key: "friend-guard",
    names: {
      ja: "フレンドガード",
      en: "Friend Guard",
    },
    descriptions: {
      ja: "みかたの　ダメージを へらすことができる。",
      en: "Reduces damage done to allies.",
    },
    effects: [],
  },
  frisk: {
    id: 119,
    key: "frisk",
    names: {
      ja: "おみとおし",
      en: "Frisk",
    },
    descriptions: {
      ja: "あいての　もちものを しることが　できる。",
      en: "The Pokémon can check the foe’s held item.",
    },
    effects: [],
  },
  "fur-coat": {
    id: 169,
    key: "fur-coat",
    names: {
      ja: "ファーコート",
      en: "Fur Coat",
    },
    descriptions: {
      ja: "ぶつりわざの　ダメージが はんぶんになる。",
      en: "Halves damage from physical moves.",
    },
    effects: [],
  },
  "gale-wings": {
    id: 177,
    key: "gale-wings",
    names: {
      ja: "はやてのつばさ",
      en: "Gale Wings",
    },
    descriptions: {
      ja: "ひこうタイプの　わざが せんせいで　だせる。",
      en: "Gives priority to Flying-type moves.",
    },
    effects: [],
  },
  gluttony: {
    id: 82,
    key: "gluttony",
    names: {
      ja: "くいしんぼう",
      en: "Gluttony",
    },
    descriptions: {
      ja: "きのみを　いつもより はやく　つかう。",
      en: "Encourages the early use of a held Berry.",
    },
    effects: [],
  },
  "good-as-gold": {
    id: 283,
    key: "good-as-gold",
    names: {
      ja: "おうごんのからだ",
      en: "Good as Gold",
    },
    descriptions: {
      ja: "酸化せず　丈夫な　黄金の体は 相手からの　変化技を　受けない。",
      en: "A body of pure, solid gold gives the Pokémon full immunity to other Pokémon's status moves.",
    },
    effects: [],
  },
  gooey: {
    id: 183,
    key: "gooey",
    names: {
      ja: "ぬめぬめ",
      en: "Gooey",
    },
    descriptions: {
      ja: "ふれた　あいての すばやさを　さげる。",
      en: "Contact with the Pokémon lowers the attacker’s Speed stat.",
    },
    effects: [],
  },
  guts: {
    id: 62,
    key: "guts",
    names: {
      ja: "こんじょう",
      en: "Guts",
    },
    descriptions: {
      ja: "じょうたい　いじょうで こうげきが　あがる。",
      en: "Ups ATTACK if suffering.",
    },
    effects: [],
  },
  harvest: {
    id: 139,
    key: "harvest",
    names: {
      ja: "しゅうかく",
      en: "Harvest",
    },
    descriptions: {
      ja: "つかった　きのみを なんかいも　つくりだす。",
      en: "May create another Berry after one is used.",
    },
    effects: [],
  },
  healer: {
    id: 131,
    key: "healer",
    names: {
      ja: "いやしのこころ",
      en: "Healer",
    },
    descriptions: {
      ja: "じょうたい　いじょうの みかたを　たまに　なおす。",
      en: "May heal an ally’s status conditions.",
    },
    effects: [],
  },
  heatproof: {
    id: 85,
    key: "heatproof",
    names: {
      ja: "たいねつ",
      en: "Heatproof",
    },
    descriptions: {
      ja: "ほのお　わざの いりょくを　よわめる。",
      en: "Weakens the power of Fire-type moves.",
    },
    effects: [],
  },
  "heavy-metal": {
    id: 134,
    key: "heavy-metal",
    names: {
      ja: "ヘヴィメタル",
      en: "Heavy Metal",
    },
    descriptions: {
      ja: "じぶんの　おもさが ２ばいに　なる。",
      en: "Doubles the Pokémon’s weight.",
    },
    effects: [],
  },
  hospitality: {
    id: 301,
    key: "hospitality",
    names: {
      ja: "おもてなし",
      en: "Hospitality",
    },
    descriptions: {
      ja: "登場したとき　味方を　もてなして HPを　少しだけ　回復してあげる。",
      en: "When the Pokémon enters a battle, it showers its ally with hospitality, restoring a small amount of the ally's HP",
    },
    effects: [],
  },
  "huge-power": {
    id: 37,
    key: "huge-power",
    names: {
      ja: "ちからもち",
      en: "Huge Power",
    },
    descriptions: {
      ja: "ぶつり　こうげきの いりょくが　あがる。",
      en: "Raises ATTACK.",
    },
    effects: [],
  },
  "hunger-switch": {
    id: 258,
    key: "hunger-switch",
    names: {
      ja: "はらぺこスイッチ",
      en: "Hunger Switch",
    },
    descriptions: {
      ja: "ターンの　おわりに　まんぷくもよう はらぺこもよう　まんぷくもよう……と こうごに　すがたを　かえる。",
      en: "The Pokémon changes its form, alternating between its Full Belly Mode and Hangry Mode after the end of each turn.",
    },
    effects: [],
  },
  hustle: {
    id: 55,
    key: "hustle",
    names: {
      ja: "はりきり",
      en: "Hustle",
    },
    descriptions: {
      ja: "こうげきは　たかいが はずれやすい。",
      en: "Trades accuracy for power.",
    },
    effects: [],
  },
  hydration: {
    id: 93,
    key: "hydration",
    names: {
      ja: "うるおいボディ",
      en: "Hydration",
    },
    descriptions: {
      ja: "じょうたい　いじょうが あめの　とき　なおる。",
      en: "Heals status problems if it is raining.",
    },
    effects: [],
  },
  "hyper-cutter": {
    id: 52,
    key: "hyper-cutter",
    names: {
      ja: "かいりきバサミ",
      en: "Hyper Cutter",
    },
    descriptions: {
      ja: "あいてに　こうげきを さげられない。",
      en: "Prevents ATTACK reduction.",
    },
    effects: [],
  },
  "ice-body": {
    id: 115,
    key: "ice-body",
    names: {
      ja: "アイスボディ",
      en: "Ice Body",
    },
    descriptions: {
      ja: "あられのとき　HPを すこしずつ　かいふく。",
      en: "The Pokémon regains HP in a hailstorm.",
    },
    effects: iceBodyEffects,
  },
  illuminate: {
    id: 35,
    key: "illuminate",
    names: {
      ja: "はっこう",
      en: "Illuminate",
    },
    descriptions: {
      ja: "やせいの　ポケモンに そうぐう　しやすくなる。",
      en: "Encounter rate increases.",
    },
    effects: [],
  },
  illusion: {
    id: 149,
    key: "illusion",
    names: {
      ja: "イリュージョン",
      en: "Illusion",
    },
    descriptions: {
      ja: "うしろの　ポケモンに なりきって　でてくる。",
      en: "Comes out disguised as the Pokémon in back.",
    },
    effects: [],
  },
  immunity: {
    id: 17,
    key: "immunity",
    names: {
      ja: "めんえき",
      en: "Immunity",
    },
    descriptions: {
      ja: "どく　じょうたいに ならない。",
      en: "Prevents poisoning.",
    },
    effects: [],
  },
  imposter: {
    id: 150,
    key: "imposter",
    names: {
      ja: "かわりもの",
      en: "Imposter",
    },
    descriptions: {
      ja: "めのまえの　ポケモンに へんしん　してしまう。",
      en: "It transforms itself into the Pokémon it is facing.",
    },
    effects: [],
  },
  infiltrator: {
    id: 151,
    key: "infiltrator",
    names: {
      ja: "すりぬけ",
      en: "Infiltrator",
    },
    descriptions: {
      ja: "あいての　かべを すりぬけて　こうげき。",
      en: "Passes through the foe’s barrier and strikes.",
    },
    effects: [],
  },
  "innards-out": {
    id: 215,
    key: "innards-out",
    names: {
      ja: "とびだすなかみ",
      en: "Innards Out",
    },
    descriptions: {
      ja: "あいてに　たおされたとき ＨＰの　のこりの　ぶんだけ あいてに　ダメージを　あたえる。",
      en: "Damages the attacker landing the finishing hit by the amount equal to its last HP.",
    },
    effects: [],
  },
  "inner-focus": {
    id: 39,
    key: "inner-focus",
    names: {
      ja: "せいしんりょく",
      en: "Inner Focus",
    },
    descriptions: {
      ja: "ひるまない。 ",
      en: "Prevents flinching.",
    },
    effects: [],
  },
  insomnia: {
    id: 15,
    key: "insomnia",
    names: {
      ja: "ふみん",
      en: "Insomnia",
    },
    descriptions: {
      ja: "ねむり　じょうたいに ならない。",
      en: "Prevents sleep.",
    },
    effects: [],
  },
  intimidate: {
    id: 22,
    key: "intimidate",
    names: {
      ja: "いかく",
      en: "Intimidate",
    },
    descriptions: {
      ja: "あいての　こうげきを さげる。",
      en: "Lowers the foe’s ATTACK.",
    },
    effects: [],
  },
  "iron-fist": {
    id: 89,
    key: "iron-fist",
    names: {
      ja: "てつのこぶし",
      en: "Iron Fist",
    },
    descriptions: {
      ja: "パンチを　つかう　わざの いりょくが　あがる。",
      en: "Boosts the power of punching moves.",
    },
    effects: [],
  },
  justified: {
    id: 154,
    key: "justified",
    names: {
      ja: "せいぎのこころ",
      en: "Justified",
    },
    descriptions: {
      ja: "あくを　うけると こうげきが　あがる。",
      en: "Raises Attack when hit by a Dark-type move.",
    },
    effects: [],
  },
  "keen-eye": {
    id: 51,
    key: "keen-eye",
    names: {
      ja: "するどいめ",
      en: "Keen Eye",
    },
    descriptions: {
      ja: "めいちゅうりつを さげられない。",
      en: "Prevents loss of accuracy.",
    },
    effects: [],
  },
  klutz: {
    id: 103,
    key: "klutz",
    names: {
      ja: "ぶきよう",
      en: "Klutz",
    },
    descriptions: {
      ja: "もっている　どうぐを つかうことが　できない。",
      en: "The Pokémon can’t use any held items.",
    },
    effects: [],
  },
  "leaf-guard": {
    id: 102,
    key: "leaf-guard",
    names: {
      ja: "リーフガード",
      en: "Leaf Guard",
    },
    descriptions: {
      ja: "じょうたい　いじょうに はれのとき　ならない。",
      en: "Prevents status problems in sunny weather.",
    },
    effects: [],
  },
  levitate: {
    id: 26,
    key: "levitate",
    names: {
      ja: "ふゆう",
      en: "Levitate",
    },
    descriptions: {
      ja: "じめんタイプの　わざを うけない。",
      en: "Not hit by GROUND attacks.",
    },
    effects: [],
  },
  "light-metal": {
    id: 135,
    key: "light-metal",
    names: {
      ja: "ライトメタル",
      en: "Light Metal",
    },
    descriptions: {
      ja: "じぶんの　おもさが はんぶんに　なる。",
      en: "Halves the Pokémon’s weight.",
    },
    effects: [],
  },
  "lightning-rod": {
    id: 31,
    key: "lightning-rod",
    names: {
      ja: "ひらいしん",
      en: "Lightning Rod",
    },
    descriptions: {
      ja: "でんきを　よびこんで とくこうを　あげる。",
      en: "Draws electrical moves.",
    },
    effects: [],
  },
  limber: {
    id: 7,
    key: "limber",
    names: {
      ja: "じゅうなん",
      en: "Limber",
    },
    descriptions: {
      ja: "まひ　じょうたいに ならない。",
      en: "Prevents paralysis.",
    },
    effects: [],
  },
  "liquid-voice": {
    id: 204,
    key: "liquid-voice",
    names: {
      ja: "うるおいボイス",
      en: "Liquid Voice",
    },
    descriptions: {
      ja: "すべての　おとわざが みずタイプに　なる。",
      en: "All sound-based moves become Water-type moves.",
    },
    effects: [],
  },
  "long-reach": {
    id: 203,
    key: "long-reach",
    names: {
      ja: "えんかく",
      en: "Long Reach",
    },
    descriptions: {
      ja: "すべての　わざを あいてに　せっしょく　しないで だすことが　できる。",
      en: "The Pokémon uses its moves without making contact with the target.",
    },
    effects: [],
  },
  "magic-bounce": {
    id: 156,
    key: "magic-bounce",
    names: {
      ja: "マジックミラー",
      en: "Magic Bounce",
    },
    descriptions: {
      ja: "へんかわざを　かえす ことが　できる。",
      en: "Reflects status- changing moves.",
    },
    effects: [],
  },
  "magic-guard": {
    id: 98,
    key: "magic-guard",
    names: {
      ja: "マジックガード",
      en: "Magic Guard",
    },
    descriptions: {
      ja: "こうげき　いがいでは ダメージを　うけない。",
      en: "The Pokémon only takes damage from attacks.",
    },
    effects: [],
  },
  magician: {
    id: 170,
    key: "magician",
    names: {
      ja: "マジシャン",
      en: "Magician",
    },
    descriptions: {
      ja: "わざを　あてた　あいての どうぐを　うばってしまう。",
      en: "The Pokémon steals the held item of a Pokémon it hits with a move.",
    },
    effects: [],
  },
  "magma-armor": {
    id: 40,
    key: "magma-armor",
    names: {
      ja: "マグマのよろい",
      en: "Magma Armor",
    },
    descriptions: {
      ja: "こおり　じょうたいに ならない。",
      en: "Prevents freezing.",
    },
    effects: [],
  },
  "marvel-scale": {
    id: 63,
    key: "marvel-scale",
    names: {
      ja: "ふしぎなうろこ",
      en: "Marvel Scale",
    },
    descriptions: {
      ja: "じょうたい　いじょうで ぼうぎょが　あがる。",
      en: "Ups DEFENSE if suffering.",
    },
    effects: [],
  },
  "mega-launcher": {
    id: 178,
    key: "mega-launcher",
    names: {
      ja: "メガランチャー",
      en: "Mega Launcher",
    },
    descriptions: {
      ja: "はどうの　わざの いりょくが　たかい。",
      en: "Powers up aura and pulse moves.",
    },
    effects: [],
  },
  "mega-sol": {
    id: 310,
    key: "mega-sol",
    names: {
      ja: "メガソーラー",
      en: "Mega Sol",
    },
    descriptions: {
      ja: "天気が　にほんばれ状態でなくても にほんばれ状態として 技を使うことができる。",
      en: "Even when the sunlight has not turned harsh, the Pokémon can use its moves as if the weather were harsh sunlight.",
    },
    effects: [],
  },
  merciless: {
    id: 196,
    key: "merciless",
    names: {
      ja: "ひとでなし",
      en: "Merciless",
    },
    descriptions: {
      ja: "どく　じょうたいの あいてを　こうげきすると かならず　きゅうしょに　あたる。",
      en: "The Pokémon’s attacks become critical hits if the target is poisoned.",
    },
    effects: [],
  },
  minus: {
    id: 58,
    key: "minus",
    names: {
      ja: "マイナス",
      en: "Minus",
    },
    descriptions: {
      ja: "プラスかマイナスがいると とくこうが　あがる。",
      en: "Powers up with PLUS.",
    },
    effects: [],
  },
  "mirror-armor": {
    id: 240,
    key: "mirror-armor",
    names: {
      ja: "ミラーアーマー",
      en: "Mirror Armor",
    },
    descriptions: {
      ja: "じぶんが　うけた のうりょく　ダウンの こうか　だけを　はねかえす。",
      en: "Bounces back only the stat-lowering effects that the Pokémon receives.",
    },
    effects: [],
  },
  "mold-breaker": {
    id: 104,
    key: "mold-breaker",
    names: {
      ja: "かたやぶり",
      en: "Mold Breaker",
    },
    descriptions: {
      ja: "とくせいに　かんけいなく あいてに　わざを　だせる。",
      en: "Moves can be used regardless of abilities.",
    },
    effects: [],
  },
  moody: {
    id: 141,
    key: "moody",
    names: {
      ja: "ムラっけ",
      en: "Moody",
    },
    descriptions: {
      ja: "のうりょくが　あがったり さがったりする。",
      en: "Raises one stat and lowers another.",
    },
    effects: [],
  },
  "motor-drive": {
    id: 78,
    key: "motor-drive",
    names: {
      ja: "でんきエンジン",
      en: "Motor Drive",
    },
    descriptions: {
      ja: "でんきを　うけると すばやさが　あがる。",
      en: "Raises Speed if hit by an Electric-type move.",
    },
    effects: [],
  },
  moxie: {
    id: 153,
    key: "moxie",
    names: {
      ja: "じしんかじょう",
      en: "Moxie",
    },
    descriptions: {
      ja: "あいてを　たおすと こうげきが　あがる。",
      en: "Boosts Attack after knocking out any Pokémon.",
    },
    effects: [],
  },
  multiscale: {
    id: 136,
    key: "multiscale",
    names: {
      ja: "マルチスケイル",
      en: "Multiscale",
    },
    descriptions: {
      ja: "ＨＰが　まんたんのときに ダメージが　すくなくなる。",
      en: "Reduces damage when HP is full.",
    },
    effects: multiscaleEffects,
  },
  mummy: {
    id: 152,
    key: "mummy",
    names: {
      ja: "ミイラ",
      en: "Mummy",
    },
    descriptions: {
      ja: "あいてに　さわられると あいてを　ミイラにする。",
      en: "Contact with this Pokémon spreads this Ability.",
    },
    effects: [],
  },
  "natural-cure": {
    id: 30,
    key: "natural-cure",
    names: {
      ja: "しぜんかいふく",
      en: "Natural Cure",
    },
    descriptions: {
      ja: "じょうたい　いじょうが ひっこむと　なおる。",
      en: "Heals upon switching out.",
    },
    effects: [],
  },
  "no-guard": {
    id: 99,
    key: "no-guard",
    names: {
      ja: "ノーガード",
      en: "No Guard",
    },
    descriptions: {
      ja: "おたがいの　わざが かならず　あたる。",
      en: "Ensures the Pokémon and its foe’s attacks land.",
    },
    effects: [],
  },
  oblivious: {
    id: 12,
    key: "oblivious",
    names: {
      ja: "どんかん",
      en: "Oblivious",
    },
    descriptions: {
      ja: "メロメロや　ちょうはつ じょうたいに　ならない。",
      en: "Prevents attraction.",
    },
    effects: [],
  },
  opportunist: {
    id: 290,
    key: "opportunist",
    names: {
      ja: "びんじょう",
      en: "Opportunist",
    },
    descriptions: {
      ja: "相手の　能力が　上がったとき 自分も　便乗して 同じように　能力を　上げる。",
      en: "If an opponent's stat is boosted, the Pokémon seizes the opportunity to boost the same stat for itself.",
    },
    effects: [],
  },
  overcoat: {
    id: 142,
    key: "overcoat",
    names: {
      ja: "ぼうじん",
      en: "Overcoat",
    },
    descriptions: {
      ja: "ちりや　こなを ふせぐ。",
      en: "Protects the Pokémon from damage from weather.",
    },
    effects: [],
  },
  overgrow: {
    id: 65,
    key: "overgrow",
    names: {
      ja: "しんりょく",
      en: "Overgrow",
    },
    descriptions: {
      ja: "ピンチのとき　くさの いりょくが　あがる。",
      en: "Ups GRASS moves in a pinch.",
    },
    effects: [],
  },
  "own-tempo": {
    id: 20,
    key: "own-tempo",
    names: {
      ja: "マイペース",
      en: "Own Tempo",
    },
    descriptions: {
      ja: "こんらん　じょうたいに ならない。",
      en: "Prevents confusion.",
    },
    effects: [],
  },
  "parental-bond": {
    id: 185,
    key: "parental-bond",
    names: {
      ja: "おやこあい",
      en: "Parental Bond",
    },
    descriptions: {
      ja: "おやこ　２ひきで こうげきする。",
      en: "Parent and child attack together.",
    },
    effects: parentalBondEffects,
  },
  pickpocket: {
    id: 124,
    key: "pickpocket",
    names: {
      ja: "わるいてぐせ",
      en: "Pickpocket",
    },
    descriptions: {
      ja: "さわられた　あいてから どうぐを　ぬすむ。",
      en: "Steals an item when hit by another Pokémon.",
    },
    effects: [],
  },
  pickup: {
    id: 53,
    key: "pickup",
    names: {
      ja: "ものひろい",
      en: "Pickup",
    },
    descriptions: {
      ja: "どうぐを　ひろってくる ことが　ある。",
      en: "May pick up items.",
    },
    effects: [],
  },
  "piercing-drill": {
    id: 308,
    key: "piercing-drill",
    names: {
      ja: "かんつうドリル",
      en: "Piercing Drill",
    },
    descriptions: {
      ja: "接触技を使う時 相手の守りの効果を無視して 本来の1/4のダメージを与える。 相手の守りの効果以外は発動される。",
      en: "When the Pokémon uses contact moves, it can hit even targets that are protecting themselves, dealing 1/4 of the damage that the move would otherwise deal. Everything aside from the target's protective effects is still triggered.",
    },
    effects: [],
  },
  pixilate: {
    id: 182,
    key: "pixilate",
    names: {
      ja: "フェアリースキン",
      en: "Pixilate",
    },
    descriptions: {
      ja: "ノーマルタイプの　わざが フェアリータイプになる。",
      en: "Normal-type moves become Fairy-type moves.",
    },
    effects: [],
  },
  plus: {
    id: 57,
    key: "plus",
    names: {
      ja: "プラス",
      en: "Plus",
    },
    descriptions: {
      ja: "プラスかマイナスがいると とくこうが　あがる。",
      en: "Powers up with MINUS.",
    },
    effects: [],
  },
  "poison-heal": {
    id: 90,
    key: "poison-heal",
    names: {
      ja: "ポイズンヒール",
      en: "Poison Heal",
    },
    descriptions: {
      ja: "どくじょうたいに　なると ＨＰを　かいふくする。",
      en: "Restores HP if the Pokémon is poisoned.",
    },
    effects: [],
  },
  "poison-point": {
    id: 38,
    key: "poison-point",
    names: {
      ja: "どくのトゲ",
      en: "Poison Point",
    },
    descriptions: {
      ja: "ふれた　あいてに　どくを おわせる　ことがある。",
      en: "Poisons foe on contact.",
    },
    effects: [],
  },
  "poison-touch": {
    id: 143,
    key: "poison-touch",
    names: {
      ja: "どくしゅ",
      en: "Poison Touch",
    },
    descriptions: {
      ja: "さわるだけで　あいてを どくにすることがある。",
      en: "May poison targets when a Pokémon makes contact.",
    },
    effects: [],
  },
  prankster: {
    id: 158,
    key: "prankster",
    names: {
      ja: "いたずらごころ",
      en: "Prankster",
    },
    descriptions: {
      ja: "へんかわざを　せんせいで だすことが　できる。",
      en: "Gives priority to a status move.",
    },
    effects: [],
  },
  pressure: {
    id: 46,
    key: "pressure",
    names: {
      ja: "プレッシャー",
      en: "Pressure",
    },
    descriptions: {
      ja: "あいての　つかう　わざの ＰＰを　おおく　へらす。",
      en: "Raises foe’s PP usage.",
    },
    effects: [],
  },
  protean: {
    id: 168,
    key: "protean",
    names: {
      ja: "へんげんじざい",
      en: "Protean",
    },
    descriptions: {
      ja: "だした　わざと　おなじ タイプに　へんかする。",
      en: "Changes the Pokémon’s type to the type of the move it’s using.",
    },
    effects: [],
  },
  "pure-power": {
    id: 74,
    key: "pure-power",
    names: {
      ja: "ヨガパワー",
      en: "Pure Power",
    },
    descriptions: {
      ja: "ぶつり　こうげきの いりょくが　あがる。",
      en: "Raises ATTACK.",
    },
    effects: [],
  },
  "purifying-salt": {
    id: 272,
    key: "purifying-salt",
    names: {
      ja: "きよめのしお",
      en: "Purifying Salt",
    },
    descriptions: {
      ja: "清らかな塩で　状態異常に　ならない。 ゴーストタイプの　技の ダメージを　半減させる。",
      en: "The Pokémon's pure salt protects it from status conditions and halves the damage taken from Ghost-type moves.",
    },
    effects: [],
  },
  "queenly-majesty": {
    id: 214,
    key: "queenly-majesty",
    names: {
      ja: "じょおうのいげん",
      en: "Queenly Majesty",
    },
    descriptions: {
      ja: "あいてに　いあつかんを　あたえ こちらに　むかって　せんせいわざを だせない　ようにする。",
      en: "Its majesty pressures the opposing Pokémon, making it unable to attack using priority moves.",
    },
    effects: [],
  },
  "quick-feet": {
    id: 95,
    key: "quick-feet",
    names: {
      ja: "はやあし",
      en: "Quick Feet",
    },
    descriptions: {
      ja: "じょうたい　いじょうで すばやさが　あがる。",
      en: "Boosts Speed if there is a status problem.",
    },
    effects: [],
  },
  "rain-dish": {
    id: 44,
    key: "rain-dish",
    names: {
      ja: "あめうけざら",
      en: "Rain Dish",
    },
    descriptions: {
      ja: "あめのとき　すこしずつ ＨＰを　かいふくする。",
      en: "Slight HP recovery in rain.",
    },
    effects: [],
  },
  receiver: {
    id: 222,
    key: "receiver",
    names: {
      ja: "レシーバー",
      en: "Receiver",
    },
    descriptions: {
      ja: "たおされた　みかたの　とくせいを うけついで　おなじ　とくせいに　なる。",
      en: "The Pokémon copies the Ability of a defeated ally.",
    },
    effects: [],
  },
  reckless: {
    id: 120,
    key: "reckless",
    names: {
      ja: "すてみ",
      en: "Reckless",
    },
    descriptions: {
      ja: "はんどうで　ダメージを うけるわざが　つよくなる。",
      en: "Powers up moves that have recoil damage.",
    },
    effects: [],
  },
  refrigerate: {
    id: 174,
    key: "refrigerate",
    names: {
      ja: "フリーズスキン",
      en: "Refrigerate",
    },
    descriptions: {
      ja: "ノーマルタイプの　わざが こおりタイプになる。",
      en: "Normal-type moves become Ice-type moves.",
    },
    effects: [],
  },
  regenerator: {
    id: 144,
    key: "regenerator",
    names: {
      ja: "さいせいりょく",
      en: "Regenerator",
    },
    descriptions: {
      ja: "ひっこめると ＨＰが すこし　かいふくする。",
      en: "Restores a little HP when withdrawn from battle.",
    },
    effects: [],
  },
  ripen: {
    id: 247,
    key: "ripen",
    names: {
      ja: "じゅくせい",
      en: "Ripen",
    },
    descriptions: {
      ja: "じゅくせい　させることで きのみの　こうかが ばいに　なる。",
      en: "Ripens Berries and doubles their effect.",
    },
    effects: [],
  },
  rivalry: {
    id: 79,
    key: "rivalry",
    names: {
      ja: "とうそうしん",
      en: "Rivalry",
    },
    descriptions: {
      ja: "あいてと　せいべつが おなじだと　つよくなる。",
      en: "Raises Attack if the foe is of the same gender.",
    },
    effects: [],
  },
  "rock-head": {
    id: 69,
    key: "rock-head",
    names: {
      ja: "いしあたま",
      en: "Rock Head",
    },
    descriptions: {
      ja: "ぶつかっても はんどうを　うけない。",
      en: "Prevents recoil damage.",
    },
    effects: [],
  },
  "rough-skin": {
    id: 24,
    key: "rough-skin",
    names: {
      ja: "さめはだ",
      en: "Rough Skin",
    },
    descriptions: {
      ja: "ふれた　あいてを キズつける。",
      en: "Hurts to touch.",
    },
    effects: roughSkinEffects,
  },
  "sand-force": {
    id: 159,
    key: "sand-force",
    names: {
      ja: "すなのちから",
      en: "Sand Force",
    },
    descriptions: {
      ja: "すなあらしで　いりょくが あがる　わざがある。",
      en: "Boosts certain moves’ power in a sandstorm.",
    },
    effects: [],
  },
  "sand-rush": {
    id: 146,
    key: "sand-rush",
    names: {
      ja: "すなかき",
      en: "Sand Rush",
    },
    descriptions: {
      ja: "すなあらしで すばやさが　あがる。",
      en: "Boosts the Pokémon’s Speed in a sandstorm.",
    },
    effects: [],
  },
  "sand-spit": {
    id: 245,
    key: "sand-spit",
    names: {
      ja: "すなはき",
      en: "Sand Spit",
    },
    descriptions: {
      ja: "こうげきを　うけると すなあらしを　おこす。",
      en: "The Pokémon creates a sandstorm when it’s hit by an attack.",
    },
    effects: [],
  },
  "sand-stream": {
    id: 45,
    key: "sand-stream",
    names: {
      ja: "すなおこし",
      en: "Sand Stream",
    },
    descriptions: {
      ja: "せんとうで　すなあらしを おこす。",
      en: "Summons a sandstorm.",
    },
    effects: [],
  },
  "sand-veil": {
    id: 8,
    key: "sand-veil",
    names: {
      ja: "すながくれ",
      en: "Sand Veil",
    },
    descriptions: {
      ja: "すなあらしで かいひりつが　あがる。",
      en: "Ups evasion in a sandstorm.",
    },
    effects: [],
  },
  "sap-sipper": {
    id: 157,
    key: "sap-sipper",
    names: {
      ja: "そうしょく",
      en: "Sap Sipper",
    },
    descriptions: {
      ja: "くさの　わざを　うけると こうげきが　あがる。",
      en: "Boosts Attack when hit by a Grass-type move.",
    },
    effects: [],
  },
  scrappy: {
    id: 113,
    key: "scrappy",
    names: {
      ja: "きもったま",
      en: "Scrappy",
    },
    descriptions: {
      ja: "ゴーストタイプに ノーマルわざが　あたる。",
      en: "Enables moves to hit Ghost-type foes.",
    },
    effects: [],
  },
  "screen-cleaner": {
    id: 251,
    key: "screen-cleaner",
    names: {
      ja: "バリアフリー",
      en: "Screen Cleaner",
    },
    descriptions: {
      ja: "とうじょう　したときに　てきと　みかたの ひかりのかべ　リフレクター オーロラベールの　こうかが　きえる。",
      en: "When the Pokémon enters a battle, the effects of Light Screen, Reflect, and Aurora Veil are nullified for both opposing and ally Pokémon.",
    },
    effects: [],
  },
  "shadow-tag": {
    id: 23,
    key: "shadow-tag",
    names: {
      ja: "かげふみ",
      en: "Shadow Tag",
    },
    descriptions: {
      ja: "あいての　かげをふみ にげられなくする。",
      en: "Prevents the foe’s escape.",
    },
    effects: [],
  },
  sharpness: {
    id: 292,
    key: "sharpness",
    names: {
      ja: "きれあじ",
      en: "Sharpness",
    },
    descriptions: {
      ja: "相手を　切る技の 威力が　上がる。",
      en: "Powers up slicing moves.",
    },
    effects: [],
  },
  "shed-skin": {
    id: 61,
    key: "shed-skin",
    names: {
      ja: "だっぴ",
      en: "Shed Skin",
    },
    descriptions: {
      ja: "じょうたい　いじょうを なおす　ことがある。",
      en: "Heals the body by shedding.",
    },
    effects: [],
  },
  "sheer-force": {
    id: 125,
    key: "sheer-force",
    names: {
      ja: "ちからずく",
      en: "Sheer Force",
    },
    descriptions: {
      ja: "ちからが　つよくなるが ついかこうかが　なくなる。",
      en: "Removes added effects to increase move damage.",
    },
    effects: [],
  },
  "shell-armor": {
    id: 75,
    key: "shell-armor",
    names: {
      ja: "シェルアーマー",
      en: "Shell Armor",
    },
    descriptions: {
      ja: "あいての　こうげきが きゅうしょに　あたらない。",
      en: "Blocks critical hits.",
    },
    effects: [],
  },
  "shield-dust": {
    id: 19,
    key: "shield-dust",
    names: {
      ja: "りんぷん",
      en: "Shield Dust",
    },
    descriptions: {
      ja: "わざの　ついかこうかを うけない。",
      en: "Prevents added effects.",
    },
    effects: [],
  },
  "skill-link": {
    id: 92,
    key: "skill-link",
    names: {
      ja: "スキルリンク",
      en: "Skill Link",
    },
    descriptions: {
      ja: "れんぞく　わざを たくさん　だせる。",
      en: "Increases the frequency of multi-strike moves.",
    },
    effects: skillLinkEffects,
  },
  "slush-rush": {
    id: 202,
    key: "slush-rush",
    names: {
      ja: "ゆきかき",
      en: "Slush Rush",
    },
    descriptions: {
      ja: "てんきが　あられ　のとき すばやさが　あがる。",
      en: "Boosts the Pokémon’s Speed stat in a hailstorm.",
    },
    effects: [],
  },
  sniper: {
    id: 97,
    key: "sniper",
    names: {
      ja: "スナイパー",
      en: "Sniper",
    },
    descriptions: {
      ja: "きゅうしょに　あてたとき いりょくが　あがる。",
      en: "Powers up moves if they become critical hits.",
    },
    effects: [],
  },
  "snow-cloak": {
    id: 81,
    key: "snow-cloak",
    names: {
      ja: "ゆきがくれ",
      en: "Snow Cloak",
    },
    descriptions: {
      ja: "てんきが　あられのとき かいひりつが　あがる。",
      en: "Raises evasion in a hailstorm.",
    },
    effects: [],
  },
  "snow-warning": {
    id: 117,
    key: "snow-warning",
    names: {
      ja: "ゆきふらし",
      en: "Snow Warning",
    },
    descriptions: {
      ja: "せんとうに　でると あられを　ふらす。",
      en: "The Pokémon summons a hailstorm in battle.",
    },
    effects: [],
  },
  "solar-power": {
    id: 94,
    key: "solar-power",
    names: {
      ja: "サンパワー",
      en: "Solar Power",
    },
    descriptions: {
      ja: "はれると　ＨＰが　へるが とくこうが　あがる。",
      en: "Boosts Sp. Atk, but lowers HP in sunshine.",
    },
    effects: [],
  },
  "solid-rock": {
    id: 116,
    key: "solid-rock",
    names: {
      ja: "ハードロック",
      en: "Solid Rock",
    },
    descriptions: {
      ja: "こうかばつぐん　のとき いりょくを　よわめる。",
      en: "Powers down super­ effective moves.",
    },
    effects: [],
  },
  soundproof: {
    id: 43,
    key: "soundproof",
    names: {
      ja: "ぼうおん",
      en: "Soundproof",
    },
    descriptions: {
      ja: "おとの　わざを うけない。",
      en: "Avoids sound-based moves.",
    },
    effects: [],
  },
  "speed-boost": {
    id: 3,
    key: "speed-boost",
    names: {
      ja: "かそく",
      en: "Speed Boost",
    },
    descriptions: {
      ja: "ちょっとずつ すばやく　なっていく。",
      en: "Gradually boosts SPEED.",
    },
    effects: [],
  },
  "spicy-spray": {
    id: 311,
    key: "spicy-spray",
    names: {
      ja: "とびだすハバネロ",
      en: "Spicy Spray",
    },
    descriptions: {
      ja: "技のダメージを受けると 相手をやけど状態にする。",
      en: "When the Pokémon takes damage from a move, it burns the attacker.",
    },
    effects: [],
  },
  stall: {
    id: 100,
    key: "stall",
    names: {
      ja: "あとだし",
      en: "Stall",
    },
    descriptions: {
      ja: "あいてより　すばやくても こうどうが　おそくなる。",
      en: "The Pokémon moves after even slower foes.",
    },
    effects: [],
  },
  stalwart: {
    id: 242,
    key: "stalwart",
    names: {
      ja: "すじがねいり",
      en: "Stalwart",
    },
    descriptions: {
      ja: "あいての　わざを　ひきうける とくせいや　わざの えいきょうを　むし　できる。",
      en: "Ignores the effects of opposing Pokémon’s Abilities and moves that draw in moves.",
    },
    effects: [],
  },
  stamina: {
    id: 192,
    key: "stamina",
    names: {
      ja: "じきゅうりょく",
      en: "Stamina",
    },
    descriptions: {
      ja: "こうげきを　うけると ぼうぎょが　あがる。",
      en: "Boosts the Defense stat when hit by an attack.",
    },
    effects: [],
  },
  "stance-change": {
    id: 176,
    key: "stance-change",
    names: {
      ja: "バトルスイッチ",
      en: "Stance Change",
    },
    descriptions: {
      ja: "せんとうモードで すがたが　かわる。",
      en: "The Pokémon changes form depending on how it battles.",
    },
    effects: [],
  },
  static: {
    id: 9,
    key: "static",
    names: {
      ja: "せいでんき",
      en: "Static",
    },
    descriptions: {
      ja: "さわった　あいてを まひさせる　ことがある。",
      en: "Paralyzes on contact.",
    },
    effects: [],
  },
  steadfast: {
    id: 80,
    key: "steadfast",
    names: {
      ja: "ふくつのこころ",
      en: "Steadfast",
    },
    descriptions: {
      ja: "ひるむ　たびに すばやさが　あがる。",
      en: "Raises Speed each time the Pokémon flinches.",
    },
    effects: [],
  },
  stench: {
    id: 1,
    key: "stench",
    names: {
      ja: "あくしゅう",
      en: "Stench",
    },
    descriptions: {
      ja: "くさくて　あいてが ひるむ　ことがある。",
      en: "Helps repel wild POKéMON.",
    },
    effects: [],
  },
  "sticky-hold": {
    id: 60,
    key: "sticky-hold",
    names: {
      ja: "ねんちゃく",
      en: "Sticky Hold",
    },
    descriptions: {
      ja: "ねんちゃくして どうぐを　まもる。",
      en: "Prevents item theft.",
    },
    effects: [],
  },
  "strong-jaw": {
    id: 173,
    key: "strong-jaw",
    names: {
      ja: "がんじょうあご",
      en: "Strong Jaw",
    },
    descriptions: {
      ja: "あごが　がんじょうで かむ　ちからが　つよい。",
      en: "The Pokémon’s strong jaw gives it tremendous biting power.",
    },
    effects: strongJawEffects,
  },
  sturdy: {
    id: 5,
    key: "sturdy",
    names: {
      ja: "がんじょう",
      en: "Sturdy",
    },
    descriptions: {
      ja: "いちげきで たおされない。",
      en: "Negates 1-hit KO attacks.",
    },
    effects: sturdyEffects,
  },
  "suction-cups": {
    id: 21,
    key: "suction-cups",
    names: {
      ja: "きゅうばん",
      en: "Suction Cups",
    },
    descriptions: {
      ja: "いれかえさせる　わざや どうぐが　きかない。",
      en: "Firmly anchors the body.",
    },
    effects: [],
  },
  "super-luck": {
    id: 105,
    key: "super-luck",
    names: {
      ja: "きょううん",
      en: "Super Luck",
    },
    descriptions: {
      ja: "あいての　きゅうしょに こうげきが　あたりやすい。",
      en: "Heightens the critical-hit ratios of moves.",
    },
    effects: [],
  },
  "supersweet-syrup": {
    id: 300,
    key: "supersweet-syrup",
    names: {
      ja: "かんろなミツ",
      en: "Supersweet Syrup",
    },
    descriptions: {
      ja: "最初に　登場　したとき 甘ったるい　蜜の香りを　ふりまいて 相手の　回避率を　下げる。",
      en: "Lowers the evasion of opposing Pokémon by 1 stage when first sent into battle",
    },
    effects: [],
  },
  "supreme-overlord": {
    id: 293,
    key: "supreme-overlord",
    names: {
      ja: "そうだいしょう",
      en: "Supreme Overlord",
    },
    descriptions: {
      ja: "登場したとき　今まで　倒された 味方の　数が　多いほど 少しずつ　攻撃と　特攻が　上がる。",
      en: "When the Pokémon enters a battle, its Attack and Sp. Atk stats are slightly boosted for each of the allies in its party that have already been defeated.",
    },
    effects: [],
  },
  swarm: {
    id: 68,
    key: "swarm",
    names: {
      ja: "むしのしらせ",
      en: "Swarm",
    },
    descriptions: {
      ja: "ピンチのとき　むしの いりょくが　あがる。",
      en: "Ups BUG moves in a pinch.",
    },
    effects: [],
  },
  "sweet-veil": {
    id: 175,
    key: "sweet-veil",
    names: {
      ja: "スイートベール",
      en: "Sweet Veil",
    },
    descriptions: {
      ja: "みかたの　ポケモンは ねむらなくなる。",
      en: "Prevents itself and ally Pokémon from falling asleep.",
    },
    effects: [],
  },
  "swift-swim": {
    id: 33,
    key: "swift-swim",
    names: {
      ja: "すいすい",
      en: "Swift Swim",
    },
    descriptions: {
      ja: "あめのとき　すばやさが あがる。",
      en: "Raises SPEED in rain.",
    },
    effects: [],
  },
  symbiosis: {
    id: 180,
    key: "symbiosis",
    names: {
      ja: "きょうせい",
      en: "Symbiosis",
    },
    descriptions: {
      ja: "みかたに　どうぐを わたせるように　なる。",
      en: "The Pokémon can pass an item to an ally.",
    },
    effects: [],
  },
  synchronize: {
    id: 28,
    key: "synchronize",
    names: {
      ja: "シンクロ",
      en: "Synchronize",
    },
    descriptions: {
      ja: "どく　まひ　やけどを あいてに　うつす。",
      en: "Passes on status problems.",
    },
    effects: [],
  },
  "tangled-feet": {
    id: 77,
    key: "tangled-feet",
    names: {
      ja: "ちどりあし",
      en: "Tangled Feet",
    },
    descriptions: {
      ja: "こんらん　していると かいひ　しやすくなる。",
      en: "Raises evasion if the Pokémon is confused.",
    },
    effects: [],
  },
  technician: {
    id: 101,
    key: "technician",
    names: {
      ja: "テクニシャン",
      en: "Technician",
    },
    descriptions: {
      ja: "よわい　わざの いりょくが　あがる。",
      en: "Powers up the Pokémon’s weaker moves.",
    },
    effects: technicianEffects,
  },
  telepathy: {
    id: 140,
    key: "telepathy",
    names: {
      ja: "テレパシー",
      en: "Telepathy",
    },
    descriptions: {
      ja: "みかたの　こうげきを よみとって　うけない。",
      en: "Anticipates an ally’s attack and dodges it.",
    },
    effects: [],
  },
  "thick-fat": {
    id: 47,
    key: "thick-fat",
    names: {
      ja: "あついしぼう",
      en: "Thick Fat",
    },
    descriptions: {
      ja: "ほのおと　こおりタイプの わざに　つよい。",
      en: "Heat-and-cold protection.",
    },
    effects: [],
  },
  torrent: {
    id: 67,
    key: "torrent",
    names: {
      ja: "げきりゅう",
      en: "Torrent",
    },
    descriptions: {
      ja: "ピンチのとき　みずの いりょくが　あがる。",
      en: "Ups WATER moves in a pinch.",
    },
    effects: [],
  },
  "tough-claws": {
    id: 181,
    key: "tough-claws",
    names: {
      ja: "かたいツメ",
      en: "Tough Claws",
    },
    descriptions: {
      ja: "せっしょくする　わざの いりょくが　あがる。",
      en: "Powers up moves that make direct contact.",
    },
    effects: toughClawsEffects,
  },
  "toxic-debris": {
    id: 295,
    key: "toxic-debris",
    names: {
      ja: "どくげしょう",
      en: "Toxic Debris",
    },
    descriptions: {
      ja: "物理技で　ダメージを　受けると 相手の　足下に どくびしが　ちらばる。",
      en: "Scatters poison spikes at the feet of the opposing team when the Pokémon takes damage from physical moves.",
    },
    effects: [],
  },
  trace: {
    id: 36,
    key: "trace",
    names: {
      ja: "トレース",
      en: "Trace",
    },
    descriptions: {
      ja: "あいてと　おなじ とくせいに　なる。",
      en: "Copies special ability.",
    },
    effects: [],
  },
  unaware: {
    id: 109,
    key: "unaware",
    names: {
      ja: "てんねん",
      en: "Unaware",
    },
    descriptions: {
      ja: "あいての　のうりょくの へんかを　むしする。",
      en: "Ignores any change in ability by the foe.",
    },
    effects: [],
  },
  unburden: {
    id: 84,
    key: "unburden",
    names: {
      ja: "かるわざ",
      en: "Unburden",
    },
    descriptions: {
      ja: "どうぐが　なくなると すばやさが　あがる。",
      en: "Raises Speed if a held item is used.",
    },
    effects: [],
  },
  unnerve: {
    id: 127,
    key: "unnerve",
    names: {
      ja: "きんちょうかん",
      en: "Unnerve",
    },
    descriptions: {
      ja: "あいてを　きんちょうさせ きのみを　たべさせない。",
      en: "Makes the foe nervous and unable to eat Berries.",
    },
    effects: [],
  },
  "unseen-fist": {
    id: 260,
    key: "unseen-fist",
    names: {
      ja: "ふかしのこぶし",
      en: "Unseen Fist",
    },
    descriptions: {
      ja: "あいてに　せっしょくする　わざなら まもりの　こうかを むしして　こうげき　することが　できる。",
      en: "If the Pokémon uses moves that make direct contact, it can attack the target even if the target protects itself.",
    },
    effects: [],
  },
  "vital-spirit": {
    id: 72,
    key: "vital-spirit",
    names: {
      ja: "やるき",
      en: "Vital Spirit",
    },
    descriptions: {
      ja: "ねむり　じょうたいに ならない。",
      en: "Prevents sleep.",
    },
    effects: [],
  },
  "volt-absorb": {
    id: 10,
    key: "volt-absorb",
    names: {
      ja: "ちくでん",
      en: "Volt Absorb",
    },
    descriptions: {
      ja: "でんきを　うけると かいふくする。",
      en: "Turns electricity into HP.",
    },
    effects: [],
  },
  "wandering-spirit": {
    id: 254,
    key: "wandering-spirit",
    names: {
      ja: "さまようたましい",
      en: "Wandering Spirit",
    },
    descriptions: {
      ja: "せっしょくする　わざで こうげき　してきた　ポケモンと とくせいを　いれかえる。",
      en: "The Pokémon exchanges Abilities with a Pokémon that hits it with a move that makes direct contact.",
    },
    effects: [],
  },
  "water-absorb": {
    id: 11,
    key: "water-absorb",
    names: {
      ja: "ちょすい",
      en: "Water Absorb",
    },
    descriptions: {
      ja: "みずを　うけると かいふくする。",
      en: "Changes water into HP.",
    },
    effects: [],
  },
  "water-bubble": {
    id: 199,
    key: "water-bubble",
    names: {
      ja: "すいほう",
      en: "Water Bubble",
    },
    descriptions: {
      ja: "じぶんに　たいする　ほのおタイプの わざの　いりょくを　さげる。 やけど　しない。",
      en: "Lowers the power of Fire-type moves done to the Pokémon and prevents the Pokémon from getting a burn.",
    },
    effects: [],
  },
  "weak-armor": {
    id: 133,
    key: "weak-armor",
    names: {
      ja: "くだけるよろい",
      en: "Weak Armor",
    },
    descriptions: {
      ja: "ぶつりわざで　ぼうぎょが さがり　すばやさがあがる。",
      en: "Physical attacks lower Defense and raise Speed.",
    },
    effects: [],
  },
  "white-smoke": {
    id: 73,
    key: "white-smoke",
    names: {
      ja: "しろいけむり",
      en: "White Smoke",
    },
    descriptions: {
      ja: "あいてに　のうりょくを さげられない。",
      en: "Prevents ability reduction.",
    },
    effects: [],
  },
  "zero-to-hero": {
    id: 278,
    key: "zero-to-hero",
    names: {
      ja: "マイティチェンジ",
      en: "Zero to Hero",
    },
    descriptions: {
      ja: "手持ちに　ひっこむと マイティフォルムに　変化する。",
      en: "The Pokémon transforms into its Hero Form when it switches out.",
    },
    effects: [],
  },

  "curious-medicine": {
    id: 261,
    key: "curious-medicine",
    names: {
      ja: "きみょうなくすり",
      en: "Curious Medicine",
    },
    descriptions: {
      ja: "登場 したときに 貝がらから 薬を 振りまいて 味方の 能力変化を 元に戻す。",
      en: "When the Pokémon enters a battle, it scatters medicine from its shell, which removes all stat changes from allies.",
    },
    effects: [],
  },
  mimicry: {
    id: 250,
    key: "mimicry",
    names: {
      ja: "ぎたい",
      en: "Mimicry",
    },
    descriptions: {
      ja: "フィールドの 状態に あわせて ポケモンの タイプが 変わる。",
      en: "Changes the Pokémon’s type depending on the terrain.",
    },
    effects: [],
  },
  "quick-draw": {
    id: 259,
    key: "quick-draw",
    names: {
      ja: "クイックドロウ",
      en: "Quick Draw",
    },
    descriptions: {
      ja: "相手より 先に 行動できることが ある。",
      en: "Enables the Pokémon to move first occasionally.",
    },
    effects: [],
  },
  "surge-surfer": {
    id: 207,
    key: "surge-surfer",
    names: {
      ja: "サーフテール",
      en: "Surge Surfer",
    },
    descriptions: {
      ja: "エレキフィールド のとき 素早さが ２倍に なる。",
      en: "Doubles the Pokémon's Speed stat on Electric Terrain.",
    },
    effects: [],
  },

  parentalBond: {
    id: 185,
    key: "parentalBond",
    names: {
      ja: "おやこあい",
      en: "Parental Bond",
    },
    descriptions: {
      ja: "単体攻撃が2回当たり、2回目のダメージが下がる。",
      en: "Makes single-target attacks hit twice, with reduced damage on the second hit.",
    },
    effects: parentalBondEffects,
  },

  skillLink: {
    id: 92,
    key: "skillLink",
    names: {
      ja: "スキルリンク",
      en: "Skill Link",
    },
    descriptions: {
      ja: "連続技が必ず最大回数命中する。",
      en: "Makes multi-hit moves always hit the maximum number of times.",
    },
    effects: skillLinkEffects,
  },
} satisfies Record<string, Ability>;
