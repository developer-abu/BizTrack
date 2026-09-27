import React from "react";

const SalesHeader = () => {
  return (
    <header className="border-b border-[#dedbd3] bg-[#fbfaf7]/95">
      <div className="mx-auto max-w-5xl px-4 py-5 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl font-extrabold text-[#202a27]">
          Create Sale
        </h1>

        <p className="mt-1 text-sm text-[#65716c]">
          Add buyer details, select products and create a sale.
        </p>
      </div>
    </header>
  );
};

export default SalesHeader;