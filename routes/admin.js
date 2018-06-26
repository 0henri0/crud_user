var express = require('express');
var router = express.Router();

//Require Controllers Module
var adminController = require('../controllers/adminController');

/* GET home page. */
router.get('/', adminController.index);

module.exports = router;
