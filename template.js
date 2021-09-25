'use strict'
const dotenv = require('dotenv');
const ServiceAccount = require('./ServiceAccount.json');
const admin = require('firebase-admin');
const {Storage} = require('@google-cloud/storage');
//const functions = require('firebase-functions');

// Firebaseのinitialize
const app = admin.initializeApp({ 
    credential: admin.credential.cert(ServiceAccount),
    storageBucket:  "yorimichi-ffd7b.appspot.com" 
});

// Firestoreの参照を取得
const db = app.firestore();
const docRef = db.collection('shops');
const bucket = admin.storage().bucket();

dotenv.config();

const testShops = [
    {
        "coodinate":{
            "X":"100",
            "Y":"100"
        },
        "image":"path/path",
        "info":"Agri metal test",
        "shop":"Agri metal"
    },
    {
        "coodinate":{
            "X":"100",
            "Y":"100"
        },
        "image":"path/path",
        "info":"Agri metal test",
        "shop":"Agri metal"
    }
]           


const testTemplate = (req, res) => {
    res.send("hello, world\n");
}

const testStorage = async (req, res) => {
    //download
    // const files = await bucket.getFiles();
    // files[0].forEach((file) => {
    //     const filePath = `${file.name}`;
    //     console.log(filePath);
    //     file.download({destination: filePath});
    // });
    //upload
    // const files = await fs.readdirSync('');
    // files.forEach((file) => {
    //     const filePath = `${file}`;
    //     console.log(filePath);
    //     bucket.upload(filePath);
    // });
    res.send("true\n")
}

const testDB = async (req, res) => {
    const snapshots = await docRef.get();
    // レスポンスからデータ部分のみ取り出す
    const messages = snapshots.docs.map(doc => doc.data());
    res.send(messages);
}

const setDest = (req, res) => {
    
    //ここにDB処理

    const shops = JSON.stringify(testShops);
    res.json(shops);
}

const setYrmc = (req, res) => {
    
    //ここにDB処理

    res.send("true");
}

module.exports = {
    testTemplate,
    testStorage,
    testDB,
    setDest,
    setYrmc
}
