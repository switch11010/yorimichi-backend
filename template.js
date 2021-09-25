'use strict'
const dotenv = require('dotenv');


//const firebase = require('./firebase');
//const firestore = firebase.firestore();


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
    setDest,
    setYrmc
}
