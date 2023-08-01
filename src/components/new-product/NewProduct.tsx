const NewProduct = () => {
    const width_2 = '27%';
    const width_3 = '68%';
  return (
    <div className="main w-full py-6">
    <div className="main-container">
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
    </div>
    </div>
  )
}

export default NewProduct