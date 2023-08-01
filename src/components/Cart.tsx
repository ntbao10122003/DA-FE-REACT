const Cart = () => {
    const width_1 = '80%';
    const width_2 = '40%';
  return (
    <div className="cart-product pt-6 pb-16" style={{width: width_1, margin: '0 auto'}}>
        <h1><a href="">Trang chủ<span className="text-blue-500"> giỏ hàng</span></a></h1>
        <h1 className="pt-16 text-3xl font-medium">GIỎ HÀNG </h1>
        <div className="cart-product pt-6 grid grid-cols-5 gap-4 text-center leading-9 items-center border-b border-red-300 pb-6">
                <div className="img-cart flex" style={{width: width_2, margin: '0 auto'}}>
                    <img src="/src/assets/img/slide1-1.jpg" alt=""/>
                </div>
               <div className="text-left">
                    <p className="font-medium">Apple Watch Series 5</p>
                    <span className="text-red-500">10,000,000₫</span>
               </div>
                <div>
                    <input className="w-24" type="number"/>
                </div>
                 
                <div className="">
                    <span className="text-red-500">10,000,000₫</span>
                </div>

                <div className="">
                    <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Xóa</button>
                </div>
        </div>
        <div className="buy-product pt-10">
            <div className="flex justify-end">
                <p className=" pl-10 font-medium ">Tổng tiền</p>
                <p className=" pl-10 font-medium text-red-500">40,000,000₫</p>
            </div>
            <div className="cart-buy-button flex justify-end pt-10 ">
                <div className="">
                    <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900  border border-gray-200 rounded-lg hover:bg-blue-500 hover:text-white ">Cập nhập</button>
                </div>
                <div className="">
                    <a href="form-buy-cart.html"><button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900  border border-gray-200 rounded-lg hover:bg-blue-500 hover:text-white ">Thanh Toán</button></a>
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default Cart