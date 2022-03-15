import React from 'react'
import '../Assets/Css/Nav.css'
import { Link } from 'react-router-dom'
import Logo from '../Assets/Images/logo.png'

function Nav() {
  return (
    <div className='navigation-main'>
      <div className="navigation-inside">
        <div className="navigation-logo">
          <Link to="/"><img src={Logo} alt="" className="navigation-logo-pic" /></Link>
        </div>
        <ul className="navigation-button">
          <Link to="/" className="navigation-button-input">Home</Link>
          <Link to="/new" className="navigation-button-input">New Products</Link>
          <Link to="/all" className="navigation-button-input">All Products</Link>
          <Link to="/reviews" className="navigation-button-input">Reviews</Link>
          <Link to="/contact" className="navigation-button-input">Contact</Link>
          <Link to="/faqs" className="navigation-button-input">FAQs</Link>
        </ul>
        <div className="navigation-search-main">
          <i class="bi bi-search">
            <div className='hello'></div>
          </i>
          <Link to='/cart'><i class="bi bi-cart2"></i></Link>
        </div>
      </div>
    </div>
  )
}

export default Nav