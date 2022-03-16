import React from 'react'
import '../Assets/Css/Home.css'
import HomeHeader from './HomeHeader'
import HomeNewProducts from './HomeNewProducts'

function Home() {
  return (
    <div className='home-main'>
      <HomeHeader />
      <HomeNewProducts />
    </div>
  )
}

export default Home