import React from 'react'
import '../Assets/Css/NewProductsSideBar.css'
import NewProductsCategory from './NewProductsCategory'
import NewProductsFilter from './NewProductsFilter'

function NewProductsSideBar() {
  return (
    <div className="new-products-side-bar">
      <NewProductsCategory />
      <NewProductsFilter />
      <div className="side-bar-footer"></div>
    </div>
  )
}

export default NewProductsSideBar