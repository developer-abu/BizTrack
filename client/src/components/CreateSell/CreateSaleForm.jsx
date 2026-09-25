
import React, { useState } from "react";

import BuyerDetails from "./BuyerDetails";
import ProductSelector from "./ProductSelector";
import SaleSummary from "./SaleSummary";
import SaleActions from "./SaleActions";
import api from "../../api/axios.js";
import { useNavigate } from "react-router-dom";


const CreateSaleForm = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [givenAmount, setGivenAmount] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [createdSale, setCreatedSale] = useState(null);
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");
    setCreatedSale(null);

    if (selectedProducts.length === 0) {
      setErrorMessage("Please select at least one product.");
      return;
    }

    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData);

    const saleData = {
      buyerName: formValues.buyerName,
      buyerPhone: formValues.buyerPhone,
      buyerAddress: formValues.buyerAddress,

      items: selectedProducts.map((product) => ({
        productId: product._id,
        quantity: Number(product.saleQuantity),
      })),

      paidAmount: Number(givenAmount || 0),
    };

    try {
      setIsLoading(true);

      const response = await api.post("/sales/create", saleData);

      setSuccessMessage(response.data.message);
      setCreatedSale(response.data.data);

      setSelectedProducts([]);
      setGivenAmount("");


      e.target.reset();

      setTimeout(() => {
  setSuccessMessage("")
  navigate('/sales')
}, 2000);


    } catch (error) {
      setErrorMessage(
        error.response?.data?.message ||
          "Failed to create sale. Please try again."
      );
      setTimeout(() => {
        setErrorMessage("")
      }, 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {errorMessage && (
        <div
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700"
        >
          {errorMessage}
        </div>
      )}

      {successMessage && (
        <div
          role="status"
          className="rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-700"
        >
          <p className="font-semibold">{successMessage}</p>

          {createdSale && (
            <p className="mt-1 break-all">
              Sale ID: {createdSale.id}
            </p>
          )}
        </div>
      )}

      <BuyerDetails />

      <ProductSelector
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
      />

      <SaleSummary
        selectedProducts={selectedProducts}
        givenAmount={givenAmount}
        setGivenAmount={setGivenAmount}
      />

      <SaleActions isLoading={isLoading} />
    </form>
  );
};

export default CreateSaleForm;