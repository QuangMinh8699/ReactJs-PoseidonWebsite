import React, { useState } from 'react'
import '../Assets/Css/NewProductsFilter.css'

function NewProductsFilter() {

    const [display1, setDisplay] = useState('block');
    const [rotate, setRotate] = useState('rotate(90deg)');
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(20000);

    const handleChangeDisplay = () => {
        setDisplay('block')
        setRotate('rotate(90deg)')

        if (display1 === 'block' && rotate === 'rotate(90deg)') {
            setDisplay('none')
            setRotate('none')
        }
    }

    return (
        <div className="new-products-filter-main">
            <div className="new-products-filter">
                <div className="new-products-category-header"
                    style={{
                        backgroundImage: "linear-gradient(to left ,#F1CD6C, #f3dd9f)",
                    }}
                    onClick={handleChangeDisplay}
                >
                    <p className="new-products-category-header-p">
                        PRICE
                    </p>
                    <i class="new-products-category-header-icon bi bi-chevron-right"
                        style={{
                            transform: rotate,
                            transition: '0.25s',
                        }}
                    ></i>
                </div>
                <form className="new-products-filter-content"
                    style={{
                        display: display1,
                        transition: '0.25s',
                    }}
                >
                    <div className="min-max-price-header">
                        <span className="new-products-filter-content-min-price-title">min price</span>
                        <span className="new-products-filter-content-min-price-title">{minPrice}$</span>
                    </div>
                    <input type="range" class="new-products-filter-content-range" min="0" max="19999" id="min-price"
                        value={minPrice}
                        onChange={e => setMinPrice(e.target.value)}
                    />

                    <div className="min-max-price-header">
                        <span className="new-products-filter-content-max-price-title">max price</span>
                        <span className="new-products-filter-content-max-price-title">{maxPrice}$</span> 
                    </div>
                    <input type="range" class="new-products-filter-content-range" min="1" max="20000" id="max-price"
                        value={maxPrice}
                        onChange={e => setMaxPrice(e.target.value)} 
                    />
                </form>
            </div>
        </div>
    )
}

export default NewProductsFilter