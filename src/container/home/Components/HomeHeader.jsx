import React from 'react'
import '../Assets/Css/HomeHeader.css'
import Nvidia3000 from '../Assets/Images/nvidia-rtx-3000.png'

function HomeHeader() {
    return (
        <div className="home-header-main" id='home-header-main-id'>
            <img className='home-header-pic' src={Nvidia3000} alt="" />
        </div>
    )
}

export default HomeHeader