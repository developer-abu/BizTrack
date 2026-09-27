import React from 'react'
import { Helmet } from 'react-helmet-async'
import ProductsHeader from '../components/SeeProduct/ProductsHeader'
import ProductsTable from '../components/SeeProduct/ProductsTable'

const SeeProduct = () => {
  return (
  <div className="min-h-screen bg-[#f7f4ed]">
      <Helmet>
        <title>Products | BizTrack</title>
      </Helmet>
      <ProductsHeader />

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <ProductsTable />
      </main>
    </div>
  )
}

export default SeeProduct
