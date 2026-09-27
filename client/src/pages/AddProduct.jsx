import React from 'react'
import { Helmet } from 'react-helmet-async'
import AddProductHeader from '../components/AddProduct/AddProductHeader'
import AddProductForm from '../components/AddProduct/AddProductForm'

const AddProduct = () => {
  return (
    <div className="min-h-screen bg-[#f7f4ed]">
      <Helmet>
        <title>Add Product | BizTrack</title>
      </Helmet>
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
<AddProductHeader/>
<AddProductForm/>
      </main>
    </div>
  )
}

export default AddProduct
