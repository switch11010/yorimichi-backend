const admin = require('firebase-admin');
const functions = require('firebase-functions');
const ServiceAccount = require('./ServiceAccount.json');

admin.initializeApp({ credential: admin.credential.cert(ServiceAccount) });

const db = admin.firestore();

const yorimichiCoordList = [
  {
    name: 'セブン-イレブン 西新宿新和ビル店',
    coordinate: {ido: 35.687367, keido: 139.6940006},
    imagePath: './sample.jpeg',
    info: 'something to discribe a yorimichi',
    category: '',
  },
  {
    name: 'タヒチアンノニカフェ東京',
    coordinate: {ido: 35.6873676, keido: 139.694266},
    imagePath: './sample.jpeg',
    info: 'something to discribe a yorimichi',
    category: '',
  },
  {
    name: 'すし屋銀蔵 新宿ＮＳビル店',
    coordinate: {ido: 35.6876582, keido: 139.6932649},
    imagePath: './sample.jpeg',
    info: 'something to discribe a yorimichi',
    category: '',
  },
  {
    name: '東京都庁第二本庁舎職員食堂',
    coordinate: {ido: 35.6878927, keido: 139.6921849},
    imagePath: './sample.jpeg',
    info: 'something to discribe a yorimichi',
    category: '',
  },
  {
    name: 'インド パキスタン料理 Khana',
    coordinate: {ido: 35.6871971, keido: 139.6929855},
    imagePath: './sample.jpeg',
    info: 'something to discribe a yorimichi',
    category: '',
  },
  {
    name: 'じゃぽん 新宿ワシントンホテル店',
    coordinate: {ido: 35.6871971, keido: 139.6929855},
    imagePath: './sample.jpeg',
    info: 'something to discribe a yorimichi',
    category: '',
  },
  {
    name: 'Capricciosa',
    coordinate: {ido: 35.6871971, keido: 139.6929855},
    imagePath: './sample.jpeg',
    info: 'something to discribe a yorimichi',
    category: '',
  },
  {
    name: "TULLY'S COFFEE",
    coordinate: {ido: 35.6880164, keido: 139.6930081},
    imagePath: './sample.jpeg',
    info: 'something to discribe a yorimichi',
    category: '',
  },
  {
    name: '釣船茶屋 ざうお 新宿店',
    coordinate: {ido: 35.6869183, keido: 139.6929063},
    imagePath: './sample.jpeg',
    info: 'something to discribe a yorimichi',
    category: '',
  },
  {
    name: 'La vie en rose',
    coordinate: {ido: 35.6868189, keido: 139.6927562},
    imagePath: './sample.jpeg',
    info: 'something to discribe a yorimichi',
    category: '',
  },
  {
    name: 'すし 岩瀬',
    coordinate: {ido: 35.686549, keido: 139.692722},
    imagePath: './sample.jpeg',
    info: 'something to discribe a yorimichi',
    category: '',
  },
  // {
  //   name: '',
  //   coordinate: {ido: , keido: },
  //   imagePath: './sample.jpeg',
  //   info: 'something to discribe a yorimichi',
  // },
]

yorimichiCoordList.map(yorimichiCoord => {
  const docRef = db.collection('yorimichis').doc();
  const setYorimichi = docRef.set(yorimichiCoord);
});
