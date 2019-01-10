var express = require('express');
var router = express.Router();
const controller = require('../controller/UsersCt')
/* GET users listing. */
router.get('/login', controller.login);
router.get('/getUserInfo', controller.getUserInfo);
router.get('/search', controller.search);
router.post('/signin', controller.signin);
module.exports = router;
