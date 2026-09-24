import React from 'react'
import SalesHeader from '../components/CreateSell/SalesHeader'
import CreateSaleForm from '../components/CreateSell/CreateSaleForm'

const CreateSell = () => {
  return (
      <div className="min-h-screen bg-gray-50">
      <SalesHeader />

     <main className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
        <CreateSaleForm />
      </main>
    </div>
  )
}

export default CreateSell
