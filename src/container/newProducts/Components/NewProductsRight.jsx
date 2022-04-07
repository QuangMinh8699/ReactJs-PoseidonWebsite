import React from 'react'
import '../Assets/Css/NewProductsRight.css'
import Nvidia3080 from '../Assets/Images/nvidia-rtx-3080.png'
import GamingWorkstation from './NewProductsData/GamingWorkstation';
import GamingScreen from './NewProductsData/GamingScreen';
import GamingCooling from './NewProductsData/GamingCooling';
import GamingNetwork from './NewProductsData/GamingNetwork';
import GamingLaptop from './NewProductsData/GamingLaptop';
import GamingChar from './NewProductsData/GamingChar';
import GamingParts from './NewProductsData/GamingParts';
import GamingGear from './NewProductsData/GamingGear';

function NewProductsRight() {
  return (
    <>
      <div className="new-products-content-right">
        {/* workstation */}
        <GamingWorkstation />

        {/* laptop */}
        <GamingLaptop />

        {/* parts */}
        <GamingParts />

        {/* gear */}
        <GamingGear />

        {/* screen */}
        <GamingScreen />

        {/* char */}
        <GamingChar />

        {/* cooling */}
        <GamingCooling />

        {/* network */}
        <GamingNetwork />

      </div>
    </>
  )
}

export default NewProductsRight
