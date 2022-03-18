import React from 'react'
import '../Assets/Css/HomeSpecialProducts.css'
import { Link } from 'react-router-dom'
import Rtx3080 from '../Assets/Images/nvidia-rtx-3080.png'

function HomeSpecialProducts() {
    return (
        <div className="home-special-products-main">
            <div className="home-special-products">
                <div className="home-special-products-header">
                    <p className="home-special-products-header-title">
                        Special Products
                    </p>

                    <Link to='#' className="home-special-products-view-all">
                        View More
                    </Link>
                </div>

                <div className="home-special-products-content">

                    <Link to='#' className="home-special-products-content-product">
                        <img src={Rtx3080} alt="" className="home-special-rtx3080" />
                        <div className="home-special-title">
                            <p className="home-special-title-p">NVIDIA RTX 3080</p>
                        </div>
                        <ul className="home-special-product-detail">
                            <li className="home-special-product-detail-1">- Memory capacity: 10GB GDDR6X</li>
                            <li className="home-special-product-detail-2">- CUDA® Cores: 8704 CUDA Cores</li>
                            <li className="home-special-product-detail-3">- Core Clock: 1710 MHz</li>
                            <li className="home-special-product-detail-4">- Connectivity: DisplayPort 1.4a, HDMI 2.</li>
                            <li className="home-special-product-detail-5">- Required power: 320W</li>
                        </ul>
                    </Link>

                    <Link to='#' className="home-special-products-content-product">
                        <img src={Rtx3080} alt="" className="home-special-rtx3080" />
                        <div className="home-special-title">
                            <p className="home-special-title-p">NVIDIA RTX 3080</p>
                        </div>
                        <ul className="home-special-product-detail">
                            <li className="home-special-product-detail-1">- Memory capacity: 10GB GDDR6X</li>
                            <li className="home-special-product-detail-2">- CUDA® Cores: 8704 CUDA Cores</li>
                            <li className="home-special-product-detail-3">- Core Clock: 1710 MHz</li>
                            <li className="home-special-product-detail-4">- Connectivity: DisplayPort 1.4a, HDMI 2.</li>
                            <li className="home-special-product-detail-5">- Required power: 320W</li>
                        </ul>
                    </Link>

                    <Link to='#' className="home-special-products-content-product">
                        <img src={Rtx3080} alt="" className="home-special-rtx3080" />
                        <div className="home-special-title">
                            <p className="home-special-title-p">NVIDIA RTX 3080</p>
                        </div>
                        <ul className="home-special-product-detail">
                            <li className="home-special-product-detail-1">- Memory capacity: 10GB GDDR6X</li>
                            <li className="home-special-product-detail-2">- CUDA® Cores: 8704 CUDA Cores</li>
                            <li className="home-special-product-detail-3">- Core Clock: 1710 MHz</li>
                            <li className="home-special-product-detail-4">- Connectivity: DisplayPort 1.4a, HDMI 2.</li>
                            <li className="home-special-product-detail-5">- Required power: 320W</li>
                        </ul>
                    </Link>

                    <Link to='#' className="home-special-products-content-product">
                        <img src={Rtx3080} alt="" className="home-special-rtx3080" />
                        <div className="home-special-title">
                            <p className="home-special-title-p">NVIDIA RTX 3080</p>
                        </div>
                        <ul className="home-special-product-detail">
                            <li className="home-special-product-detail-1">- Memory capacity: 10GB GDDR6X</li>
                            <li className="home-special-product-detail-2">- CUDA® Cores: 8704 CUDA Cores</li>
                            <li className="home-special-product-detail-3">- Core Clock: 1710 MHz</li>
                            <li className="home-special-product-detail-4">- Connectivity: DisplayPort 1.4a, HDMI 2.</li>
                            <li className="home-special-product-detail-5">- Required power: 320W</li>
                        </ul>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomeSpecialProducts