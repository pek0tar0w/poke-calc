import type { Ability } from "@poke-calc/core";

export const scarletVioletAbilities = {
  adaptability: {
    id: 91,
    key: "adaptability",
    names: {
      ja: "てきおうりょく",
      en: "Adaptability",
    },
    descriptions: {
      ja: "タイプが　おなじ　わざの いりょくが　あがる。",
      en: "Powers up moves of the same type as the Pokémon.",
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
      en: "Damages the attacker if it knocks out the Pokémon with a move that makes direct contact.",
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
      en: "Boosts the power of the Pokémon's move if it is the last to act that turn.",
    },
    effects: [],
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
      en: "The Pokémon is angered when it takes a critical hit, and that maxes its Attack stat.",
    },
    effects: [],
  },
  "anger-shell": {
    id: 271,
    key: "anger-shell",
    names: {
      ja: "いかりのこうら",
      en: "Anger Shell",
    },
    descriptions: {
      ja: "相手の攻撃で　HPが　半分に　なると 怒りで　防御と　特防が　下がるが 攻撃　特攻　素早さが　上がる。",
      en: "When an attack causes its HP to drop to half or less, the Pokémon gets angry. This lowers its Defense and Sp. Def stats but boosts its Attack, Sp. Atk, and Speed stats.",
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
      en: "The Pokémon can sense an opposing Pokémon's dangerous moves.",
    },
    effects: [],
  },
  "arena-trap": {
    id: 71,
    key: "arena-trap",
    names: {
      ja: "ありじごく",
      en: "Arena Trap",
    },
    descriptions: {
      ja: "せんとうで　あいてを にげられなくする。",
      en: "Prevents opposing Pokémon from fleeing from battle.",
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
      en: "Protects the Pokémon and its allies from effects that prevent the use of moves.",
    },
    effects: [],
  },
  battery: {
    id: 217,
    key: "battery",
    names: {
      ja: "バッテリー",
      en: "Battery",
    },
    descriptions: {
      ja: "みかたの　とくしゅわざの いりょくを　あげる。",
      en: "Powers up ally Pokémon’s special moves.",
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
      en: "Hard armor protects the Pokémon from critical hits.",
    },
    effects: [],
  },
  "beads-of-ruin": {
    id: 287,
    key: "beads-of-ruin",
    names: {
      ja: "わざわいのたま",
      en: "Beads of Ruin",
    },
    descriptions: {
      ja: "災厄を　呼ぶ　勾玉の力で 自分以外の　特防が　弱くなる。",
      en: "The power of the Pokémon's ruinous beads lowers the Sp. Def stats of all Pokémon except itself.",
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
      en: "Prevents the Pokémon from having its Defense stat lowered.",
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
      en: "Powers up Fire-type moves when the Pokémon's HP is low.",
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
      en: "Protects the Pokémon from ball and bomb moves.",
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
      en: "The Pokémon's HP is restored when it eats any Berry, in addition to the Berry's usual effect.",
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
      en: "Boosts the Pokémon's Speed stat in harsh sunlight.",
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
      en: "Prevents other Pokémon's moves or Abilities from lowering the Pokémon's stats.",
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
      en: "Eliminates the effects of weather.",
    },
    effects: [],
  },
  comatose: {
    id: 213,
    key: "comatose",
    names: {
      ja: "ぜったいねむり",
      en: "Comatose",
    },
    descriptions: {
      ja: "つねに　ゆめうつつの　じょうたいで ぜったいに　めざめない。 ねむったまま　こうげきが　できる。",
      en: "The Pokémon is always drowsing and will never wake up. It can attack while in its sleeping state.",
    },
    effects: [],
  },
  commander: {
    id: 279,
    key: "commander",
    names: {
      ja: "しれいとう",
      en: "Commander",
    },
    descriptions: {
      ja: "登場したとき　味方に ヘイラッシャが　いると　口の中に 入って　そこから　指令を　だす。",
      en: "When the Pokémon enters a battle, it goes inside the mouth of an ally Dondozo if one is on the field. The Pokémon then issues commands from there.",
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
      en: "Boosts the Pokémon's Sp. Atk stat sharply when its stats are lowered by an opposing Pokémon.",
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
      en: "The Pokémon's compound eyes boost its accuracy.",
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
      en: "Reverses any stat changes affecting the Pokémon so that attempts to boost its stats instead lower them—and attempts to lower its stats will boost them.",
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
      en: "The Pokémon can poison the target even if it's a Steel or Poison type.",
    },
    effects: [],
  },
  costar: {
    id: 294,
    key: "costar",
    names: {
      ja: "きょうえん",
      en: "Costar",
    },
    descriptions: {
      ja: "登場　したときに 味方の　能力変化を　コピーする。",
      en: "When the Pokémon enters a battle, it copies an ally's stat changes.",
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
      en: "May disable a move that has dealt damage to the Pokémon.",
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
      en: "The Pokémon may infatuate attackers that make direct contact with it.",
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
      en: "The Pokémon dampens its surroundings, preventing all Pokémon from using explosive moves such as Self-Destruct.",
    },
    effects: [],
  },
  dancer: {
    id: 216,
    key: "dancer",
    names: {
      ja: "おどりこ",
      en: "Dancer",
    },
    descriptions: {
      ja: "だれかが　おどりわざを　つかうと じぶんも　それに　つづいて おどりわざを　だすことが　できる。",
      en: "Whenever a dance move is used in battle, the Pokémon will copy the user to immediately perform that dance move itself.",
    },
    effects: [],
  },
  dazzling: {
    id: 219,
    key: "dazzling",
    names: {
      ja: "ビビッドボディ",
      en: "Dazzling",
    },
    descriptions: {
      ja: "あいてを　びっくり　させて こちらに　むかって　せんせいわざを だせない　ようにする。",
      en: "The Pokémon dazzles its opponents, making them unable to use priority moves against the Pokémon or its allies.",
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
      en: "If the Pokémon has any stat lowered by an opposing Pokémon, its Attack stat will be boosted sharply.",
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
    effects: [
      {
        effect: "damageReduction",
        multiplier: 0,
        consumable: true,
        activationDamageDivisor: 8,
      },
    ],
  },
  download: {
    id: 88,
    key: "download",
    names: {
      ja: "ダウンロード",
      en: "Download",
    },
    descriptions: {
      ja: "あいての　のうりょくを みて　つよさを　かえる。",
      en: "Adjusts power according to the foe’s ability.",
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
      en: "The Pokémon makes it rain when it enters a battle.",
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
      en: "Turns the sunlight harsh when the Pokémon enters a battle.",
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
      en: "Restores the Pokémon's HP in rain or when it is hit by Water-type moves. Reduces HP in harsh sunlight, and increases the damage received from Fire-type moves.",
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
      en: "The Pokémon awakens from sleep twice as fast as other Pokémon.",
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
  "effect-spore": {
    id: 27,
    key: "effect-spore",
    names: {
      ja: "ほうし",
      en: "Effect Spore",
    },
    descriptions: {
      ja: "ふれると　どく　まひ ねむりに　することがある。",
      en: "Contact with the Pokémon may inflict poison, sleep, or paralysis on the attacker.",
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
  filter: {
    id: 111,
    key: "filter",
    names: {
      ja: "フィルター",
      en: "Filter",
    },
    descriptions: {
      ja: "こうかばつぐん　のとき いりょくを　よわめる。",
      en: "Reduces the power of supereffective attacks that hit the Pokémon.",
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
      en: "Contact with the Pokémon may burn the attacker.",
    },
    effects: [],
  },
  "flare-boost": {
    id: 138,
    key: "flare-boost",
    names: {
      ja: "ねつぼうそう",
      en: "Flare Boost",
    },
    descriptions: {
      ja: "やけどのとき　とくしゅの いりょくが　あがる。",
      en: "Powers up special moves when the Pokémon is burned.",
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
      en: "If hit by a Fire-type move, the Pokémon absorbs the flames and uses them to power up its own Fire-type moves.",
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
      en: "Ally Grass-type Pokémon are protected from status conditions and the lowering of their stats.",
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
  forewarn: {
    id: 108,
    key: "forewarn",
    names: {
      ja: "よちむ",
      en: "Forewarn",
    },
    descriptions: {
      ja: "あいての　もつ　わざを よみとることが　できる。",
      en: "When it enters a battle, the Pokémon can tell one of the moves an opposing Pokémon has.",
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
      en: "Reduces damage dealt to allies.",
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
      en: "When it enters a battle, the Pokémon can check an opposing Pokémon's held item.",
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
      en: "Gives priority to the Pokémon's Flying-type moves while its HP is full.",
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
      en: "If the Pokémon is holding a Berry to be eaten when its HP is low, it will instead eat the Berry when its HP drops to half or less.",
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
      en: "Contact with the Pokémon lowers the attacker's Speed stat.",
    },
    effects: [],
  },
  "grass-pelt": {
    id: 179,
    key: "grass-pelt",
    names: {
      ja: "くさのけがわ",
      en: "Grass Pelt",
    },
    descriptions: {
      ja: "グラスフィールドのとき ぼうぎょが　あがる。",
      en: "Boosts the Pokémon's Defense stat on Grassy Terrain.",
    },
    effects: [],
  },
  "grassy-surge": {
    id: 229,
    key: "grassy-surge",
    names: {
      ja: "グラスメイカー",
      en: "Grassy Surge",
    },
    descriptions: {
      ja: "とうじょう　したときに グラスフィールドを　はりめぐらせる。",
      en: "Turns the ground into Grassy Terrain when the Pokémon enters a battle.",
    },
    effects: [],
  },
  "guard-dog": {
    id: 275,
    key: "guard-dog",
    names: {
      ja: "ばんけん",
      en: "Guard Dog",
    },
    descriptions: {
      ja: "いかく　されると　攻撃が　上がる。 ポケモンを　入れ替えさせる 技や　道具が　効かない。",
      en: "Boosts the Pokémon’s Attack stat if intimidated. Moves and items that would force the Pokémon to switch out also fail to work.",
    },
    effects: [],
  },
  "gulp-missile": {
    id: 241,
    key: "gulp-missile",
    names: {
      ja: "うのミサイル",
      en: "Gulp Missile",
    },
    descriptions: {
      ja: "なみのりか　ダイビングを　すると えものを　くわえてくる。　ダメージを うけると　えものを　はきだして　こうげき。",
      en: "When the Pokémon uses Surf or Dive, it will come back with prey. When it takes damage, it will spit out the prey to attack.",
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
      en: "It's so gutsy that having a status condition boosts the Pokémon's Attack stat.",
    },
    effects: [],
  },
  "hadron-engine": {
    id: 289,
    key: "hadron-engine",
    names: {
      ja: "ハドロンエンジン",
      en: "Hadron Engine",
    },
    descriptions: {
      ja: "登場したとき　エレキフィールドを　はる。 エレキフィールドだと　未来の 機関により　特攻が　高まる。",
      en: "Turns the ground into Electric Terrain when the Pokémon enters a battle. The futuristic engine within the Pokémon also boosts its Sp. Atk stat on Electric Terrain.",
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
      en: "Sometimes cures the status conditions of the Pokémon's allies.",
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
      en: "The Pokémon's heatproof body halves the damage taken from Fire-type moves.",
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
      en: "Doubles the Pokémon's weight.",
    },
    effects: [],
  },
  "honey-gather": {
    id: 118,
    key: "honey-gather",
    names: {
      ja: "みつあつめ",
      en: "Honey Gather",
    },
    descriptions: {
      ja: "あまいミツを　あつめて くることが　ある。",
      en: "The Pokémon may gather Honey after a battle.",
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
      en: "Doubles the Pokémon's Attack stat.",
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
      en: "Boosts the Pokémon's Attack stat but lowers its accuracy.",
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
      en: "Cures the Pokémon's status conditions in rain.",
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
      en: "The Pokémon's prized, mighty pincers prevent other Pokémon from lowering its Attack stat.",
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
      en: "The Pokémon gradually regains HP in snow.",
    },
    effects: [
      {
        effect: "recovery",
        activationTiming: "turnEnd",
        recoveryDivisor: 16,
        requirements: [
          {
            requirement: "weather",
            weather: "snow",
          },
        ],
      },
    ],
  },
  "ice-face": {
    id: 248,
    key: "ice-face",
    names: {
      ja: "アイスフェイス",
      en: "Ice Face",
    },
    descriptions: {
      ja: "ぶつりこうげきは　あたまの　こおりが みがわりに　なるが　すがたも　かわる。 こおりは　あられが　ふると　もとにもどる。",
      en: "The Pokémon's ice head can take a physical attack as a substitute, but the attack also changes the Pokémon's appearance. The ice will be restored when it snows.",
    },
    effects: [],
  },
  "ice-scales": {
    id: 246,
    key: "ice-scales",
    names: {
      ja: "こおりのりんぷん",
      en: "Ice Scales",
    },
    descriptions: {
      ja: "こおりのりんぷんに　まもられて とくしゅこうげきで　うける ダメージが　はんげん　する。",
      en: "The Pokémon is protected by ice scales, which halve the damage taken from special moves.",
    },
    effects: [],
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
      en: "The Pokémon fools opponents by entering battle disguised as the last Pokémon in its Trainer's party.",
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
      en: "The Pokémon's immune system prevents it from being poisoned.",
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
      en: "The Pokémon transforms itself into the Pokémon it's facing.",
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
      en: "The Pokémon's moves are unaffected by the target's barriers, substitutes, and the like.",
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
      en: "The Pokémon's intense focus prevents it from flinching or being affected by Intimidate.",
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
      en: "When the Pokémon enters a battle, it intimidates opposing Pokémon and makes them cower, lowering their Attack stats.",
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
      en: "Powers up punching moves.",
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
      en: "When the Pokémon is hit by a Dark-type attack, its Attack stat is boosted by its sense of justice.",
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
      en: "The Pokémon's keen eyes prevent its accuracy from being lowered.",
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
      en: "The Pokémon can't use any held items.",
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
      en: "Prevents status conditions in harsh sunlight.",
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
      en: "By floating in the air, the Pokémon receives full immunity to all Ground-type moves.",
    },
    effects: [],
  },
  libero: {
    id: 236,
    key: "libero",
    names: {
      ja: "リベロ",
      en: "Libero",
    },
    descriptions: {
      ja: "じぶんが　だす　わざと おなじ　タイプに　へんかする。",
      en: "Changes the Pokémon's type to the type of the move it's about to use. This works only once each time the Pokémon enters battle.",
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
      en: "Halves the Pokémon's weight.",
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
      en: "The Pokémon draws in all Electric-type moves. Instead of taking damage from them, its Sp. Atk stat is boosted.",
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
      en: "The Pokémon's limber body prevents it from being paralyzed.",
    },
    effects: [],
  },
  "lingering-aroma": {
    id: 268,
    key: "lingering-aroma",
    names: {
      ja: "とれないにおい",
      en: "Lingering Aroma",
    },
    descriptions: {
      ja: "相手に　触られると とれないにおいが 相手に　うつってしまう。",
      en: "Contact with the Pokémon changes the attacker's Ability to Lingering Aroma.",
    },
    effects: [],
  },
  "liquid-ooze": {
    id: 64,
    key: "liquid-ooze",
    names: {
      ja: "ヘドロえき",
      en: "Liquid Ooze",
    },
    descriptions: {
      ja: "すいとった　あいての ＨＰを　へらす。",
      en: "The strong stench of the Pokémon's oozed liquid damages attackers that use HP-draining moves.",
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
      en: "The Pokémon reflects status moves instead of getting hit by them.",
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
      en: "The Pokémon steals the held item from any target it hits with a move.",
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
      en: "The Pokémon’s hot magma coating prevents it from being frozen.",
    },
    effects: [],
  },
  "magnet-pull": {
    id: 42,
    key: "magnet-pull",
    names: {
      ja: "じりょく",
      en: "Magnet Pull",
    },
    descriptions: {
      ja: "はがねの　ポケモンを にげられなくする。",
      en: "Prevents Steel-type Pokémon from fleeing by pulling them in with magnetism.",
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
      en: "The Pokémon's marvelous scales boost its Defense stat if it has a status condition.",
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
      en: "Powers up pulse moves.",
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
      en: "The Pokémon's attacks become critical hits if the target is poisoned.",
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
      en: "Boosts the Sp. Atk stat of the Pokémon if an ally with the Plus or Minus Ability is also in battle.",
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
      en: "The Pokémon's moves are unimpeded by the Ability of the target.",
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
      en: "Every turn, one of the Pokémon's stats will be boosted sharply but another stat will be lowered.",
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
      en: "When the Pokémon knocks out a target, it shows moxie, which boosts its Attack stat.",
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
      en: "Reduces the amount of damage the Pokémon takes while its HP is full.",
    },
    effects: [
      {
        effect: "damageReduction",
        multiplier: 0.5,
        requirements: [
          {
            requirement: "hpRatioAtFull",
          },
        ],
      },
    ],
  },
  "mycelium-might": {
    id: 298,
    key: "mycelium-might",
    names: {
      ja: "きんしのちから",
      en: "Mycelium Might",
    },
    descriptions: {
      ja: "変化技を　出すとき 必ず　行動が　遅くなるが 相手の　特性に　ジャマされない。",
      en: "The Pokémon will always act more slowly when using status moves, but these moves will be unimpeded by the Ability of the target.",
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
      en: "The Pokémon's status conditions are cured when it switches out.",
    },
    effects: [],
  },
  "neutralizing-gas": {
    id: 256,
    key: "neutralizing-gas",
    names: {
      ja: "かがくへんかガス",
      en: "Neutralizing Gas",
    },
    descriptions: {
      ja: "かがくへんかガスの　ポケモンが　ばにいると すべての　ポケモンの　とくせいの こうかが　きえたり　はつどう　しなくなる。",
      en: "If the Pokémon with Neutralizing Gas is in the battle, the effects of all Pokémon’s Abilities will be nullified or will not be triggered.",
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
      en: "The Pokémon employs no-guard tactics to ensure incoming and outgoing attacks always land.",
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
      en: "The Pokémon is oblivious, keeping it from being infatuated, falling for taunts, or being affected by Intimidate.",
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
  "orichalcum-pulse": {
    id: 288,
    key: "orichalcum-pulse",
    names: {
      ja: "ひひいろのこどう",
      en: "Orichalcum Pulse",
    },
    descriptions: {
      ja: "登場したとき　天気を　晴れにする。 日差しが　強いと　古代の 鼓動により　攻撃が　高まる。",
      en: "Turns the sunlight harsh when the Pokémon enters a battle. The ancient pulse thrumming through the Pokémon also boosts its Attack stat in harsh sunlight.",
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
      en: "The Pokémon takes no damage from sandstorms. It is also protected from the effects of powders and spores.",
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
      en: "Powers up Grass-type moves when the Pokémon's HP is low.",
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
      en: "The Pokémon sticks to its own tempo, preventing it from becoming confused or being affected by Intimidate.",
    },
    effects: [],
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
      en: "The Pokémon steals the held item from attackers that made direct contact with it.",
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
      en: "The Pokémon may pick up an item another Pokémon used during a battle. It may pick up items outside of battle, too.",
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
      en: "Normal-type moves become Fairy-type moves. The power of those moves is boosted a little.",
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
      en: "Boosts the Sp. Atk stat of the Pokémon if an ally with the Plus or Minus Ability is also in battle.",
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
      en: "If poisoned, the Pokémon has its HP restored instead of taking damage.",
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
      en: "Contact with the Pokémon may poison the attacker.",
    },
    effects: [],
  },
  "poison-puppeteer": {
    id: 307,
    key: "poison-puppeteer",
    names: {
      ja: "どくくぐつ",
      en: "Poison Puppeteer",
    },
    descriptions: {
      ja: "モモワロウの　技によって どく状態に　なった　相手は こんらん状態にも　なってしまう。",
      en: "Pokémon poisoned by Pecharunt's moves will also become confused.",
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
      en: "May poison a target when the Pokémon makes contact.",
    },
    effects: [],
  },
  "power-spot": {
    id: 249,
    key: "power-spot",
    names: {
      ja: "パワースポット",
      en: "Power Spot",
    },
    descriptions: {
      ja: "となりに　いるだけで わざの　いりょくが　あがる。",
      en: "Just being next to the Pokémon powers up moves.",
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
      en: "Gives priority to the Pokémon's status moves.",
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
      en: "Puts other Pokémon under pressure, causing them to expend more PP to use their moves.",
    },
    effects: [],
  },
  "propeller-tail": {
    id: 239,
    key: "propeller-tail",
    names: {
      ja: "スクリューおびれ",
      en: "Propeller Tail",
    },
    descriptions: {
      ja: "あいての　わざを　ひきうける とくせいや　わざの えいきょうを　むし　できる。",
      en: "Ignores the effects of opposing Pokémon's Abilities and moves that draw in moves.",
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
      en: "Changes the Pokémon's type to the type of the move it's about to use. This works only once each time the Pokémon enters battle.",
    },
    effects: [],
  },
  protosynthesis: {
    id: 281,
    key: "protosynthesis",
    names: {
      ja: "こだいかっせい",
      en: "Protosynthesis",
    },
    descriptions: {
      ja: "ブーストエナジーを　持たせるか 天気が　晴れのとき いちばん　高い能力が　上がる。",
      en: "Boosts the Pokémon's most proficient stat in harsh sunlight or if the Pokémon is holding Booster Energy.",
    },
    effects: [],
  },
  "psychic-surge": {
    id: 227,
    key: "psychic-surge",
    names: {
      ja: "サイコメイカー",
      en: "Psychic Surge",
    },
    descriptions: {
      ja: "とうじょう　したときに サイコフィールドを　はりめぐらせる。",
      en: "Turns the ground into Psychic Terrain when the Pokémon enters a battle.",
    },
    effects: [],
  },
  "punk-rock": {
    id: 244,
    key: "punk-rock",
    names: {
      ja: "パンクロック",
      en: "Punk Rock",
    },
    descriptions: {
      ja: "おとわざの　いりょくが　あがる。 うけた　おとわざの ダメージは　はんぶんに　なる。",
      en: "Boosts the power of sound-based moves. The Pokémon also takes half the damage from these kinds of moves.",
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
      en: "Using its pure power, the Pokémon doubles its Attack stat.",
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
  "quark-drive": {
    id: 282,
    key: "quark-drive",
    names: {
      ja: "クォークチャージ",
      en: "Quark Drive",
    },
    descriptions: {
      ja: "ブーストエナジーを　持たせるか エレキフィールドのとき いちばん　高い能力が　上がる。",
      en: "Boosts the Pokémon's most proficient stat on Electric Terrain or if the Pokémon is holding Booster Energy.",
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
      en: "The Pokémon's majesty pressures opponents and makes them unable to use priority moves against the Pokémon or its allies.",
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
      en: "Boosts the Speed stat if the Pokémon has a status condition.",
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
      en: "The Pokémon gradually regains HP in rain.",
    },
    effects: [],
  },
  rattled: {
    id: 155,
    key: "rattled",
    names: {
      ja: "びびり",
      en: "Rattled",
    },
    descriptions: {
      ja: "びびって　すばやさが あがる　タイプがある。",
      en: "The Pokémon gets scared when hit by a Dark-, Ghost-, or Bug-type attack or if intimidated, which boosts its Speed stat.",
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
  regenerator: {
    id: 144,
    key: "regenerator",
    names: {
      ja: "さいせいりょく",
      en: "Regenerator",
    },
    descriptions: {
      ja: "ひっこめると ＨＰが すこし　かいふくする。",
      en: "The Pokémon has a little of its HP restored when withdrawn from battle.",
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
      en: "The Pokémon's competitive spirit makes it deal more damage to Pokémon of the same gender, but less damage to Pokémon of the opposite gender.",
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
      en: "Protects the Pokémon from recoil damage.",
    },
    effects: [],
  },
  "rocky-payload": {
    id: 276,
    key: "rocky-payload",
    names: {
      ja: "いわはこび",
      en: "Rocky Payload",
    },
    descriptions: {
      ja: "いわタイプの　技の 威力が　上がる。",
      en: "Powers up Rock-type moves.",
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
      en: "The Pokémon's rough skin damages attackers that make direct contact with it.",
    },
    effects: [
      {
        side: "defender",
        effect: "contactDamage",
        hpRatio: {
          numerator: 1,
          denominator: 8,
        },
      },
    ],
  },
  "run-away": {
    id: 50,
    key: "run-away",
    names: {
      ja: "にげあし",
      en: "Run Away",
    },
    descriptions: {
      ja: "やせいの　ポケモンから かならず　にげられる。",
      en: "Enables a sure getaway from wild Pokémon.",
    },
    effects: [],
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
      en: "Boosts the power of Rock-, Ground-, and Steel-type moves in a sandstorm. ",
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
      en: "Boosts the Pokémon's Speed stat in a sandstorm.",
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
      en: "The Pokémon creates a sandstorm when it's hit by an attack.",
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
      en: "The Pokémon summons a sandstorm when it enters a battle.",
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
      en: "Boosts the Pokémon's evasiveness in a sandstorm.",
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
      en: "The Pokémon takes no damage when hit by Grass-type moves. Instead, its Attack stat is boosted.",
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
      en: "The Pokémon can hit Ghost-type Pokémon with Normal- and Fighting-type moves. It is also unaffected by Intimidate.",
    },
    effects: [],
  },
  "seed-sower": {
    id: 269,
    key: "seed-sower",
    names: {
      ja: "こぼれダネ",
      en: "Seed Sower",
    },
    descriptions: {
      ja: "攻撃を　受けると グラスフィールドに　する。",
      en: "Turns the ground into Grassy Terrain when the Pokémon is hit by an attack.",
    },
    effects: [],
  },
  "serene-grace": {
    id: 32,
    key: "serene-grace",
    names: {
      ja: "てんのめぐみ",
      en: "Serene Grace",
    },
    descriptions: {
      ja: "わざの　ついかこうかが でやすい。",
      en: "Raises the likelihood of additional effects occurring when the Pokémon uses its moves.",
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
      en: "The Pokémon steps on the opposing Pokémon's shadows to prevent them from fleeing or switching out.",
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
      en: "The Pokémon may cure its own status conditions by shedding its skin.",
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
      en: "Removes any additional effects from the Pokémon's moves, but increases the moves' power.",
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
      en: "A hard shell protects the Pokémon from critical hits.",
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
      en: "Protective dust shields the Pokémon from the additional effects of moves.",
    },
    effects: [],
  },
  "shields-down": {
    id: 197,
    key: "shields-down",
    names: {
      ja: "リミットシールド",
      en: "Shields Down",
    },
    descriptions: {
      ja: "ＨＰが　はんぶんに　なると からが　こわれて こうげきてきに　なる。",
      en: "When its HP becomes half or less, the Pokémon’s shell breaks and it becomes aggressive.",
    },
    effects: [],
  },
  simple: {
    id: 86,
    key: "simple",
    names: {
      ja: "たんじゅん",
      en: "Simple",
    },
    descriptions: {
      ja: "のうりょく　へんかが いつもより　はげしい。",
      en: "Doubles the effects of the Pokémon's stat changes.",
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
      en: "Maximizes the number of times multistrike moves hit.",
    },
    effects: [
      {
        side: "attacker",
        effect: "maximizeMoveHitCount",
      },
    ],
  },
  "slow-start": {
    id: 112,
    key: "slow-start",
    names: {
      ja: "スロースタート",
      en: "Slow Start",
    },
    descriptions: {
      ja: "こうげきと　すばやさが しばらく　はんぶんになる。",
      en: "For five turns, the Pokémon's Attack and Speed stats are halved.",
    },
    effects: [],
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
      en: "Boosts the Pokémon's Speed stat in snow.",
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
      en: "Boosts the Pokémon's evasiveness in snow.",
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
      en: "The Pokémon makes it snow when it enters a battle.",
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
      en: "In harsh sunlight, the Pokémon's Sp. Atk stat is boosted, but its HP decreases every turn.",
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
      en: "Reduces the power of supereffective attacks that hit the Pokémon.",
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
      en: "Soundproofing gives the Pokémon full immunity to all sound-based moves.",
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
      en: "The Pokémon's Speed stat is boosted every turn.",
    },
    effects: [],
  },
  stakeout: {
    id: 198,
    key: "stakeout",
    names: {
      ja: "はりこみ",
      en: "Stakeout",
    },
    descriptions: {
      ja: "こうたいで　でてきた　あいてに ２ばいの　ダメージで　こうげき　できる。",
      en: "Doubles the damage dealt to a target that has just switched into battle.",
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
      en: "The Pokémon is always the last to use its moves.",
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
      en: "Boosts the Defense stat when the Pokémon is hit by an attack.",
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
      en: "The Pokémon is charged with static electricity and may paralyze attackers that make direct contact with it.",
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
      en: "The Pokémon's determination boosts its Speed stat every time it flinches.",
    },
    effects: [],
  },
  "steam-engine": {
    id: 243,
    key: "steam-engine",
    names: {
      ja: "じょうききかん",
      en: "Steam Engine",
    },
    descriptions: {
      ja: "みずタイプ　ほのおタイプの わざを　うけると すばやさが　ぐぐーんと　あがる。",
      en: "Boosts the Speed stat drastically when the Pokémon is hit by a Fire- or Water-type move.",
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
      en: "By releasing a stench when attacking, the Pokémon may cause the target to flinch.",
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
      en: "The Pokémon's held items cling to its sticky body and cannot be removed by other Pokémon.",
    },
    effects: [],
  },
  "storm-drain": {
    id: 114,
    key: "storm-drain",
    names: {
      ja: "よびみず",
      en: "Storm Drain",
    },
    descriptions: {
      ja: "みずを　よびこんで とくこうを　あげる。",
      en: "The Pokémon draws in all Water-type moves. Instead of taking damage from them, its Sp. Atk stat is boosted.",
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
      en: "The Pokémon's strong jaw boosts the power of its biting moves.",
    },
    effects: [],
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
      en: "The Pokémon cannot be knocked out by a single hit as long as its HP is full. One-hit KO moves will also fail to knock it out.",
    },
    effects: [
      {
        effect: "damageReduction",
        multiplier: 1,
        minimumRemainingHp: 1,
        requirements: [
          {
            requirement: "hpRatioAtFull",
          },
        ],
      },
    ],
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
      en: "The Pokémon is so lucky that the critical-hit ratios of its moves are boosted.",
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
      en: "Powers up Bug-type moves when the Pokémon's HP is low.",
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
      en: "Prevents the Pokémon and its allies from falling asleep.",
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
      en: "Boosts the Pokémon's Speed stat in rain.",
    },
    effects: [],
  },
  "sword-of-ruin": {
    id: 285,
    key: "sword-of-ruin",
    names: {
      ja: "わざわいのつるぎ",
      en: "Sword of Ruin",
    },
    descriptions: {
      ja: "災厄を　呼ぶ　剣の力で 自分以外の　防御が　弱くなる。",
      en: "The power of the Pokémon's ruinous sword lowers the Defense stats of all Pokémon except itself.",
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
      en: "The Pokémon passes its held item to an ally that has used up an item.",
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
      en: "If the Pokémon is burned, paralyzed, or poisoned by another Pokémon, that Pokémon will be inflicted with the same status condition.",
    },
    effects: [],
  },
  "tablets-of-ruin": {
    id: 286,
    key: "tablets-of-ruin",
    names: {
      ja: "わざわいのおふだ",
      en: "Tablets of Ruin",
    },
    descriptions: {
      ja: "災厄を　呼ぶ　木札の力で 自分以外の　攻撃が　弱くなる。",
      en: "The power of the Pokémon's ruinous wooden tablets lowers the Attack stats of all Pokémon except itself.",
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
      en: "Boosts the Pokémon's evasiveness if it is confused.",
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
      en: "Powers up weak moves so the Pokémon can deal more damage with them.",
    },
    effects: [],
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
      en: "The Pokémon anticipates and dodges the attacks of its allies.",
    },
    effects: [],
  },
  "tera-shift": {
    id: 304,
    key: "tera-shift",
    names: {
      ja: "テラスチェンジ",
      en: "Tera Shift",
    },
    descriptions: {
      ja: "登場したとき　周囲の エネルギーを　吸収し テラスタルフォルムに　変化する。",
      en: "When the Pokémon enters a battle, it absorbs the energy around itself and transforms into its Terastal Form.",
    },
    effects: [],
  },
  "thermal-exchange": {
    id: 270,
    key: "thermal-exchange",
    names: {
      ja: "ねつこうかん",
      en: "Thermal Exchange",
    },
    descriptions: {
      ja: "ほのおタイプの　技を　受けると 攻撃が　上がる。 やけど状態に　ならない。",
      en: "Boosts the Attack stat when the Pokémon is hit by a Fire-type move. The Pokémon also cannot be burned.",
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
      en: "The Pokémon is protected by a layer of thick fat, which halves the damage taken from Fire- and Ice-type moves.",
    },
    effects: [],
  },
  "tinted-lens": {
    id: 110,
    key: "tinted-lens",
    names: {
      ja: "いろめがね",
      en: "Tinted Lens",
    },
    descriptions: {
      ja: "こうかいまひとつ　のとき わざを　つよめる。",
      en: "The Pokémon can use “not very effective” moves to deal regular damage.",
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
      en: "Powers up Water-type moves when the Pokémon's HP is low.",
    },
    effects: [],
  },
  "toxic-boost": {
    id: 137,
    key: "toxic-boost",
    names: {
      ja: "どくぼうそう",
      en: "Toxic Boost",
    },
    descriptions: {
      ja: "どくのとき　ぶつりの いりょくが　あがる。",
      en: "Powers up physical moves when the Pokémon is poisoned.",
    },
    effects: [],
  },
  "toxic-chain": {
    id: 302,
    key: "toxic-chain",
    names: {
      ja: "どくのくさり",
      en: "Toxic Chain",
    },
    descriptions: {
      ja: "毒素を　ふくんだ　鎖の力で 技を　当てた　相手を 猛毒の状態に　することが　ある。",
      en: "The power of the Pokémon's toxic chain may badly poison any target the Pokémon hits with a move",
    },
    effects: [],
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
      en: "When it enters a battle, the Pokémon copies an opposing Pokémon's Ability.",
    },
    effects: [],
  },
  triage: {
    id: 205,
    key: "triage",
    names: {
      ja: "ヒーリングシフト",
      en: "Triage",
    },
    descriptions: {
      ja: "かいふくわざを　せんせいで だすことが　できる。",
      en: "Gives priority to a healing move.",
    },
    effects: [],
  },
  truant: {
    id: 54,
    key: "truant",
    names: {
      ja: "なまけ",
      en: "Truant",
    },
    descriptions: {
      ja: "こうげきが　れんぞくで だせない。",
      en: "Each time the Pokémon uses a move, it spends the next turn loafing around.",
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
      en: "When attacking, the Pokémon ignores the target's stat changes.",
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
      en: "Boosts the Speed stat if the Pokémon's held item is used or lost.",
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
      en: "Unnerves opposing Pokémon and makes them unable to eat Berries.",
    },
    effects: [],
  },
  "vessel-of-ruin": {
    id: 284,
    key: "vessel-of-ruin",
    names: {
      ja: "わざわいのうつわ",
      en: "Vessel of Ruin",
    },
    descriptions: {
      ja: "災厄を　呼ぶ　器の力で 自分以外の　特攻が　弱くなる。",
      en: "The power of the Pokémon's ruinous vessel lowers the Sp. Atk stats of all Pokémon except itself.",
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
      en: "The Pokémon is full of vitality, and that prevents it from falling asleep.",
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
      en: "If hit by an Electric-type move, the Pokémon has its HP restored instead of taking damage.",
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
      en: "If hit by a Water-type move, the Pokémon has its HP restored instead of taking damage.",
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
  "water-compaction": {
    id: 195,
    key: "water-compaction",
    names: {
      ja: "みずがため",
      en: "Water Compaction",
    },
    descriptions: {
      ja: "みずタイプの　わざを　うけると ぼうぎょが　ぐーんと　あがる。",
      en: "Boosts the Defense stat sharply when the Pokémon is hit by a Water-type move.",
    },
    effects: [],
  },
  "water-veil": {
    id: 41,
    key: "water-veil",
    names: {
      ja: "みずのベール",
      en: "Water Veil",
    },
    descriptions: {
      ja: "やけど　じょうたいに ならない。",
      en: "The Pokémon's water veil prevents it from being burned.",
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
      en: "The Pokémon's Defense stat is lowered when it takes damage from physical moves, but its Speed stat is sharply boosted.",
    },
    effects: [],
  },
  "well-baked-body": {
    id: 273,
    key: "well-baked-body",
    names: {
      ja: "こんがりボディ",
      en: "Well-Baked Body",
    },
    descriptions: {
      ja: "ほのおタイプの　技を　受けると ダメージを　受けずに 防御が　ぐーんと　上がる。",
      en: "The Pokémon takes no damage when hit by Fire-type moves. Instead, its Defense stat is sharply boosted.",
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
      en: "The Pokémon is protected by its white smoke, which prevents other Pokémon from lowering its stats.",
    },
    effects: [],
  },
  "wind-power": {
    id: 277,
    key: "wind-power",
    names: {
      ja: "ふうりょくでんき",
      en: "Wind Power",
    },
    descriptions: {
      ja: "風技を　受けると じゅうでん　状態に　なる。",
      en: "The Pokémon becomes charged when it is hit by a wind move, boosting the power of the next Electric-type move the Pokémon uses.",
    },
    effects: [],
  },
  "wind-rider": {
    id: 274,
    key: "wind-rider",
    names: {
      ja: "かぜのり",
      en: "Wind Rider",
    },
    descriptions: {
      ja: "おいかぜが　吹いたり　風技を　受けると ダメージを　受けずに 攻撃が　上がる。",
      en: "Boosts the Pokémon's Attack stat if Tailwind takes effect or if the Pokémon is hit by a wind move. The Pokémon also takes no damage from wind moves.",
    },
    effects: [],
  },
  "wonder-skin": {
    id: 147,
    key: "wonder-skin",
    names: {
      ja: "ミラクルスキン",
      en: "Wonder Skin",
    },
    descriptions: {
      ja: "へんかわざを　うけにくい からだに　なっている。",
      en: "Makes status moves more likely to miss the Pokémon.",
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
    effects: [
      {
        side: "attacker",
        effect: "additionalHit",
        hitCount: 1,
        damageMultiplier: 0.25,
      },
    ],
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
    effects: [
      {
        side: "attacker",
        effect: "maximizeMoveHitCount",
      },
    ],
  },
} satisfies Record<string, Ability>;
