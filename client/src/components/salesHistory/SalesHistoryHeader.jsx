import React from "react";
import { Link } from "react-router-dom";

const SalesHistoryHeader = () => {
  return (
    <header className="border-b border-[#dedbd3] bg-[#fbfaf7]/95">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <h1 className="font-serif text-3xl font-extrabold text-[#202a27] sm:text-4xl">
            Sales History
          </h1>

          <p className="mt-1 text-sm text-[#65716c]">
            View all your sales and download receipts.
          </p>
        </div>

        <Link
          to="/sales/create"
          className="inline-flex w-fit items-center justify-center rounded-md bg-[#27624f] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1d4e3e]"
        >
          Create New Sale
        </Link>

        <Link
          to="/dashboard"
          className="inline-flex w-fit items-center justify-center rounded-md bg-[#293b33] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#202a27]"
        >
          Return To Dashboard
        </Link>
      </div>
    </header>
  );
};

export default SalesHistoryHeader;