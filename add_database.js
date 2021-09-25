const admin = require('firebase-admin');
const functions = require('firebase-functions');
const ServiceAccount = require('./ServiceAccount.json');

admin.initializeApp({ credential: admin.credential.cert(ServiceAccount) });

const db = admin.firestore();

const shopCoordList = [
  {
    shopName: 'セブン-イレブン 西新宿新和ビル店',
    coordinate: {ido: 35.687367, keido: 139.6940006},
    imagePath: './sample.jpeg',
    info: 'something to discribe a shop',
  },
  {
    shopName: 'タヒチアンノニカフェ東京',
    coordinate: {ido: 35.6873676, keido: 139.694266},
    imagePath: './sample.jpeg',
    info: 'something to discribe a shop',
  },
  {
    shopName: 'すし屋銀蔵 新宿ＮＳビル店',
    coordinate: {ido: 35.6876582, keido: 139.6932649},
    imagePath: './sample.jpeg',
    info: 'something to discribe a shop',
  },
  {
    shopName: '東京都庁第二本庁舎職員食堂',
    coordinate: {ido: 35.6878927, keido: 139.6921849},
    imagePath: './sample.jpeg',
    info: 'something to discribe a shop',
  },
  {
    shopName: 'インド パキスタン料理 Khana',
    coordinate: {ido: 35.6871971, keido: 139.6929855},
    imagePath: './sample.jpeg',
    info: 'something to discribe a shop',
  },
  {
    shopName: 'じゃぽん 新宿ワシントンホテル店',
    coordinate: {ido: 35.6871971, keido: 139.6929855},
    imagePath: './sample.jpeg',
    info: 'something to discribe a shop',
  },
  {
    shopName: 'Capricciosa',
    coordinate: {ido: 35.6871971, keido: 139.6929855},
    imagePath: './sample.jpeg',
    info: 'something to discribe a shop',
  },
  {
    shopName: "TULLY'S COFFEE",
    coordinate: {ido: 35.6880164, keido: 139.6930081},
    imagePath: './sample.jpeg',
    info: 'something to discribe a shop',
  },
  {
    shopName: '釣船茶屋 ざうお 新宿店',
    coordinate: {ido: 35.6869183, keido: 139.6929063},
    imagePath: './sample.jpeg',
    info: 'something to discribe a shop',
  },
  {
    shopName: 'La vie en rose',
    coordinate: {ido: 35.6868189, keido: 139.6927562},
    imagePath: './sample.jpeg',
    info: 'something to discribe a shop',
  },
  {
    shopName: 'すし 岩瀬',
    coordinate: {ido: 35.686549, keido: 139.692722},
    imagePath: './sample.jpeg',
    info: 'something to discribe a shop',
  },
  // {
  //   shopName: '',
  //   coordinate: {ido: , keido: },
  //   imagePath: './sample.jpeg',
  //   info: 'something to discribe a shop',
  // },
]

shopCoordList.map(shopCoord => {
  const docRef = db.collection('shops').doc();
  const setShop = docRef.set(shopCoord);
});
