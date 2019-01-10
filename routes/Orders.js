const express = require('express');
const router = express.Router();
const controller = require('../controller/OrdersCt')

router.get('/detail', controller.getOrders)
module.exports = router;
