'use strict'
const dotenv = require('dotenv');

const ServiceAccount = require('./ServiceAccount.json');

// Firebaseのinitialize
admin.initializeApp({ credential: admin.credential.cert(ServiceAccount) });
// Firestoreの参照を取得
const db = admin.firestore();
const docRef = db.collection('shops');

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

const testStarge = (req, res) => {
    
    res.send("true");
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
    testStarge,
    setDest,
    setYrmc
}
