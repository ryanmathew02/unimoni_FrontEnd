import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="slider_area">
                <div className="single_slider  d-flex align-items-center slider_bg_1 overlay">
                    <div class="container">
                        <div class="row align-items-center justify-content-center">
                            <div class="col-xl-12">
                                <div class="slider_text text-center">
                                    <div class="shape_1 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                                        <img src={require('./../../img/shape/shape_1.svg')} alt=""></img>
                                    </div>
                                    <div class="shape_2 wow fadeInDown" data-wow-duration="1s" data-wow-delay=".3s">
                                        <img src={require('./../../img/shape/shape_2.svg')} alt=""></img>
                                    </div>
                                    <h3 class="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">Contact</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="d-none d-sm-block mb-5 pb-4">
                    {/* <div id="map" style="height: 480px; position: relative; overflow: hidden;"> </div> */}
                    {/* <script>
                        function initMap() {
                            var uluru = {
                            lat: -25.363,
                        lng: 131.044
                            };
                        var grayStyles = [{
                            featureType: "all",
                        stylers: [{
                            saturation: -90
                                        },
                        {
                            lightness: 50
                                        }
                        ]
                                },
                        {
                            elementType: 'labels.text.fill',
                        stylers: [{
                            color: '#ccdee9'
                                    }]
                                }
                        ];
                        var map = new google.maps.Map(document.getElementById('map'), {
                            center: {
                            lat: -31.197,
                        lng: 150.744
                                },
                        zoom: 9,
                        styles: grayStyles,
                        scrollwheel: false
                            });
                        }
                    </script>
                    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&amp;callback=initMap">
                    </script> */}

                </div>


                <div class="row">
                    <div class="col-12">
                        <h2 class="contact-title">Get in Touch</h2>
                    </div>
                    <div class="col-lg-8">
                        <form class="form-contact contact_form" action="" method="post" id="contactForm" novalidate="novalidate">
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <textarea class="form-control w-100" name="message" id="message" cols="30" rows="9" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" placeholder=" Enter Message"></textarea>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input class="form-control valid" name="name" id="name" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" placeholder="Enter your name">
                                        </input>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input class="form-control valid" name="email" id="email" type="email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" placeholder="Email">
                                        </input>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <input class="form-control" name="subject" id="subject" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'" placeholder="Enter Subject">
                                        </input>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mt-3">
                                <button class="button button-contactForm boxed-btn">Send</button>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-3 offset-lg-1">
                        <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-home"></i></span>
                            <div class="media-body">
                                <h3>Kochi, Kerela</h3>
                                <p>near MG College</p>
                            </div>
                        </div>
                        <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-tablet"></i></span>
                            <div class="media-body">
                                <h3>+91 41852963987</h3>
                                <p>Mon to Fri 9am to 6pm</p>
                            </div>
                        </div>
                        <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-email"></i></span>
                            <div class="media-body">
                                <h3>support@xabc.in</h3>
                                <p>Send us your query anytime!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact