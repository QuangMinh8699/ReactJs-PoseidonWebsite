import React from 'react'
import '../Assets/Css/NewProductsContent.css'
import NewProductsSideBar from './NewProductsSideBar'

function NewProductsContent() {
  return (
    <div className="new-products-content">
      <div className="new-products-side-bar-main">
        <NewProductsSideBar />
      </div>
      <div className="new-products"></div>
    </div>
  )
}

export default NewProductsContent