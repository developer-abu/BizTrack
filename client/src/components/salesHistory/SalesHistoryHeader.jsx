import React from "react";
import { Link } from "react-router-dom";

const SalesHistoryHeader = () => {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Sales History
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            View all your sales and download receipts.
          </p>
        </div>

        <Link
          to="/sales/create"
          className="inline-flex w-fit items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
        >
          Create New Sale
        </Link>
      </div>
    </header>
  );
};

export default SalesHistoryHeader;