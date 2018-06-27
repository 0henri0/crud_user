var mongoose = require('../models/database');

exports.index = function(req, res, next){
	mongoose.find().then(function(document){
	 	res.render('admin/user/list',{
			title: 'Trang chủ',
			user: document
		});
	});
}

