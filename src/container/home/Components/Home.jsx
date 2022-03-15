import React from 'react'
import '../Assets/Css/Home.css'
import Nvidia3000 from '../Assets/Images/nvidia-rtx-3000.png'

function Home() {
  return (
    <div className='home-main'>
      <div className="home-header">
        <img className='home-header-pic' src={Nvidia3000} alt="" />
      </div>
    </div>
  )
}

export default Home