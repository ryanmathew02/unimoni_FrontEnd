import React from 'react'

const Home = () => {
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
                                        <img src="img/shape/shape_1.svg" alt=""></img>
                                    </div>
                                    <div className="shape_2 wow fadeInDown" data-wow-duration="1s" data-wow-delay=".2s">
                                        <img src="img/shape/shape_2.svg" alt=""></img>
                                    </div>
                                    <span className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s">12 Feb, 2020</span>
                                    <h3 className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".4s">Concert  2020</h3>
                                    <p className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".5s">Green Avenue, New York</p>
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
                                            <img src="img/performer/1.png" alt=""></img>
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
                                            <img src="img/performer/2.png" alt=""></img>
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
                                <h3 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s" >About Program</h3>
                                <p className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".4s" >The event regularly attracts a diverse range of attendees from around the world, across different professions, and with different.</p>
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
                                <h4 className=" wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".5s">It’s time to book your seat</h4>
                                <p className=" wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".6s">The event regularly attracts a diverse range of attendees from around the world, across different professions, and with different levels of experience transform your business.</p>
                                <a href="#" className="boxed-btn3  wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".7s">Buy Tickets</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home