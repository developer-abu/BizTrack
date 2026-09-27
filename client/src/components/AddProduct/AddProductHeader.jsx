import React from "react";

const AddProductHeader = () => {
  return (
    <div className="mb-8">
      {/* Page title */}
      <h1 className="font-serif text-3xl font-extrabold tracking-tight text-[#202a27] sm:text-4xl">
        Add New Product
      </h1>

      {/* Page description */}
      <p className="mt-2 text-sm leading-6 text-[#65716c] sm:text-base">
        Add a new product to your inventory and manage its stock details.
      </p>
    </div>
  );
};

export default AddProductHeader;