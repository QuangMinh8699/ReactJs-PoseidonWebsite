import React from 'react'
import '../Assets/Css/HomeBrands.css'
import Slider from 'react-slick'
import Asus from '../Assets/Images/asus.png'
import Hp from '../Assets/Images/hp.png'
import Akko from '../Assets/Images/akko.png'
import Amd from '../Assets/Images/amd.jpg'
import AsRock from '../Assets/Images/asrock.jpg'
import Acer from '../Assets/Images/acer.png'
import Dell from '../Assets/Images/dell.png'
import DeepCool from '../Assets/Images/deepcool.jpg'
import Dareu from '../Assets/Images/dareu.png'
import Corsair from '../Assets/Images/corsair.png'
import Gs from '../Assets/Images/gskill.jpg'
import Tnc from '../Assets/Images/tnc.png'
import slider from 'react-slick/lib/slider'

function HomeBrands() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="home-brands-main">
            {/* <div className="home-brands">
                <div className="home-brands-header">
                    <p className="home-brands-header-title">
                        Brands
                    </p>
                </div>
                <div className="home-brands-content">

                    <div className="home-brands-content-btn  home-brands-content-btn-minus"
                        style={{
                            backgroundImage: "linear-gradient(to left ,#F1CD6C, #f3dd9f)",
                            color: "darkred",
                        }}

                    >
                        <i className="home-brands-content-btn-chevron bi bi-chevron-left"></i>
                    </div>

                    <div className="home-content-brands">
                        <Slider {...settings}>
                            <div>
                                <h3>1</h3>
                            </div>
                            <div>
                                <h3>2</h3>
                            </div>
                            <div>
                                <h3>3</h3>
                            </div>
                            <div>
                                <h3>4</h3>
                            </div>
                            <div>
                                <h3>5</h3>
                            </div>
                            <div>
                                <h3>6</h3>
                            </div>
                        </Slider>
                    </div>

                    <div className="home-brands-content-btn  home-brands-content-btn-plus"
                        style={{
                            backgroundImage: "linear-gradient(to left ,#F1CD6C, #f3dd9f)",
                            color: "darkred",
                        }}
                    >
                        <i className="home-brands-content-btn-chevron bi bi-chevron-right"></i>
                    </div>
                </div>
            </div> */}
            <Slider {...settings}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>
        </div>
    )
}

export default HomeBrands