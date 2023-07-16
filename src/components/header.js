import React from 'react'
import imgsrc from "./../img/logo.png";
import Login from '../Pages/signup/SignUp';
import { Link } from 'react-router-dom';

const Header = () => {
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
                                    <img src={imgsrc} alt=""/><img/>
                                </Link>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="main-menu  d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li><a href="index.html">HOME</a></li>
                                            <li><a href="performer.html">PERFORMER</a></li>
                                            
                                            <li><a href="#">PAGES <i className="ti-angle-down"></i></a>
                                                <ul className="submenu">
                                                    <li><a href="about.html">about</a></li>
                                                    <li><a href="Program.html">Program</a></li>
                                                    <li><a href="Venue.html">Venue</a></li>
                                                    <li><a href="elements.html">elements</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">blog <i className="ti-angle-down"></i></a>
                                                <ul className="submenu">
                                                    <li><a href="blog.html">blog</a></li>
                                                    <li><a href="single-blog.html">single-blog</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                                <div className="buy_tkt">
                                    <div className="book_btn d-none d-lg-block">
                                        {/* <a href="#">SignUp/SignIn</a> */}
                                        <Link to="/login">SignUp/SignIn</Link>
                                    </div>
                                </div>
                            </div>
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