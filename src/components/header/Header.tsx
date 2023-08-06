import { Link } from 'react-router-dom'
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from 'antd';
import { useState } from 'react';
import {search} from "../header/search"
const Header = () => {
   
    const { searchText, handleInputChange, handleSearch } = search();

    const navigate = useNavigate();
    return (
        <div>
            <div className="container-nav">
                <div className="nav bg-white-300  pl-40 pr-40">
                    <div className="container flex items-center">
                        {/* <div className="hotel font-bold"> Hotline : 0988252613</div> */}
                        <div className="logo"> <img src="/src/assets/img/2035342283933.png" alt="" width="150" /></div>
                        <div className="seaarch flex">
                            <div className="hover">
                                <input className="input-search border border-black-900 w-80 h-8 rounded" type="text" placeholder="search"  value={searchText}
        onChange={handleInputChange} />
                                <button className="button-search font-bold" onClick={handleSearch} >Tìm kiếm |</button>
                            </div>
                            <div className="cart font-bold flex-1">
                                <Link to={'/cart'} className="block mt-6 mb-3 font-medium">
                                    <i className="fa-solid fa-cart-shopping"></i> Giỏ hàng
                                </Link>
                                <Button type="primary" className="ml-2" danger onClick={ () => navigate("/signup")} >Đăng Ký</Button>
                                <Button type="primary" className="ml-2" danger onClick={ () => navigate("/signin")} >Đăng Nhập</Button>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu flex justify-center font-bold">
                    <ul>
                        <li><a href="/">Trang Chủ</a></li>
                        <li>
                            <Link to={'/product'} className="block mt-6 mb-3 font-medium">
                                Sản Phẩm
                            </Link>
                            <ul className="dropdown">
                                <li className="text">
                                    <a href="">IPhone</a>
                                    <a href="">SamSung</a>
                                    <a href="">Xiaomi</a>
                                </li>
                            </ul>
                        </li>
                        <li><a href="">Tin Tức</a></li>
                        <li><a href="lienhe.html">Liên Hệ</a></li>
                    </ul>
                </div>
                <div className="banner">
                    <div className="img-banner">
                        <img src="/src/assets/img/2022422422202.jpg" alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header