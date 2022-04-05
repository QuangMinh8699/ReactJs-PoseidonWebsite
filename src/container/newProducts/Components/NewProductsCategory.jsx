import React, { useState } from 'react'
import { Link } from 'react-router-dom';
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
                        <Link className="new-products-category-li" to='/new'><li >gaming workstation</li></Link>
                        <Link className="new-products-category-li" to='/new'><li >gaming laptop</li></Link>
                        <Link className="new-products-category-li" to='/new'><li >parts of computer</li></Link>
                        <Link className="new-products-category-li" to='/new'><li >gaming gear</li></Link>
                        <Link className="new-products-category-li" to='/new'><li >computer screen</li></Link>
                        <Link className="new-products-category-li" to='/new'><li >gaming char</li></Link>
                        <Link className="new-products-category-li" to='/new'><li >cooling accessories</li></Link>
                        <Link className="new-products-category-li" to='/new'><li >network equipment</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NewProductsCategory