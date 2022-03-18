import React from 'react'
import '../Assets/Css/Home.css'
import HomeAboutUs from './HomeAboutUs'
import HomeAllProducts from './HomeAllProducts'
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
      <HomeAllProducts />
      <HomeAboutUs />
    </div>
  )
}

export default Home