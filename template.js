'use strict'
const dotenv = require('dotenv');

const admin = require('firebase-admin');
// const functions = require('firebase-functions');
const ServiceAccount = require('./ServiceAccount.json');
const { calcIdoKeido } = require('./ido_keido');

// Firebaseのinitialize
admin.initializeApp({ credential: admin.credential.cert(ServiceAccount) });

// Firestoreの参照を取得
const db = admin.firestore();
const docRef_users = db.collection('users')
const docRef_shops = db.collection('shops')
const docRef_yrmcs = db.collection('yrmcs')
// const docRef_dests = db.collection('dests')

dotenv.config();

const thDistance = 500

const shuffle = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const testTemplate = (req, res) => {
    res.send("hello, world\n");
}

const getShops = async (req, res) => {
    // shopsコレクションのデータを全量取得
    const snapshots = await docRef_shops.get();
    // レスポンスからデータ部分のみ取り出す
    const shops = snapshots.docs.map(doc => doc.data());
    res.send(shops);
}

const setDest = async (req, res) => {
    const dest = {
        currentLoc: req.body.currentLoc,  // {X: 100, Y:100}
        destination: req.body.destination, // {X: 10, Y:10}
        // timestamp: admin.firestore.FieldValue.serverTimestamp(), // このように書くとtimestampも保存できる
    };
    // await docRef_dests.add(dest)

    // calc 
    const i0 = dest.currentLoc.X;
    const k0 = dest.currentLoc.Y;
    const i1 = dest.destination.X;
    const k1 = dest.destination.Y;
    const xy = calcIdoKeido(i0, k0, i1, k1, thDistance);
    const x1 = Math.min(xy[0], xy[2]);
    const y1 = Math.min(xy[1], xy[3]);
    const x2 = Math.max(xy[0], xy[2]);
    const y2 = Math.max(xy[1], xy[3]);
    console.log(xy);

    const snapshots = await docRef_shops.where('coordinate.X', '>=', x1).get();
    // const snapshots = await docRef_shops.where('coordinate.X', '>=', x1).where('coordinate.X', '<=', x2).where('coordinate.Y', '>=', y1).where('coordinate.Y', '<=', y2).get();
    var shops = snapshots.docs.map(doc => doc.data());
    shops = shops.map(shop => {
        const x = shop.coordinate.X;
        const y = shop.coordinate.Y;
        if ((x <= x2) && (y >= y1) && (y <= y2)) {
            return shop;
        }
    })
    console.log(shops);
    const shuffleShops = shuffle(shops);
    const randomShops = shuffleShops.slice(0,10);
    res.send(randomShops);
}

const setYrmc = async (req, res) => {
    const yrmc = {
        yrmcList: req.body.yrmcList,
        user_id: '',
    }
    await docRef_yrmcs.add(yrmc);
    res.send("success!!!")
}

module.exports = {
    testTemplate,
    setDest,
    setYrmc,
    getShops,
}
