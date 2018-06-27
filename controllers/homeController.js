var mongoose = require('../models/database');
const multer = require('multer');
const Router = require('express')
const router = new Router()
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: true })
router.use(bodyParser.urlencoded({ extended: true }))



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
	console.log(req.body.email);
	const tieude = req.body.tieude;
    const email = req.body.email;
    const lastname = req.body.lastname;
    const firstname = req.body.firstname;
    const password = req.body.password;
    const address = req.body.address;
    const Points = req.body.Points;
    const Status =  req.body.Status;
    const roll = req.body.roll;
	mongoose.findByIdAndUpdate("5b32ff3fa0b8382b70208175",
	{
	 	email : email,
	 	firstname : firstname,
	 	address : address,
	 	lastname : lastname,
	 	password : password,
	 	address : address,
	 	Points : Points,
	 	Status : Status,
	 	roll : roll
	},{new: true}).then(console.log(123));
	res.redirect('../admin');
};


exports.getthem = function(req, res, next){
	
	 res.render('admin/user/add',{
			title: 'thêm tài khoản',
		});
	
}

exports.postthem = function(req, res, next){

	  upload(req, res, function(err){
            if(req.file == undefined){
                console.log("Bạn chưa chọn file ảnh!")
                res.redirect('/them');
            } else{
                const tieude = req.body.tieude;
                const email = req.body.email;
                const lastname = req.body.lastname;
                const firstname = req.body.firstname;
                const password = req.body.password;
                const address = req.body.address;
                const Points = req.body.Points;
                const Status =  req.body.Status;
                const roll = req.body.roll;
                const img = req.body.img;
                mongoose.create({
	 				email : email,
	 				firstname : firstname,
				 	address : address,
				 	lastname : lastname,
				 	password : password,
				 	address : address,
				 	Points : Points,
				 	Status : Status,
				 	roll : roll
				 }).then(console.log("thêm thành công"))
				 res.redirect('../admin');
            }
        });
    };

	
	 
const storage = multer.diskStorage({
  destination: './public/Uploads/Images/',
  filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Init Upload
const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
}).single('img');

// Check File Type
function checkFileType(file, cb){
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: File không phải là hình ảnh!');
  }
}
 