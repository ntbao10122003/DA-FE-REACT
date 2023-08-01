const ProductPage = () => {
    const widthValue = '100%';
    const width_1 = '23%';
    const width_2 = '27%';
    const width_3 = '68%';
  return (
    
    <div className="main w-full py-6">
    <div className="main-container">
        <div className="large ">
            <div className="tilte ">
                <div className="before-main"></div>
                <h1 className="large  text-3xl font-bold block w-1/5">ĐỐI TÁC</h1>
            </div>
            <div className="mini py-8" >
                <span >
                    Bộ sưu tập những thương hiệu nổi tiếng về smartwatch trên thế giới
                </span>
            </div>
        </div>
        
        <div className="banner">
                <div className="item-img flex">
                   <div className="img">
                    <img src="/src/assets/img/in1.jpg" alt=""/>
                   </div>
                   <div className="img">
                    <img src="/src/assets/img/in2.jpg" alt=""/>
                   </div>
                   <div className="img">
                    <img src="/src/assets/img/in3.jpg" alt=""/>
                   </div>
                   <div className="img">
                    <img src="/src/assets/img/in4.jpg" alt=""/>
                   </div>
                   <div className="img">
                    <img src="/src/assets/img/in5.jpg" alt=""/>
                   </div>
                   <div className="img">
                    <img src="/src/assets/img/in6.jpg" alt=""/>
                   </div>
                   <div className="img">
                    <img src="/src/assets/img/in7.jpg" alt=""/>
                   </div>
                </div>
        </div>
      
        <div className="container-catagory ">
            <div className="awe-section-4 pt-20 relative">
                <div className="before-main "></div>
                <h1 className="text-3xl font-bold">Sản phẩm danh mục</h1>
            </div>
            <div className="mini pt-6">
                <span>
                    Những sản phẩm nổi tiếng với chất lượng hàng đầu được shop nhập về phục vụ quý khách hàng
                </span>
            </div>
            <div className="item flex pt-9">
                <a className="pr-9 text-lg text-blue-500 " href=""><img className="w-20" src="/src/assets/img/item1.png" alt=""/>apple watch</a>
                <a className="pr-9 text-lg hover:text-blue-500"  href="" ><img className="w-20" src="/src/assets/img/item2.png" alt=""/>apple watch</a>
            </div>
          
        </div> 

        <div className="container-list pt-9 pb-12 "> 
            <div className="box-product flex justify-between flex-wrap gap-4 " style={{width: widthValue}}>
                <div className="box text-center border border-danger-500 pt-6" style={{width: width_1}}>
                    <img className="m-auto" src="/src/assets/img/sp1.jpg" alt="" width="90%"/>
                    <a className="block mt-6 mb-3 font-medium" href="" >Apple Watch Series 6</a>
                    <span className="price font-medium text-red-500 ">10,000,000₫</span>
                </div> 

                <div className="box text-center border border-danger-500 pt-6" style={{width: width_1}}>
                    <img className="m-auto" src="/src/assets/img/sp1.jpg" alt="" width="90%"/>
                    <a className="block mt-6 mb-3 font-medium" href="" >Apple Watch Series 6</a>
                    <span className="price font-medium text-red-500 ">10,000,000₫</span>
                </div> 

                <div className="box text-center border border-danger-500 pt-6" style={{width: width_1}}>
                    <img className="m-auto" src="/src/assets/img/sp1.jpg" alt="" width="90%"/>
                    <a className="block mt-6 mb-3 font-medium" href="" >Apple Watch Series 6</a>
                    <span className="price font-medium text-red-500 ">10,000,000₫</span>
                </div> 

                <div className="box text-center border border-danger-500 pt-6" style={{width: width_1}}>
                    <img className="m-auto" src="/src/assets/img/sp1.jpg" alt="" width="90%"/>
                    <a className="block mt-6 mb-3 font-medium" href="" >Apple Watch Series 6</a>
                    <span className="price font-medium text-red-500 ">10,000,000₫</span>
                </div> 

                <div className="box text-center border border-danger-500 " style={{width: width_1}}>
                    <img className="m-auto" src="/src/assets/img/sp1.jpg" alt="" width="90%"/>
                    <a className="block mt-6 mb-3 font-medium" href="" >Apple Watch Series 6</a>
                    <span className="price font-medium text-red-500 ">10,000,000₫</span>
                </div> 

                <div className="box text-center border border-danger-500 " style={{width: width_1}}>
                    <img className="m-auto" src="/src/assets/img/sp1.jpg" alt="" width="90%"/>
                    <a className="block mt-6 mb-3 font-medium" href="" >Apple Watch Series 6</a>
                    <span className="price font-medium text-red-500 ">10,000,000₫</span>
                </div> 
                <div className="box text-center border border-danger-500 " style={{width: width_1}}>
                    <img className="m-auto" src="/src/assets/img/sp1.jpg" alt="" width="90%"/>
                    <a className="block mt-6 mb-3 font-medium" href="" >Apple Watch Series 6</a>
                    <span className="price font-medium text-red-500 ">10,000,000₫</span>
                </div> 
                <div className="box text-center border border-danger-500 " style={{width: width_1}}>
                    <img className="m-auto" src="/src/assets/img/sp1.jpg" alt="" width="90%"/>
                    <a className="block mt-6 mb-3 font-medium" href="" >Apple Watch Series 6</a>
                    <span className="price font-medium text-red-500 ">10,000,000₫</span>
                </div> 

                

                
                
            </div>
        </div>

        <div className="new-product">
            <div className="tilte ">
                <div className="before-main"></div>
                <h1 className="large text-3xl font-bold block w-1/5">SẢN PHẨM MỚI </h1>
            </div>
            <div className="mini py-8" >
                <span >
                    Những chiếc đồng hồ thể hiện đẳng cấp, thể thao dành cho phái mạnh
                </span>
            </div>
            <div className="slider flex pb-20">
                <div className="box-slider flex text-center" style={{width: width_3}}>

                    <div className="box border border-danger-500">
                        <img src="/src/assets/img/sp1.jpg" alt=""/>
                        <a className="block mt-6 mb-3 font-medium" href="">Amazfit Gts nội địa</a>
                        <span className="text-red-500">2,500,000₫</span>
                    </div>

                    <div className="box border border-danger-500">
                        <img src="/src/assets/img/slide1-1.jpg" alt=""/>
                        <a className="block mt-6 mb-3 font-medium" href="">Amazfit Gts nội địa</a>
                        <span className="text-red-500">2,500,000₫</span>
                    </div>

                    <div className="box border border-danger-500">
                        <img src="/src/assets/img/slide1-2.jpg" alt=""/>
                        <a className="block mt-6 mb-3 font-medium" href="">Amazfit Gts nội địa</a>
                        <span className="text-red-500">2,500,000₫</span>
                    </div>

                    <div className="box border border-danger-500">
                        <img src="/src/assets/img/slide1-3.jpg" alt=""/>
                        <a className="block mt-6 mb-3 font-medium" href="">Amazfit Gts nội địa</a>
                        <span className="text-red-500">2,500,000₫</span>
                    </div>
                    
                    
                    <div className="box border border-danger-500">
                        <img src="/src/assets/img/sp1.jpg" alt=""/>
                        <a className="block mt-6 mb-3 font-medium" href="">Amazfit Gts nội địa</a>
                        <span className="text-red-500">2,500,000₫</span>
                    </div>
                </div>
                <div className="fix-slider scale-100 hover:scale-90 delay-2000 animate-spin" style={{width: width_2}}>
                    <img src="/src/assets/img/slider1.jpg" alt=""/>
                </div>

            </div>
        </div>

        <div className="sale-product">
            <div className="tilte ">
                <div className="before-main"></div>
                <h1 className="large text-3xl font-bold block w-2/5">SẢN PHẨM BÁN CHẠY </h1>
            </div>
            <div className="mini py-8" >
                <span >
                    Những chiếc đồng hồ thể hiện đẳng cấp, thể thao dành cho phái mạnh
                </span>
            </div>
            <div className="slider flex pb-20">
                <div className="fix-slider scale-100 hover:scale-90 delay-2000 animate-spin" style={{width: width_2}}>
                    <img src="/src/assets/img/slide2-1.jpg" alt=""/>
                </div>
                <div className="box-slider flex text-center" style={{width: width_3}}>
                    <div className="box border border-danger-500">
                        <img src="/src/assets/img/slide1-1.jpg" alt=""/>
                        <a className="block mt-6 mb-3 font-medium" href="">Amazfit Gts nội địa</a>
                        <span className="text-red-500">2,500,000₫</span>
                    </div>

                    <div className="box border border-danger-500">
                        <img src="/src/assets/img/slide1-2.jpg"/>
                        <a className="block mt-6 mb-3 font-medium" href="">Amazfit Gts nội địa</a>
                        <span className="text-red-500">2,500,000₫</span>
                    </div>

                    <div className="box border border-danger-500">
                        <img src="/src/assets/img/slide1-3.jpg" alt=""/>
                        <a className="block mt-6 mb-3 font-medium" href="">Amazfit Gts nội địa</a>
                        <span className="text-red-500">2,500,000₫</span>
                    </div>

                    <div className="box border border-danger-500">
                        <img src="/src/assets/img/sp1.jpg" alt=""/>
                        <a className="block mt-6 mb-3 font-medium" href="">Amazfit Gts nội địa</a>
                        <span className="text-red-500">2,500,000₫</span>
                    </div>
                    
                    
                    <div className="box border border-danger-500">
                        <img src="/src/assets/img/sp1.jpg" alt=""/>
                        <a className="block mt-6 mb-3 font-medium" href="">Amazfit Gts nội địa</a>
                        <span className="text-red-500">2,500,000₫</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default ProductPage