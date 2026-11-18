/**
 * MS ARCHIVE — Universal Century Mobile Suit Interactive Application
 * Written in pure Vanilla ES6+ JavaScript (zero framework runtime required).
 */

/**
 * @typedef {Object} SuitRatings
 * @property {number} output
 * @property {number} mobility
 * @property {number} armor
 * @property {number} firepower
 * @property {number} psycho
 */

/**
 * @typedef {'melee' | 'short' | 'mid' | 'long'} RangeTier
 */

/**
 * @typedef {Object} WeaponProfile
 * @property {string} role
 * @property {string} name
 * @property {string} rangeLabel
 * @property {string} killRadiusLabel
 * @property {string} extremeRangeLabel
 * @property {RangeTier} tier
 * @property {number} zoneStart
 * @property {number} zoneEnd
 * @property {number} effectiveRadiusPct
 * @property {number} extremeRadiusPct
 * @property {number} arcDegrees
 * @property {string} arcLabel
 * @property {string} note
 */

/**
 * @typedef {Object} MobileSuit
 * @property {string} id
 * @property {string} code
 * @property {string} name
 * @property {string} era
 * @property {number} eraNumber
 * @property {string} faction
 * @property {string} factionLabel
 * @property {boolean} psychoFrame
 * @property {string} pilot
 * @property {number} height
 * @property {number} weight
 * @property {number} output
 * @property {number} overdriveOutput
 * @property {number} thruster
 * @property {number} overdriveThruster
 * @property {string} armor
 * @property {string} image
 * @property {string} summary
 * @property {string} modeStandardLabel
 * @property {string} modeOverdriveLabel
 * @property {string[]} armaments
 * @property {WeaponProfile[]} weaponProfiles
 * @property {SuitRatings} ratings
 */

/** @type {MobileSuit[]} */
const MOBILE_SUITS = [
  {
    id: 'rx-78-2',
    code: 'RX-78-2',
    name: '鋼彈 (Gundam)',
    era: 'U.C. 0079',
    eraNumber: 79,
    faction: 'efsf',
    factionLabel: '地球聯邦軍',
    psychoFrame: false,
    pilot: '阿姆羅·雷',
    height: 18.0,
    weight: 43.4,
    output: 1380,
    overdriveOutput: 1510,
    thruster: 55500,
    overdriveThruster: 61200,
    armor: '月神鈦合金 (Luna Titanium)',
    image: './src/assets/images/hero_gundam_hangar_1794989043756.jpg',
    summary:
      '地球聯邦軍 V 作戰核心泛用試作機，首度在機動戰士上搭載戰艦級光束步槍與核心戰機逃生系統，改寫宇宙世紀地面與軌道戰術。',
    modeStandardLabel: '標準作戰出力模式 (1,380 kW)',
    modeOverdriveLabel: '磁氣覆膜強化反應模式 (1,510 kW)',
    armaments: [
      '60mm 頭部火神砲 × 2',
      '光束軍刀 × 2（背包儲存）',
      'BOWA·XBR-M-79-07G 光束步槍',
      'BLASH·XHB-L-03/N-STD 超絕火箭砲',
      '月神鈦合金專用防盾',
    ],
    weaponProfiles: [
      {
        role: '頭頂機砲',
        name: '60mm 頭部火神砲 × 2',
        rangeLabel: '50–380 m',
        killRadiusLabel: '240 m',
        extremeRangeLabel: '380 m',
        tier: 'short',
        zoneStart: 18,
        zoneEnd: 45,
        effectiveRadiusPct: 26,
        extremeRadiusPct: 38,
        arcDegrees: 110,
        arcLabel: '前方 110° 彈幕扇區',
        note: '近距防空與飛彈攔截，適合貼身纏鬥牽制，對重裝甲貫穿力有限。',
      },
      {
        role: '近戰光劍',
        name: '光束軍刀（背包雙持）× 2',
        rangeLabel: '2–18 m',
        killRadiusLabel: '14 m',
        extremeRangeLabel: '18 m',
        tier: 'melee',
        zoneStart: 0,
        zoneEnd: 22,
        effectiveRadiusPct: 14,
        extremeRadiusPct: 22,
        arcDegrees: 160,
        arcLabel: '前方 160° 揮砍扇區',
        note: '零距離高熱等離子斬擊，可一擊貫穿多數實彈護盾與裝甲。',
      },
      {
        role: '光束射擊',
        name: 'BOWA·XBR-M-79-07G 光束步槍',
        rangeLabel: '350–1,900 m',
        killRadiusLabel: '1,350 m',
        extremeRangeLabel: '1,900 m',
        tier: 'mid',
        zoneStart: 46,
        zoneEnd: 84,
        effectiveRadiusPct: 58,
        extremeRadiusPct: 82,
        arcDegrees: 24,
        arcLabel: '前方 24° 精密射界',
        note: '單發具備戰艦主砲級貫穿力，為中遠距離點名狙擊之主力武裝。',
      },
      {
        role: '重砲轟擊',
        name: 'BLASH·XHB-L-03/N-STD 超絕火箭砲',
        rangeLabel: '250–1,400 m',
        killRadiusLabel: '980 m',
        extremeRangeLabel: '1,400 m',
        tier: 'mid',
        zoneStart: 40,
        zoneEnd: 76,
        effectiveRadiusPct: 48,
        extremeRadiusPct: 72,
        arcDegrees: 36,
        arcLabel: '前方 36° 爆破射界',
        note: '不受抗光束塗層影響的實體高爆彈頭，適合中距面壓制與對艦打擊。',
      },
      {
        role: '裝甲防禦',
        name: '月神鈦合金專用防盾',
        rangeLabel: '0–12 m',
        killRadiusLabel: '8 m',
        extremeRangeLabel: '12 m',
        tier: 'melee',
        zoneStart: 0,
        zoneEnd: 16,
        effectiveRadiusPct: 11,
        extremeRadiusPct: 17,
        arcDegrees: 135,
        arcLabel: '前方 135° 近距護盾',
        note: '高速突入與近戰格鬥時掩護本體正面，偏轉實彈火網與衝擊。',
      },
    ],
    ratings: {
      output: 62,
      mobility: 68,
      armor: 74,
      firepower: 72,
      psycho: 25,
    },
  },
  {
    id: 'ms-06s',
    code: 'MS-06S',
    name: '夏亞專用薩克 II',
    era: 'U.C. 0079',
    eraNumber: 79,
    faction: 'zeon',
    factionLabel: '吉翁公國軍',
    psychoFrame: false,
    pilot: '夏亞·阿茲納布爾',
    height: 17.5,
    weight: 56.2,
    output: 976,
    overdriveOutput: 1090,
    thruster: 51600,
    overdriveThruster: 68400,
    armor: '超高張力鋼 (Super Hard Steel Alloy)',
    image: './src/assets/images/suit_zaku_red_1794989045618.jpg',
    summary:
      '以 MS-06F 為基礎取消出力限制器並強化推進噴嘴的指揮官專用機。憑藉深紅塗裝與高推重比機動性，在魯烏姆戰役留下三倍速戰果。',
    modeStandardLabel: '通常巡航限制模式 (976 kW)',
    modeOverdriveLabel: '解除限制器突擊模式 (1,090 kW)',
    armaments: [
      '120mm 薩克機槍（彈鼓供彈）',
      '280mm 薩克火箭砲',
      '熱能斧 (Heat Hawk)',
      '肩部衝撞裝甲盾',
    ],
    weaponProfiles: [
      {
        role: '實彈掃射',
        name: '120mm 薩克機槍（彈鼓式）',
        rangeLabel: '100–650 m',
        killRadiusLabel: '420 m',
        extremeRangeLabel: '650 m',
        tier: 'short',
        zoneStart: 24,
        zoneEnd: 56,
        effectiveRadiusPct: 36,
        extremeRadiusPct: 54,
        arcDegrees: 75,
        arcLabel: '前方 75° 連射扇區',
        note: '高射速持續彈幕壓制，搭配三倍速機動執行中近距側翼包抄。',
      },
      {
        role: '重型火箭',
        name: '280mm 薩克火箭砲',
        rangeLabel: '300–1,600 m',
        killRadiusLabel: '1,120 m',
        extremeRangeLabel: '1,600 m',
        tier: 'mid',
        zoneStart: 44,
        zoneEnd: 80,
        effectiveRadiusPct: 56,
        extremeRadiusPct: 78,
        arcDegrees: 32,
        arcLabel: '前方 32° 重砲射界',
        note: '大口徑高威力火箭彈，專精於中距離對艦突襲與據點破壞。',
      },
      {
        role: '近戰格鬥',
        name: '熱能斧 (Heat Hawk)',
        rangeLabel: '1.5–14 m',
        killRadiusLabel: '10 m',
        extremeRangeLabel: '14 m',
        tier: 'melee',
        zoneStart: 0,
        zoneEnd: 20,
        effectiveRadiusPct: 14,
        extremeRadiusPct: 21,
        arcDegrees: 150,
        arcLabel: '前方 150° 劈砍扇區',
        note: '高推重比高速突進貼身劈砍武裝，極近距突襲爆發力強悍。',
      },
      {
        role: '右肩防禦',
        name: '高剛性衝撞裝甲盾',
        rangeLabel: '0–15 m',
        killRadiusLabel: '10 m',
        extremeRangeLabel: '15 m',
        tier: 'melee',
        zoneStart: 0,
        zoneEnd: 18,
        effectiveRadiusPct: 12,
        extremeRadiusPct: 19,
        arcDegrees: 110,
        arcLabel: '右前 110° 衝撞扇區',
        note: '兼具實彈格擋與高速體當衝撞的近身攻防複合護具。',
      },
    ],
    ratings: {
      output: 46,
      mobility: 76,
      armor: 58,
      firepower: 56,
      psycho: 15,
    },
  },
  {
    id: 'msz-006',
    code: 'MSZ-006',
    name: 'Z 鋼彈 (Zeta Gundam)',
    era: 'U.C. 0087',
    eraNumber: 87,
    faction: 'efsf',
    factionLabel: '幽谷 / 卡拉巴',
    psychoFrame: false,
    pilot: '卡密兒·維丹',
    height: 19.85,
    weight: 28.7,
    output: 2020,
    overdriveOutput: 2450,
    thruster: 112600,
    overdriveThruster: 138000,
    armor: '鋼彈尼姆合金 γ (Gundarium Gamma)',
    image: './src/assets/images/suit_zeta_waverider_1794989044955.jpg',
    summary:
      '結合可動骨架與穿波機 (Wave Rider) 變形機構的可變形機動戰士，能單機突破大氣層並兼顧宙間高速格鬥與長距離狙擊。',
    modeStandardLabel: 'MS 泛用人型戰鬥模式 (2,020 kW)',
    modeOverdriveLabel: '生物感測器共鳴 + Wave Rider 推力 (2,450 kW)',
    armaments: [
      '60mm 頭部火神砲 × 2',
      '腕部榴彈發射器 × 2',
      '光束軍刀 / 長程光束槍模式 × 2',
      'XBR-M87A2 專用光束步槍',
      '超絕米加粒子砲 (Hyper Mega Launcher)',
    ],
    weaponProfiles: [
      {
        role: '頭頂機砲',
        name: '60mm 頭部火神砲 × 2',
        rangeLabel: '50–400 m',
        killRadiusLabel: '260 m',
        extremeRangeLabel: '400 m',
        tier: 'short',
        zoneStart: 18,
        zoneEnd: 46,
        effectiveRadiusPct: 24,
        extremeRadiusPct: 36,
        arcDegrees: 110,
        arcLabel: '前方 110° 攔截扇區',
        note: '穿波機高速掠過時的近距點防禦與追擊補射武裝。',
      },
      {
        role: '近戰光劍',
        name: '光束軍刀／長程光束槍 × 2',
        rangeLabel: '2–24 m',
        killRadiusLabel: '18 m',
        extremeRangeLabel: '24 m',
        tier: 'melee',
        zoneStart: 0,
        zoneEnd: 24,
        effectiveRadiusPct: 15,
        extremeRadiusPct: 23,
        arcDegrees: 165,
        arcLabel: '前方 165° 雙態扇區',
        note: '兼顧近身光劍格鬥與雙腕光束連射的變換型高機動近戰兵器。',
      },
      {
        role: '主戰射擊',
        name: 'XBR-M87A2 專用光束步槍',
        rangeLabel: '400–2,100 m',
        killRadiusLabel: '1,550 m',
        extremeRangeLabel: '2,100 m',
        tier: 'mid',
        zoneStart: 48,
        zoneEnd: 86,
        effectiveRadiusPct: 60,
        extremeRadiusPct: 82,
        arcDegrees: 22,
        arcLabel: '前方 22° 狙擊射線',
        note: '可加載長光束軍刀並於 Wave Rider 機首維持高速精準射擊。',
      },
      {
        role: '副武支援',
        name: '腕部雙聯榴彈發射器',
        rangeLabel: '80–520 m',
        killRadiusLabel: '360 m',
        extremeRangeLabel: '520 m',
        tier: 'short',
        zoneStart: 22,
        zoneEnd: 52,
        effectiveRadiusPct: 32,
        extremeRadiusPct: 48,
        arcDegrees: 85,
        arcLabel: '前方 85° 散射扇區',
        note: '近中距實體彈牽制與彈道擾亂，填補主步槍冷卻空檔。',
      },
      {
        role: '長程重砲',
        name: '超絕米加粒子砲',
        rangeLabel: '800–3,600 m+',
        killRadiusLabel: '2,600 m',
        extremeRangeLabel: '3,600 m+',
        tier: 'long',
        zoneStart: 62,
        zoneEnd: 100,
        effectiveRadiusPct: 76,
        extremeRadiusPct: 98,
        arcDegrees: 16,
        arcLabel: '前方 16° 超遠射線',
        note: '艦隊戰等級超遠程高能量光束砲，擁有全武裝最長直擊距離。',
      },
    ],
    ratings: {
      output: 76,
      mobility: 88,
      armor: 70,
      firepower: 84,
      psycho: 65,
    },
  },
  {
    id: 'rx-93',
    code: 'RX-93',
    name: 'ν 鋼彈 (Nu Gundam)',
    era: 'U.C. 0093',
    eraNumber: 93,
    faction: 'efsf',
    factionLabel: '地球聯邦軍（隆德·貝爾）',
    psychoFrame: true,
    pilot: '阿姆羅·雷',
    height: 22.0,
    weight: 27.9,
    output: 2980,
    overdriveOutput: 3560,
    thruster: 97800,
    overdriveThruster: 118500,
    armor: '鋼彈尼姆合金（局部精神感應框架）',
    image: './src/assets/images/suit_nu_finfunnel_1794989045055.jpg',
    summary:
      '由阿姆羅·雷親自參與設計、亞納海姆電子公司承造的新人類專用旗艦機。左背搭載六枚自帶發電機的翼狀感應砲，可兼作攻擊與 I 力場防禦罩。',
    modeStandardLabel: '標準翼狀感應砲部署 (2,980 kW)',
    modeOverdriveLabel: '精神感應框架最大共振出力 (3,560 kW)',
    armaments: [
      '60mm 頭部火神砲 × 2',
      '翼狀感應砲 (Fin Funnel) × 6',
      '專用高出力光束步槍',
      '新超絕火箭砲 (New Hyper Bazooka)',
      '內藏式光束砲防盾與飛彈',
    ],
    weaponProfiles: [
      {
        role: '頭頂機砲',
        name: '60mm 頭部火神砲 × 2',
        rangeLabel: '60–420 m',
        killRadiusLabel: '280 m',
        extremeRangeLabel: '420 m',
        tier: 'short',
        zoneStart: 18,
        zoneEnd: 46,
        effectiveRadiusPct: 24,
        extremeRadiusPct: 36,
        arcDegrees: 110,
        arcLabel: '前方 110° 近防扇區',
        note: '近距離攔截敵方浮游砲與飛彈，確保近戰纏鬥安全圈。',
      },
      {
        role: '感應兵器',
        name: '翼狀感應砲 (Fin Funnel) × 6',
        rangeLabel: '400–3,200 m+',
        killRadiusLabel: '2,350 m',
        extremeRangeLabel: '3,200 m+',
        tier: 'long',
        zoneStart: 48,
        zoneEnd: 100,
        effectiveRadiusPct: 74,
        extremeRadiusPct: 98,
        arcDegrees: 360,
        arcLabel: '360° 全方位立體網',
        note: '透過新人類感應波進行超遠距全方位多向齊射，並可展開 I 力場防護罩。',
      },
      {
        role: '主戰射擊',
        name: '專用高出力光束步槍',
        rangeLabel: '450–2,300 m',
        killRadiusLabel: '1,700 m',
        extremeRangeLabel: '2,300 m',
        tier: 'mid',
        zoneStart: 50,
        zoneEnd: 88,
        effectiveRadiusPct: 62,
        extremeRadiusPct: 84,
        arcDegrees: 20,
        arcLabel: '前方 20° 精密射界',
        note: '具備高出力單發狙擊與連射切換，中遠距離點射精準度極高。',
      },
      {
        role: '近戰光劍',
        name: '高出力特製光束軍刀',
        rangeLabel: '2–22 m',
        killRadiusLabel: '16 m',
        extremeRangeLabel: '22 m',
        tier: 'melee',
        zoneStart: 0,
        zoneEnd: 24,
        effectiveRadiusPct: 14,
        extremeRadiusPct: 22,
        arcDegrees: 170,
        arcLabel: '前方 170° 雙刃扇區',
        note: '主副雙向刃部出力可隨戰況調整，近距對劍壓制力優異。',
      },
      {
        role: '複合防盾',
        name: '內藏光束砲＆飛彈專用盾',
        rangeLabel: '40–750 m',
        killRadiusLabel: '520 m',
        extremeRangeLabel: '750 m',
        tier: 'short',
        zoneStart: 20,
        zoneEnd: 62,
        effectiveRadiusPct: 40,
        extremeRadiusPct: 58,
        arcDegrees: 95,
        arcLabel: '前方 95° 複合射界',
        note: '集正面盾防、近中距速射光束砲與四枚牽制飛彈於一體。',
      },
    ],
    ratings: {
      output: 88,
      mobility: 86,
      armor: 82,
      firepower: 92,
      psycho: 90,
    },
  },
  {
    id: 'msn-04',
    code: 'MSN-04',
    name: '沙薩比 (Sazabi)',
    era: 'U.C. 0093',
    eraNumber: 93,
    faction: 'zeon',
    factionLabel: '新生吉翁（夏亞艦隊）',
    psychoFrame: true,
    pilot: '夏亞·阿茲納布爾',
    height: 23.0,
    weight: 30.5,
    output: 3960,
    overdriveOutput: 4480,
    thruster: 133000,
    overdriveThruster: 152000,
    armor: '鋼彈尼姆合金（駕駛艙周邊感應框架）',
    image: './src/assets/images/suit_sazabi_crimson_1794989106067.jpg',
    summary:
      '總帥夏亞專用全領域重裝指揮機。高達 23 公尺的機身配置大推力燃料槽與腹部擴散米加粒子砲，並首度於駕駛艙結構整合微型精神感應框架。',
    modeStandardLabel: '全領域指揮作戰模式 (3,960 kW)',
    modeOverdriveLabel: '多向感應砲齊射峰值出力 (4,480 kW)',
    armaments: [
      '腹部擴散米加粒子砲',
      '光束散彈步槍 (Beam Shot Rifle)',
      '背部感應砲 (Funnel) × 6',
      '光束戰斧 (Beam Tomahawk)',
      '內藏飛彈防盾',
    ],
    weaponProfiles: [
      {
        role: '機體內砲',
        name: '腹部擴散米加粒子砲',
        rangeLabel: '120–950 m',
        killRadiusLabel: '680 m',
        extremeRangeLabel: '950 m',
        tier: 'mid',
        zoneStart: 28,
        zoneEnd: 68,
        effectiveRadiusPct: 46,
        extremeRadiusPct: 66,
        arcDegrees: 90,
        arcLabel: '前方 90° 廣域擴散',
        note: '反應爐直連輸出廣域高熱光束，於中近距離具備極強面狀清場能力。',
      },
      {
        role: '主戰射擊',
        name: '光束散彈步槍 (Shot Rifle)',
        rangeLabel: '150–1,450 m',
        killRadiusLabel: '1,050 m',
        extremeRangeLabel: '1,450 m',
        tier: 'mid',
        zoneStart: 30,
        zoneEnd: 78,
        effectiveRadiusPct: 56,
        extremeRadiusPct: 76,
        arcDegrees: 58,
        arcLabel: '前方 58° 散射/集中',
        note: '可切換散彈掃蕩與集中穿甲，兼具中近距突擊覆蓋率與爆發傷。',
      },
      {
        role: '感應兵器',
        name: '背部感應砲 (Funnel) × 6',
        rangeLabel: '350–2,900 m',
        killRadiusLabel: '2,150 m',
        extremeRangeLabel: '2,900 m',
        tier: 'long',
        zoneStart: 46,
        zoneEnd: 96,
        effectiveRadiusPct: 72,
        extremeRadiusPct: 96,
        arcDegrees: 360,
        arcLabel: '360° 全向包圍網',
        note: '六枚高機動感應砲執行遠程立體包夾，消除大型機體轉向死角。',
      },
      {
        role: '近戰斬擊',
        name: '高能光束戰斧 & 光束軍刀',
        rangeLabel: '2–25 m',
        killRadiusLabel: '18 m',
        extremeRangeLabel: '25 m',
        tier: 'melee',
        zoneStart: 0,
        zoneEnd: 25,
        effectiveRadiusPct: 15,
        extremeRadiusPct: 23,
        arcDegrees: 175,
        arcLabel: '前方 175° 重斬扇區',
        note: '大型光束戰斧擁有極長斬擊半徑，貼身強襲壓迫感冠絕同世代機體。',
      },
      {
        role: '攻防護盾',
        name: '內藏飛彈高強度專用盾',
        rangeLabel: '60–680 m',
        killRadiusLabel: '460 m',
        extremeRangeLabel: '680 m',
        tier: 'short',
        zoneStart: 20,
        zoneEnd: 58,
        effectiveRadiusPct: 38,
        extremeRadiusPct: 54,
        arcDegrees: 80,
        arcLabel: '前方 80° 齊射扇區',
        note: '重裝防禦同時可發射三枚內藏飛彈迫使敵機脫離有利射線。',
      },
    ],
    ratings: {
      output: 95,
      mobility: 84,
      armor: 92,
      firepower: 94,
      psycho: 88,
    },
  },
  {
    id: 'rx-0',
    code: 'RX-0',
    name: '獨角獸鋼彈 (Unicorn Gundam)',
    era: 'U.C. 0096',
    eraNumber: 96,
    faction: 'efsf',
    factionLabel: '畢斯特財團 / UC 計畫',
    psychoFrame: true,
    pilot: '巴納吉·林克斯',
    height: 19.7,
    weight: 23.7,
    output: 3480,
    overdriveOutput: 4920,
    thruster: 142600,
    overdriveThruster: 198000,
    armor: '鋼彈尼姆合金 + 全機精神感應框架',
    image: './src/assets/images/suit_unicorn_white_1794989046433.jpg',
    summary:
      '以全覆蓋式精神感應框架建構的實驗機種。平時以純白單角「獨角獸模式」隱藏真實面貌，偵測新人類感應波後即啟動 NT-D 系統展開裂甲型態。',
    modeStandardLabel: '獨角獸模式 · 單角偵察型態 (3,480 kW)',
    modeOverdriveLabel: 'NT-D 毀滅模式 · 全框架發光展開 (4,920 kW)',
    armaments: [
      '60mm 頭部火神砲 × 2',
      '光束麥格農 (Beam Magnum)',
      '光束拐棍 (Beam Tonfa) × 2',
      '超絕火箭砲',
      'I 力場內藏式感應防盾',
    ],
    weaponProfiles: [
      {
        role: '頭頂機砲',
        name: '60mm 頭部火神砲 × 2',
        rangeLabel: '60–420 m',
        killRadiusLabel: '280 m',
        extremeRangeLabel: '420 m',
        tier: 'short',
        zoneStart: 18,
        zoneEnd: 46,
        effectiveRadiusPct: 24,
        extremeRadiusPct: 36,
        arcDegrees: 110,
        arcLabel: '前方 110° 近防扇區',
        note: '高速連射近防武裝，輔助 NT-D 系統高速突入時牽制敵機視線。',
      },
      {
        role: '極限光束',
        name: '光束麥格農 (Beam Magnum)',
        rangeLabel: '500–3,500 m+',
        killRadiusLabel: '2,500 m',
        extremeRangeLabel: '3,500 m+',
        tier: 'long',
        zoneStart: 52,
        zoneEnd: 100,
        effectiveRadiusPct: 75,
        extremeRadiusPct: 98,
        arcDegrees: 18,
        arcLabel: '前方 18° 極限射線',
        note: '單發等同一般步槍四倍出力，超遠程光束氣流僅擦過便能蒸發目標。',
      },
      {
        role: '近戰光劍',
        name: '腕部光束拐棍 (Beam Tonfa) × 2',
        rangeLabel: '2–24 m',
        killRadiusLabel: '18 m',
        extremeRangeLabel: '24 m',
        tier: 'melee',
        zoneStart: 0,
        zoneEnd: 25,
        effectiveRadiusPct: 15,
        extremeRadiusPct: 23,
        arcDegrees: 180,
        arcLabel: '前方 180° 雙腕突刺',
        note: 'NT-D 展開雙腕直接點火突刺，零延遲覆蓋正面半圓所有近身死角。',
      },
      {
        role: '重砲壓制',
        name: '超絕火箭砲（彈匣式）',
        rangeLabel: '280–1,550 m',
        killRadiusLabel: '1,100 m',
        extremeRangeLabel: '1,550 m',
        tier: 'mid',
        zoneStart: 42,
        zoneEnd: 80,
        effectiveRadiusPct: 54,
        extremeRadiusPct: 76,
        arcDegrees: 34,
        arcLabel: '前方 34° 實彈射界',
        note: '可更換散彈彈匣對抗 I 力場與高機動機體，補足中距離實彈輸出。',
      },
      {
        role: '力場護盾',
        name: 'I 力場內藏感應防盾',
        rangeLabel: '0–2,400 m',
        killRadiusLabel: '1,650 m',
        extremeRangeLabel: '2,400 m',
        tier: 'long',
        zoneStart: 0,
        zoneEnd: 90,
        effectiveRadiusPct: 66,
        extremeRadiusPct: 88,
        arcDegrees: 360,
        arcLabel: '360° 力場／感應盾',
        note: '近身展開主動 I 力場中和光束，全感應框架共振下可遠距離體防禦。',
      },
    ],
    ratings: {
      output: 92,
      mobility: 96,
      armor: 88,
      firepower: 95,
      psycho: 99,
    },
  },
];

/** @type {Record<string, {kicker: string, title: string, prose: string, breakthrough: string, representative: string, armorGen: string}>} */
const ERA_TIMELINE = {
  '0079': {
    kicker: 'U.C. 0079 · 一年戰爭與 V 作戰',
    title: '人型機動兵器確立戰場主導權',
    prose:
      '由於米諾夫斯基粒子造成傳統雷達與長距離導彈失效，視距內肉眼接戰使吉翁公國的薩克 II 取得壓倒性優勢。地球聯邦軍隨即啟動 V 作戰，開發出搭載小型熱核反應爐與月神鈦合金裝甲的 RX-78-2 鋼彈，首度將戰艦級光束武器縮小至單機攜帶規格。',
    breakthrough: '小型米諾夫斯基核融合爐與光束步槍',
    representative: 'RX-78-2 鋼彈 / MS-06S 薩克 II',
    armorGen: '超高張力鋼 → 月神鈦合金',
  },
  '0087': {
    kicker: 'U.C. 0087 · 格里普斯戰役',
    title: '可動骨架與大氣層突入可變形機構',
    prose:
      '舊式單殼式裝甲結構限制了關節可動度與整備效率。亞納海姆電子公司與幽谷聯手導入「可動骨架 (Movable Frame)」概念，將動力管線與致動器整合於內部骨架中，造就兼具高機動力與單機變形突入大氣層能力的 MSZ-006 Z 鋼彈。',
    breakthrough: '全內部可動骨架與生物感測器',
    representative: 'MSZ-006 Z 鋼彈',
    armorGen: '鋼彈尼姆合金 γ',
  },
  '0093': {
    kicker: 'U.C. 0093 · 第二次新吉翁戰爭',
    title: '精神感應框架微型化與翼狀感應砲',
    prose:
      '將過去僅能安裝在大型機動堡壘的精神感應系統晶片直接鑄造於金屬結構中，誕生出「精神感應框架 (Psycho-Frame)」。這項技術讓 MSN-04 沙薩比與 RX-93 ν 鋼彈在標準體積內實現近乎零延遲的念動操控與感應砲遠距立體火力網。',
    breakthrough: '金屬結晶化精神感應框架',
    representative: 'RX-93 ν 鋼彈 / MSN-04 沙薩比',
    armorGen: '局部精神感應框架複合裝甲',
  },
  '0096': {
    kicker: 'U.C. 0096 · 拉普拉斯之亂',
    title: '全機精神感應框架與 NT-D 系統',
    prose:
      '作為 UC 計畫核心的 RX-0 獨角獸鋼彈，突破性地將精神感應框架應用於整具內骨架。當 NT-D 系統啟動時，裝甲板會自動滑移擴張並釋放高強度精神感應場，甚至能介入敵方感應兵器的控制權，代表宇宙世紀機動戰士物理極限的頂點。',
    breakthrough: '全覆蓋感應框架與裂甲變形系統',
    representative: 'RX-0 獨角獸鋼彈',
    armorGen: '全覆蓋式精神感應框架',
  },
};

/** @type {{filter: string, search: string, sort: string, compareA: string, compareB: string, scaleA: string, scaleB: string, activeEra: string, modalSuitId: string | null, modalOverdrive: boolean, hoveredAxisIndex: number | null, heatmapMode: 'matrix' | 'spectrum', maintenanceSuitId: string, maintenanceChecks: Record<string, Record<string, boolean>>, maintenanceCompletedAt: Record<string, string>, weaponViewSuits: Set<string>, selectedWeaponBySuit: Record<string, number>, radarWeaponsBySuit: Record<string, Set<number>>, modalRadarWeapons: Set<number>}} */
const state = {
  filter: 'all',
  search: '',
  sort: 'era',
  compareA: 'rx-78-2',
  compareB: 'ms-06s',
  scaleA: 'rx-78-2',
  scaleB: 'msn-04',
  activeEra: '0079',
  modalSuitId: null,
  modalOverdrive: false,
  hoveredAxisIndex: null,
  heatmapMode: 'matrix',
  maintenanceSuitId: 'rx-78-2',
  maintenanceChecks: {},
  maintenanceCompletedAt: {},
  weaponViewSuits: new Set(),
  selectedWeaponBySuit: {
    'rx-78-2': 2,
    'ms-06s': 0,
    'msz-006': 4,
    'rx-93': 1,
    'msn-04': 2,
    'rx-0': 1,
  },
  radarWeaponsBySuit: {},
  modalRadarWeapons: new Set(),
};

// DOM Elements
const suitGrid = document.getElementById('suit-grid');
const emptyState = document.getElementById('empty-state');
const searchInput = document.getElementById('suit-search');
const sortSelect = document.getElementById('suit-sort');
const resetFiltersBtn = document.getElementById('reset-filters-btn');
const filterTabs = document.querySelectorAll('.filter-tab');
const scaleSelectA = document.getElementById('scale-select-a');
const scaleSelectB = document.getElementById('scale-select-b');
const scaleSwapBtn = document.getElementById('scale-swap-btn');
const scaleStage = document.getElementById('scale-stage');
const scaleMetrics = document.getElementById('scale-metrics');

const compareSelectA = document.getElementById('compare-select-a');
const compareSelectB = document.getElementById('compare-select-b');
const canvasWrap = document.querySelector('.canvas-wrap');
const radarCanvas = document.getElementById('radar-canvas');
const radarTooltip = document.getElementById('radar-tooltip');
const legendNameA = document.getElementById('legend-name-a');
const legendNameB = document.getElementById('legend-name-b');
const thUnitA = document.getElementById('th-unit-a');
const thUnitB = document.getElementById('th-unit-b');
const compareTableBody = document.getElementById('compare-table-body');
const compareSummaryNote = document.getElementById('compare-summary-note');
const heatmapScaleA = document.getElementById('heatmap-scale-a');
const heatmapScaleB = document.getElementById('heatmap-scale-b');
const heatmapBody = document.getElementById('heatmap-body');
const heatmapSummary = document.getElementById('heatmap-summary');
const heatmapModeTabs = document.querySelectorAll('.heatmap-mode-tab');

const timelineTabs = document.querySelectorAll('.timeline-tab');
const timelineDetail = document.getElementById('timeline-detail');

const maintenanceSuitSelect = document.getElementById('maintenance-suit-select');
const maintenanceCheckAllBtn = document.getElementById('maintenance-check-all');
const maintenanceResetBtn = document.getElementById('maintenance-reset-btn');
const maintenanceProgressText = document.getElementById('maintenance-progress-text');
const maintenanceProgressFill = document.getElementById('maintenance-progress-fill');
const maintenanceChecklist = document.getElementById('maintenance-checklist');
const maintenanceReport = document.getElementById('maintenance-report');

const modal = document.getElementById('suit-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalMeta = document.getElementById('modal-meta');
const modalTitle = document.getElementById('modal-title');
const modalMediaFrame = document.getElementById('modal-media-frame');
const modalRadarOverlay = document.getElementById('modal-radar-overlay');
const modalImg = document.getElementById('modal-img');
const modalFallbackCode = document.getElementById('modal-fallback-code');
const modalModeToggle = document.getElementById('modal-mode-toggle');
const modalModeDesc = document.getElementById('modal-mode-desc');
const modalSummary = document.getElementById('modal-summary');
const modalSpecs = document.getElementById('modal-specs');
const modalArmaments = document.getElementById('modal-armaments');
const modalAssignA = document.getElementById('modal-assign-a');
const modalAssignB = document.getElementById('modal-assign-b');
const modalAssignScale = document.getElementById('modal-assign-scale');

/**
 * @param {number} num
 * @returns {string}
 */
function formatNumber(num) {
  return new Intl.NumberFormat('zh-Hant').format(num);
}

/**
 * @param {string} id
 * @returns {MobileSuit}
 */
function getSuitById(id) {
  return MOBILE_SUITS.find((suit) => suit.id === id) || MOBILE_SUITS[0];
}

/**
 * Attaches clean error fallback behavior to any <img> inside a media frame
 * @param {Element | null} imgElement
 */
function bindImageFallback(imgElement) {
  if (!(imgElement instanceof HTMLImageElement)) return;
  const fallback = imgElement.nextElementSibling;
  if (!(fallback instanceof HTMLElement)) return;

  const showFallback = () => {
    imgElement.style.display = 'none';
    fallback.removeAttribute('hidden');
  };

  const showImage = () => {
    imgElement.style.display = 'block';
    fallback.setAttribute('hidden', '');
  };

  imgElement.onerror = showFallback;
  imgElement.onload = showImage;
}

/**
 * @returns {MobileSuit[]}
 */
function getFilteredSuits() {
  const query = state.search.trim().toLowerCase();

  const filtered = MOBILE_SUITS.filter((suit) => {
    if (state.filter === 'efsf' && suit.faction !== 'efsf') return false;
    if (state.filter === 'zeon' && suit.faction !== 'zeon') return false;
    if (state.filter === 'psycho' && !suit.psychoFrame) return false;

    if (!query) return true;

    const haystack = `${suit.code} ${suit.name} ${suit.pilot} ${suit.factionLabel} ${suit.era}`.toLowerCase();
    return haystack.includes(query);
  });

  return filtered.sort((a, b) => {
    if (state.sort === 'output') return b.output - a.output;
    if (state.sort === 'height') return b.height - a.height;
    return a.eraNumber - b.eraNumber;
  });
}

/**
 * Renders a 3D isometric structural wireframe SVG tailored to each Mobile Suit
 * @param {MobileSuit} suit
 * @returns {string}
 */
function renderBlueprintSvg(suit) {
  const accent = suit.faction === 'zeon' ? '#f87171' : '#60a5fa';
  const accentFill = suit.faction === 'zeon' ? 'rgba(248, 113, 113, 0.14)' : 'rgba(96, 165, 250, 0.14)';
  const isMonoEye = suit.id === 'ms-06s' || suit.id === 'msn-04';
  const hasWingOrFunnel = suit.id === 'msz-006' || suit.id === 'rx-93';

  const headDetail = isMonoEye
    ? `<ellipse cx="140" cy="40" rx="8" ry="6" fill="${accentFill}" stroke="${accent}" stroke-width="1.4" />
       <line x1="134" y1="40" x2="146" y2="40" stroke="#fbbf24" stroke-width="1.8" />`
    : `<polygon points="132,37 140,32 148,37 146,46 134,46" fill="${accentFill}" stroke="${accent}" stroke-width="1.3" />
       <polyline points="128,31 140,36 152,31" fill="none" stroke="#fbbf24" stroke-width="1.4" />`;

  const dorsalDetail = hasWingOrFunnel
    ? `<polygon points="104,54 78,34 86,68 112,72" fill="${accentFill}" stroke="${accent}" stroke-width="1.2" />
       <polygon points="176,54 202,34 194,68 168,72" fill="${accentFill}" stroke="${accent}" stroke-width="1.2" />`
    : `<polygon points="116,52 104,46 104,70 116,74" fill="${accentFill}" stroke="${accent}" stroke-width="1.1" />
       <polygon points="164,52 176,46 176,70 164,74" fill="${accentFill}" stroke="${accent}" stroke-width="1.1" />`;

  return `
    <svg class="blueprint-svg" viewBox="0 0 280 156" role="img" aria-label="${suit.code} 3D 結構概覽示意圖">
      <!-- Isometric floor projection plane -->
      <polygon points="140,144 218,120 140,98 62,120" fill="none" stroke="rgba(148,163,184,0.28)" stroke-width="1" stroke-dasharray="3 3" />
      <line x1="140" y1="18" x2="140" y2="144" stroke="rgba(148,163,184,0.22)" stroke-width="1" stroke-dasharray="2 3" />

      <!-- Dorsal Thruster / Wing Frame -->
      ${dorsalDetail}

      <!-- 3D Extruded Torso Block -->
      <polygon points="118,52 140,46 162,52 156,88 140,94 124,88" fill="${accentFill}" stroke="${accent}" stroke-width="1.4" />
      <polyline points="118,52 140,60 162,52" fill="none" stroke="${accent}" stroke-width="1.1" />
      <line x1="140" y1="60" x2="140" y2="94" stroke="${accent}" stroke-width="1.1" />

      <!-- Shoulder Armor Polyhedra -->
      <polygon points="104,54 118,50 118,70 100,68" fill="none" stroke="${accent}" stroke-width="1.2" />
      <polygon points="176,54 162,50 162,70 180,68" fill="none" stroke="${accent}" stroke-width="1.2" />

      <!-- Lower Frame & Legs -->
      <polyline points="126,90 120,126 130,128" fill="none" stroke="${accent}" stroke-width="1.2" />
      <polyline points="154,90 160,126 150,128" fill="none" stroke="${accent}" stroke-width="1.2" />

      <!-- Head Sensor Unit -->
      ${headDetail}

      <!-- Reactor Core Node -->
      <circle cx="140" cy="70" r="4" fill="#fbbf24" />

      <!-- Technical Callout Leaders -->
      <polyline points="148,38 184,22 268,22" fill="none" stroke="rgba(226,232,240,0.55)" stroke-width="1" />
      <text x="188" y="18" fill="#cbd5e1" font-size="9.5" font-family="IBM Plex Mono, monospace">H: ${suit.height.toFixed(1)} m</text>

      <polyline points="144,70 192,84 268,84" fill="none" stroke="rgba(226,232,240,0.55)" stroke-width="1" />
      <text x="196" y="80" fill="#93c5fd" font-size="9.5" font-family="IBM Plex Mono, monospace">${formatNumber(suit.output)} kW</text>

      <polyline points="108,66 76,104 12,104" fill="none" stroke="rgba(226,232,240,0.55)" stroke-width="1" />
      <text x="12" y="100" fill="#cbd5e1" font-size="9.5" font-family="IBM Plex Mono, monospace">${formatNumber(suit.thruster)} kg</text>
    </svg>
  `;
}

/** @type {Record<RangeTier, {label: string, stroke: string, fill: string}>} */
const RANGE_TIER_META = {
  melee: { label: '近接格鬥', stroke: '#fbbf24', fill: 'rgba(251, 191, 36, 0.28)' },
  short: { label: '近距防空', stroke: '#38bdf8', fill: 'rgba(56, 189, 248, 0.26)' },
  mid: { label: '中距射擊', stroke: '#60a5fa', fill: 'rgba(96, 165, 250, 0.28)' },
  long: { label: '超遠／感應', stroke: '#f87171', fill: 'rgba(248, 113, 113, 0.28)' },
};

/**
 * Builds an SVG annular sector (or 360-degree ring) path for the weapon's attack range envelope.
 * @param {number} zoneStart
 * @param {number} zoneEnd
 * @param {number} arcDegrees
 * @returns {string}
 */
function buildRangeSectorPath(zoneStart, zoneEnd, arcDegrees) {
  const cx = 48;
  const cy = 48;
  const maxR = 42;
  const rInner = Math.max(4, (zoneStart / 100) * maxR);
  const rOuter = Math.max(rInner + 4.5, (zoneEnd / 100) * maxR);

  if (arcDegrees >= 360) {
    return [
      `M ${cx} ${cy - rOuter}`,
      `A ${rOuter} ${rOuter} 0 1 1 ${cx} ${cy + rOuter}`,
      `A ${rOuter} ${rOuter} 0 1 1 ${cx} ${cy - rOuter} Z`,
      `M ${cx} ${cy - rInner}`,
      `A ${rInner} ${rInner} 0 1 0 ${cx} ${cy + rInner}`,
      `A ${rInner} ${rInner} 0 1 0 ${cx} ${cy - rInner} Z`,
    ].join(' ');
  }

  const halfRad = ((arcDegrees / 2) * Math.PI) / 180;
  const a1 = -Math.PI / 2 - halfRad;
  const a2 = -Math.PI / 2 + halfRad;
  const largeArc = arcDegrees > 180 ? 1 : 0;

  const x1In = (cx + rInner * Math.cos(a1)).toFixed(2);
  const y1In = (cy + rInner * Math.sin(a1)).toFixed(2);
  const x1Out = (cx + rOuter * Math.cos(a1)).toFixed(2);
  const y1Out = (cy + rOuter * Math.sin(a1)).toFixed(2);
  const x2Out = (cx + rOuter * Math.cos(a2)).toFixed(2);
  const y2Out = (cy + rOuter * Math.sin(a2)).toFixed(2);
  const x2In = (cx + rInner * Math.cos(a2)).toFixed(2);
  const y2In = (cy + rInner * Math.sin(a2)).toFixed(2);

  return `M ${x1In} ${y1In} L ${x1Out} ${y1Out} A ${rOuter} ${rOuter} 0 ${largeArc} 1 ${x2Out} ${y2Out} L ${x2In} ${y2In} A ${rInner} ${rInner} 0 ${largeArc} 0 ${x1In} ${y1In} Z`;
}

/** @type {Array<{stroke: string, bandFill: string, badgeBg: string}>} */
const RADAR_RING_PALETTE = [
  { stroke: '#38bdf8', bandFill: 'rgba(56, 189, 248, 0.24)', badgeBg: 'rgba(8, 47, 73, 0.92)' },
  { stroke: '#fbbf24', bandFill: 'rgba(251, 191, 36, 0.24)', badgeBg: 'rgba(69, 26, 3, 0.92)' },
  { stroke: '#60a5fa', bandFill: 'rgba(96, 165, 250, 0.24)', badgeBg: 'rgba(23, 37, 84, 0.92)' },
  { stroke: '#f87171', bandFill: 'rgba(248, 113, 113, 0.24)', badgeBg: 'rgba(69, 10, 10, 0.92)' },
  { stroke: '#34d399', bandFill: 'rgba(52, 211, 153, 0.24)', badgeBg: 'rgba(6, 78, 59, 0.92)' },
];

/**
 * Returns the active radar weapon index set for a given Mobile Suit card.
 * @param {string} suitId
 * @returns {Set<number>}
 */
function getCardRadarSet(suitId) {
  if (!state.radarWeaponsBySuit[suitId]) {
    state.radarWeaponsBySuit[suitId] = new Set();
  }
  return state.radarWeaponsBySuit[suitId];
}

/**
 * Builds an even-odd full 360° annular ring SVG path between rInner and rOuter.
 * @param {number} cx
 * @param {number} cy
 * @param {number} rInner
 * @param {number} rOuter
 * @returns {string}
 */
function buildAnnulusRingPath(cx, cy, rInner, rOuter) {
  return [
    `M ${cx} ${cy - rOuter}`,
    `A ${rOuter} ${rOuter} 0 1 1 ${cx} ${cy + rOuter}`,
    `A ${rOuter} ${rOuter} 0 1 1 ${cx} ${cy - rOuter} Z`,
    `M ${cx} ${cy - rInner}`,
    `A ${rInner} ${rInner} 0 1 0 ${cx} ${cy + rInner}`,
    `A ${rInner} ${rInner} 0 1 0 ${cx} ${cy - rInner} Z`,
  ].join(' ');
}

/**
 * Generates the Mobile-Suit-centered concentric kill-radius & translucent extreme-range radar overlay HTML.
 * @param {MobileSuit} suit
 * @param {Set<number>} activeIndices
 * @param {'card' | 'modal'} context
 * @returns {string}
 */
function renderKillRadiusRadarOverlayHtml(suit, activeIndices, context) {
  const validIndices = Array.from(activeIndices).filter(
    (idx) => Number.isInteger(idx) && idx >= 0 && idx < suit.weaponProfiles.length
  );
  if (validIndices.length === 0) return '';

  const cx = 190;
  const cy = 118;
  const maxR = 82;

  // Draw outer rings first so smaller translucent extreme bands stack clearly on top
  const sortedBySize = [...validIndices].sort(
    (a, b) => suit.weaponProfiles[b].extremeRadiusPct - suit.weaponProfiles[a].extremeRadiusPct
  );

  const bandsAndCirclesHtml = sortedBySize
    .map((idx) => {
      const weapon = suit.weaponProfiles[idx];
      const palette = RADAR_RING_PALETTE[idx % RADAR_RING_PALETTE.length];
      const rEff = Math.max(10, (weapon.effectiveRadiusPct / 100) * maxR);
      const rExt = Math.max(rEff + 7, (weapon.extremeRadiusPct / 100) * maxR);
      const bandPath = buildAnnulusRingPath(cx, cy, rEff, rExt);

      return `
        <path d="${bandPath}" fill="${palette.bandFill}" fill-rule="evenodd" />
        <circle
          cx="${cx}"
          cy="${cy}"
          r="${rExt.toFixed(2)}"
          fill="none"
          stroke="${palette.stroke}"
          stroke-opacity="0.7"
          stroke-width="1"
          stroke-dasharray="4 3"
        />
        <circle
          cx="${cx}"
          cy="${cy}"
          r="${rEff.toFixed(2)}"
          fill="none"
          stroke="${palette.stroke}"
          stroke-width="2"
        />
      `;
    })
    .join('');

  // Distribute callout badges cleanly to right/left HUD margins so tags never collide
  const orderedIndices = [...validIndices].sort((a, b) => a - b);
  /** @type {number[]} */
  const rightList = [];
  /** @type {number[]} */
  const leftList = [];
  orderedIndices.forEach((idx, orderPos) => {
    if (orderPos % 2 === 0) {
      rightList.push(idx);
    } else {
      leftList.push(idx);
    }
  });

  /**
   * @param {number[]} list
   * @param {'left' | 'right'} side
   * @returns {string}
   */
  const renderCalloutSide = (list, side) => {
    const count = list.length;
    if (count === 0) return '';
    const ySlots =
      count === 1 ? [118] : count === 2 ? [70, 166] : [44, 118, 192];
    const angleSlotsDeg =
      side === 'right'
        ? count === 1
          ? [0]
          : count === 2
            ? [-34, 34]
            : [-48, 0, 48]
        : count === 1
          ? [180]
          : count === 2
            ? [-146, 146]
            : [-132, 180, 132];

    return list
      .map((idx, slotIdx) => {
        const weapon = suit.weaponProfiles[idx];
        const palette = RADAR_RING_PALETTE[idx % RADAR_RING_PALETTE.length];
        const rEff = Math.max(10, (weapon.effectiveRadiusPct / 100) * maxR);
        const rad = (angleSlotsDeg[slotIdx] * Math.PI) / 180;
        const dotX = cx + rEff * Math.cos(rad);
        const dotY = cy + rEff * Math.sin(rad);
        const labelY = ySlots[slotIdx];
        const boxW = 94;
        const boxH = 26;
        const boxX = side === 'right' ? 280 : 6;
        const boxY = labelY - boxH / 2;
        const elbowX = side === 'right' ? 274 : 106;
        const lineEndX = side === 'right' ? boxX : boxX + boxW;
        const textX = boxX + 5;

        return `
          <polyline
            points="${dotX.toFixed(1)},${dotY.toFixed(1)} ${elbowX},${labelY} ${lineEndX},${labelY}"
            fill="none"
            stroke="${palette.stroke}"
            stroke-width="1"
            stroke-opacity="0.88"
          />
          <circle cx="${dotX.toFixed(1)}" cy="${dotY.toFixed(1)}" r="2.7" fill="${palette.stroke}" stroke="#060f20" stroke-width="1" />
          <rect
            x="${boxX}"
            y="${boxY.toFixed(1)}"
            width="${boxW}"
            height="${boxH}"
            rx="4"
            fill="${palette.badgeBg}"
            stroke="${palette.stroke}"
            stroke-width="1"
          />
          <text x="${textX}" y="${(labelY - 2).toFixed(1)}" fill="#f8fafc" font-size="8.2" font-weight="700" font-family="IBM Plex Mono, monospace">${weapon.role} · ${weapon.killRadiusLabel}</text>
          <text x="${textX}" y="${(labelY + 8.5).toFixed(1)}" fill="${palette.stroke}" font-size="7.4" font-weight="600" font-family="IBM Plex Mono, monospace">極限 ${weapon.extremeRangeLabel}</text>
        `;
      })
      .join('');
  };

  const calloutsHtml = `${renderCalloutSide(rightList, 'right')}${renderCalloutSide(leftList, 'left')}`;
  const allSelected = validIndices.length === suit.weaponProfiles.length;

  return `
    <div class="radar-overlay-head">
      <span class="radar-overlay-title">殺傷半徑雷達 · ${suit.code} (${validIndices.length}/${suit.weaponProfiles.length})</span>
      <div class="radar-overlay-controls">
        <button
          type="button"
          class="radar-overlay-btn js-radar-all ${allSelected ? 'is-active' : ''}"
          data-id="${suit.id}"
          data-context="${context}"
        >
          ${allSelected ? '已全選' : '標示全部'}
        </button>
        <button
          type="button"
          class="radar-overlay-btn js-radar-close"
          data-id="${suit.id}"
          data-context="${context}"
          aria-label="關閉有效射程雷達標示"
        >
          關閉
        </button>
      </div>
    </div>

    <svg class="radar-overlay-svg" viewBox="0 0 380 236" role="img" aria-label="${suit.code} 機體中心武器有效殺傷半徑與極限射程雷達圖">
      <!-- Reference concentric grid centered on the Mobile Suit -->
      <circle cx="${cx}" cy="${cy}" r="${maxR}" fill="rgba(5, 12, 26, 0.56)" stroke="rgba(148, 163, 184, 0.28)" stroke-width="1" />
      <circle cx="${cx}" cy="${cy}" r="${(maxR * 0.75).toFixed(1)}" fill="none" stroke="rgba(148, 163, 184, 0.18)" stroke-width="0.8" stroke-dasharray="2 3" />
      <circle cx="${cx}" cy="${cy}" r="${(maxR * 0.5).toFixed(1)}" fill="none" stroke="rgba(148, 163, 184, 0.2)" stroke-width="0.8" stroke-dasharray="2 3" />
      <circle cx="${cx}" cy="${cy}" r="${(maxR * 0.25).toFixed(1)}" fill="none" stroke="rgba(148, 163, 184, 0.24)" stroke-width="0.8" />
      <line x1="${cx - maxR - 6}" y1="${cy}" x2="${cx + maxR + 6}" y2="${cy}" stroke="rgba(148, 163, 184, 0.2)" stroke-width="0.8" />
      <line x1="${cx}" y1="${cy - maxR - 6}" x2="${cx}" y2="${cy + maxR + 6}" stroke="rgba(148, 163, 184, 0.2)" stroke-width="0.8" />

      <!-- Active weapon kill-radius rings & translucent extreme-range zones -->
      ${bandsAndCirclesHtml}

      <!-- Center Mobile Suit marker -->
      <polygon points="${cx},${cy - 8} ${cx + 6.5},${cy + 6} ${cx},${cy + 2.5} ${cx - 6.5},${cy + 6}" fill="#f8fafc" stroke="#38bdf8" stroke-width="1.1" />
      <text x="${cx}" y="${cy + 17}" text-anchor="middle" fill="#e2e8f0" font-size="8" font-weight="700" font-family="IBM Plex Mono, monospace">${suit.code}</text>

      <!-- Leader callouts -->
      ${calloutsHtml}
    </svg>

    <div class="radar-overlay-foot">
      <span class="radar-legend-item"><i class="legend-solid-dot" aria-hidden="true"></i>實線圓環：有效殺傷半徑</span>
      <span class="radar-legend-item"><i class="legend-band-dot" aria-hidden="true"></i>半透明區間：極限射程</span>
    </div>
  `;
}

/**
 * Synchronizes a Mobile Suit card's media radar overlay and button active states in-place.
 * @param {string} suitId
 */
function syncCardRadarOverlay(suitId) {
  if (!suitGrid) return;
  const card = suitGrid.querySelector(`.suit-card[data-suit-id="${suitId}"]`);
  if (!(card instanceof HTMLElement)) return;

  const suit = getSuitById(suitId);
  const activeSet = getCardRadarSet(suitId);
  const mediaEl = card.querySelector('.suit-card-media');
  const overlayEl = card.querySelector('.card-range-radar-overlay');

  if (mediaEl instanceof HTMLElement) {
    mediaEl.classList.toggle('has-radar-overlay', activeSet.size > 0);
  }
  if (overlayEl instanceof HTMLElement) {
    if (activeSet.size > 0) {
      overlayEl.innerHTML = renderKillRadiusRadarOverlayHtml(suit, activeSet, 'card');
      overlayEl.removeAttribute('hidden');
    } else {
      overlayEl.innerHTML = '';
      overlayEl.setAttribute('hidden', '');
    }
  }

  card.querySelectorAll('.js-effective-range').forEach((btn) => {
    const idx = Number(btn.getAttribute('data-weapon-idx'));
    const isActive = Number.isInteger(idx) && activeSet.has(idx);
    btn.classList.toggle('is-active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });
}

/**
 * Synchronizes the Dossier Modal's media radar overlay and armament button states.
 */
function syncModalRadarOverlay() {
  if (!state.modalSuitId) return;
  const suit = getSuitById(state.modalSuitId);
  const activeSet = state.modalRadarWeapons;

  if (modalMediaFrame instanceof HTMLElement) {
    modalMediaFrame.classList.toggle('has-radar-overlay', activeSet.size > 0);
  }
  if (modalRadarOverlay instanceof HTMLElement) {
    if (activeSet.size > 0) {
      modalRadarOverlay.innerHTML = renderKillRadiusRadarOverlayHtml(suit, activeSet, 'modal');
      modalRadarOverlay.removeAttribute('hidden');
    } else {
      modalRadarOverlay.innerHTML = '';
      modalRadarOverlay.setAttribute('hidden', '');
    }
  }

  modalArmaments?.querySelectorAll('.js-modal-effective-range').forEach((btn) => {
    const idx = Number(btn.getAttribute('data-weapon-idx'));
    const isActive = Number.isInteger(idx) && activeSet.has(idx);
    btn.classList.toggle('is-active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });
}

/**
 * Renders the interactive weapon range analysis panel HTML inside a Mobile Suit card.
 * @param {MobileSuit} suit
 * @returns {string}
 */
function renderWeaponsPanelInner(suit) {
  const selectedIdx = Math.min(
    Math.max(state.selectedWeaponBySuit[suit.id] ?? 0, 0),
    suit.weaponProfiles.length - 1
  );
  const activeWeapon = suit.weaponProfiles[selectedIdx];
  const tierMeta = RANGE_TIER_META[activeWeapon.tier];
  const activeRadarSet = getCardRadarSet(suit.id);

  const meleeCount = suit.weaponProfiles.filter((w) => w.tier === 'melee').length;
  const shortMidCount = suit.weaponProfiles.filter((w) => w.tier === 'short' || w.tier === 'mid').length;
  const longCount = suit.weaponProfiles.filter((w) => w.tier === 'long').length;

  const weaponRowsHtml = suit.weaponProfiles
    .map((weapon, idx) => {
      const isSelected = idx === selectedIdx;
      const isRadarActive = activeRadarSet.has(idx);
      const barWidth = Math.max(10, weapon.zoneEnd - weapon.zoneStart);
      return `
        <li class="suit-weapon-item ${isSelected ? 'is-selected' : ''}">
          <button
            type="button"
            class="suit-weapon-select-btn ${isSelected ? 'is-selected' : ''}"
            data-id="${suit.id}"
            data-weapon-idx="${idx}"
            aria-pressed="${String(isSelected)}"
          >
            <div class="suit-weapon-row-top">
              <span class="suit-weapon-role">${weapon.role}</span>
              <span class="suit-weapon-name">${weapon.name}</span>
              <span class="suit-weapon-range-tag is-${weapon.tier}">${weapon.rangeLabel}</span>
            </div>
            <div class="weapon-range-bar-track" aria-hidden="true">
              <span class="weapon-range-bar-fill is-${weapon.tier}" style="left: ${weapon.zoneStart}%; width: ${barWidth}%;"></span>
            </div>
          </button>
          <button
            type="button"
            class="btn-effective-range js-effective-range ${isRadarActive ? 'is-active' : ''}"
            data-id="${suit.id}"
            data-weapon-idx="${idx}"
            aria-pressed="${String(isRadarActive)}"
            title="在預覽圖上方繪製 ${weapon.name} 的殺傷半徑雷達圓環"
          >
            有效射程標示
          </button>
        </li>
      `;
    })
    .join('');

  return `
    <div class="suit-weapons-head">
      <span class="suit-weapons-title">配適武裝系統 · ${suit.code}</span>
      <button type="button" class="suit-weapons-close" data-id="${suit.id}">返回簡介</button>
    </div>

    <ul class="suit-weapons-list" aria-label="${suit.code} 武裝列表（點擊切換攻擊範圍或標示有效射程雷達）">
      ${weaponRowsHtml}
    </ul>

    <div class="weapon-range-analyzer">
      <div class="range-analyzer-head">
        <span class="range-analyzer-kicker">攻擊範圍分析 · ${activeWeapon.role}</span>
        <span class="range-tier-pill is-${activeWeapon.tier}">${tierMeta.label}</span>
      </div>

      <div class="range-analyzer-body">
        <svg class="range-polar-svg" viewBox="0 0 96 96" role="img" aria-label="${activeWeapon.name} ${activeWeapon.arcLabel} 攻擊範圍圖">
          <circle cx="48" cy="48" r="42" fill="rgba(8, 17, 34, 0.72)" stroke="rgba(148, 163, 184, 0.22)" stroke-width="0.9" />
          <circle cx="48" cy="48" r="31.5" fill="none" stroke="rgba(148, 163, 184, 0.16)" stroke-width="0.8" stroke-dasharray="2 2" />
          <circle cx="48" cy="48" r="21" fill="none" stroke="rgba(148, 163, 184, 0.18)" stroke-width="0.8" stroke-dasharray="2 2" />
          <circle cx="48" cy="48" r="10.5" fill="none" stroke="rgba(148, 163, 184, 0.2)" stroke-width="0.8" />
          <line x1="6" y1="48" x2="90" y2="48" stroke="rgba(148, 163, 184, 0.15)" stroke-width="0.8" />
          <line x1="48" y1="6" x2="48" y2="90" stroke="rgba(148, 163, 184, 0.15)" stroke-width="0.8" />
          <path
            d="${buildRangeSectorPath(activeWeapon.zoneStart, activeWeapon.zoneEnd, activeWeapon.arcDegrees)}"
            fill="${tierMeta.fill}"
            fill-rule="evenodd"
            stroke="${tierMeta.stroke}"
            stroke-width="1.35"
          />
          <polygon points="48,43 52,52 48,49.5 44,52" fill="#f8fafc" />
        </svg>

        <div class="range-analyzer-meta">
          <p class="range-weapon-focus">${activeWeapon.name}</p>
          <div class="range-stat-pair">
            <span>殺傷半徑：<strong>${activeWeapon.killRadiusLabel}</strong></span>
            <span>極限：<strong>${activeWeapon.extremeRangeLabel}</strong></span>
          </div>
          <p class="range-weapon-note">${activeWeapon.note}</p>
        </div>
      </div>

      <div class="range-coverage-foot">
        <span>點擊「有效射程標示」繪製機體雷達環</span>
        <span>近接 ${meleeCount} · 近中距 ${shortMidCount} · 超遠 ${longCount}</span>
      </div>
    </div>
  `;
}

function renderSuitGrid() {
  if (!suitGrid || !emptyState) return;
  const suits = getFilteredSuits();

  if (suits.length === 0) {
    suitGrid.innerHTML = '';
    emptyState.removeAttribute('hidden');
    return;
  }

  emptyState.setAttribute('hidden', '');
  suitGrid.innerHTML = suits
    .map((suit) => {
      const isWeaponsOpen = state.weaponViewSuits.has(suit.id);
      const cardRadarSet = getCardRadarSet(suit.id);
      const hasRadarOverlay = cardRadarSet.size > 0;
      const radarOverlayHtml = hasRadarOverlay
        ? renderKillRadiusRadarOverlayHtml(suit, cardRadarSet, 'card')
        : '';

      const cardActionsHtml = `
        <div class="suit-card-actions">
          <button
            type="button"
            class="btn-card-weapon js-weapons ${isWeaponsOpen ? 'is-active' : ''}"
            data-id="${suit.id}"
            aria-pressed="${String(isWeaponsOpen)}"
            aria-controls="weapons-panel-${suit.id}"
          >
            配適武器
          </button>
          <button type="button" class="btn-card-spec js-inspect" data-id="${suit.id}">
            檢視規格
          </button>
          <button type="button" class="btn-card-compare js-compare" data-id="${suit.id}">
            加入對比
          </button>
        </div>
      `;

      return `
      <article class="suit-card ${isWeaponsOpen ? 'is-weapons-open' : ''}" data-suit-id="${suit.id}">
        <div class="suit-card-inner">
          <!-- Front Face -->
          <div class="suit-card-face suit-card-front">
            <div class="suit-card-media ${hasRadarOverlay ? 'has-radar-overlay' : ''}">
              <img
                src="${suit.image}"
                alt="${suit.code} ${suit.name}"
                referrerpolicy="no-referrer"
                loading="lazy"
              />
              <div class="media-fallback" hidden>
                <span class="fallback-code">${suit.code}</span>
                <span class="fallback-label">${suit.name}</span>
              </div>
              <div class="card-range-radar-overlay" data-suit-radar="${suit.id}"${hasRadarOverlay ? '' : ' hidden'}>
                ${radarOverlayHtml}
              </div>
            </div>
            <div class="suit-card-body">
              <p class="suit-meta-line">
                <span class="suit-code">${suit.code}</span>
                <span aria-hidden="true">·</span>
                <span>${suit.era}</span>
                <span aria-hidden="true">·</span>
                <span>${suit.factionLabel}</span>
              </p>
              <h3 class="suit-title">${suit.name}</h3>
              <p class="suit-summary"${isWeaponsOpen ? ' hidden' : ''}>${suit.summary}</p>
              <div class="suit-metrics"${isWeaponsOpen ? ' hidden' : ''}>
                <div class="metric-pair">
                  <span class="metric-label">發電機出力</span>
                  <span class="metric-val">${formatNumber(suit.output)} kW</span>
                </div>
                <div class="metric-pair">
                  <span class="metric-label">頭頂全高</span>
                  <span class="metric-val">${suit.height.toFixed(1)} m</span>
                </div>
              </div>
              <div class="suit-weapons-panel" id="weapons-panel-${suit.id}"${isWeaponsOpen ? '' : ' hidden'}>
                ${renderWeaponsPanelInner(suit)}
              </div>
              ${cardActionsHtml}
            </div>
          </div>

          <!-- Back Face (3D Structural Overview & Compact Spec Card) -->
          <div class="suit-card-face suit-card-back">
            <div class="card-back-head">
              <div>
                <span class="card-back-code">${suit.code}</span>
                <h3 class="card-back-title">${suit.name}</h3>
              </div>
              <span class="card-back-tag">3D 結構概覽</span>
            </div>

            <div class="blueprint-frame">
              ${renderBlueprintSvg(suit)}
            </div>

            <div class="back-spec-grid">
              <div class="back-spec-item">
                <span class="back-spec-label">主要駕駛員</span>
                <span class="back-spec-val">${suit.pilot}</span>
              </div>
              <div class="back-spec-item">
                <span class="back-spec-label">本體淨重</span>
                <span class="back-spec-val">${suit.weight.toFixed(1)} t</span>
              </div>
              <div class="back-spec-item">
                <span class="back-spec-label">極限反應出力</span>
                <span class="back-spec-val">${formatNumber(suit.overdriveOutput)} kW</span>
              </div>
              <div class="back-spec-item">
                <span class="back-spec-label">感應框架</span>
                <span class="back-spec-val">${suit.psychoFrame ? '已搭載' : '標準架構'}</span>
              </div>
            </div>

            ${cardActionsHtml}
          </div>
        </div>
      </article>
    `;
    })
    .join('');

  suitGrid.querySelectorAll('img').forEach(bindImageFallback);
}

/* ==========================================================================
   Modal Dossier Logic
   ========================================================================== */

function renderModalContent() {
  if (!state.modalSuitId) return;
  const suit = getSuitById(state.modalSuitId);
  const isOver = state.modalOverdrive;
  const currentOutput = isOver ? suit.overdriveOutput : suit.output;
  const currentThruster = isOver ? suit.overdriveThruster : suit.thruster;

  if (modalMeta) {
    modalMeta.textContent = `${suit.code} · ${suit.era} · ${suit.factionLabel}`;
  }
  if (modalTitle) {
    modalTitle.textContent = suit.name;
  }
  if (modalImg instanceof HTMLImageElement) {
    modalImg.src = suit.image;
    modalImg.alt = `${suit.code} ${suit.name} 機械檢視圖`;
    bindImageFallback(modalImg);
  }
  if (modalFallbackCode) {
    modalFallbackCode.textContent = suit.code;
  }
  if (modalSummary) {
    modalSummary.textContent = suit.summary;
  }

  if (modalModeToggle) {
    modalModeToggle.textContent = isOver ? '回復標準出力模式' : '切換極限出力模式';
    modalModeToggle.classList.toggle('is-overdrive', isOver);
  }
  if (modalModeDesc) {
    modalModeDesc.textContent = isOver ? suit.modeOverdriveLabel : suit.modeStandardLabel;
  }

  if (modalSpecs) {
    modalSpecs.innerHTML = `
      <div class="spec-item">
        <dt>主要駕駛員</dt>
        <dd>${suit.pilot}</dd>
      </div>
      <div class="spec-item">
        <dt>裝甲材質</dt>
        <dd>${suit.armor}</dd>
      </div>
      <div class="spec-item">
        <dt>頭頂高 / 本體重</dt>
        <dd>${suit.height.toFixed(2)} m / ${suit.weight.toFixed(1)} t</dd>
      </div>
      <div class="spec-item">
        <dt>即時發電機出力</dt>
        <dd>${formatNumber(currentOutput)} kW</dd>
      </div>
      <div class="spec-item">
        <dt>推進器總推力</dt>
        <dd>${formatNumber(currentThruster)} kg</dd>
      </div>
      <div class="spec-item">
        <dt>感應框架搭載</dt>
        <dd>${suit.psychoFrame ? '是（已實裝）' : '否（傳統控制）'}</dd>
      </div>
    `;
  }

  if (modalArmaments) {
    modalArmaments.innerHTML = suit.weaponProfiles
      .map((weapon, idx) => {
        const isRadarActive = state.modalRadarWeapons.has(idx);
        return `
          <li class="modal-armament-row">
            <div class="modal-armament-info">
              <span class="modal-armament-name">
                <span class="suit-weapon-role">${weapon.role}</span>
                ${weapon.name}
              </span>
              <span class="modal-armament-range">殺傷半徑 ${weapon.killRadiusLabel} · 極限 ${weapon.extremeRangeLabel}</span>
            </div>
            <button
              type="button"
              class="btn-effective-range js-modal-effective-range ${isRadarActive ? 'is-active' : ''}"
              data-weapon-idx="${idx}"
              aria-pressed="${String(isRadarActive)}"
            >
              有效射程標示
            </button>
          </li>
        `;
      })
      .join('');
  }

  syncModalRadarOverlay();
}

/**
 * @param {string} suitId
 */
function openSuitModal(suitId) {
  state.modalSuitId = suitId;
  state.modalOverdrive = false;
  state.modalRadarWeapons = new Set();
  renderModalContent();
  if (modal) {
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    modalCloseBtn?.focus();
  }
}

function closeSuitModal() {
  if (modal) {
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }
  state.modalSuitId = null;
}

/* ==========================================================================
   1:1 Scale Mobile Suit Size Comparison
   ========================================================================== */

function populateScaleSelects() {
  if (!(scaleSelectA instanceof HTMLSelectElement) || !(scaleSelectB instanceof HTMLSelectElement)) {
    return;
  }

  const optionsHtml = MOBILE_SUITS.map(
    (suit) => `<option value="${suit.id}">${suit.code} · ${suit.name} (${suit.height.toFixed(2)} m)</option>`
  ).join('');

  scaleSelectA.innerHTML = optionsHtml;
  scaleSelectB.innerHTML = optionsHtml;
  scaleSelectA.value = state.scaleA;
  scaleSelectB.value = state.scaleB;
}

/**
 * Returns normalized front-elevation SVG artwork for a Mobile Suit where
 * y = 0 is the exact top of the head (頭頂高) and y = 100 is the foot baseline.
 * Optional antennas/funnels extend cleanly into negative y without shifting head datum.
 * @param {string} suitId
 * @param {string} stroke
 * @param {string} fill
 * @returns {string}
 */
function getNormalizedSuitSilhouette(suitId, stroke, fill) {
  switch (suitId) {
    case 'ms-06s':
      return `
        <!-- Antenna & Mono-eye Dome Head -->
        <line x1="0" y1="0" x2="0" y2="-7.5" stroke="${stroke}" stroke-width="1.3" />
        <path d="M -5.5,11 C -5.5,3 -3,0 0,0 C 3,0 5.5,3 5.5,11 Z" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <line x1="-4.2" y1="6.5" x2="4.2" y2="6.5" stroke="${stroke}" stroke-width="1.1" />
        <!-- Broad Zeon Torso & Waist -->
        <polygon points="-13,12 13,12 11,36 14,48 -14,48 -11,36" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <!-- Spiked Right Shoulder & Shield Left Shoulder -->
        <polygon points="-24,11 -13,12 -14,26 -24,23" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="-24,14 -28,11 -24,18" fill="${stroke}" />
        <polygon points="13,12 24,12 25,31 15,31" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <!-- Arms -->
        <polygon points="-23,24 -15,24 -17,50 -24,49" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="15,24 23,24 24,49 17,50" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <!-- Heavy Flared Lower Legs -->
        <polygon points="-13,48 -2,48 -4,94 -16,94 -18,100 -3,100" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="2,48 13,48 16,94 18,100 3,100 4,94" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
      `;
    case 'msz-006':
      return `
        <!-- Wing Binders & Stabilizer -->
        <polygon points="-9,13 -27,2 -23,46 -11,35" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="9,13 27,2 23,46 11,35" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <!-- Zeta Head & Tall V-Fin -->
        <polyline points="-7,-5 0,0.5 7,-5" fill="none" stroke="${stroke}" stroke-width="1.3" />
        <polygon points="-4.5,0 4.5,0 5,11 -5,11" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <!-- Angular Torso & Skirt -->
        <polygon points="-11,12 11,12 9,34 12,48 -12,48 -9,34" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <!-- Sharp Shoulders & Arms -->
        <polygon points="-21,11 -11,12 -12,24 -22,20" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="11,12 21,11 22,20 12,24" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="-21,21 -14,22 -16,49 -22,48" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="14,22 21,21 22,48 16,49" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <!-- Sleek High-Mobility Legs -->
        <polygon points="-11,48 -2,48 -3.5,95 -13.5,95 -15,100 -3,100" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="2,48 11,48 13.5,95 15,100 3,100 3.5,95" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
      `;
    case 'rx-93':
      return `
        <!-- Asymmetrical Fin Funnel Array (Left Back) -->
        <polygon points="-10,14 -26,-13 -21,-13 -14,48 -24,48 -28,-11 -10,22" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <line x1="-22" y1="-10" x2="-20" y2="44" stroke="${stroke}" stroke-width="0.9" stroke-dasharray="2 2" />
        <!-- Nu Gundam Head & V-Fin -->
        <polyline points="-7.5,-5.5 0,0.5 7.5,-5.5" fill="none" stroke="${stroke}" stroke-width="1.3" />
        <polygon points="-4.5,0 4.5,0 5,11 -5,11" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <!-- Torso & Armor Skirt -->
        <polygon points="-12,12 12,12 9.5,35 13,49 -13,49 -9.5,35" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <!-- Shoulders & Arms -->
        <polygon points="-22,12 -12,12 -13,24 -22,22" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="12,12 22,12 22,22 13,24" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="-21,23 -14,23 -16,50 -22,49" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="14,23 21,23 22,49 16,50" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <!-- Long Proportioned Legs -->
        <polygon points="-12,49 -2,49 -3.5,95 -14,95 -16,100 -3,100" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="2,49 12,49 14,95 16,100 3,100 3.5,95" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
      `;
    case 'msn-04':
      return `
        <!-- Dorsal Funnel Containers -->
        <polygon points="-14,12 -28,-3 -22,26 -14,28" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="14,12 28,-3 22,26 14,28" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <!-- Sazabi Head & Long Horn -->
        <line x1="0" y1="0" x2="0" y2="-8" stroke="${stroke}" stroke-width="1.4" />
        <polygon points="-5,0 5,0 6,11 -6,11" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <!-- Heavy Wide Torso & Bulbous Waist -->
        <polygon points="-16,12 16,12 13,36 18,50 -18,50 -13,36" fill="${fill}" stroke="${stroke}" stroke-width="1.3" />
        <!-- Massive Broad Shoulder Pauldrons -->
        <polygon points="-30,10 -16,12 -16,29 -31,26" fill="${fill}" stroke="${stroke}" stroke-width="1.25" />
        <polygon points="16,12 30,10 31,26 16,29" fill="${fill}" stroke="${stroke}" stroke-width="1.25" />
        <!-- Heavy Arms -->
        <polygon points="-28,27 -19,27 -21,52 -29,51" fill="${fill}" stroke="${stroke}" stroke-width="1.15" />
        <polygon points="19,27 28,27 29,51 21,52" fill="${fill}" stroke="${stroke}" stroke-width="1.15" />
        <!-- Wide Heavy Thruster Legs -->
        <polygon points="-17,50 -3,50 -5,94 -20,94 -22,100 -4,100" fill="${fill}" stroke="${stroke}" stroke-width="1.25" />
        <polygon points="3,50 17,50 20,94 22,100 4,100 5,94" fill="${fill}" stroke="${stroke}" stroke-width="1.25" />
      `;
    case 'rx-0':
      return `
        <!-- Unicorn Single Horn & Slender Head -->
        <line x1="0" y1="0" x2="0" y2="-10.5" stroke="${stroke}" stroke-width="1.4" />
        <polygon points="-4,0 4,0 4.5,10.5 -4.5,10.5" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <!-- Slim High-Fashion Torso -->
        <polygon points="-10.5,11 10.5,11 8.5,33 11,46 -11,46 -8.5,33" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <!-- Tapered Shoulders & Arms -->
        <polygon points="-19.5,11 -10.5,11 -11,22 -20,19" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="10.5,11 19.5,11 20,19 11,22" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="-19,20 -13,20 -15,47 -20,46" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="13,20 19,20 20,46 15,47" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <!-- Long Slender Legs -->
        <polygon points="-10.5,46 -2,46 -3,95 -12.5,95 -14,100 -2.5,100" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="2,46 10.5,46 12.5,95 14,100 2.5,100 3,95" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
      `;
    case 'rx-78-2':
    default:
      return `
        <!-- Backpack Beam Saber Hilts -->
        <line x1="-7" y1="12" x2="-9" y2="4" stroke="${stroke}" stroke-width="1.3" />
        <line x1="7" y1="12" x2="9" y2="4" stroke="${stroke}" stroke-width="1.3" />
        <!-- Classic RX-78-2 Head & V-Fin -->
        <polyline points="-7,-5 0,0.5 7,-5" fill="none" stroke="${stroke}" stroke-width="1.3" />
        <polygon points="-4.5,0 4.5,0 5,11 -5,11" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <!-- Core Block Torso & Waist -->
        <polygon points="-12,12 12,12 10,35 12.5,48 -12.5,48 -10,35" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <!-- Square Shoulders & Arms + Shield Silhouette -->
        <polygon points="-21,12 -12,12 -12.5,24 -21,24" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="12,12 21,12 21,24 12.5,24" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="-20,24 -13.5,24 -15,49 -21,49" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="13.5,24 20,24 21,49 15,49" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <rect x="21" y="23" width="4.5" height="28" rx="1" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <!-- Sturdy EFSF Legs -->
        <polygon points="-12,48 -2,48 -3.5,95 -14,95 -15.5,100 -3,100" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="2,48 12,48 14,95 15.5,100 3,100 3.5,95" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
      `;
  }
}

function renderScaleComparator() {
  const suitA = getSuitById(state.scaleA);
  const suitB = getSuitById(state.scaleB);

  const pxPerMeter = 10.6;
  const baselineY = 312;
  const xA = 220;
  const xHuman = 380;
  const xB = 540;

  const scaleA = (suitA.height * pxPerMeter) / 100;
  const scaleB = (suitB.height * pxPerMeter) / 100;
  const headYA = baselineY - suitA.height * pxPerMeter;
  const headYB = baselineY - suitB.height * pxPerMeter;
  const humanHeightPx = 1.75 * pxPerMeter;
  const humanTopY = baselineY - humanHeightPx;

  const heightDiff = suitA.height - suitB.height;
  const absHeightDiff = Math.abs(heightDiff);

  const rulerMarks = [0, 5, 10, 15, 20, 25]
    .map((m) => {
      const y = baselineY - m * pxPerMeter;
      const isGround = m === 0;
      return `
        <line
          x1="66"
          y1="${y}"
          x2="722"
          y2="${y}"
          stroke="${isGround ? '#60a5fa' : 'rgba(148, 163, 184, 0.25)'}"
          stroke-width="${isGround ? '2' : '1'}"
          ${isGround ? '' : 'stroke-dasharray="4 4"'}
        />
        <text
          x="56"
          y="${y + 4}"
          text-anchor="end"
          fill="${isGround ? '#e2e8f0' : '#94a3b8'}"
          font-size="11"
          font-weight="${isGround ? '700' : '500'}"
          font-family="IBM Plex Mono, monospace"
        >${m} m</text>
      `;
    })
    .join('');

  const deltaBracket =
    absHeightDiff >= 0.05
      ? `
        <line x1="${xA}" y1="${headYA}" x2="${xHuman + 8}" y2="${headYA}" stroke="#60a5fa" stroke-width="1" stroke-dasharray="3 3" opacity="0.75" />
        <line x1="${xHuman - 8}" y1="${headYB}" x2="${xB}" y2="${headYB}" stroke="#f87171" stroke-width="1" stroke-dasharray="3 3" opacity="0.75" />
        <line x1="${xHuman}" y1="${headYA}" x2="${xHuman}" y2="${headYB}" stroke="#e2e8f0" stroke-width="1.5" />
        <line x1="${xHuman - 5}" y1="${headYA}" x2="${xHuman + 5}" y2="${headYA}" stroke="#e2e8f0" stroke-width="1.5" />
        <line x1="${xHuman - 5}" y1="${headYB}" x2="${xHuman + 5}" y2="${headYB}" stroke="#e2e8f0" stroke-width="1.5" />
        <rect x="${xHuman - 36}" y="${(headYA + headYB) / 2 - 11}" width="72" height="22" rx="4" fill="#0f2347" stroke="rgba(56, 189, 248, 0.6)" />
        <text x="${xHuman}" y="${(headYA + headYB) / 2 + 4}" text-anchor="middle" fill="#f8fafc" font-size="10.5" font-weight="600" font-family="IBM Plex Mono, monospace">
          Δ ${absHeightDiff.toFixed(2)} m
        </text>
      `
      : `
        <line x1="${xA}" y1="${headYA}" x2="${xB}" y2="${headYB}" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 3" />
        <rect x="${xHuman - 42}" y="${headYA - 26}" width="84" height="20" rx="4" fill="#16294d" stroke="rgba(96, 165, 250, 0.45)" />
        <text x="${xHuman}" y="${headYA - 12}" text-anchor="middle" fill="#cbd5e1" font-size="10" font-weight="600" font-family="IBM Plex Mono, monospace">
          1:1 等高機體
        </text>
      `;

  if (scaleStage) {
    scaleStage.innerHTML = `
      <svg
        class="scale-svg"
        viewBox="0 0 760 352"
        role="img"
        aria-label="${suitA.code} (${suitA.height.toFixed(2)} 公尺) 與 ${suitB.code} (${suitB.height.toFixed(2)} 公尺) 1:1 高度比例對照圖"
      >
        <!-- Left & Right Elevation Axes -->
        <line x1="66" y1="36" x2="66" y2="${baselineY}" stroke="rgba(148, 163, 184, 0.45)" stroke-width="1.2" />
        ${rulerMarks}

        <!-- Head Datum Extension Lines to Ruler / Margin -->
        <line x1="66" y1="${headYA}" x2="${xA}" y2="${headYA}" stroke="#60a5fa" stroke-width="1" stroke-dasharray="3 3" opacity="0.7" />
        <line x1="${xB}" y1="${headYB}" x2="722" y2="${headYB}" stroke="#f87171" stroke-width="1" stroke-dasharray="3 3" opacity="0.7" />

        <!-- Suit A 1:1 Silhouette -->
        <g class="scale-suit-group" transform="translate(${xA}, ${headYA.toFixed(2)}) scale(${scaleA.toFixed(4)})">
          ${getNormalizedSuitSilhouette(suitA.id, '#60a5fa', 'rgba(59, 130, 246, 0.2)')}
        </g>

        <!-- 1.75m Human Reference Silhouette -->
        <g transform="translate(${xHuman}, ${humanTopY.toFixed(2)})">
          <circle cx="0" cy="2.4" r="2.1" fill="#cbd5e1" />
          <path d="M -2.6,5.4 L 2.6,5.4 L 2.2,12 L 1.6,18.55 L 0.4,18.55 L 0,12.8 L -0.4,18.55 L -1.6,18.55 L -2.2,12 Z" fill="#cbd5e1" />
        </g>
        <text x="${xHuman}" y="334" text-anchor="middle" fill="#94a3b8" font-size="10.5" font-family="IBM Plex Mono, monospace">
          1.75 m 人員基準
        </text>

        <!-- Suit B 1:1 Silhouette -->
        <g class="scale-suit-group" transform="translate(${xB}, ${headYB.toFixed(2)}) scale(${scaleB.toFixed(4)})">
          ${getNormalizedSuitSilhouette(suitB.id, '#f87171', 'rgba(248, 113, 113, 0.2)')}
        </g>

        <!-- Height Gap Callout -->
        ${deltaBracket}

        <!-- Head Height Readout Tags -->
        <rect x="74" y="${Math.max(12, headYA - 22).toFixed(1)}" width="112" height="19" rx="3" fill="rgba(37, 99, 235, 0.22)" stroke="rgba(96, 165, 250, 0.55)" />
        <text x="130" y="${Math.max(25, headYA - 9).toFixed(1)}" text-anchor="middle" fill="#bfdbfe" font-size="10.5" font-weight="600" font-family="IBM Plex Mono, monospace">
          ${suitA.code} · ${suitA.height.toFixed(2)} m
        </text>

        <rect x="604" y="${Math.max(12, headYB - 22).toFixed(1)}" width="114" height="19" rx="3" fill="rgba(220, 38, 38, 0.22)" stroke="rgba(248, 113, 113, 0.55)" />
        <text x="661" y="${Math.max(25, headYB - 9).toFixed(1)}" text-anchor="middle" fill="#fecaca" font-size="10.5" font-weight="600" font-family="IBM Plex Mono, monospace">
          ${suitB.code} · ${suitB.height.toFixed(2)} m
        </text>

        <!-- Baseline Captions -->
        <text x="${xA}" y="334" text-anchor="middle" fill="#60a5fa" font-size="11.5" font-weight="700" font-family="Public Sans, Noto Sans TC, sans-serif">
          ${suitA.code} ${suitA.name}
        </text>
        <text x="${xB}" y="334" text-anchor="middle" fill="#f87171" font-size="11.5" font-weight="700" font-family="Public Sans, Noto Sans TC, sans-serif">
          ${suitB.code} ${suitB.name}
        </text>
      </svg>
    `;
  }

  if (scaleMetrics) {
    const ratioPct = ((suitA.height / suitB.height) * 100).toFixed(1);
    const diffSign = Math.abs(heightDiff) < 0.001 ? '±' : heightDiff > 0 ? '+' : '−';
    const diffClass = Math.abs(heightDiff) < 0.001 ? '' : heightDiff > 0 ? 'is-a' : 'is-b';
    const tallerLabel =
      Math.abs(heightDiff) < 0.001
        ? '兩機頭頂等高'
        : heightDiff > 0
        ? `${suitA.code} 較高（為 B 的 ${ratioPct}%）`
        : `${suitB.code} 較高（A 為 B 的 ${ratioPct}%）`;

    const weightDiff = suitA.weight - suitB.weight;
    const weightSign = Math.abs(weightDiff) < 0.05 ? '±' : weightDiff > 0 ? '+' : '−';

    scaleMetrics.innerHTML = `
      <div class="scale-metric-cell">
        <span class="scale-metric-label">機體 A 頭頂全高</span>
        <span class="scale-metric-val is-a">${suitA.height.toFixed(2)} m</span>
        <span class="scale-metric-sub">約 ${(suitA.height / 1.75).toFixed(1)} 倍人體身高</span>
      </div>
      <div class="scale-metric-cell">
        <span class="scale-metric-label">機體 B 頭頂全高</span>
        <span class="scale-metric-val is-b">${suitB.height.toFixed(2)} m</span>
        <span class="scale-metric-sub">約 ${(suitB.height / 1.75).toFixed(1)} 倍人體身高</span>
      </div>
      <div class="scale-metric-cell">
        <span class="scale-metric-label">1:1 高度差值 (A − B)</span>
        <span class="scale-metric-val ${diffClass}">${diffSign}${absHeightDiff.toFixed(2)} m</span>
        <span class="scale-metric-sub">${tallerLabel}</span>
      </div>
      <div class="scale-metric-cell">
        <span class="scale-metric-label">本體淨重對比</span>
        <span class="scale-metric-val">${suitA.weight.toFixed(1)} t vs ${suitB.weight.toFixed(1)} t</span>
        <span class="scale-metric-sub">重量差 ${weightSign}${Math.abs(weightDiff).toFixed(1)} t</span>
      </div>
    `;
  }
}

/* ==========================================================================
   Comparator & HTML5 Canvas 2D Radar Chart
   ========================================================================== */

function populateComparatorSelects() {
  if (!(compareSelectA instanceof HTMLSelectElement) || !(compareSelectB instanceof HTMLSelectElement)) {
    return;
  }

  const optionsHtml = MOBILE_SUITS.map(
    (suit) => `<option value="${suit.id}">${suit.code} · ${suit.name}</option>`
  ).join('');

  compareSelectA.innerHTML = optionsHtml;
  compareSelectB.innerHTML = optionsHtml;
  compareSelectA.value = state.compareA;
  compareSelectB.value = state.compareB;
}

const RADAR_GEOMETRY = {
  logicalWidth: 460,
  logicalHeight: 400,
  cx: 230,
  cy: 206,
  radius: 136,
  startAngle: -Math.PI / 2,
};

/** @type {Array<{key: keyof SuitRatings, label: string, getDetail: (suit: MobileSuit) => string}>} */
const RADAR_AXES = [
  {
    key: 'output',
    label: '動力出力',
    getDetail: (suit) => `發電機 ${formatNumber(suit.output)} kW（極限 ${formatNumber(suit.overdriveOutput)} kW）`,
  },
  {
    key: 'mobility',
    label: '機動推力',
    getDetail: (suit) =>
      `總推力 ${formatNumber(suit.thruster)} kg · 推重比 ${Math.round(suit.thruster / suit.weight)} kg/t`,
  },
  {
    key: 'armor',
    label: '裝甲防護',
    getDetail: (suit) => suit.armor,
  },
  {
    key: 'firepower',
    label: '武裝火力',
    getDetail: (suit) => `標準武裝 ${suit.armaments.length} 項`,
  },
  {
    key: 'psycho',
    label: '感應適性',
    getDetail: (suit) => (suit.psychoFrame ? '精神感應框架搭載' : '傳統 / 準感應操控架構'),
  },
];

/**
 * @param {MobileSuit} suitA
 * @param {MobileSuit} suitB
 * @param {number | null} [hoveredAxisIndex]
 */
function drawRadarChart(suitA, suitB, hoveredAxisIndex = state.hoveredAxisIndex) {
  if (!(radarCanvas instanceof HTMLCanvasElement)) return;
  const ctx = radarCanvas.getContext('2d');
  if (!ctx) return;

  const dpr = window.devicePixelRatio || 1;
  const { logicalWidth, logicalHeight, cx, cy, radius, startAngle } = RADAR_GEOMETRY;

  radarCanvas.width = logicalWidth * dpr;
  radarCanvas.height = logicalHeight * dpr;
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, logicalWidth, logicalHeight);

  const count = RADAR_AXES.length;
  const angleStep = (Math.PI * 2) / count;

  // Draw concentric reference pentagons (20%, 40%, 60%, 80%, 100%)
  for (let level = 1; level <= 5; level += 1) {
    const r = (radius / 5) * level;
    ctx.beginPath();
    for (let i = 0; i < count; i += 1) {
      const angle = startAngle + i * angleStep;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = level === 5 ? 'rgba(96, 165, 250, 0.45)' : 'rgba(148, 163, 184, 0.22)';
    ctx.lineWidth = level === 5 ? 1.5 : 1;
    ctx.stroke();
  }

  // Draw axis spokes & labels
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  RADAR_AXES.forEach((axis, i) => {
    const isHovered = hoveredAxisIndex === i;
    const angle = startAngle + i * angleStep;
    const xEnd = cx + Math.cos(angle) * radius;
    const yEnd = cy + Math.sin(angle) * radius;

    if (isHovered) {
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(xEnd, yEnd);
      ctx.strokeStyle = 'rgba(96, 165, 250, 0.22)';
      ctx.lineWidth = 8;
      ctx.lineCap = 'round';
      ctx.stroke();
      ctx.lineCap = 'butt';
    }

    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(xEnd, yEnd);
    ctx.strokeStyle = isHovered ? '#60a5fa' : 'rgba(148, 163, 184, 0.24)';
    ctx.lineWidth = isHovered ? 1.75 : 1;
    ctx.stroke();

    const labelDist = radius + 28;
    const lx = cx + Math.cos(angle) * labelDist;
    const ly = cy + Math.sin(angle) * labelDist;
    ctx.font = isHovered
      ? '700 13.5px "Public Sans", "Noto Sans TC", sans-serif'
      : '600 13px "Public Sans", "Noto Sans TC", sans-serif';
    ctx.fillStyle = isHovered ? '#93c5fd' : '#e2e8f0';
    ctx.fillText(axis.label, lx, ly);
  });

  /**
   * @param {MobileSuit} suit
   * @param {string} strokeColor
   * @param {string} fillColor
   */
  const drawPolygon = (suit, strokeColor, fillColor) => {
    ctx.beginPath();
    RADAR_AXES.forEach((axis, i) => {
      const val = suit.ratings[axis.key] / 100;
      const angle = startAngle + i * angleStep;
      const px = cx + Math.cos(angle) * radius * val;
      const py = cy + Math.sin(angle) * radius * val;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    });
    ctx.closePath();
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 2.25;
    ctx.stroke();

    RADAR_AXES.forEach((axis, i) => {
      const isHovered = hoveredAxisIndex === i;
      const val = suit.ratings[axis.key] / 100;
      const angle = startAngle + i * angleStep;
      const px = cx + Math.cos(angle) * radius * val;
      const py = cy + Math.sin(angle) * radius * val;

      if (isHovered) {
        ctx.beginPath();
        ctx.arc(px, py, 6.5, 0, Math.PI * 2);
        ctx.fillStyle = '#0b162b';
        ctx.fill();
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      ctx.beginPath();
      ctx.arc(px, py, isHovered ? 4 : 3.5, 0, Math.PI * 2);
      ctx.fillStyle = strokeColor;
      ctx.fill();
    });
  };

  drawPolygon(suitB, '#f87171', 'rgba(248, 113, 113, 0.22)');
  drawPolygon(suitA, '#60a5fa', 'rgba(59, 130, 246, 0.24)');
}

/**
 * Determines which radar axis spoke (0..4) is under the pointer, or null if none.
 * @param {number} clientX
 * @param {number} clientY
 * @returns {number | null}
 */
function getHoveredRadarAxis(clientX, clientY) {
  if (!(radarCanvas instanceof HTMLCanvasElement)) return null;
  const rect = radarCanvas.getBoundingClientRect();
  if (rect.width <= 0 || rect.height <= 0) return null;

  const { logicalWidth, logicalHeight, cx, cy, radius, startAngle } = RADAR_GEOMETRY;
  const mx = ((clientX - rect.left) / rect.width) * logicalWidth;
  const my = ((clientY - rect.top) / rect.height) * logicalHeight;
  const dx = mx - cx;
  const dy = my - cy;

  const count = RADAR_AXES.length;
  const angleStep = (Math.PI * 2) / count;
  let bestIndex = null;
  let bestPerp = Infinity;

  for (let i = 0; i < count; i += 1) {
    const angle = startAngle + i * angleStep;
    const ux = Math.cos(angle);
    const uy = Math.sin(angle);
    const proj = dx * ux + dy * uy;
    const perp = Math.abs(-dx * uy + dy * ux);

    if (proj >= 8 && proj <= radius + 54 && perp <= 34 && perp < bestPerp) {
      bestPerp = perp;
      bestIndex = i;
    }
  }

  return bestIndex;
}

function hideRadarTooltip() {
  if (state.hoveredAxisIndex !== null) {
    state.hoveredAxisIndex = null;
    drawRadarChart(getSuitById(state.compareA), getSuitById(state.compareB), null);
  }
  if (radarCanvas instanceof HTMLCanvasElement) {
    radarCanvas.classList.remove('is-axis-hovered');
  }
  if (radarTooltip instanceof HTMLElement) {
    radarTooltip.setAttribute('hidden', '');
  }
}

/**
 * @param {number} axisIndex
 * @param {number} clientX
 * @param {number} clientY
 */
function showRadarTooltip(axisIndex, clientX, clientY) {
  if (!(radarTooltip instanceof HTMLElement) || !(canvasWrap instanceof HTMLElement)) return;
  const axis = RADAR_AXES[axisIndex];
  if (!axis) return;

  const suitA = getSuitById(state.compareA);
  const suitB = getSuitById(state.compareB);
  const valA = suitA.ratings[axis.key];
  const valB = suitB.ratings[axis.key];
  const diff = valA - valB;
  const diffText = diff === 0 ? '±0 pt' : `${diff > 0 ? '+' : '−'}${Math.abs(diff)} pt`;
  const diffCls = diff === 0 ? 'is-neutral' : diff < 0 ? 'is-neg' : '';

  radarTooltip.innerHTML = `
    <div class="radar-tooltip-head">
      <span class="radar-tooltip-axis">${axis.label}</span>
      <span class="radar-tooltip-delta ${diffCls}">差值 ${diffText}</span>
    </div>
    <div class="radar-tooltip-rows">
      <div class="radar-tooltip-row">
        <div class="radar-tooltip-row-top">
          <span class="radar-tooltip-unit">
            <span class="radar-tooltip-swatch is-a" aria-hidden="true"></span>
            ${suitA.code}
          </span>
          <span class="radar-tooltip-score">${valA} / 100</span>
        </div>
        <span class="radar-tooltip-detail">${axis.getDetail(suitA)}</span>
      </div>
      <div class="radar-tooltip-row">
        <div class="radar-tooltip-row-top">
          <span class="radar-tooltip-unit">
            <span class="radar-tooltip-swatch is-b" aria-hidden="true"></span>
            ${suitB.code}
          </span>
          <span class="radar-tooltip-score">${valB} / 100</span>
        </div>
        <span class="radar-tooltip-detail">${axis.getDetail(suitB)}</span>
      </div>
    </div>
  `;

  radarTooltip.removeAttribute('hidden');

  const wrapRect = canvasWrap.getBoundingClientRect();
  const tipWidth = radarTooltip.offsetWidth;
  const tipHeight = radarTooltip.offsetHeight;
  const relX = clientX - wrapRect.left;
  const relY = clientY - wrapRect.top;

  let left = relX + 16;
  if (left + tipWidth > wrapRect.width - 6) {
    left = relX - tipWidth - 16;
  }
  left = Math.max(6, Math.min(left, wrapRect.width - tipWidth - 6));

  let top = relY - tipHeight - 12;
  if (top < 6) {
    top = relY + 16;
  }
  top = Math.max(6, Math.min(top, wrapRect.height - tipHeight - 6));

  radarTooltip.style.transform = `translate3d(${Math.round(left)}px, ${Math.round(top)}px, 0)`;
}

/**
 * @param {number} diff
 * @param {string} unit
 * @param {number} [decimals]
 * @returns {{text: string, cls: string}}
 */
function formatDelta(diff, unit, decimals = 0) {
  if (Math.abs(diff) < 0.001) {
    return { text: `±0 ${unit}`, cls: 'delta-neutral' };
  }
  const sign = diff > 0 ? '+' : '−';
  const absVal = decimals > 0 ? Math.abs(diff).toFixed(decimals) : formatNumber(Math.abs(diff));
  return {
    text: `${sign}${absVal} ${unit}`,
    cls: diff > 0 ? 'delta-pos' : 'delta-neg',
  };
}

/**
 * Computes diverging heat colors for an attribute difference (A - B).
 * @param {number} diff
 * @returns {{bg: string, border: string, color: string}}
 */
function getDivergingHeatColors(diff) {
  if (diff === 0) {
    return {
      bg: 'rgba(148, 163, 184, 0.14)',
      border: 'rgba(148, 163, 184, 0.32)',
      color: '#cbd5e1',
    };
  }

  const intensity = Math.min(Math.abs(diff) / 55, 1);
  const alpha = 0.22 + intensity * 0.7;
  const borderAlpha = Math.min(0.36 + intensity * 0.52, 0.9);
  const useLightText = alpha >= 0.52;

  if (diff > 0) {
    return {
      bg: `rgba(37, 99, 235, ${alpha.toFixed(2)})`,
      border: `rgba(96, 165, 250, ${borderAlpha.toFixed(2)})`,
      color: useLightText ? '#ffffff' : '#bfdbfe',
    };
  }

  return {
    bg: `rgba(220, 38, 38, ${alpha.toFixed(2)})`,
    border: `rgba(248, 113, 113, ${borderAlpha.toFixed(2)})`,
    color: useLightText ? '#ffffff' : '#fecaca',
  };
}

/**
 * Computes single-suit heat intensity colors for score (0-100).
 * @param {number} score
 * @param {'a' | 'b'} variant
 * @returns {{bg: string, border: string, color: string}}
 */
function getSuitHeatColors(score, variant) {
  const intensity = Math.max(0, Math.min(score / 100, 1));
  const alpha = 0.16 + intensity * 0.48;
  const borderAlpha = 0.28 + intensity * 0.42;
  const rgb = variant === 'a' ? '37, 99, 235' : '220, 38, 38';
  const borderRgb = variant === 'a' ? '96, 165, 250' : '248, 113, 113';
  const lightText = variant === 'a' ? '#bfdbfe' : '#fecaca';

  return {
    bg: `rgba(${rgb}, ${alpha.toFixed(2)})`,
    border: `rgba(${borderRgb}, ${borderAlpha.toFixed(2)})`,
    color: alpha >= 0.46 ? '#ffffff' : lightText,
  };
}

/**
 * @param {number} diff
 * @returns {string}
 */
function getAdvantageTierLabel(diff) {
  if (diff === 0) return '雙機均勢';
  const side = diff > 0 ? 'A' : 'B';
  const abs = Math.abs(diff);
  if (abs >= 35) return `${side} 壓倒優勢`;
  if (abs >= 15) return `${side} 顯著優勢`;
  return `${side} 小幅領先`;
}

/**
 * Syncs column/row highlight classes in the heatmap with hovered axis index.
 * @param {number | null} axisIndex
 */
function syncHeatmapHighlight(axisIndex) {
  if (!(heatmapBody instanceof HTMLElement)) return;
  heatmapBody.querySelectorAll('[data-axis-index]').forEach((el) => {
    const idx = Number(el.getAttribute('data-axis-index'));
    el.classList.toggle('is-highlighted', axisIndex !== null && idx === axisIndex);
  });
}

/**
 * Renders the 5-axis advantage distribution heatmap inside #comparator.
 * @param {MobileSuit} suitA
 * @param {MobileSuit} suitB
 */
function renderHeatmap(suitA, suitB) {
  if (heatmapScaleA) {
    heatmapScaleA.textContent = `${suitA.code} 優勢 (+60)`;
  }
  if (heatmapScaleB) {
    heatmapScaleB.textContent = `${suitB.code} 優勢 (−60)`;
  }

  const axisData = RADAR_AXES.map((axis, index) => {
    const valA = suitA.ratings[axis.key];
    const valB = suitB.ratings[axis.key];
    const diff = valA - valB;
    return {
      index,
      axis,
      valA,
      valB,
      diff,
      diffText: diff === 0 ? '±0' : `${diff > 0 ? '+' : '−'}${Math.abs(diff)}`,
      tier: getAdvantageTierLabel(diff),
      divColor: getDivergingHeatColors(diff),
      aColor: getSuitHeatColors(valA, 'a'),
      bColor: getSuitHeatColors(valB, 'b'),
    };
  });

  if (heatmapBody) {
    if (state.heatmapMode === 'spectrum') {
      heatmapBody.innerHTML = `
        <div class="heatmap-spectrum-list">
          ${axisData
            .map((item) => {
              const barWidth = Math.min((Math.abs(item.diff) / 60) * 50, 50);
              const barSideClass = item.diff >= 0 ? 'is-a' : 'is-b';
              return `
                <div class="heatmap-spectrum-row" data-axis-index="${item.index}" title="${item.axis.label}：${suitA.code} (${item.valA}) vs ${suitB.code} (${item.valB})">
                  <div class="spectrum-axis-info">
                    <span class="spectrum-axis-name">${item.axis.label}</span>
                    <span class="spectrum-axis-scores">${item.valA} vs ${item.valB}</span>
                  </div>
                  <div class="spectrum-track" aria-label="${item.axis.label} 差值 ${item.diffText}">
                    <div class="spectrum-center-line" aria-hidden="true"></div>
                    ${
                      item.diff !== 0
                        ? `<div class="spectrum-bar ${barSideClass}" style="width: ${barWidth.toFixed(1)}%; background-color: ${item.divColor.bg}; border: 1px solid ${item.divColor.border};"></div>`
                        : ''
                    }
                  </div>
                  <div class="spectrum-verdict">
                    <span class="spectrum-diff-badge" style="background-color: ${item.divColor.bg}; border-color: ${item.divColor.border}; color: ${item.divColor.color};">
                      ${item.diffText} · ${item.tier}
                    </span>
                  </div>
                </div>
              `;
            })
            .join('')}
        </div>
      `;
    } else {
      heatmapBody.innerHTML = `
        <div class="heatmap-matrix-scroll">
          <div class="heatmap-matrix" role="table" aria-label="五大屬性優勢分佈熱力矩陣">
            <div class="heatmap-corner" role="columnheader">對比機體 / 維度</div>
            ${axisData
              .map(
                (item) => `
                  <div class="heatmap-col-header" data-axis-index="${item.index}" role="columnheader">
                    <span class="heatmap-col-title">${item.axis.label}</span>
                    <span class="heatmap-col-sub">0–100 PT</span>
                  </div>
                `
              )
              .join('')}

            <div class="heatmap-row-label" role="rowheader">
              <span class="heatmap-row-code is-a">${suitA.code}</span>
              <span class="heatmap-row-name">${suitA.name}</span>
            </div>
            ${axisData
              .map(
                (item) => `
                  <div
                    class="heatmap-cell"
                    data-axis-index="${item.index}"
                    role="cell"
                    style="background-color: ${item.aColor.bg}; border-color: ${item.aColor.border}; color: ${item.aColor.color};"
                    title="${suitA.code} ${item.axis.label}：${item.valA} / 100"
                  >
                    <span class="heatmap-cell-val">${item.valA}</span>
                    <span class="heatmap-cell-tag">${suitA.code}</span>
                  </div>
                `
              )
              .join('')}

            <div class="heatmap-row-label" role="rowheader">
              <span class="heatmap-row-code is-b">${suitB.code}</span>
              <span class="heatmap-row-name">${suitB.name}</span>
            </div>
            ${axisData
              .map(
                (item) => `
                  <div
                    class="heatmap-cell"
                    data-axis-index="${item.index}"
                    role="cell"
                    style="background-color: ${item.bColor.bg}; border-color: ${item.bColor.border}; color: ${item.bColor.color};"
                    title="${suitB.code} ${item.axis.label}：${item.valB} / 100"
                  >
                    <span class="heatmap-cell-val">${item.valB}</span>
                    <span class="heatmap-cell-tag">${suitB.code}</span>
                  </div>
                `
              )
              .join('')}

            <div class="heatmap-row-label" role="rowheader">
              <span class="heatmap-row-code">優勢差值 (A − B)</span>
              <span class="heatmap-row-name">正值為 A 佔優</span>
            </div>
            ${axisData
              .map(
                (item) => `
                  <div
                    class="heatmap-cell"
                    data-axis-index="${item.index}"
                    role="cell"
                    style="background-color: ${item.divColor.bg}; border-color: ${item.divColor.border}; color: ${item.divColor.color};"
                    title="${item.axis.label} 差值：${item.diffText}（${item.tier}）"
                  >
                    <span class="heatmap-cell-val">${item.diffText}</span>
                    <span class="heatmap-cell-tag">${item.tier}</span>
                  </div>
                `
              )
              .join('')}
          </div>
        </div>
      `;
    }
  }

  if (heatmapSummary) {
    const aWins = axisData.filter((d) => d.diff > 0).length;
    const bWins = axisData.filter((d) => d.diff < 0).length;
    const ties = axisData.filter((d) => d.diff === 0).length;
    const netDiff = axisData.reduce((sum, d) => sum + d.diff, 0);
    const topAdvantage = [...axisData].sort((x, y) => Math.abs(y.diff) - Math.abs(x.diff))[0];

    const netText = netDiff === 0 ? '±0 pt' : `${netDiff > 0 ? '+' : '−'}${Math.abs(netDiff)} pt`;
    const netClass = netDiff > 0 ? 'is-a' : netDiff < 0 ? 'is-b' : '';

    heatmapSummary.innerHTML = `
      <div class="heatmap-summary-cell">
        <span class="heatmap-summary-label">${suitA.code} 優勢維度</span>
        <span class="heatmap-summary-val is-a">${aWins} / 5 項</span>
      </div>
      <div class="heatmap-summary-cell">
        <span class="heatmap-summary-label">${suitB.code} 優勢維度</span>
        <span class="heatmap-summary-val is-b">${bWins} / 5 項</span>
      </div>
      <div class="heatmap-summary-cell">
        <span class="heatmap-summary-label">綜合評分總差值${ties > 0 ? `（均勢 ${ties} 項）` : ''}</span>
        <span class="heatmap-summary-val ${netClass}">${netText}</span>
      </div>
      <div class="heatmap-summary-cell">
        <span class="heatmap-summary-label">最大差距指標</span>
        <span class="heatmap-summary-val">${topAdvantage.axis.label}（${topAdvantage.diffText}）</span>
      </div>
    `;
  }
}

function renderComparator() {
  const suitA = getSuitById(state.compareA);
  const suitB = getSuitById(state.compareB);

  if (legendNameA) legendNameA.textContent = `${suitA.code} ${suitA.name}`;
  if (legendNameB) legendNameB.textContent = `${suitB.code} ${suitB.name}`;
  if (thUnitA) thUnitA.textContent = suitA.code;
  if (thUnitB) thUnitB.textContent = suitB.code;

  drawRadarChart(suitA, suitB);
  renderHeatmap(suitA, suitB);

  if (compareTableBody) {
    const rows = [
      {
        label: '發電機出力',
        a: `${formatNumber(suitA.output)} kW`,
        b: `${formatNumber(suitB.output)} kW`,
        delta: formatDelta(suitA.output - suitB.output, 'kW'),
      },
      {
        label: '推進器總推力',
        a: `${formatNumber(suitA.thruster)} kg`,
        b: `${formatNumber(suitB.thruster)} kg`,
        delta: formatDelta(suitA.thruster - suitB.thruster, 'kg'),
      },
      {
        label: '頭頂全高',
        a: `${suitA.height.toFixed(2)} m`,
        b: `${suitB.height.toFixed(2)} m`,
        delta: formatDelta(suitA.height - suitB.height, 'm', 2),
      },
      {
        label: '本體重量',
        a: `${suitA.weight.toFixed(1)} t`,
        b: `${suitB.weight.toFixed(1)} t`,
        delta: formatDelta(suitA.weight - suitB.weight, 't', 1),
      },
      {
        label: '登場紀年',
        a: suitA.era,
        b: suitB.era,
        delta: formatDelta(suitA.eraNumber - suitB.eraNumber, '年'),
      },
    ];

    compareTableBody.innerHTML = rows
      .map(
        (r) => `
        <tr>
          <td>${r.label}</td>
          <td>${r.a}</td>
          <td>${r.b}</td>
          <td class="${r.delta.cls}">${r.delta.text}</td>
        </tr>
      `
      )
      .join('');
  }

  if (compareSummaryNote) {
    const outputDiff = suitA.output - suitB.output;
    const outputLeader = outputDiff >= 0 ? suitA : suitB;
    const ratio = (suitA.thruster / suitA.weight - suitB.thruster / suitB.weight).toFixed(0);
    compareSummaryNote.innerHTML = `
      <strong>工程分析摘要：</strong>
      <strong>${outputLeader.code}</strong> 在反應爐出力上領先 ${formatNumber(Math.abs(outputDiff))} kW；
      以基準推重比（總推力 ÷ 本體重）計算，${suitA.code} 為 <span class="tabular">${Math.round(
      suitA.thruster / suitA.weight
    )} kg/t</span>，${suitB.code} 為 <span class="tabular">${Math.round(
      suitB.thruster / suitB.weight
    )} kg/t</span>（差值 ${Number(ratio) >= 0 ? '+' : ''}${ratio} kg/t）。
    `;
  }
}

/* ==========================================================================
   Timeline
   ========================================================================== */

function renderTimeline() {
  if (!timelineDetail) return;
  const info = ERA_TIMELINE[state.activeEra];
  if (!info) return;

  timelineDetail.innerHTML = `
    <p class="timeline-era-kicker">${info.kicker}</p>
    <h3 class="timeline-era-title">${info.title}</h3>
    <p class="timeline-era-prose">${info.prose}</p>
    <div class="timeline-facts">
      <div class="fact-box">
        <span class="fact-label">關鍵技術突破</span>
        <span class="fact-value">${info.breakthrough}</span>
      </div>
      <div class="fact-box">
        <span class="fact-label">代表性機體</span>
        <span class="fact-value">${info.representative}</span>
      </div>
      <div class="fact-box">
        <span class="fact-label">裝甲材料世代</span>
        <span class="fact-value">${info.armorGen}</span>
      </div>
    </div>
  `;
}

/* ==========================================================================
   Section 04: Mobile Suit Maintenance Checklist & Completion Simulation Report
   ========================================================================== */

/** @type {Array<{id: string, code: string, title: string, desc: string, getSpecRef: (suit: MobileSuit) => string}>} */
const MAINTENANCE_TASKS = [
  {
    id: 'sensor',
    code: 'CHK-01',
    title: '感應器校準',
    desc: '執行主攝影機、複合光學測距儀與米諾夫斯基粒子抗干擾雷達歸零校準。',
    getSpecRef: (suit) =>
      suit.psychoFrame ? '感測架構：主光學系統 + 精神感應波調校' : '感測架構：標準複合光學 / 雷射測距',
  },
  {
    id: 'thruster',
    code: 'CHK-02',
    title: '噴射口清理',
    desc: '清除主推進噴嘴與姿勢制御微調噴射口積碳，驗證推力向量閥門開度。',
    getSpecRef: (suit) => `基準總推力：${formatNumber(suit.thruster)} kg（極限 ${formatNumber(suit.overdriveThruster)} kg）`,
  },
  {
    id: 'frame',
    code: 'CHK-03',
    title: '骨架潤滑',
    desc: '完成四肢關節驅動軸、動力管線封環與內部骨架液壓致動器低溫潤滑。',
    getSpecRef: (suit) => `機體規格：全高 ${suit.height.toFixed(2)} m · 本體重 ${suit.weight.toFixed(1)} t`,
  },
  {
    id: 'reactor',
    code: 'CHK-04',
    title: '熱核反應爐巡檢',
    desc: '檢驗米諾夫斯基熱核反應爐冷卻迴路壓力與額定電功率輸出穩定性。',
    getSpecRef: (suit) => `額定出力：${formatNumber(suit.output)} kW`,
  },
  {
    id: 'armor',
    code: 'CHK-05',
    title: '裝甲接縫與氣密確認',
    desc: '確認外掛裝甲固定螺栓扭力、駕駛艙氣密閉鎖及盾牌掛架結構完整。',
    getSpecRef: (suit) => `裝甲材質：${suit.armor}`,
  },
  {
    id: 'firecontrol',
    code: 'CHK-06',
    title: '火控與武裝迴路測試',
    desc: '檢測能源電容連結端點、光束軍刀充能槽及攜帶武裝擊發安全鎖。',
    getSpecRef: (suit) => `標準武裝數：${suit.armaments.length} 項武裝完成測試`,
  },
];

function populateMaintenanceSelect() {
  if (!(maintenanceSuitSelect instanceof HTMLSelectElement)) return;
  maintenanceSuitSelect.innerHTML = MOBILE_SUITS.map(
    (suit) => `<option value="${suit.id}">${suit.code} · ${suit.name}</option>`
  ).join('');
  maintenanceSuitSelect.value = state.maintenanceSuitId;
}

/**
 * @param {string} suitId
 * @returns {Record<string, boolean>}
 */
function getSuitMaintenanceState(suitId) {
  if (!state.maintenanceChecks[suitId]) {
    state.maintenanceChecks[suitId] = {};
  }
  return state.maintenanceChecks[suitId];
}

function formatInspectionTimestamp() {
  return new Intl.DateTimeFormat('zh-Hant', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(new Date());
}

function renderMaintenance() {
  const suit = getSuitById(state.maintenanceSuitId);
  const checks = getSuitMaintenanceState(suit.id);
  const completedTasks = MAINTENANCE_TASKS.filter((task) => Boolean(checks[task.id]));
  const completedCount = completedTasks.length;
  const totalCount = MAINTENANCE_TASKS.length;
  const isAllDone = completedCount === totalCount;
  const pct = Math.round((completedCount / totalCount) * 100);

  if (isAllDone && !state.maintenanceCompletedAt[suit.id]) {
    state.maintenanceCompletedAt[suit.id] = formatInspectionTimestamp();
  } else if (!isAllDone && state.maintenanceCompletedAt[suit.id]) {
    delete state.maintenanceCompletedAt[suit.id];
  }

  if (maintenanceProgressText) {
    maintenanceProgressText.textContent = `${completedCount} / ${totalCount} 項已完成（${pct}%）`;
  }
  if (maintenanceProgressFill instanceof HTMLElement) {
    maintenanceProgressFill.style.width = `${pct}%`;
    maintenanceProgressFill.classList.toggle('is-complete', isAllDone);
  }

  if (maintenanceChecklist) {
    maintenanceChecklist.innerHTML = MAINTENANCE_TASKS.map((task) => {
      const checked = Boolean(checks[task.id]);
      return `
        <label class="maint-item ${checked ? 'is-checked' : ''}" for="maint-chk-${task.id}">
          <input
            type="checkbox"
            id="maint-chk-${task.id}"
            class="maint-checkbox"
            data-task-id="${task.id}"
            ${checked ? 'checked' : ''}
          />
          <div class="maint-content">
            <div class="maint-top-row">
              <div class="maint-title-group">
                <span class="maint-code">${task.code}</span>
                <span class="maint-title">${task.title}</span>
              </div>
              <span class="maint-status">${checked ? '✓ 已確認' : '待檢修'}</span>
            </div>
            <p class="maint-desc">${task.desc}</p>
            <p class="maint-spec-ref">${task.getSpecRef(suit)}</p>
          </div>
        </label>
      `;
    }).join('');
  }

  if (maintenanceReport) {
    if (isAllDone) {
      const timestamp = state.maintenanceCompletedAt[suit.id] || formatInspectionTimestamp();
      const thrustRatio = Math.round(suit.thruster / suit.weight);
      const topWeapons = suit.armaments.slice(0, 3).join('、');

      maintenanceReport.innerHTML = `
        <article class="report-card is-complete">
          <div class="report-banner">
            <p class="report-kicker">HANGAR DIAGNOSTIC · ALL SYSTEMS NOMINAL</p>
            <span class="report-badge">READY FOR SORTIE</span>
          </div>

          <h3 class="report-heading">機體整備完成</h3>
          <p class="report-lead">
            <strong>${suit.code} ${suit.name}</strong> 已完成全部 ${totalCount} 項基礎整備點檢，各項核心子系統數值皆處於出擊安全閾值內。
          </p>

          <dl class="report-spec-grid">
            <div class="report-spec-item">
              <dt>檢驗合格機體</dt>
              <dd>${suit.code} · ${suit.era}</dd>
            </div>
            <div class="report-spec-item">
              <dt>指派駕駛員</dt>
              <dd>${suit.pilot}</dd>
            </div>
            <div class="report-spec-item">
              <dt>發電機額定 / 極限出力</dt>
              <dd>${formatNumber(suit.output)} / ${formatNumber(suit.overdriveOutput)} kW</dd>
            </div>
            <div class="report-spec-item">
              <dt>推力與推重比測試</dt>
              <dd>${formatNumber(suit.thruster)} kg (${thrustRatio} kg/t)</dd>
            </div>
            <div class="report-spec-item">
              <dt>感應與骨架狀態</dt>
              <dd>${suit.psychoFrame ? '感應框架共振正常' : '可動關節潤滑合格'}</dd>
            </div>
            <div class="report-spec-item">
              <dt>模擬報告簽證時間</dt>
              <dd>${timestamp}</dd>
            </div>
          </dl>

          <div class="report-signoff">
            <strong>整備班模擬簽核總結：</strong>
            感應器零位誤差 &lt; 0.02°、推進噴嘴氣流平衡率 100%、${suit.armor}氣密檢驗通過；已掛載武裝（${topWeapons} 等共 ${suit.armaments.length} 項）均完成安全鎖釋放測試，准予移交彈射軌道待命。
          </div>

          <div class="report-actions">
            <button type="button" class="btn-outline js-report-reset">重新執行點檢</button>
          </div>
        </article>
      `;
    } else {
      const pendingTasks = MAINTENANCE_TASKS.filter((task) => !checks[task.id]);
      maintenanceReport.innerHTML = `
        <article class="report-card">
          <div class="report-banner">
            <p class="report-kicker">HANGAR STATUS · INSPECTION IN PROGRESS</p>
            <span class="report-badge">已完成 ${completedCount} / ${totalCount}</span>
          </div>

          <h3 class="report-heading">整備作業進行中</h3>
          <p class="report-lead">
            目標機體 <strong>${suit.code} ${suit.name}</strong> 尚餘 ${pendingTasks.length} 項點檢項目未完成，全數勾選後將自動核發「機體整備完成」模擬報告。
          </p>

          <dl class="report-spec-grid">
            <div class="report-spec-item">
              <dt>隸屬陣營</dt>
              <dd>${suit.factionLabel}</dd>
            </div>
            <div class="report-spec-item">
              <dt>責任駕駛員</dt>
              <dd>${suit.pilot}</dd>
            </div>
          </dl>

          <div class="report-pending-box">
            <p class="report-pending-title">尚待確認的整備項目：</p>
            <ul class="report-pending-list">
              ${pendingTasks.map((t) => `<li>${t.code} ${t.title}</li>`).join('')}
            </ul>
          </div>
        </article>
      `;
    }
  }
}

/* ==========================================================================
   Event Wiring & Initialization
   ========================================================================== */

function bindEvents() {
  filterTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      state.filter = tab.getAttribute('data-filter') || 'all';
      filterTabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-selected', String(active));
      });
      renderSuitGrid();
    });
  });

  searchInput?.addEventListener('input', (e) => {
    const target = e.target;
    if (target instanceof HTMLInputElement) {
      state.search = target.value;
      renderSuitGrid();
    }
  });

  sortSelect?.addEventListener('change', (e) => {
    const target = e.target;
    if (target instanceof HTMLSelectElement) {
      state.sort = target.value;
      renderSuitGrid();
    }
  });

  resetFiltersBtn?.addEventListener('click', () => {
    state.filter = 'all';
    state.search = '';
    state.sort = 'era';
    if (searchInput instanceof HTMLInputElement) searchInput.value = '';
    if (sortSelect instanceof HTMLSelectElement) sortSelect.value = 'era';
    filterTabs.forEach((t) => {
      const isAll = t.getAttribute('data-filter') === 'all';
      t.classList.toggle('is-active', isAll);
      t.setAttribute('aria-selected', String(isAll));
    });
    renderSuitGrid();
  });

  suitGrid?.addEventListener('click', (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;

    const weaponsTrigger = target.closest('.js-weapons, .suit-weapons-close');
    if (weaponsTrigger) {
      const id = weaponsTrigger.getAttribute('data-id');
      if (id) {
        const shouldClose = weaponsTrigger.classList.contains('suit-weapons-close');
        const nextOpen = shouldClose ? false : !state.weaponViewSuits.has(id);
        if (nextOpen) {
          state.weaponViewSuits.add(id);
        } else {
          state.weaponViewSuits.delete(id);
        }

        const card = weaponsTrigger.closest('.suit-card');
        if (card instanceof HTMLElement) {
          card.classList.toggle('is-weapons-open', nextOpen);
          if (nextOpen) {
            card.classList.remove('is-flipped');
          }

          const summaryEl = card.querySelector('.suit-summary');
          const metricsEl = card.querySelector('.suit-metrics');
          const panelEl = card.querySelector('.suit-weapons-panel');

          if (summaryEl instanceof HTMLElement) summaryEl.hidden = nextOpen;
          if (metricsEl instanceof HTMLElement) metricsEl.hidden = nextOpen;
          if (panelEl instanceof HTMLElement) panelEl.hidden = !nextOpen;

          card.querySelectorAll('.js-weapons').forEach((btn) => {
            btn.classList.toggle('is-active', nextOpen);
            btn.setAttribute('aria-pressed', String(nextOpen));
          });
        }
      }
      return;
    }

    const radarAllBtn = target.closest('.js-radar-all');
    if (radarAllBtn && radarAllBtn.getAttribute('data-context') === 'card') {
      const id = radarAllBtn.getAttribute('data-id');
      if (id) {
        const suit = getSuitById(id);
        const set = getCardRadarSet(id);
        if (set.size === suit.weaponProfiles.length) {
          set.clear();
        } else {
          suit.weaponProfiles.forEach((_, idx) => set.add(idx));
        }
        syncCardRadarOverlay(id);
      }
      return;
    }

    const radarCloseBtn = target.closest('.js-radar-close');
    if (radarCloseBtn && radarCloseBtn.getAttribute('data-context') === 'card') {
      const id = radarCloseBtn.getAttribute('data-id');
      if (id) {
        getCardRadarSet(id).clear();
        syncCardRadarOverlay(id);
      }
      return;
    }

    if (target.closest('.card-range-radar-overlay')) {
      return;
    }

    const effectiveRangeBtn = target.closest('.js-effective-range');
    if (effectiveRangeBtn) {
      const id = effectiveRangeBtn.getAttribute('data-id');
      const idx = Number(effectiveRangeBtn.getAttribute('data-weapon-idx'));
      if (id && Number.isInteger(idx)) {
        const set = getCardRadarSet(id);
        if (set.has(idx)) {
          set.delete(idx);
        } else {
          set.add(idx);
        }
        state.selectedWeaponBySuit[id] = idx;
        const panelEl = effectiveRangeBtn.closest('.suit-weapons-panel');
        if (panelEl instanceof HTMLElement) {
          panelEl.innerHTML = renderWeaponsPanelInner(getSuitById(id));
        }
        syncCardRadarOverlay(id);
      }
      return;
    }

    const weaponSelectBtn = target.closest('.suit-weapon-select-btn');
    if (weaponSelectBtn) {
      const id = weaponSelectBtn.getAttribute('data-id');
      const idx = Number(weaponSelectBtn.getAttribute('data-weapon-idx'));
      if (id && Number.isInteger(idx)) {
        state.selectedWeaponBySuit[id] = idx;
        const panelEl = weaponSelectBtn.closest('.suit-weapons-panel');
        if (panelEl instanceof HTMLElement) {
          panelEl.innerHTML = renderWeaponsPanelInner(getSuitById(id));
        }
      }
      return;
    }

    if (target.closest('.suit-weapons-panel')) {
      return;
    }

    const inspectBtn = target.closest('.js-inspect');
    if (inspectBtn) {
      const id = inspectBtn.getAttribute('data-id');
      if (id) openSuitModal(id);
      return;
    }

    const compareBtn = target.closest('.js-compare');
    if (compareBtn) {
      const id = compareBtn.getAttribute('data-id');
      if (id && compareSelectB instanceof HTMLSelectElement) {
        state.compareB = id;
        compareSelectB.value = id;
        renderComparator();
        document.getElementById('comparator')?.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    const card = target.closest('.suit-card');
    if (card && !card.classList.contains('is-weapons-open')) {
      card.classList.toggle('is-flipped');
    }
  });

  compareSelectA?.addEventListener('change', (e) => {
    const target = e.target;
    if (target instanceof HTMLSelectElement) {
      state.compareA = target.value;
      hideRadarTooltip();
      renderComparator();
    }
  });

  compareSelectB?.addEventListener('change', (e) => {
    const target = e.target;
    if (target instanceof HTMLSelectElement) {
      state.compareB = target.value;
      hideRadarTooltip();
      renderComparator();
    }
  });

  if (radarCanvas instanceof HTMLCanvasElement) {
    radarCanvas.addEventListener('mousemove', (e) => {
      const axisIndex = getHoveredRadarAxis(e.clientX, e.clientY);
      if (axisIndex === null) {
        hideRadarTooltip();
        syncHeatmapHighlight(null);
        return;
      }

      if (state.hoveredAxisIndex !== axisIndex) {
        state.hoveredAxisIndex = axisIndex;
        drawRadarChart(getSuitById(state.compareA), getSuitById(state.compareB), axisIndex);
        syncHeatmapHighlight(axisIndex);
      }
      radarCanvas.classList.add('is-axis-hovered');
      showRadarTooltip(axisIndex, e.clientX, e.clientY);
    });

    radarCanvas.addEventListener('mouseleave', () => {
      hideRadarTooltip();
      syncHeatmapHighlight(null);
    });

    radarCanvas.addEventListener('click', (e) => {
      const axisIndex = getHoveredRadarAxis(e.clientX, e.clientY);
      if (axisIndex === null) {
        hideRadarTooltip();
        syncHeatmapHighlight(null);
        return;
      }
      state.hoveredAxisIndex = axisIndex;
      drawRadarChart(getSuitById(state.compareA), getSuitById(state.compareB), axisIndex);
      syncHeatmapHighlight(axisIndex);
      radarCanvas.classList.add('is-axis-hovered');
      showRadarTooltip(axisIndex, e.clientX, e.clientY);
    });
  }

  heatmapModeTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const mode = tab.getAttribute('data-heatmap-mode');
      state.heatmapMode = mode === 'spectrum' ? 'spectrum' : 'matrix';
      heatmapModeTabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-selected', String(active));
      });
      renderHeatmap(getSuitById(state.compareA), getSuitById(state.compareB));
    });
  });

  if (heatmapBody instanceof HTMLElement) {
    heatmapBody.addEventListener('mousemove', (e) => {
      const target = e.target;
      if (!(target instanceof HTMLElement)) return;
      const axisEl = target.closest('[data-axis-index]');
      const nextIndex = axisEl ? Number(axisEl.getAttribute('data-axis-index')) : null;
      if (state.hoveredAxisIndex !== nextIndex) {
        state.hoveredAxisIndex = nextIndex;
        drawRadarChart(getSuitById(state.compareA), getSuitById(state.compareB), nextIndex);
        syncHeatmapHighlight(nextIndex);
      }
    });

    heatmapBody.addEventListener('mouseleave', () => {
      if (state.hoveredAxisIndex !== null) {
        state.hoveredAxisIndex = null;
        drawRadarChart(getSuitById(state.compareA), getSuitById(state.compareB), null);
        syncHeatmapHighlight(null);
      }
    });
  }

  timelineTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      state.activeEra = tab.getAttribute('data-era') || '0079';
      timelineTabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-selected', String(active));
      });
      renderTimeline();
    });
  });

  // Modal Events
  modalCloseBtn?.addEventListener('click', closeSuitModal);
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeSuitModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && state.modalSuitId) {
      closeSuitModal();
    }
  });

  modalModeToggle?.addEventListener('click', () => {
    state.modalOverdrive = !state.modalOverdrive;
    renderModalContent();
  });

  modalArmaments?.addEventListener('click', (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement) || !state.modalSuitId) return;
    const btn = target.closest('.js-modal-effective-range');
    if (!btn) return;
    const idx = Number(btn.getAttribute('data-weapon-idx'));
    if (Number.isInteger(idx)) {
      if (state.modalRadarWeapons.has(idx)) {
        state.modalRadarWeapons.delete(idx);
      } else {
        state.modalRadarWeapons.add(idx);
      }
      syncModalRadarOverlay();
    }
  });

  modalRadarOverlay?.addEventListener('click', (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement) || !state.modalSuitId) return;
    const suit = getSuitById(state.modalSuitId);

    if (target.closest('.js-radar-all')) {
      if (state.modalRadarWeapons.size === suit.weaponProfiles.length) {
        state.modalRadarWeapons.clear();
      } else {
        suit.weaponProfiles.forEach((_, idx) => state.modalRadarWeapons.add(idx));
      }
      syncModalRadarOverlay();
      return;
    }

    if (target.closest('.js-radar-close')) {
      state.modalRadarWeapons.clear();
      syncModalRadarOverlay();
    }
  });

  scaleSelectA?.addEventListener('change', (e) => {
    const target = e.target;
    if (target instanceof HTMLSelectElement) {
      state.scaleA = target.value;
      renderScaleComparator();
    }
  });

  scaleSelectB?.addEventListener('change', (e) => {
    const target = e.target;
    if (target instanceof HTMLSelectElement) {
      state.scaleB = target.value;
      renderScaleComparator();
    }
  });

  scaleSwapBtn?.addEventListener('click', () => {
    const prevA = state.scaleA;
    state.scaleA = state.scaleB;
    state.scaleB = prevA;
    if (scaleSelectA instanceof HTMLSelectElement) scaleSelectA.value = state.scaleA;
    if (scaleSelectB instanceof HTMLSelectElement) scaleSelectB.value = state.scaleB;
    renderScaleComparator();
  });

  modalAssignA?.addEventListener('click', () => {
    if (!state.modalSuitId) return;
    state.compareA = state.modalSuitId;
    if (compareSelectA instanceof HTMLSelectElement) compareSelectA.value = state.compareA;
    renderComparator();
    closeSuitModal();
    document.getElementById('comparator')?.scrollIntoView({ behavior: 'smooth' });
  });

  modalAssignB?.addEventListener('click', () => {
    if (!state.modalSuitId) return;
    state.compareB = state.modalSuitId;
    if (compareSelectB instanceof HTMLSelectElement) compareSelectB.value = state.compareB;
    renderComparator();
    closeSuitModal();
    document.getElementById('comparator')?.scrollIntoView({ behavior: 'smooth' });
  });

  modalAssignScale?.addEventListener('click', () => {
    if (!state.modalSuitId) return;
    state.scaleA = state.modalSuitId;
    if (scaleSelectA instanceof HTMLSelectElement) scaleSelectA.value = state.scaleA;
    renderScaleComparator();
    closeSuitModal();
    document.getElementById('scale-comparator')?.scrollIntoView({ behavior: 'smooth' });
  });

  maintenanceSuitSelect?.addEventListener('change', (e) => {
    const target = e.target;
    if (target instanceof HTMLSelectElement) {
      state.maintenanceSuitId = target.value;
      renderMaintenance();
    }
  });

  maintenanceChecklist?.addEventListener('change', (e) => {
    const target = e.target;
    if (!(target instanceof HTMLInputElement)) return;
    const taskId = target.getAttribute('data-task-id');
    if (!taskId) return;
    const checks = getSuitMaintenanceState(state.maintenanceSuitId);
    checks[taskId] = target.checked;
    renderMaintenance();
  });

  maintenanceCheckAllBtn?.addEventListener('click', () => {
    const checks = getSuitMaintenanceState(state.maintenanceSuitId);
    MAINTENANCE_TASKS.forEach((task) => {
      checks[task.id] = true;
    });
    renderMaintenance();
  });

  const resetCurrentMaintenance = () => {
    state.maintenanceChecks[state.maintenanceSuitId] = {};
    delete state.maintenanceCompletedAt[state.maintenanceSuitId];
    renderMaintenance();
  };

  maintenanceResetBtn?.addEventListener('click', resetCurrentMaintenance);

  maintenanceReport?.addEventListener('click', (e) => {
    const target = e.target;
    if (target instanceof HTMLElement && target.closest('.js-report-reset')) {
      resetCurrentMaintenance();
    }
  });
}

function init() {
  document.querySelectorAll('.hero-figure img').forEach(bindImageFallback);
  populateScaleSelects();
  populateComparatorSelects();
  populateMaintenanceSelect();
  renderSuitGrid();
  renderScaleComparator();
  renderComparator();
  renderTimeline();
  renderMaintenance();
  bindEvents();
}

init();
