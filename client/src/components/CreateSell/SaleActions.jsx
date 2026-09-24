import React from "react";

const SaleActions = ({ isLoading }) => {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
      <button
           disabled={isLoading}
        type="submit"
        className=" cursor-pointer w-full rounded-lg bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 sm:w-auto"
      >
         {isLoading ? "Creating Sale..." : "Create Sale"}
      </button>
    </div>
  );
};

export default SaleActions;