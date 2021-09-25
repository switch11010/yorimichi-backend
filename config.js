'use strict'

const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {PORT, HOST, HOST_URL,
        // FB_API_KEY,
        // FB_AUTH_DOMAIN,
        // FB_DBURL,
        // FB_PROJECTID,
        // FB_STORAGE_BUCKET,
        // FB_MESSAGE_SENDER_ID,
        // FB_APP_ID,
        // FB_MEASUREMENT_ID,
      } = process.env;


assert (PORT);
assert (HOST);

// const firebaseConfig = {
//     apiKey: FB_API_KEY,
//     authDomain: FB_AUTH_DOMAIN,
//     databaseURL: FB_DBURL,
//     projectId: FB_PROJECTID,
//     storageBucket: FB_STORAGE_BUCKET,
//     messagingSenderId: FB_MESSAGE_SENDER_ID,
//     appId: FB_APP_ID,
//     measurementId: FB_MEASUREMENT_ID,
//   };

module.exports = {
  port:PORT,
  host:HOST,
  url:HOST_URL,
  //firebaseConfig: firebaseConfig


}
