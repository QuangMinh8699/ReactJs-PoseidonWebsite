import React from 'react'
import '../Assets/Css/NewProductsCategory.css'

function NewProductsCategory() {
    return (
        <div className="new-products-category-main">
            <div className="new-products-category">
                <div className="new-products-category-header"
                    style={{
                        backgroundImage: "linear-gradient(to left ,#F1CD6C, #f3dd9f)",
                    }}
                >
                    <p className="new-products-category-header-p">
                        CATEGORY
                    </p>
                    <i class="new-products-category-header-icon bi bi-chevron-right"></i>
                </div>

                <div className="new-products-category-content">
                    <ul className="new-products-category-ul">
                        <li className="new-products-category-li">GAMING WORKSTATION</li>
                        <li className="new-products-category-li">GAMING LAPTOP</li>
                        <li className="new-products-category-li">PARTS OF COMPUTER</li>
                        <li className="new-products-category-li">GAMING GEAR</li>
                        <li className="new-products-category-li">COMPUTER SCREEN</li>
                        <li className="new-products-category-li">GAMING CHAR</li>
                        <li className="new-products-category-li">COOLING ACCESSORIES</li>
                        <li className="new-products-category-li">NETWORK EQUIPMENT</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NewProductsCategory