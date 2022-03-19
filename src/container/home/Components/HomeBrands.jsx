import React from 'react'
import '../Assets/Css/HomeBrands.css'
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

function HomeBrands() {

    const brandsArray = [
        Asus,
        Hp,
        Akko,
        Amd,
        AsRock,
        Acer,
        Dell,
        DeepCool,
        Dareu,
        Corsair,
        Gs,
        Tnc,
    ];

    let i = 2;

    const plus = () => {
        i++;
        if (i > brandsArray.length) {
            i = 0;
        }
        console.log(i)
    }

    const minus = () => {
        i--;
        if (i < brandsArray.length) {
            i = 0;
        }
        console.log(i)
    }

    return (
        <div className="home-brands-main">
            <div className="home-brands">
                <div className="home-brands-header">
                    <p className="home-brands-header-title">
                        Brands
                    </p>
                </div>
                <div className="home-brands-content">

                    {/* left */}
                    <div className="home-brands-content-btn  home-brands-content-btn-minus"
                        style={{
                            backgroundImage: "linear-gradient(to left ,#F1CD6C, #f3dd9f)",
                            color: "darkred",
                        }}

                        onClick={minus}
                        
                    >
                        <i className="home-brands-content-btn-chevron bi bi-chevron-left"></i>
                    </div>

                    <div className="home-content-brands">
                        <img className='home-content-brands-img' src={brandsArray[1]} alt="" />
                    </div>

                    {/* right */}
                    <div className="home-brands-content-btn  home-brands-content-btn-plus"
                        style={{
                            backgroundImage: "linear-gradient(to left ,#F1CD6C, #f3dd9f)",
                            color: "darkred",
                        }}

                        onClick={plus}
                    >
                        <i className="home-brands-content-btn-chevron bi bi-chevron-right"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBrands