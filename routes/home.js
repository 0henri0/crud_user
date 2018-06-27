var express = require('express');
var router = express.Router();

//Require Controllers Module
var homeController = require('../controllers/homeController');

/* GET home page. */
router.post('/', homeController.signup) 
router.get('/', homeController.index);
router.get('/signup', homeController.signup);
router.get('/xoa/:id', homeController.xoa);
router.get('/sua/:id', homeController.getsua);
router.post('/sua/:id', homeController.postsua);

router.get('/them', homeController.getthem);
router.post('/them', homeController.postthem);
module.exports = router;
