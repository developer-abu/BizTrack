import React from "react";

const AddProductHeader = () => {
  return (
    <div className="mb-8">
      {/* Page title */}
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        Add New Product
      </h1>

      {/* Page description */}
      <p className="mt-2 text-sm leading-6 text-gray-500 sm:text-base">
        Add a new product to your inventory and manage its stock details.
      </p>
    </div>
  );
};

export default AddProductHeader;