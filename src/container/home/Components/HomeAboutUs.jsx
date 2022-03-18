import React from 'react'
import '../Assets/Css/HomeAboutUs.css'
import Logo from '../Assets/Images/logo-dark-mood.png'

function HomeAboutUs() {
    return (
        <div className="home-about-us-main">
            <div className="home-about-us">
                <div className="home-new-products-header">
                    <p className="home-new-products-title">
                        About Us
                    </p>
                </div>
                <div className="home-about-us-content">
                    <div className="home-about-us-content-header">
                        <div className="home-about-us-content-header-inside">
                            <p className="home-about-us-content-header-title">
                                POSEIDON STORE
                            </p>
                        </div>
                    </div>
                    <div className="home-about-us-content-content">
                        <img src={Logo} alt="" className="home-about-us-content-pic" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeAboutUs