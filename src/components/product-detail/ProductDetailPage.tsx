const ProductDetailPage = () => {
    const widthValue = "100%";
    const width_1 = "80%";
    const width_2 = "90%";
    const width_3 = "18%";

  return (
    <div
      className="container-detail"
      style={{ width: width_1, margin: '0 auto' }}
    >
      <div className="nav-detail">
        <a href="" className="text-xm">
          Trang chủ<span className="text-blue-500">Apple Watch</span>
        </a>
      </div>

      <div className="box-detail flex pt-16">
        <div className="detail-left w-2/4">
          <img
            src="/src/assets/img/sp-detail.jpg"
            alt=""
            width="90%"
            style={{ margin: '0 auto' }}
          />
          <div
            className="left-product grid grid-cols-5"
            style={{ width: width_2 }}
          >
            <img src="/src/assets/img/slide1-1.jpg" alt="" />
            <img src="/src/assets/img/slide1-2.jpg" alt="" />
            <img src="/src/assets/img/slide1-3.jpg" alt="" />
          </div>
        </div>
        <div className="box-right w-2/4">
          <div className="information-product">
            <h1 className="text-3xl font-bold">Apple Watch Series 6</h1>
            <span className="text-red-500 block pt-6 text-xl font-bold">
              10,000,000₫
            </span>
            <p className="pt-16 pb-10" style={{ width: widthValue }}>
              Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính
              quãng đường chạy, Chế độ luyện tập, Phát hiện té ngã, Báo thức,
              Nghe nhạc với tai nghe Bluetooth, Gọi điện trên đồng hồ, Từ chối
              cuộc gọi, Dự báo thời tiết, La bàn, Điều khiển chơi nhạc, Thay mặt
              đồng hồ
            </p>

            <div className="quality">
              <p>số lượng :</p>
              <div className="box-quality flex">
                <div className="box-quality relative inline-block">
                  <a
                    className="absolute top-3 w-6 h-6 bg-red-500 border border-danger-500 rounded-full text-center"
                    href=""
                  >
                    <i
                      className="fa-solid fa-plus"
                      style={{ color: "white" }}
                    ></i>
                  </a>
                  <a
                    className="absolute top-3 border border-red-500 w-6 h-6 rounded-full bg-red-500 text-center"
                    href=""
                    style={{ left: "79%", color: "white" }}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </a>
                  <input className="w-24 h-10" type="text" />
                </div>
                <div className="cart pl-11">
                  <button
                    type="button"
                    className="text-white bg-red-700 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    <i className="text-white fa-solid fa-cart-shopping"></i>{" "}
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content pt-24">
        <h1 className="text-3xl font-medium ml-6 mb-10">Thông tin chi tiết</h1>
        <div className="content text-sm">
          <p>
            Màn hình hiển thị sắc nét, màu sắc chân thực ngay cả dưới trời nắng
            gắt. Tính năng luôn bật sáng màn hình xem giờ tiện lợi ngay cả khi
            đang lái xe. Bên cạnh đó, màn hình sẽ tự động giảm độ sáng khi không
            cần thiết để tăng tối đa thời lượng pin.
          </p>{" "}
          <br />
          <p>Định vị chính xác bằng GPS và la bàn</p> <br />
          <p>
            Bên cạnh đó, đồng hồ thông minh Apple Watch S5 còn có la bàn từ tính
            giúp xác định phương hướng ở những nơi không định vị được bằng GPS
            tính năng này giúp ích cho những ai có sở thích đi leo núi, dã ngoại
            trong rừng,...
          </p>{" "}
          <br />
          <img src="/src/assets/img/slide1-2.jpg" alt="" width="40%" />
          <br />
          <p>Tính năng gọi SOS</p>
          <br />
          <p>
            Khi gặp nguy hiểm hay trường hợp khẩn cấp, nếu bạn nhấn gọi SOS,
            đồng hồ sẽ gọi cứu hộ và gửi định vị của bạn đến số điện thoại khẩn
            cấp. Tính năng này đã được hỗ trợ ở Việt Nam. Tham khảo một số nơi
            không được hỗ trợ gọi khẩn gấp tại đây.
          </p>
          <br />
          <p>Nghe nhạc ngay trên đồng hồ</p>
          <br />
          <p>
            Đồng hồ có trang bị loa ngoài để bạn có thể đồng bộ nhạc từ iPhone
            và nghe trực tiếp trên đồng hồ bất kì lúc nào với dung lượng lưu trữ
            lên đến 50 triệu bài hát
          </p>
          <br />
          <p>Mỏng nhẹ, sang trọng</p>
          <br />
          <p>
            Đồng hồ Apple Watch kích thước 40mm viền nhôm dây cao su mỏng nhẹ
            chỉ 10.7 mm - 30 gam dễ dàng đeo trên tay cả ngày mà không gây khó
            chịu. Thiết kế của đồng hồ không có nhiều thay đổi ngoại trừ dòng
            chữ Apple Watch S5 được khắc bên dưới mặt đồng hồ, đường nét được
            hoàn thiện tinh xảo làm nên sự đẳng cấp của Apple Watch.
          </p>
          <br />
        </div>
      </div>

      <div className="related products pt-16 pb-16">
        <h1 className="text-3xl font-medium pb-10">SẢN PHẨM LIÊN QUAN</h1>
        <div className="container-list pt-9 pb-12 ">
          <div
            className="box-product flex justify-between flex-wrap gap-5"
            style={{width: widthValue}}
          >
            <div
              className="box text-center border border-danger-500 pt-6"
              style={{width: width_3}}
            >
              <img
                className="m-auto"
                src="/src/assets/img/sp1.jpg"
                alt=""
                width="90%"
              />
              <a className="block mt-6 mb-3 font-medium" href="">
                Apple Watch Series 6
              </a>
              <span className="price font-medium text-red-500 ">
                10,000,000₫
              </span>
            </div>

            <div
              className="box text-center border border-danger-500 pt-6"
              style={{width: width_3}}
            >
              <img
                className="m-auto"
                src="/src/assets/img/sp1.jpg"
                alt=""
                width="90%"
              />
              <a className="block mt-6 mb-3 font-medium" href="">
                Apple Watch Series 6
              </a>
              <span className="price font-medium text-red-500 ">
                10,000,000₫
              </span>
            </div>

            <div
              className="box text-center border border-danger-500 pt-6"
              style={{width: width_3}}
            >
              <img
                className="m-auto"
                src="/src/assets/img/sp1.jpg"
                alt=""
                width="90%"
              />
              <a className="block mt-6 mb-3 font-medium" href="">
                Apple Watch Series 6
              </a>
              <span className="price font-medium text-red-500 ">
                10,000,000₫
              </span>
            </div>

            <div
              className="box text-center border border-danger-500 pt-6"
              style={{width: width_3}}
            >
              <img
                className="m-auto"
                src="/src/assets/img/sp1.jpg"
                alt=""
                width="90%"
              />
              <a className="block mt-6 mb-3 font-medium" href="">
                Apple Watch Series 6
              </a>
              <span className="price font-medium text-red-500 ">
                10,000,000₫
              </span>
            </div>

            <div
              className="box text-center border border-danger-500 "
              style={{width: width_3}}
            >
              <img
                className="m-auto"
                src="/src/assets/img/sp1.jpg"
                alt=""
                width="90%"
              />
              <a className="block mt-6 mb-3 font-medium" href="">
                Apple Watch Series 6
              </a>
              <span className="price font-medium text-red-500 ">
                10,000,000₫
              </span>
            </div>

            <div
              className="box text-center border border-danger-500 "
              style={{width: width_3}}
            >
              <img
                className="m-auto"
                src="/src/assets/img/sp1.jpg"
                alt=""
                width="90%"
              />
              <a className="block mt-6 mb-3 font-medium" href="">
                Apple Watch Series 6
              </a>
              <span className="price font-medium text-red-500 ">
                10,000,000₫
              </span>
            </div>
            <div
              className="box text-center border border-danger-500 "
              style={{width: width_3}}
            >
              <img
                className="m-auto"
                src="/src/assets/img/sp1.jpg"
                alt=""
                width="90%"
              />
              <a className="block mt-6 mb-3 font-medium" href="">
                Apple Watch Series 6
              </a>
              <span className="price font-medium text-red-500 ">
                10,000,000₫
              </span>
            </div>
            <div
              className="box text-center border border-danger-500 "
              style={{width: width_3}}
            >
              <img
                className="m-auto"
                src="/src/assets/img/sp1.jpg"
                alt=""
                width="90%"
              />
              <a className="block mt-6 mb-3 font-medium" href="">
                Apple Watch Series 6
              </a>
              <span className="price font-medium text-red-500 ">
                10,000,000₫
              </span>
            </div>
            <div
              className="box text-center border border-danger-500 "
              style={{width: width_3}}
            >
              <img
                className="m-auto"
                src="/src/assets/img/sp1.jpg"
                alt=""
                width="90%"
              />
              <a className="block mt-6 mb-3 font-medium" href="">
                Apple Watch Series 6
              </a>
              <span className="price font-medium text-red-500 ">
                10,000,000₫
              </span>
            </div>
            <div
              className="box text-center border border-danger-500 "
              style={{width: width_3}}
            >
              <img
                className="m-auto"
                src="/src/assets/img/sp1.jpg"
                alt=""
                width="90%"
              />
              <a className="block mt-6 mb-3 font-medium" href="">
                Apple Watch Series 6
              </a>
              <span className="price font-medium text-red-500 ">
                10,000,000₫
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
