
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