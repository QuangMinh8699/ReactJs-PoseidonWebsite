import React from 'react'
import Footer from '../../footer/Components/Footer'
import AllProductsContent from './AllProductsContent'
import AllProductsHeader from './AllProductsHeader'

function AllProducts() {
  return (
      <div className="all-products-main">
        <AllProductsHeader />
        <AllProductsContent />
        <Footer />
      </div>
  )
}

export default AllProducts