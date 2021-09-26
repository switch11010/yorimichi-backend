const admin = require('firebase-admin');
// const functions = require('firebase-functions');
const ServiceAccount = require('./ServiceAccount.json');

admin.initializeApp({ credential: admin.credential.cert(ServiceAccount) });

const db = admin.firestore();

const yorimichiCoordList = [
  {
    name: 'BAR 新宿',
    coordinate: {ido: 35.687367, keido: 139.6940006},
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/bar.jpg',
    info: '美味しいお酒を提供します',
    category: 'bar',
    usecase: 00000,
  },
  {
    name: 'グランドマザーズ',
    coordinate: {ido: 35.6873676, keido: 139.694266},
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/bar2.jpg',
    info: 'お好みのカクテルをご提供します',
    category: 'bar',
    usecase: 00000,
  },
  {
    name: 'モーモーカレー',
    coordinate: {ido: 35.6876582, keido: 139.6932649},
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/curry6.jpg',
    info: '野菜たっぷりカレーがおすすめ',
    category: 'curry',
    usecase: 00000,
  },
  {
    name: 'ゴーゴーカフェ',
    coordinate: {ido: 35.6878927, keido: 139.6921849},
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/cafe12.jpg',
    info: 'コーヒーおかわり100円!!',
    category: 'cafe',
    usecase: 00000,
  },
  {
    name: '和食居酒屋 和',
    coordinate: {ido: 35.6871971, keido: 139.6929855},
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/tenpura.jpg',
    info: '天ぷらがおすすめ',
    category: 'japanese food',
    usecase: 00000,
  },
  {
    name: 'ぞうのハナ',
    coordinate: {ido: 35.6871971, keido: 139.6929855},
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/curry7.jpg',
    info: '定番のカレーに加えグリーンカレーも登場',
    category: 'curry',
    usecase: 00000,
  },
  {
    name: 'Cafe Time',
    coordinate: {ido: 35.6871971, keido: 139.6929855},
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/hotdog.jpg',
    info: '人気No1のホットドックが感謝セール中',
    category: 'cafe',
    usecase: 00000,
  },
  {
    name: "リラクゼーション新宿２号店",
    coordinate: {ido: 35.6880164, keido: 139.6930081},
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/massage.jpg',
    info: '圧倒的コスパで最高級のくつろぎを提供',
    category: 'relux',
    usecase: 00000,
  },
  {
    name: '新宿 びあーがーでん',
    coordinate: {ido: 35.6869183, keido: 139.6929063},
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/beergarden.jpeg',
    info: '開放感のある屋上で美味しいお酒を',
    category: 'sake',
    usecase: 00000,
  },
  {
    name: 'The Best Golf',
    coordinate: {ido: 35.6868189, keido: 139.6927562},
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/golf.jpeg',
    info: '誰よりも遠くへ飛ばすために',
    category: 'golf',
    usecase: 00000,
  },
  {
    name: 'Casual Bar',
    coordinate: {ido: 35.686549, keido: 139.692722},
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/bar3.jpg',
    info: '女性に人気のおしゃれカクテル多数',
    category: 'bar',
    usecase: 11111,
  },
  {
    name: 'Veg',
    coordinate: {ido: 35.6873378, keido: 139.693179},
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/curry2.jpg',
    info: '女性に人気のヘルシーカレー',
    category: 'curry',
    usecase: 11111,
  },
  {
    name: 'Flower',
    coordinate: {ido: 35.6873378, keido: 139.693179},
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/flowershop.jpg',
    info: '何気ない日常に季節の花を',
    category: 'flower shop',
    usecase: 11111,
  },
  {
    name: 'Ms. Doughnuts',
    coordinate: {ido: 35.6873378, keido: 139.693179},
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/doughnuts-1868573__340.jpg',
    info: '大人気の日替わりドーナツがおすすめ',
    category: 'doughnuts',
    usecase: 11111,
  },
  {
    name: 'Cafe Agri',
    coordinate: {ido: 35.6873438, keido: 139.6932216},
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/cafe5.jpg',
    info: '美味しい紅茶と相性抜群のケーキがおすすめ',
    category: 'cafe',
    usecase: 11111,
  },
  {
    name: 'Charme',
    coordinate: {ido: 35.6882655, keido: 139.6929686},
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/jerade.jpg',
    info: '濃厚な果汁が感じられるここでしか食べられないジェラート',
    category: 'cafe',
    usecase: 11111,
  },
  {
    name: 'Adorer',
    coordinate: {ido: 35.687983, keido: 139.6939593},
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/omurice.jpg',
    info: '期間限定！白いオムライス！',
    category: 'restrant',
    usecase: 11111,
  },
  {
    name: 'ガーデンカフェ',
    coordinate: {ido: 35.6875493, keido: 139.6954981},
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/pan.jpg',
    info: '広々としたテラスでくつろぎながらお食事を',
    category: 'cafe',
    usecase: 11111,
  },
  {
    name: 'ダイニング　いたりあ',
    coordinate: {ido: 35.6871812, keido: 139.6941245},
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/razania.jpg',
    info: '本場のペンネをどうぞ',
    category: 'italian',
    usecase: 11111,
  },
  {
    name: '新宿美術ギャラリー',
    coordinate: {ido: 35.6868245, keido: 139.695189},
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/spot7.jpg',
    info: '現代を代表する画家３名の個展開催中',
    category: 'art',
    usecase: 11111,
  },
  {
    name: 'Cafe MOMONOKI',
    coordinate: {ido: 35.6871971, keido: 139.6929855},
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/cafe10.jpg',
    info: 'ゆったりとした雰囲気が人気',
    category: 'cafe',
    usecase: 22222,
  },
  {
    name: 'Agri Coffee',
    coordinate: {ido: 35.6871971, keido: 139.6929855},
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/cafe13.jpg',
    info: 'wifiあり！小休憩におすすめ！',
    category: 'cafe',
    usecase: 22222,
  },
  {
    name: "Coffee Cake",
    coordinate: {ido: 35.6880164, keido: 139.6930081},
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/cafe2.jpg',
    info: 'コーヒーとケーキがおすすめ！',
    category: 'cafe',
    usecase: 22222,
  },
  {
    name: 'Move Coffee',
    coordinate: {ido: 35.6869183, keido: 139.6929063},
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/coffe.jpg',
    info: '全国各地を周っている移動カフェ',
    category: 'cafe',
    usecase: 22222,
  },
  {
    name: 'Curry! Curry!',
    coordinate: {ido: 35.6868189, keido: 139.6927562},
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/curry4.jpg',
    info: '若者に人気のカレー',
    category: 'curry',
    usecase: 22222,
  },
  {
    name: 'Reluxing cafe',
    coordinate: {ido: 35.686549, keido: 139.692722},
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/relux.jpg',
    info: '話題沸騰中の寝転びカフェ！',
    category: 'cafe',
    usecase: 22222,
  },
  {
    name: 'ミュージックカフェ',
    coordinate: {ido: 35.6873378, keido: 139.693179},
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/spot2.jpg',
    info: '落ち着いた音楽と美味しいコーヒー',
    category: 'cafe',
    usecase: 22222,
  },
  {
    name: '謎解きカフェ Why',
    coordinate: {ido: 35.6873378, keido: 139.693179},
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/spot6.jpg',
    info: '謎解きパーティー開催！！！',
    category: 'event',
    usecase: 22222,
  },
  {
    name: 'ホール Sta.',
    coordinate: {ido: 35.6873378, keido: 139.693179},
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/spot8.jpg',
    info: 'ここで集合！街コン開催します！',
    category: 'space',
    usecase: 22222,
  },
  {
    name: 'マック・ミュージックスタジオ',
    coordinate: {ido: 35.6873438, keido: 139.6932216},
    imagePath: 'gs://tinder-clone-mern-91837.appspot.com/spot9.jpg',
    info: 'ハウスミュージックで盛り上がろう！',
    category: 'music',
    usecase: 22222,
  },
  // {
  //   name: '',
  //   coordinate: {ido: , keido: },
  //   imagePath: './sample.jpeg',
  //   info: 'something to discribe a yorimichi',
  //   category: '',
  //   usecase: 0,
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