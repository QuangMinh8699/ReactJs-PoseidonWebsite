import React from 'react'
import '../Assets/Css/NewProductsHeader.css'
import Asus3090 from '../Assets/Images/asus-3090.jpg'

function NewProductsHeader() {
  return (
    <div className="new-products-header">
        <img  className="new-products-header-pic" src={Asus3090} alt="" />
    </div>
  )
}

export default NewProductsHeader