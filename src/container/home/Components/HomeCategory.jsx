import React from 'react'
import '../Assets/Css/HomeCategory.css'
import { Link } from 'react-router-dom'
import Pc from '../Assets/Images/gaming-workstation.png'
import Laptop from '../Assets/Images/gaming-laptop.png'
import Parts from '../Assets/Images/linh-kien.png'
import Gear from '../Assets/Images/gaming-gear.png'
import Screen from '../Assets/Images/man-hinh.png'
import Char from '../Assets/Images/ban-ghe.png'
import Cooling from '../Assets/Images/phu-kien.png'
import Wifi from '../Assets/Images/thiet-bi-mang.png'

function HomeCategory() {
    return (
        <div className="home-category-main">

            <div className="home-category">
                <div className="home-category-header">
                    <p className="home-category-header-title">
                        Category
                    </p>
                </div>

                <div className="home-category-content">

                    <Link to='#' className="home-category-content-btn home-category-content-pc">
                        <div className="home-category-btn-title">
                            <p className="home-category-btn-title-p">
                                Gaming Workstation
                            </p>
                        </div>
                        <div className="home-category-btn-content"
                            style={{
                                backgroundImage: "linear-gradient(to left ,#F1CD6C, #f3dd9f)",
                                color: "darkred",
                            }}
                        >
                            <img src={Pc} alt="" className="home-category-btn-content-pc" />
                        </div>
                    </Link>

                    <Link to='#' className="home-category-content-btn home-category-content-pc">
                        <div className="home-category-btn-title">
                            <p className="home-category-btn-title-p">
                                Gaming Laptop
                            </p>
                        </div>
                        <div className="home-category-btn-content"
                            style={{
                                backgroundImage: "linear-gradient(to left ,#F1CD6C, #f3dd9f)",
                                color: "darkred",
                            }}
                        >
                            <img src={Laptop} alt="" className="home-category-btn-content-pc" />
                        </div>
                    </Link>

                    <Link to='#' className="home-category-content-btn home-category-content-pc">
                        <div className="home-category-btn-title">
                            <p className="home-category-btn-title-p">
                                parts of computer
                            </p>
                        </div>
                        <div className="home-category-btn-content"
                            style={{
                                backgroundImage: "linear-gradient(to left ,#F1CD6C, #f3dd9f)",
                                color: "darkred",
                            }}
                        >
                            <img src={Parts} alt="" className="home-category-btn-content-pc" />
                        </div>
                    </Link>

                    <Link to='#' className="home-category-content-btn home-category-content-pc">
                        <div className="home-category-btn-title">
                            <p className="home-category-btn-title-p">
                                Gaming Gear
                            </p>
                        </div>
                        <div className="home-category-btn-content"
                            style={{
                                backgroundImage: "linear-gradient(to left ,#F1CD6C, #f3dd9f)",
                                color: "darkred",
                            }}
                        >
                            <img src={Gear} alt="" className="home-category-btn-content-pc" />
                        </div>
                    </Link>

                    <Link to='#' className="home-category-content-btn home-category-content-pc">
                        <div className="home-category-btn-title">
                            <p className="home-category-btn-title-p">
                                computer screen
                            </p>
                        </div>
                        <div className="home-category-btn-content"
                            style={{
                                backgroundImage: "linear-gradient(to left ,#F1CD6C, #f3dd9f)",
                                color: "darkred",
                            }}
                        >
                            <img src={Screen} alt="" className="home-category-btn-content-pc" />
                        </div>
                    </Link>

                    <Link to='#' className="home-category-content-btn home-category-content-pc">
                        <div className="home-category-btn-title">
                            <p className="home-category-btn-title-p">
                                Gaming Char
                            </p>
                        </div>
                        <div className="home-category-btn-content"
                            style={{
                                backgroundImage: "linear-gradient(to left ,#F1CD6C, #f3dd9f)",
                                color: "darkred",
                            }}
                        >
                            <img src={Char} alt="" className="home-category-btn-content-pc" />
                        </div>
                    </Link>

                    <Link to='#' className="home-category-content-btn home-category-content-pc">
                        <div className="home-category-btn-title">
                            <p className="home-category-btn-title-p">
                                cooling accessories
                            </p>
                        </div>
                        <div className="home-category-btn-content"
                            style={{
                                backgroundImage: "linear-gradient(to left ,#F1CD6C, #f3dd9f)",
                                color: "darkred",
                            }}
                        >
                            <img src={Cooling} alt="" className="home-category-btn-content-pc" />
                        </div>
                    </Link>

                    <Link to='#' className="home-category-content-btn home-category-content-pc">
                        <div className="home-category-btn-title">
                            <p className="home-category-btn-title-p">
                                network equipment
                            </p>
                        </div>
                        <div className="home-category-btn-content"
                            style={{
                                backgroundImage: "linear-gradient(to left ,#F1CD6C, #f3dd9f)",
                                color: "darkred",
                            }}
                        >
                            <img src={Wifi} alt="" className="home-category-btn-content-pc" />
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default HomeCategory