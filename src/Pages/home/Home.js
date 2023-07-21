import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Home = () => {
    const [data, setdata] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5050/home/getHomeData")
            .then(function (response) {
                console.log(response)
            })
    })

    return (
        <div>
            {/* slider_area */}
            <div className="slider_area">
                <div className="single_slider  d-flex align-items-center slider_bg_1 overlay">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-xl-12">
                                <div className="slider_text text-center">
                                    <div className="shape_1 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                                        <img src={require('./../../img/shape/shape_1.svg')} alt=""></img>
                                    </div>
                                    <div className="shape_2 wow fadeInDown" data-wow-duration="1s" data-wow-delay=".2s">
                                        <img src={require('./../../img/shape/shape_2.svg')} alt=""></img>
                                    </div>
                                    <span className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s"></span>
                                    <h3 className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".4s">Concert Organizing Platform</h3>
                                    <p className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".5s"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* performar_area */}
            <div className="performar_area black_bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section_title mb-80">
                                <h3 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">Performer</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="single_performer wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                        <div data-tilt className="thumb">
                                            <img src={require('./../../img/performer/1.png')} alt=""></img>
                                        </div>
                                        <div className="performer_heading">
                                            <h4>Mr. Zosoldos</h4>
                                            <span>Acoustic drum</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="single_performer wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                                        <div data-tilt className="thumb">
                                            <img src={require('./../../img/performer/2.png')} alt=""></img>
                                        </div>
                                        <div className="performer_heading">
                                            <h4>Protik Hasan</h4>
                                            <span>Acoustic drum</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="single_performer wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                                        <div data-tilt className="thumb">
                                            <img src="img/performer/3.png" alt=""></img>
                                        </div>
                                        <div className="performer_heading">
                                            <h4>Salmon Vicky</h4>
                                            <span>Acoustic drum</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="single_performer wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                                        <div data-tilt className="thumb">
                                            <img src="img/performer/4.png" alt=""></img>
                                        </div>
                                        <div className="performer_heading">
                                            <h4>Filaris Habol</h4>
                                            <span>Acoustic drum</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* about_area_start */}
            <div className="about_area black_bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section_title text-center mb-80">
                                <h3 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s" >About Us</h3>
                                <p className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".4s" >We regularly attracts a diverse range of attendees from around the world, across different professions, and with different culture.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-6">
                            <div className="about_thumb">
                                <div className="shap_3  wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".4s">
                                    <img src="img/shape/shape_3.svg" alt=""></img>
                                </div>
                                <div className="thumb_inner  wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                    <img src="img/about/about.png" alt=""></img>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className="about_info pl-68">
                                <h4 className=" wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".5s">It’s time to book yourself for an Event</h4>
                                <p className=" wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".6s">The event regularly attracts a diverse range of attendees from around the world, across different professions, and with different levels of experience transform your business.</p>
                                <a href="#" className="boxed-btn3  wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".7s">Explore Upcomming Events</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="program_details_area detials_bg_1 overlay2">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section_title text-center mb-80  wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
                                <h3>HotSpot Events</h3>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="program_detail_wrap">
                                <div class="single_propram">
                                    <div class="inner_wrap">
                                        <div class="circle_img"></div>
                                        <div class="porgram_top">
                                            <span class=" wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s">3.00-4.00pm</span>
                                            <h4 class=" wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">12 Feb 2020</h4>
                                        </div>
                                        <div class="thumb wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                                            <img src="img/program_details/1.png" alt=""></img>
                                        </div>
                                        <h4 class="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">Mr. Zosoldos</h4>
                                    </div>
                                </div>
                                <div class="single_propram">
                                    <div class="inner_wrap">
                                        <div class="circle_img"></div>
                                        <div class="porgram_top">
                                            <span class="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">3.00-4.00pm</span>
                                            <h4 class="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".4s">12 Feb 2020</h4>
                                        </div>
                                        <div class="thumb wow fadeInRight" data-wow-duration="1s" data-wow-delay=".5s">
                                            <img src="img/program_details/2.png" alt=""></img>
                                        </div>
                                        <h4 class="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".6s">Mr. Zosoldos</h4>
                                    </div>
                                </div>
                                <div class="single_propram">
                                    <div class="inner_wrap">
                                        <div class="circle_img"></div>
                                        <div class="porgram_top">
                                            <span class=" wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s">3.00-4.00pm</span>
                                            <h4 class=" wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">12 Feb 2020</h4>
                                        </div>
                                        <div class="thumb  wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                                            <img src="img/program_details/3.png" alt=""></img>
                                        </div>
                                        <h4 class=" wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">Mr. Zosoldos</h4>
                                    </div>
                                </div>
                                <div class="single_propram">
                                    <div class="inner_wrap">
                                        <div class="circle_img"></div>
                                        <div class="porgram_top">
                                            <span class="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">3.00-4.00pm</span>
                                            <h4 class="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".4s">12 Feb 2020</h4>
                                        </div>
                                        <div class="thumb wow fadeInRight" data-wow-duration="1s" data-wow-delay=".5s">
                                            <img src="img/program_details/4.png" alt=""></img>
                                        </div>
                                        <h4 class="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".6s">Mr. Zosoldos</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="brand_area black_bg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section_title text-center mb-80">
                                <h4 class="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">Sponsor Logos</h4>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="brand_wrap">
                                <div class="brand_active owl-carousel">
                                    <div class="single_brand text-center">
                                        <img src={require('./../../img/brand/1.png')} alt=""></img>
                                    </div>
                                    <div class="single_brand text-center">
                                        <img src={require('./../../img/brand/2.png')} alt=""></img>
                                    </div>
                                    <div class="single_brand text-center">
                                        <img src={require('./../../img/brand/3.png')} alt=""></img>
                                    </div>
                                    <div class="single_brand text-center">
                                        <img src={require('./../../img/brand/4.png')} alt=""></img>
                                    </div>
                                    <div class="single_brand text-center">
                                        <img src={require('./../../img/brand/5.png')} alt=""></img>
                                    </div>
                                    <div class="single_brand text-center">
                                        <img src="img/brand/1.png" alt=""></img>
                                    </div>
                                    <div class="single_brand text-center">
                                        <img src="img/brand/2.png" alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home