import React from 'react'
import '../Assets/Css/Home.css'
import HomeCategory from './HomeCategory'
import HomeHeader from './HomeHeader'
import HomeNewProducts from './HomeNewProducts'
import HomeSpecialProducts from './HomeSpecialProducts'

function Home() {
  return (
    <div className='home-main'>
      <HomeHeader />
      <HomeCategory />
      <HomeSpecialProducts />
      <HomeNewProducts />
    </div>
  )
}

export default Home