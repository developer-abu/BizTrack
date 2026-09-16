import React from "react";
import FormInput from "./FormInput";
import FormActions from "./FormActions";

const AddProductForm = () => {
  return (
    <form className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
      {/* Product information */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900">
          Product Information
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Enter the basic details of your product.
        </p>
      </div>

      {/* Form fields */}
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {/* Product name */}
        <FormInput
          label="Product Name"
          name="productName"
          type="text"
          placeholder="Enter product name"
        />

        {/* Buying price */}
        <FormInput
          label="Buying Price"
          name="buyingPrice"
          type="number"
          placeholder="Enter buying price"
        />

        {/* Selling price */}
        <FormInput
          label="Selling Price"
          name="sellingPrice"
          type="number"
          placeholder="Enter selling price"
        />

        {/* MRP */}
        <FormInput
          label="MRP"
          name="mrp"
          type="number"
          placeholder="Enter MRP"
        />

        {/* Discount */}
        <FormInput
          label="Discount"
          name="discount"
          type="number"
          placeholder="Enter discount"
        />

        {/* Stock */}
        <FormInput
          label="Stock"
          name="stock"
          type="number"
          placeholder="Enter stock quantity"
        />

{/* Quantity type */}
<div>
  <label
    htmlFor="quantityType"
    className="mb-2 block text-sm font-medium text-gray-700"
  >
    Quantity Type
  </label>

  <select
    id="quantityType"
    name="quantityType"
    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
  >
    <option value="">Select quantity type</option>
    <option value="pieces">Pieces</option>
    <option value="kg">Kilogram (kg)</option>
    <option value="g">Gram (g)</option>
    <option value="liter">Liter (L)</option>
    <option value="packet">Packet</option>
    <option value="box">Box</option>
    <option value="bottle">Bottle</option>
  </select>
</div>

        {/* Low stock threshold */}
        <FormInput
          label="Low Stock Threshold"
          name="lowStockThreshold"
          type="number"
          placeholder="Enter minimum stock level"
        />

        {/* Manufacturing date */}
        <FormInput
          label="MFG Date"
          name="manufacturingDate"
          type="date"
        />

        {/* Expiry date */}
        <FormInput
          label="EXP Date"
          name="expiryDate"
          type="date"
        />
      </div>

      {/* Form actions */}
      <FormActions />
    </form>
  );
};

export default AddProductForm;