import React from 'react'
import '../Assets/Css/NewProductsSideBar.css'
import NewProductsCategory from './NewProductsCategory'
import NewProductsFilter from './NewProductsFilter'

function NewProductsSideBar() {
  return (
    <div className="new-products-side-bar">
      <NewProductsCategory />
      <NewProductsFilter />
    </div>
  )
}

export default NewProductsSideBar