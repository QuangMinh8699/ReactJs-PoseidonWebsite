import React from 'react'
import '../Assets/Css/HomeBrands.css'
import Slider from "react-slick";
import Asus from '../Assets/Images/asus.png'
import Hp from '../Assets/Images/hp.png'
import Akko from '../Assets/Images/akko.png'
import Amd from '../Assets/Images/amd.jpg'
import Acer from '../Assets/Images/acer.png'
import Dell from '../Assets/Images/dell.png'
import DeepCool from '../Assets/Images/deep-cool.png'
import Dareu from '../Assets/Images/dareu.png'
import Corsair from '../Assets/Images/corsair.png'
import Gs from '../Assets/Images/gskill.jpg'

const PrevButton = ({ currentSlide, slideCount, ...props }) => (
    <>
        <div className='home-brands-prev-btn' {...props}
            style={{
                backgroundImage: "linear-gradient(to left ,#F1CD6C, #f3dd9f)",
                width: '5vw',
                height: '5vw',
                marginLeft: '-6vw',
                color: '#121212',
                backgroundColor: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <i className="home-brands-prev-btn-icon bi bi-chevron-left"></i>
        </div>
    </>
);

const NextButton = ({ currentSlide, slideCount, ...props }) => (
    <div className='home-brands-prev-btn' {...props}
        style={{
            backgroundImage: "linear-gradient(to left ,#F1CD6C, #f3dd9f)",
            width: '5vw',
            height: '5vw',
            marginRight: '-6vw',
            color: '#121212',
            fontSize: '10vw',
            backgroundColor: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <i className="home-brands-prev-btn-icon bi bi-chevron-right"></i>
    </div>
);

function HomeBrands() {

    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1500,
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        focusOnChange: false,
        pauseOnHover: false,
        dots: false,
        nextArrow: <NextButton />,
        prevArrow: <PrevButton />
    };

    return (
        <div className="home-brands-main">
            <div className="home-brands">
                <Slider {...settings} className="home-brands-slider"
                    style={{
                        backgroundImage: "linear-gradient(to left ,#F1CD6C, #f3dd9f)",
                    }}
                >
                    <div className='home-brands-slider-item'>
                        <img src={Akko} alt="" className="home-brands-logo"
                            style={{
                                display: 'inline',
                            }}
                        />
                    </div>
                    <div className='home-brands-slider-item'>
                        <img src={Acer} alt="" className="home-brands-logo"
                            style={{
                                display: 'inline',
                            }}
                        />
                    </div>
                    <div className='home-brands-slider-item'>
                        <img src={Amd} alt="" className="home-brands-logo"
                            style={{
                                display: 'inline',
                            }}
                        />
                    </div>
                    <div className='home-brands-slider-item'>
                        <img src={Asus} alt="" className="home-brands-logo"
                            style={{
                                display: 'inline',
                            }}
                        />
                    </div>
                    <div className='home-brands-slider-item'>
                        <img src={Corsair} alt="" className="home-brands-logo"
                            style={{
                                display: 'inline',
                            }}
                        />
                    </div>
                    <div className='home-brands-slider-item'>
                        <img src={Dareu} alt="" className="home-brands-logo"
                            style={{
                                display: 'inline',
                                alignItems: 'center',
                            }}
                        />
                    </div>
                    <div className='home-brands-slider-item'>
                        <img src={DeepCool} alt="" className="home-brands-logo"
                            style={{
                                display: 'inline',
                            }}
                        />
                    </div>
                    <div className='home-brands-slider-item'>
                        <img src={Dell} alt="" className="home-brands-logo"
                            style={{
                                display: 'inline',
                            }}
                        />
                    </div>
                    <div className='home-brands-slider-item'>
                        <img src={Hp} alt="" className="home-brands-logo"
                            style={{
                                display: 'inline',
                            }}
                        />
                    </div>
                    <div className='home-brands-slider-item'>
                        <img src={Gs} alt="" className="home-brands-logo"
                            style={{
                                display: 'inline',
                            }}
                        />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default HomeBrands