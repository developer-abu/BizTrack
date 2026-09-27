import React from 'react'
import { Helmet } from 'react-helmet-async'
import SalesHeader from '../components/CreateSell/SalesHeader'
import CreateSaleForm from '../components/CreateSell/CreateSaleForm'

const CreateSell = () => {
  return (
      <div className="min-h-screen bg-[#f7f4ed]">
      <Helmet>
        <title>Create Sale | BizTrack</title>
      </Helmet>
      <SalesHeader />

     <main className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
        <CreateSaleForm />
      </main>
    </div>
  )
}

export default CreateSell
