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
                                POSEIDON COMPUTER STORE
                            </p>
                            <div className="home-about-us-header-content">
                                Since 2022, we are the best supplier of computer components and services in Viet Nam.
                                With a staff of young people who are passionate and love technology, with good IT knowledge and extensive experience, we are always ready to answer any questions of our customers quickly.
                                possible. Even if you don't buy, we still advise you.
                            </div>
                        </div>
                    </div>
                    <div className="home-about-us-content-content"
                        style={{
                            backgroundImage: "linear-gradient(to left ,#F1CD6C, #EDD185)",
                            color: "darkred",
                        }}
                    >
                        <img src={Logo} alt="" className="home-about-us-content-pic" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeAboutUs