import React from 'react'
import '../Assets/Css/NewProductsContent.css'
import NewProductsRight from './NewProductsRight'
import NewProductsSideBar from './NewProductsSideBar'

function NewProductsContent() {

  return (
    <div className="new-products-content">
      <div className="new-products-side-bar-main">
        <NewProductsSideBar />
      </div>
      <div className="new-products-right-main">
        <NewProductsRight />
      </div>
    </div>
  )
}

export default NewProductsContent