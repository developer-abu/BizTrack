import React from "react";
import { Link } from "react-router-dom";

const ProductsHeader = () => {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Products
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            View all products added to your shop.
          </p>
        </div>

        <Link
          to="/products/create"
          className="inline-flex w-full items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 sm:w-auto"
        >
          + Add Product
        </Link>
      </div>
    </header>
  );
};

export default ProductsHeader;