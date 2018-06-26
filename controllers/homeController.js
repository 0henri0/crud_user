var mongoose = require('../models/database');
exports.index = function(req, res, next){
			res.render('display/homepage',{
			title: 'Trang chủ',
			
		});
}

exports.signup = function(req, res, next){
			res.render('display/signup',{
			title: 'đăng ký',
			
		});
}

exports.them = function(req, res, next){


	mongoose.find().then(function(document){
	 		res.render('admin/user/list',{
			title: 'Trang chủ',
			user: document
		});
	});
			
}

user.create([
//   { 
//   email: "String",
//   firstname: "String",
//   lastname: "String",
//   password: "String",
//   address:"String",
//   urlanh:"String"},
//   {
//     email: "String",
//   firstname: "String",
//   lastname: "String",
//   password: "String",
//   address:"String",
//   urlanh:"String"
//   }
//   ])