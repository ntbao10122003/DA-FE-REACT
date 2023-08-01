const Footer = () => {
  return (
    <div className="footer ">
            <div className="img-footer">
                <img src="/src/assets/img/footer.jpg" alt=""/>
            </div>
        

                <div className="content-footer container flex justify-around ">
                    <div>
                        <h2>tự soạn thảo 1</h2>
                        <p>tự soạn thảo 1</p>
                        <p>tự soạn thảo 1</p>
                        <p>tự soạn thảo 1</p>
                        <p>tự soạn thảo 1</p>
                    </div>
                    <div>
                        <h1 className="font-bold">DELTA WATCH</h1>
                        <p>Địa chỉ  :  Quận Tân Bình, HCM.</p>
                        <p>Điện thoại  :  09xxxxxxxx</p>
                        <p>Email  :  xxxxxxxxxx@gmail.com</p>
                    </div>
                    <div>
                        <h2>THEO DÕI CHÚNG TÔI</h2>
                        <img src="/src/assets/img/in2.jpg" alt="" width="250px"/>
                    </div>
                </div>
                <div className="end-footer  flex justify-center leading-10">
                    <h1 className="content-and-footer">Copyright © 2019   Delta Watch</h1>
                </div>
        </div>  
  )
}

export default Footer