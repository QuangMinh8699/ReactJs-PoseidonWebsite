import React from 'react'
import '../Assets/Css/Footer.css'

function Footer() {
  return (
    <div className="footer-main">
      <div className="footer">

        <ul className="footer-content">
          <li className="footer-content-text footer-content-text-header">
            Poseidon
          </li>
          <li className="footer-content-text">
            Phone number: 0123456789
          </li>
          <li className="footer-content-text">
            Email: poseidon@gmail.com
          </li>
          <li className="footer-content-text">
            Address: 6/2 Ba Dinh, Ha Noi, Viet Nam
          </li>
        </ul>

        <ul className="footer-content">
          <li className="footer-content-text footer-content-text-header">
            About us
          </li>
          <li className="footer-content-text">
            Introduce
          </li>
          <li className="footer-content-text">
            News
          </li>
          <li className="footer-content-text">
            Partners
          </li>
        </ul>
        <ul className="footer-content">
          <li className="footer-content-text footer-content-text-header">Support</li>
          <li className="footer-content-text">
            Contact
          </li>
          <li className="footer-content-text">
            Security
          </li>
          <li className="footer-content-text">
            rules
          </li>
          <li className="footer-content-text"></li>
        </ul>
        <ul className="footer-content">
          <li className="footer-content-text footer-content-text-header">
            Shop
          </li>
          <li className="footer-content-text">
            6/2 Hang Than, Ha Noi, Viet Nam
          </li>
          <li className="footer-content-text">
            5 Le Thanh Ton, Ho Chi Minh, Viet Nam
          </li>
          <li className="footer-content-text">
            28 Tran Phu, Da Nang, Viet Nam
          </li>
        </ul>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-slogan">©2022 Poseidon - The best supplier of computer components and services in Viet Nam</div>
        <div className="footer-bottom-social-media">
          <i class="footer-bottom-icon bi bi-facebook"></i>
          <i class="footer-bottom-icon bi bi-instagram"></i>
          <i class="footer-bottom-icon bi bi-twitter"></i>
        </div>
      </div>
    </div>
  )
}

export default Footer