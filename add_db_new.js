const admin = require('firebase-admin');
// const functions = require('firebase-functions');
const ServiceAccount = require('./ServiceAccount.json');

admin.initializeApp({ credential: admin.credential.cert(ServiceAccount) });

const db = admin.firestore();

const yorimichiCoordList = [
  {
    name: 'BAR 新宿',
    coordinate: {ido: 35.332821, keido: 139.384954}, // ok
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/bar.jpg',
    info: '美味しいお酒を提供します',
    category: 'bar',
    uId: 'W5XBESjbWDaKrM4aXXKTwEL77wg2',
  },
  {
    name: 'グランドマザーズ',
    coordinate: {ido: 35.332135, keido: 139.387418}, // ok
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/bar2.jpg',
    info: 'お好みのカクテルをご提供します',
    category: 'bar',
    uId: 'W5XBESjbWDaKrM4aXXKTwEL77wg2',
  },
  {
    name: 'モーモーカレー',
    coordinate: {ido: 35.331610, keido: 139.389526}, // ok
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/curry6.jpg',
    info: '野菜たっぷりカレーがおすすめ',
    category: 'curry',
    uId: 'W5XBESjbWDaKrM4aXXKTwEL77wg2',
  },
  {
    name: 'ゴーゴーカフェ',
    coordinate: {ido: 35.331375, keido: 139.395052},//
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/cafe12.jpg',
    info: 'コーヒーおかわり100円!!',
    category: 'cafe',
    uId: 'W5XBESjbWDaKrM4aXXKTwEL77wg2',
  },
  {
    name: '和食居酒屋 和',
    coordinate: {ido: 35.334563, keido: 139.406241},//
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/tenpura.jpg',
    info: '天ぷらがおすすめ',
    category: 'japanese food',
    uId: 'W5XBESjbWDaKrM4aXXKTwEL77wg2',
  },
  {
    name: 'ぞうのハナ',
    coordinate: {ido: 35.336340, keido: 139.408297},//
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/curry7.jpg',
    info: '定番のカレーに加えグリーンカレーも登場',
    category: 'curry',
    uId: 'W5XBESjbWDaKrM4aXXKTwEL77wg2',
  },
  {
    name: 'Cafe Time',
    coordinate: {ido: 35.335885, keido: 139.412042},//
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/hotdog.jpg',
    info: '人気No1のホットドックが感謝セール中',
    category: 'cafe',
    uId: 'W5XBESjbWDaKrM4aXXKTwEL77wg2',
  },
  {
    name: "リラクゼーション新宿２号店",
    coordinate: {ido: 35.336323, keido: 139.413726},//
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/massage.jpg',
    info: '圧倒的コスパで最高級のくつろぎを提供',
    category: 'relux',
    uId: 'W5XBESjbWDaKrM4aXXKTwEL77wg2',
  },
  {
    name: '新宿 びあーがーでん',
    coordinate: {ido: 35.332164975731075, keido: 139.4082669638034},//
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/beergarden.jpeg',
    info: '開放感のある屋上で美味しいお酒を',
    category: 'sake',
    uId: 'W5XBESjbWDaKrM4aXXKTwEL77wg2',
  },
  {
    name: 'The Best Golf',
    coordinate: {ido: 35.334862114024645, keido: 139.4096645072751},//
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/golf.jpeg',
    info: '誰よりも遠くへ飛ばすために',
    category: 'golf',
    uId: 'W5XBESjbWDaKrM4aXXKTwEL77wg2',
  },
  {
    name: 'Casual Bar',
    coordinate: {ido: 35.33577248423458, keido: 139.40910131811486},//
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/bar3.jpg',
    info: '女性に人気のおしゃれカクテル多数',
    category: 'bar',
    uId: 'TuPgeZ17PDaqhh1gBqkntaoT7Jg2',
  },
  {
    name: 'Veg',
    coordinate: {ido: 35.34013394345601, keido: 139.39322490351},//
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/curry2.jpg',
    info: '女性に人気のヘルシーカレー',
    category: 'curry',
    uId: 'TuPgeZ17PDaqhh1gBqkntaoT7Jg2',
  },
  {
    name: 'Flower',
    coordinate: {ido: 35.34993873742974, keido: 139.38964790593553},//
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/flowershop.jpg',
    info: '何気ない日常に季節の花を',
    category: 'flower shop',
    uId: 'TuPgeZ17PDaqhh1gBqkntaoT7Jg2',
  },
  {
    name: 'Ms. Doughnuts',
    coordinate: {ido: 35.34357729142503, keido: 139.39358530764773},//
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/doughnuts-1868573__340.jpg',
    info: '大人気の日替わりドーナツがおすすめ',
    category: 'doughnuts',
    uId: 'TuPgeZ17PDaqhh1gBqkntaoT7Jg2',
  },
  {
    name: 'Cafe Agri',
    coordinate: {ido: 35.3432684706174, keido: 139.40274733855497},//
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/cafe5.jpg',
    info: '美味しい紅茶と相性抜群のケーキがおすすめ',
    category: 'cafe',
    uId: 'TuPgeZ17PDaqhh1gBqkntaoT7Jg2',
  },
  {
    name: 'Charme',
    coordinate: {ido: 35.32764059680388, keido: 139.38593766201444},//
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/jerade.jpg',
    info: '濃厚な果汁が感じられるここでしか食べられないジェラート',
    category: 'cafe',
    uId: 'TuPgeZ17PDaqhh1gBqkntaoT7Jg2',
  },
  {
    name: 'Adorer',
    coordinate: {ido: 35.329370312584096, keido: 139.42258578564338},//
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/omurice.jpg',
    info: '期間限定！白いオムライス！',
    category: 'restrant',
    uId: 'TuPgeZ17PDaqhh1gBqkntaoT7Jg2',
  },
  {
    name: 'ガーデンカフェ',
    coordinate: {ido: 35.317199740727986, keido: 139.4142566666368},//
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/pan.jpg',
    info: '広々としたテラスでくつろぎながらお食事を',
    category: 'cafe',
    uId: 'TuPgeZ17PDaqhh1gBqkntaoT7Jg2',
  },
  {
    name: 'ダイニング いたりあ',
    coordinate: {ido: 35.33072934901755, keido: 139.42175287374272},//
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/razania.jpg',
    info: '本場のペンネをどうぞ',
    category: 'italian',
    uId: 'TuPgeZ17PDaqhh1gBqkntaoT7Jg2',
  },
  {
    name: '新宿美術ギャラリー',
    coordinate: {ido: 35.342774354869896, keido: 139.4038831275104},//
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/spot7.jpg',
    info: '現代を代表する画家３名の個展開催中',
    category: 'art',
    uId: 'TuPgeZ17PDaqhh1gBqkntaoT7Jg2',
  },
  {
    name: 'Cafe MOMONOKI',
    coordinate: {ido: 35.31695260354134, keido: 139.39562972776756},//
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/cafe10.jpg',
    info: 'ゆったりとした雰囲気が人気',
    category: 'cafe',
    uId: '2Oyp8kXmJtZ5w0t17g2rc5f49ut1',
  },
  {
    name: 'Agri Coffee',
    coordinate: {ido: 35.336340, keido: 139.408297},//
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/cafe13.jpg',
    info: 'wifiあり！小休憩におすすめ！',
    category: 'cafe',
    uId: '2Oyp8kXmJtZ5w0t17g2rc5f49ut1',
  },
  {
    name: "Coffee Cake",
    coordinate: {ido: 35.335885, keido: 139.412042},//
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/cafe2.jpg',
    info: 'コーヒーとケーキがおすすめ！',
    category: 'cafe',
    uId: '2Oyp8kXmJtZ5w0t17g2rc5f49ut1',
  },
  {
    name: 'Move Coffee',
    coordinate: {ido: 35.336323, keido: 139.413726},//
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/coffe.jpg',
    info: '全国各地を周っている移動カフェ',
    category: 'cafe',
    uId: '2Oyp8kXmJtZ5w0t17g2rc5f49ut1',
  },
  {
    name: 'Curry! Curry!',
    coordinate: {ido: 35.332164975731075, keido: 139.4082669638034},//
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/curry4.jpg',
    info: '若者に人気のカレー',
    category: 'curry',
    uId: '2Oyp8kXmJtZ5w0t17g2rc5f49ut1',
  },
  {
    name: 'Reluxing cafe',
    coordinate: {ido: 35.334862114024645, keido: 139.4096645072751},//
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/relux.jpg',
    info: '話題沸騰中の寝転びカフェ！',
    category: 'cafe',
    uId: '2Oyp8kXmJtZ5w0t17g2rc5f49ut1',
  },
  {
    name: 'ミュージックカフェ',
    coordinate: {ido: 35.334862114024645, keido: 139.4096645072751},//
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/spot2.jpg',
    info: '落ち着いた音楽と美味しいコーヒー',
    category: 'cafe',
    uId: '2Oyp8kXmJtZ5w0t17g2rc5f49ut1',
  },
  {
    name: '謎解きカフェ Why',
    coordinate: {ido: 35.33577248423458, keido: 139.40910131811486},//
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/spot6.jpg',
    info: '謎解きパーティー開催！！！',
    category: 'event',
    uId: '2Oyp8kXmJtZ5w0t17g2rc5f49ut1',
  },
  {
    name: 'ホール Sta.',
    coordinate: {ido: 35.34013394345601, keido: 139.39322490351},//
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/spot8.jpg',
    info: 'ここで集合！街コン開催します！',
    category: 'space',
    uId: '2Oyp8kXmJtZ5w0t17g2rc5f49ut1',
  },
  {
    name: 'マック・ミュージックスタジオ',
    coordinate: {ido: 35.34993873742974, keido: 139.38964790593553},//
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/spot9.jpg',
    info: 'ハウスミュージックで盛り上がろう！',
    category: 'music',
    uId: '2Oyp8kXmJtZ5w0t17g2rc5f49ut1',
  },
  // {
  //   name: '',
  //   coordinate: {ido: , keido: },
  //   imagePath: './sample.jpeg',
  //   info: 'something to discribe a yorimichi',
  //   category: '',
  //   uId: 0,
  // },
]

const userList = [
  {
    FirstName: 'リーマン',
    LastName: '田中',
    sex: 0,
    age: 35,
    attribute: 0,
  },
  {
    FirstName: '主婦',
    LastName: '田中',
    sex: 1,
    age: 30,
    attribute: 1,
  },
  {
    FirstName: 'アクティブな女子大生',
    LastName: '田中',
    sex: 1,
    age: 20,
    attribute: 2,
  },
]

const scoreList = {
  user0: [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30], user1: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30], 
  user2: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80]
};

userIdObj = {};
uL = ["user0", "user1", "user2"];
userList.map((user, idx) => {
  const docRef = db.collection('users').doc();
  userIdObj[uL[idx]] = docRef.id;
  const setUser = docRef.set(user);
});

yorimichiCoordList.map((yorimichiCoord, idx) => {
  const docRef_y = db.collection('yorimichis').doc();
  const setYorimichi = docRef_y.set(yorimichiCoord);
  uL.map(u => {
    const docRef_s = db.collection('scores').doc();
    const setScores = docRef_s.set({
      userId: userIdObj[u],
      yorimichiId: docRef_y.id,
      score: scoreList[u][idx],
    });
  });
});
