var express = require('express');
var router = express.Router();

//Require Controllers Module
var homeController = require('../controllers/homeController');

/* GET home page. */
router.get('/', homeController.index);
router.get('/signup', homeController.signup);
module.exports = router;
