'use strict'
const dotenv = require('dotenv');


//const firebase = require('./firebase');
//const firestore = firebase.firestore();


dotenv.config();

// const {
//         TF_VERSION,
//         TF_VNET_ADDRESS_SPACE,

//     } = process.env;

const testTemplate = (req, res) => {
    res.send("hello, world\n");
}

const setDest = (req, res) => {
    
    //ここにDB処理
    
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

    const shops = JSON.stringify(testShops);
    res.json(shops);
}


module.exports = {
    testTemplate,
    setDest
}
