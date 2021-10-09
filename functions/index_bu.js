// index.js
const functions = require("firebase-functions");
// Expressの読み込み
const express = require('express');
const axios = require('axios'); 
const bodyParser = require('body-parser');
//const config = require('../config')
//
const admin = require('firebase-admin')
admin.initializeApp()

//const routes = require('../route');

const app = express();
app.use(bodyParser.json);
app.use(express.json());

const db = admin.firestore();

const test_shop = async (url) => {
  try { 
    const config = {
      method: 'get',
      url: url,
      headers: {'Content-Type' : 'text/plain;charset=utf-8' }
    };
        const response = await axios(config) 
    //console.log(response.data)
    return response.data
    } catch (error) { 
        console.log(error.response.body); 
      return error.response.body
    } 
}

const test_image = async(url) => {
  try{
    const config = {
      method: 'get',
      responseType: "arraybuffer",
      url: url,
      headers: {'Content-Type' : 'image/jpeg' }
    };
    const response = await axios(config) 
    const base64Encoded = response.data.toString('base64');
    return base64Encoded;

  }catch(error){
    console.log(error.response.body);
    return error.response.body

  }

};



app.post("/swipe", async (req, res, next) => {
  try{
    // userid, shopid, result
        const data = req.body;
        data["timestamp"] = Date.now()
    console.log(data);
    await firestore.collection('swipe').doc().set(data);
    res.send('Record saved successfuly');

  }catch (error){
    res.status(400).send(error.message);

  }

})

app.post("/location",  async (req, res, next) => {
  try{
    // userid, lat, lng 
        const data = req.body;
        data["timestamp"] = Date.now()
    console.log(data);
    await firestore.collection('location').doc().set(data);
    res.send('Record saved successfuly');

  }catch (error){
    res.status(400).send(error.message);

  }

})

app.post("/destination",  async (req, res, next) => {
  try{
    // userid, lat, lng 
        const data = req.body;
        data["timestamp"] = Date.now()
    console.log(data);
    await firestore.collection('destination').doc().set(data);
    res.send('Record saved successfuly');

  }catch (error){
    res.status(400).send(error.message);

  }

})


app.get("/hello", (req, res) => {
  // レスポンスの設定
  try{
    res.send("Hello Express!");

  }catch(error){
    res.status(400).send(error.message);
  }
});


app.get("/getShop", async (req, res) => {
  var url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyDejxy3rs8ZhDyinwSrXsbXGIfo8C79gK4';

  try{
    const lat = req.query.lat;
    const lng = req.query.lng;
    const radius = req.query.radius;
    const keyword = req.query.keyword;
    console.log(lat);
    console.log(lng);
    console.log(radius);
    console.log(keyword);
    url += `&location=${lat},${lng}&radius=${radius}&language=ja&keyword=`;
    url += encodeURIComponent(keyword);
    console.log(url);

    const data = await test_shop(url); 
    console.log(data);

    tmp_list = [];
    tmp_res = {};

    data.results.forEach((shop) => {
      tmp = {}
      tmp["name"] = shop.name;
      tmp["open_now"] = shop.opening_hours?.open_now;
      //tmp["photo_ref"] = shop.photos?.first().photo_reference;
      if(shop.photos){
        tmp["photo_ref"] = shop.photos[0].photo_reference;

      }
      tmp["id"] = shop.place_id;
      tmp["price_level"] = shop.price_level;
      tmp["vicinity"] = shop.vicinity;
      tmp["user_ratings_total"] = shop.user_ratings_total;
      tmp["rating"] = shop.rating;
      tmp["lat"] = shop["geometry"]["location"]["lat"]
      tmp["lng"] = shop["geometry"]["location"]["lng"]
      tmp["id"] = shop["place_id"]

      tmp_list.push(tmp);
    })

    //tmp_res["results"] = tmp_list;
    console.log("======================");
    res.send(tmp_list);

  }catch(error){
    res.status(404).send(error.message);

  }

});

app.get("/getImage", async (req, res) => {
  var url = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&key=AIzaSyDejxy3rs8ZhDyinwSrXsbXGIfo8C79gK4';

  try{

    const reference = req.query.reference;
    url += `&photo_reference=${reference}`;
    console.log(url);

    const data = await test_image(url); 

    res.send(data);

  }catch(error){
    res.status(404).send(error.message);

  }

});

// 出力


//app.use('/api', routes.routes);

//app.listen(config.port, () => console.log('APP is listening on port http://localhost:' + config.port));

const api = functions.https.onRequest(app);
module.exports = { api };
