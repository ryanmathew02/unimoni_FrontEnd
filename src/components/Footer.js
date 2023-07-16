import React from 'react'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer_top">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8">
                            <div className="footer_widget">
                                <div className="address_details text-center">
                                    <h4 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">Unimoni PVT Ltd.</h4>
                                    <h3 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">Kochi, Kerala</h3>
                                    <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">The event regularly attracts a diverse range of attendees from around the world.</p>
                                    <a href="#" className="boxed-btn3 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">Join Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-right_text">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <p className="copy_right text-center wow fadeInDown" data-wow-duration="1s" data-wow-delay=".5s">
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer