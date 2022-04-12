import React, { useState } from 'react'
import '../Assets/Css/NewProductsCategory.css'

function NewProductsCategory() {

    const [display1, setDisplay] = useState('block');
    const [rotate, setRotate] = useState('rotate(90deg)');

    const handleChangeDisplay = () => {
        setDisplay('block')
        setRotate('rotate(90deg)')

        if (display1 === 'block' && rotate === 'rotate(90deg)') {
            setDisplay('none')
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
                    <i className="new-products-category-header-icon bi bi-chevron-right"
                        style={{
                            transform: rotate,
                            transition: '0.25s',
                        }}
                    ></i>
                </div>

                <div className="new-products-category-content"
                    style={{
                        display: display1,
                        transition: '0.25s',
                    }}
                >
                    <ul className="new-products-category-ul">
                        <a className="new-products-category-li" href='#new-products-content-right-gaming-workstation-id'><li >gaming workstation</li></a>
                        <a className="new-products-category-li" href='#new-products-content-right-gaming-laptop-id'><li >gaming laptop</li></a>
                        <a className="new-products-category-li" href='#new-products-content-right-gaming-parts-id'><li >parts of computer</li></a>
                        <a className="new-products-category-li" href='#new-products-content-right-gaming-gear-id'><li >gaming gear</li></a>
                        <a className="new-products-category-li" href='#new-products-content-right-gaming-screen-id'><li >computer screen</li></a>
                        <a className="new-products-category-li" href='#new-products-content-right-gaming-char-id'><li >gaming char</li></a>
                        <a className="new-products-category-li" href='#new-products-content-right-gaming-cooling-id'><li >cooling accessories</li></a>
                        <a className="new-products-category-li" href='#new-products-content-right-gaming-network-id'><li >network equipment</li></a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NewProductsCategory