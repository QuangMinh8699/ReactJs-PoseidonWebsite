import React from 'react'
import { Link } from 'react-router-dom'
import '../Assets/Css/HomeAllProducts.css'
import Rtx3080 from '../Assets/Images/nvidia-rtx-3080.png'

function HomeAllProducts() {
    return (
        <div className="home-all-products-main">
            <div className="home-new-products">
                <div className="home-new-products-header">
                    <p className="home-new-products-title">
                        All Products
                    </p>
                    <Link to='/all' className="home-new-products-view-all">
                        View More
                    </Link>
                </div>

                <div className="home-new-products-content">
                    <Link to='/all' className="home-new-products-content-product">
                        <img src={Rtx3080} alt="" className="home-new-rtx3080" />
                        <div className="home-new-title">
                            <p className="home-new-title-p">NVIDIA RTX 3080</p>
                        </div>
                        <ul className="home-new-product-detail">
                            <li className="home-new-product-detail-1">- Memory capacity: 10GB GDDR6X</li>
                            <li className="home-new-product-detail-2">- CUDA® Cores: 8704 CUDA Cores</li>
                            <li className="home-new-product-detail-3">- Core Clock: 1710 MHz</li>
                            <li className="home-new-product-detail-4">- Connectivity: DisplayPort 1.4a, HDMI 2.</li>
                            <li className="home-new-product-detail-5">- Required power: 320W</li>
                        </ul>
                    </Link>

                    <Link to='/all' className="home-new-products-content-product">
                        <img src={Rtx3080} alt="" className="home-new-rtx3080" />
                        <div className="home-new-title">
                            <p className="home-new-title-p">NVIDIA RTX 3080</p>
                        </div>
                        <ul className="home-new-product-detail">
                            <li className="home-new-product-detail-1">- Memory capacity: 10GB GDDR6X</li>
                            <li className="home-new-product-detail-2">- CUDA® Cores: 8704 CUDA Cores</li>
                            <li className="home-new-product-detail-3">- Core Clock: 1710 MHz</li>
                            <li className="home-new-product-detail-4">- Connectivity: DisplayPort 1.4a, HDMI 2.</li>
                            <li className="home-new-product-detail-5">- Required power: 320W</li>
                        </ul>
                    </Link>

                    <Link to='/all' className="home-new-products-content-product">
                        <img src={Rtx3080} alt="" className="home-new-rtx3080" />
                        <div className="home-new-title">
                            <p className="home-new-title-p">NVIDIA RTX 3080</p>
                        </div>
                        <ul className="home-new-product-detail">
                            <li className="home-new-product-detail-1">- Memory capacity: 10GB GDDR6X</li>
                            <li className="home-new-product-detail-2">- CUDA® Cores: 8704 CUDA Cores</li>
                            <li className="home-new-product-detail-3">- Core Clock: 1710 MHz</li>
                            <li className="home-new-product-detail-4">- Connectivity: DisplayPort 1.4a, HDMI 2.</li>
                            <li className="home-new-product-detail-5">- Required power: 320W</li>
                        </ul>
                    </Link>

                    <Link to='/all' className="home-new-products-content-product">
                        <img src={Rtx3080} alt="" className="home-new-rtx3080" />
                        <div className="home-new-title">
                            <p className="home-new-title-p">NVIDIA RTX 3080</p>
                        </div>
                        <ul className="home-new-product-detail">
                            <li className="home-new-product-detail-1">- Memory capacity: 10GB GDDR6X</li>
                            <li className="home-new-product-detail-2">- CUDA® Cores: 8704 CUDA Cores</li>
                            <li className="home-new-product-detail-3">- Core Clock: 1710 MHz</li>
                            <li className="home-new-product-detail-4">- Connectivity: DisplayPort 1.4a, HDMI 2.</li>
                            <li className="home-new-product-detail-5">- Required power: 320W</li>
                        </ul>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default HomeAllProducts