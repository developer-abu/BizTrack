import React from "react";
import { Link } from "react-router-dom";

const ProductsHeader = () => {
  return (
    <header className="border-b border-[#dedbd3] bg-[#fbfaf7]/95">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <h1 className="font-serif text-3xl font-extrabold text-[#202a27]">
            Products
          </h1>

          <p className="mt-1 text-sm text-[#65716c]">
            View all products added to your shop.
          </p>
        </div>

        <Link
          to="/dashboard"
          className="inline-flex w-full items-center justify-center rounded-md bg-[#293b33] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#202a27] sm:w-auto"
        >
          Return To Dashboard
        </Link>
        <Link
          to="/products/create"
          className="inline-flex w-full items-center justify-center rounded-md bg-[#27624f] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1d4e3e] sm:w-auto"
        >
          + Add Product
        </Link>
      </div>
    </header>
  );
};

export default ProductsHeader;