import React from "react";
import { useNavigate } from "react-router-dom";

const SaleActions = ({ isLoading }) => {
 const navigate = useNavigate()
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
      <button
           disabled={isLoading}
        type="submit"
        className=" cursor-pointer w-full rounded-lg bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 sm:w-auto"
      >
         {isLoading ? "Creating Sale..." : "Create Sale"}
      </button>

      <button
           disabled={isLoading}
        type="button"
        onClick={()=>{navigate('/dashboard')}}
        className=" cursor-pointer w-full rounded-lg bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 sm:w-auto"
      >
        Return To Dashboard
      </button>
    </div>
  );
};

export default SaleActions;