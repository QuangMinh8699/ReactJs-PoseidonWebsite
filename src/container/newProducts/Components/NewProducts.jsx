import React from 'react'
import Footer from '../../footer/Components/Footer'
import NewProductsContent from './NewProductsContent'
import NewProductsHeader from './NewProductsHeader'

function NewProducts() {
  return (
    <div className="new-products">
      <NewProductsHeader />
      <NewProductsContent />
      <Footer />
    </div>
  )
}

export default NewProducts