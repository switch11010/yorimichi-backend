const express = require('express');
const {testTemplate, setDest} = require('../template');

const router = express.Router();

router.get('/test', testTemplate);
router.get('/setDest', setDest);
// router.get('/list_cluster/:user_id', listCluster);
// router.get('/start_cluster/:cluster_id', startCluster);
// router.get('/stop_cluster/:cluster_id', stopCluster);
// router.get('/restart_cluster/:cluster_id', restartCluster);
// router.get('/refresh_cluster/:cluster_id', refreshCluster);

module.exports = {
  routes: router
}
