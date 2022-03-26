import React from 'react'
import NewProductsContent from './NewProductsContent'
import NewProductsHeader from './NewProductsHeader'

function NewProducts() {
  return (
    <div className="new-products">
      <NewProductsHeader />
      <NewProductsContent />
    </div>
  )
}

export default NewProducts