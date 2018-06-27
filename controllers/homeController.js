var mongoose = require('../models/database');
const multer = require('multer');
const Router = require('express')
const router = new Router()
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: true })
router.use(bodyParser.urlencoded({ extended: true }))


	
	 
var storage =   multer.diskStorage({
 destination: './public/Uploads/Images/',
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now()+".jpg");
  }
});

// Init Upload
const upload = multer({ storage : storage }).single('Images');


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
exports.xoa = function(req, res, next){
	 var id = req.params.id+ "";
	
    mongoose.findByIdAndRemove(id, function (err) {});
    console.log(id)
	res.redirect('../admin');
	
}
exports.getsua = function(req, res, next){
	
	 res.render('admin/user/edit',{
			title: 'đăng ký',
			id : req.params.id
		});
	
}

exports.postsua = function(req, res, next){
	var id = req.params.id+ "";
	 upload(req, res, function(err){
//--------------------------------------------------------------------------
	 		//tạo 1 chuỗi string để covert sang json trong đó chứa các dữ liệu cần sửa 
            var jsontxt="";
			if(req.body.email){
				jsontxt = jsontxt+ '\"'+"email\""+ ':'+ '\"'+req.body.email+ '\"'
			}
	        if(req.body.lastname){
				jsontxt = jsontxt+ ','+"\"lastname\""+ ':'+ '\"'+ req.body.lastname+ '\"'
			}
			if(req.body.firstname){
				jsontxt = jsontxt+ ','+"\"firstname\""+ ':'+ '\"'+ req.body.firstname+ '\"'
			}
			if(req.body.password){
				jsontxt = jsontxt+ ','+"\"password\""+ ':'+ '\"'+  req.body.password+ '\"'
			}
			if(req.body.address){
				jsontxt = jsontxt+ ','+"\"address\""+ ':'+ '\"'+  req.body.address+ '\"'
			}
			if(req.body.Points){
				jsontxt =jsontxt+ ','+"\"Points\""+ ':'+ '\"'+ req.body.Points+ '\"'
			}
			if(req.body.Status){
				jsontxt =jsontxt+ ','+"\"Status\""+ ':'+ '\"'+ req.body.Status+ '\"'
			}
			if(req.body.roll){
				jsontxt =jsontxt+ ','+"\"roll\""+ ':'+ '\"'+ req.body.roll+ '\"'
			}
			if(req.file){
				console.log(req.file.filename)
				jsontxt =jsontxt+',' + "\"urlanh\""+ ':'+ '\"'+ req.file.filename+ '\"'
			}
//--------------------------------------------------------------------------
			//xử lý chuỗi string covert sang json
			if(jsontxt[0]==','){
				var array = jsontxt.split(",")
				array.splice(0,1);
				array.toString()
			}else{
				var array = jsontxt;
			}
			array= "{"+array+"}"
			console.log(array)
			var obj = JSON.parse(array);
//----------------------------------------------------------------------			
			//tìm id và sửa bằng file json
            mongoose.findByIdAndUpdate( req.params.id ,obj,{new: true}).then(console.log(123));
				res.redirect('../admin');
        //     }
         });
};


exports.getthem = function(req, res, next){
	
	 res.render('admin/user/add',{
			title: 'thêm tài khoản',
		});
	
}

exports.postthem = function(req, res, next){

	  upload(req, res, function(err){
	  		console.log(req.file.filename)
                const email = req.body.email;
                const lastname = req.body.lastname;
                const firstname = req.body.firstname;
                const password = req.body.password;
                const address = req.body.address;
                const Points = req.body.Points;
                const Status =  req.body.Status;
                const roll = req.body.roll;
                const urlanh = req.file.filename;
                const date = new Date()
               const time = date.toLocaleDateString();
                mongoose.create({
	 				email : email,
	 				firstname : firstname,
				 	address : address,
				 	lastname : lastname,
				 	password : password,
				 	address : address,
				 	Points : Points,
				 	Status : Status,
				 	roll : roll,
				 	urlanh: urlanh,
				 	created_on : time }).then(console.log("thêm thành công"))
				res.redirect('../admin');
        //     }
         });
    };

