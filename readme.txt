1. Xây dựng mô hình mvc gồm model view controller và router trong đó:
	- View chứa các view của admin và người dùng.
	- Controller xử lý logic và render ra view cho người dùng.
	- Model kết nối database mongoDB.
	- Routes điều hướng vào controller tương ứng.
2. app sử dụng:
 	- expressJS để tạo mvc sau đó update để giống mô hình mvc thật.
 	- view engine : ejs để render ra view.
 	- mongoose validator : kết nối DB mongo và kiểm tra dữ liệu đầu vào.
 	- body-parser : get dữ liệu từ form người dùng.
	- passport: xác thực, midlderwave tài khoản.
3. các bước đã hoàn thành :
	- Xây dựng lại mô hình mvc.
 	- Hiển thị view theo routes và controller.
 	- Cài đặt và kết nối DB mongo.
4. các bước tiếp theo :
 	- get dữ liệu đổ vào trang admin.
	- crud dữ liệu.
	- làm đăng nhập người dùng, admin.
	- updload hình ảnh.