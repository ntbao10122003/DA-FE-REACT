
const Payment = () => {
  const width_1 = '90%';
  const width_2 = '70%';
  const width_3 = '55%';
  const width_4 = '45%';
  const width_5 = '44%';
  const width_6 = '19%';

  return (
    <div className="form-buy-cart" style={{ width: width_2, margin: '0 auto', display: 'flex' }}>
      <div className="conttainer-form-cart pt-16" style={{ width: width_3 }}>
        <div className="top-buy-cart">
          <img src="/src/assets/img/2035342283933.png" alt="" width="20%" />
          <h1 className="pt-6 text-xs"><span className="text-blue-500">Giỏ hàng</span><span> Thông tin giao hàng</span><span className="text-gray-500">Phương thức thanh toán</span></h1>
          <h1 className="text-xl pt-6">Thông tin giao hàng</h1>
        </div>

        <div className="form-buy pt-3" style={{ paddingBottom: '10%' }}>
        <form action="" className="test-form border-b border-gray-300 pb-10">
            <input className="" type="text" placeholder="Họ và tên" style={{ width: width_1 }} />
            <input type="text" placeholder="Số điện thoại" style={{ width: width_2 }} />
            <input type="text" placeholder="Địa chỉ" style={{ width: width_6 }} />
            <input type="text" placeholder="Thành phố" style={{ width: width_1 }} />
            <input className="address" type="text" placeholder="Quận/Huyện" style={{ width: width_4 }} />
            <input type="text" placeholder="Mã bưu điện" style={{ width: width_5 }} /><br />
            <div className="itm-cart pt-6 flex items-center justify-between" style={{ height: '30%', width: '90%' }}>
              <a className="text-sm font-medium text-blue-500" href="">Giỏ hàng</a>
              <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white bg-blue-700  border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white">Tiếp tục đến phương thức thanh toán</button>
            </div>
          </form>
          <div className="content-buy-cart flex justify-center mt-3">
            <p className="text-sm">Powered by Webvua</p>
          </div>
        </div>
      </div>
      <div className="container-form-cart bg-gray-100 border-l border-gray-300  pt-16" style={{ width: '45%' }}>
        <div className="box-container-buy-right " style={{ width: width_1, margin: '0 auto' }}>
          <div className="container-buy-right flex items-center border-b border-gray-300">
            <div className="top-buy-cart-right flex items-center mb-6 relative">
              <img className="rounded-xl" src="/src/assets/img/slide1-1.jpg" alt="" width="17%" />
              <p className="ml-3 text-sm">Apple Watch Series 5</p>
              <p className="absolute top-0 border-none rounded-full bg-gray-500 text-sm text-white w-6 h-6 text-center" style={{ left: '50px' }}>4</p>
            </div>
            <div className="price-buy-right mb-6">
              <p className="ml-3 text-sm">40,000,000₫</p>
            </div>
          </div>
          <div className="sale-cart pt-6 pb-3 border-b border-gray-300">
            <input className=" border-none border-danger-300 rounded w-3/4  " type="text" placeholder="mã giảm giá" />
            <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white bg-gray-400  border-none border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white ">sử dụng </button>
          </div>
          <div className="payment pt-6 pb-6 border-b border-gray-300">
            <div className="payment-top flex justify-between">
              <p>Tạm tính</p>
              <p>40,000,000₫</p>
            </div>
            <div className="payment-bottom flex justify-between mt-3">
              <p>Phí vận chuyển</p>
              <p>40,000,000₫</p>
            </div>
          </div>
          <div className="total money mt-6">
            <div className="box-total money flex justify-between">
              <p className="text-sm">Tổng cộng</p>
              <p className="text-xl"><span className="text-gray-500 text-xs">VND</span> 40,000,000₫</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment;
