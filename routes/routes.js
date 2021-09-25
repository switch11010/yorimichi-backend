const express = require('express');
// const {testTemplate, setDest, setYrmc, getShops} = require('../template');
const {setDest, setYrmc} = require('../template');

const router = express.Router();

// example code
// router.get('/test', testTemplate);
// router.get('/shops', getShops);

router.post('/setDest', setDest);
router.post('/setYrmc', setYrmc);

// router.get('/start_cluster/:cluster_id', startCluster);
// router.get('/stop_cluster/:cluster_id', stopCluster);
// router.get('/restart_cluster/:cluster_id', restartCluster);
// router.get('/refresh_cluster/:cluster_id', refreshCluster);

module.exports = {
  routes: router
}