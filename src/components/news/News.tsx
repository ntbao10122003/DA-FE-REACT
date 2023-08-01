const News = () => {
  return (
    <div className="main w-full py-6">
    <div className="main-container">
 
        <div className="news">
            <div className="large ">
                <div className="tilte ">
                    <div className="before-main"></div>
                    <h1 className="large  text-3xl font-bold block w-1/5">TIN TỨC</h1>
                </div>
                <div className="mini py-8" >
                    <span >Chúng tôi sẵn sàng cập nhật những kiến thức, công nghệ mới nhất dành cho các bạn </span>
                </div>
            </div>

            <div className="news-products grid grid-cols-4 gap-4">
                <div className="box-news-products">
                    <div className="box-news relative">
                        <div className="img-news scale-90 hover:scale-100">
                            <a href=""><img src="/src/assets/img/news1.jpg" alt=""/></a>
                        </div>
                        <a className="font-bold hover:text-blue-500" href="">Tính năng đo điện tâm đồ được cập nhật vào Apple Watch</a >
                        <div className="time absolute top-1 left-3 m-3 bg-blue-300 rounded">
                            <span>2-7-2023</span>
                        </div>
                    </div>
                </div>

                <div className="box-news-products relative">
                    <div className="box-news">
                        <div className="img-news scale-90 hover:scale-100">
                            <a href=""><img src="/src/assets/img/news1.jpg" alt=""/></a>
                        </div>
                        <a className="font-bold hover:text-blue-500" href="">Tính năng đo điện tâm đồ được cập nhật vào Apple Watch</a>
                        <div className="time absolute top-1 left-3 m-3 bg-blue-300 rounded">
                            <span>2-7-2023</span>
                        </div>
                    </div>
                </div>

                <div className="box-news-products relative">
                    <div className="box-news ">
                        <div className="img-news scale-90 hover:scale-100">
                            <a href=""><img src="/src/assets/img/news1.jpg" alt=""/></a>
                        </div>
                        <a className="font-bold hover:text-blue-500" href="">Tính năng đo điện tâm đồ được cập nhật vào Apple Watch</a>
                        <div className="time absolute top-1 left-3 m-3 bg-blue-300 rounded">
                            <span>2-7-2023</span>
                        </div>
                    </div>
                </div>

                <div className="box-news-products relative">
                    <div className="box-news ">
                        <div className="img-news scale-90 hover:scale-100">
                            <a href=""><img src="/src/assets/img/news1.jpg" alt=""/></a>
                        </div>
                        <a className="font-bold hover:text-blue-500" href="">Tính năng đo điện tâm đồ được cập nhật vào Apple Watch</a>
                        <div className="time absolute top-1 left-3 m-3 bg-blue-300 rounded">
                            <span>2-7-2023</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>                     
</div>
  )
}

export default News