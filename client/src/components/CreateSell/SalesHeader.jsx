import React from "react";

const SalesHeader = () => {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-5 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Create Sale
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Add buyer details, select products and create a sale.
        </p>
      </div>
    </header>
  );
};

export default SalesHeader;