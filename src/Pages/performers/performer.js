import React from 'react'

const performer = () => {
    return (
        <div>
            {/* <div class="bradcam_area">
                <div class="single_bradcam  d-flex align-items-center bradcam_bg_1 overlay">
                    <div class="container">
                        <div class="row align-items-center justify-content-center">
                            <div class="col-xl-12">
                                <div class="bradcam_text text-center">
                                    <div class="shape_1 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                                        <img src={require('./../../img/shape/shape_1.svg')} alt=""></img>
                                    </div>
                                    <div class="shape_2 wow fadeInDown" data-wow-duration="1s" data-wow-delay=".3s">
                                        <img src={require('./../../img/shape/shape_2.svg')} alt=""></img>
                                    </div>
                                    <h3 class="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">Performer</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
      
            <div class="performar_area black_bg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section_title mb-80">
                                <h3 class="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">Performer</h3>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <div class="single_performer wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                        <div data-tilt class="thumb">
                                            <img src={require('./../../img/performer/1.png')} alt=""></img>
                                        </div>
                                        <div class="performer_heading">
                                            <h4>Mr. Zosoldos</h4>
                                            <span>Acoustic drum</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="single_performer wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                                        <div data-tilt class="thumb">
                                            <img src={require('./../../img/performer/2.png')} alt=""></img>
                                        </div>
                                        <div class="performer_heading">
                                            <h4>Protik Hasan</h4>
                                            <span>Acoustic drum</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="single_performer wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                                        <div data-tilt class="thumb">
                                            <img src={require('./../../img/performer/3.png')} alt=""></img>
                                        </div>
                                        <div class="performer_heading">
                                            <h4>Salmon Vicky</h4>
                                            <span>Acoustic drum</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="single_performer wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                                        <div data-tilt class="thumb">
                                            <img src={require('./../../img/performer/4.png')} alt=""></img>
                                        </div>
                                        <div class="performer_heading">
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

        </div>
    )
}

export default performer