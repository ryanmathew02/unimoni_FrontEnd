import React, { useEffect, useState } from 'react'
import imgsrc from "./../img/logo.png";
import Login from '../Pages/signup/SignUp';
import { Link, useNavigate } from 'react-router-dom';


const Header = ({checkLocal, isHome, setisDash}) => {
    const navigate = useNavigate(); 

    const changeHome = () => {
        setisDash(false);
        navigate('/dashboard');
    }

    const SignOut = () => {
        console.log('check signout');
        localStorage.removeItem('token');
        setisDash(true);
        navigate('/');
        window.location.reload(true)
    }

    return (
        <header>
            <div className="header-area ">
                <div id="sticky-header" className="main-header-area">
                    <div className="container">
                        <div className="header_bottom_border">
                            <div className="row align-items-center">
                                <div className="col-xl-3 col-lg-3">
                                    <div className="logo">
                                        <Link to="/">
                                            <img src={imgsrc} alt="" /><img />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="main-menu  d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">
                                                <li><Link to="/">Home</Link></li>
                                                <li><Link to="/performers">Performer</Link></li>

                                                <li><a href="#">PAGES <i className="ti-angle-down"></i></a>
                                                    <ul className="submenu">
                                                        <li><a href="about.html">about</a></li>
                                                        <li><a href="Program.html">Program</a></li>
                                                        {/* <li><a href="Venue.html">Venue</a></li>
                                                    <li><a href="elements.html">elements</a></li> */}
                                                    </ul>
                                                </li>
                                                {/* <li><a href="#">blog <i className="ti-angle-down"></i></a>
                                                <ul className="submenu">
                                                    <li><a href="blog.html">blog</a></li>
                                                    <li><a href="single-blog.html">single-blog</a></li>
                                                </ul>
                                            </li> */}
                                                <li><Link to="/contact">Contact</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                {
                                    checkLocal ? (
                                        <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                                            <div className="buy_tkt">
                                                <div className="book_btn d-none d-lg-block">
                                                    {/* <a href="#">SignUp/SignIn</a> */}
                                                        <button onClick={changeHome}>Dashboard</button>
                                                </div>
                                                <br></br>
                                                <div className="book_btn d-none d-lg-block">
                                                    {/* <a href="#">SignUp/SignIn</a> */}
                                                        <button onClick={SignOut}>SignOut</button>
                                                </div>                                                
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                                            <div className="buy_tkt">
                                                <div className="book_btn d-none d-lg-block">
                                                    {/* <a href="#">SignUp/SignIn</a> */}
                                                    <Link to="/login">SignUp/SignIn</Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                            }

                                <div className="col-12">
                                    <div className="mobile_menu d-block d-lg-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header