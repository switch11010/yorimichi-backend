'use strict'
const dotenv = require('dotenv');


//const firebase = require('./firebase');
//const firestore = firebase.firestore();


dotenv.config();

// const {
//         TF_VERSION,
//         TF_VNET_ADDRESS_SPACE,

//     } = process.env;

const testTemplate = (req, res) =>{
    res.send("hello, world\n");
}

module.exports = {
    testTemplate
}
