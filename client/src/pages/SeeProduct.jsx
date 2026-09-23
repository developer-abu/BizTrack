import React from 'react'
import ProductsHeader from '../components/SeeProduct/ProductsHeader'
import ProductsTable from '../components/SeeProduct/ProductsTable'

const SeeProduct = () => {
  return (
   <div className="min-h-screen bg-gray-50">
      <ProductsHeader />

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <ProductsTable />
      </main>
    </div>
  )
}

export default SeeProduct
