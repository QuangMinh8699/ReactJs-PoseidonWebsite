import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../Assets/Css/NewProductsCategory.css'

function NewProductsCategory() {

    const [translateY, setTranslateY] = useState('');
    const [rotate, setRotate] = useState('');

    const handleChangeDisplay = () => {
        setTranslateY('translateY(0vw)')
        setRotate('rotate(90deg)')

        if (translateY == 'translateY(0vw)' && rotate == 'rotate(90deg)') {
            setTranslateY('translateY(-23vw)')
            setRotate('none')
        }


    }

    return (
        <div className="new-products-category-main">
            <div className="new-products-category">
                <div className="new-products-category-header"
                    style={{
                        backgroundImage: "linear-gradient(to left ,#F1CD6C, #f3dd9f)",
                    }}

                    onClick={handleChangeDisplay}
                >
                    <p className="new-products-category-header-p">
                        CATEGORY
                    </p>
                    <i class="new-products-category-header-icon bi bi-chevron-right"
                        style={{
                            transform: rotate,
                            transition: '0.25s',
                        }}
                    ></i>
                </div>

                <div className="new-products-category-content">
                    <ul className="new-products-category-ul"
                        style={{
                            transform: translateY,
                            transition: '0.25s',
                        }}
                    >
                        <Link className="new-products-category-li" to='/new'><li >GAMING WORKSTATION</li></Link>
                        <Link className="new-products-category-li" to='/new'><li >GAMING LAPTOP</li></Link>
                        <Link className="new-products-category-li" to='/new'><li >PARTS OF COMPUTER</li></Link>
                        <Link className="new-products-category-li" to='/new'><li >GAMING GEAR</li></Link>
                        <Link className="new-products-category-li" to='/new'><li >COMPUTER SCREEN</li></Link>
                        <Link className="new-products-category-li" to='/new'><li >GAMING CHAR</li></Link>
                        <Link className="new-products-category-li" to='/new'><li >COOLING ACCESSORIES</li></Link>
                        <Link className="new-products-category-li" to='/new'><li >NETWORK EQUIPMENT</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NewProductsCategory