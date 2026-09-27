import React from "react";
import { useNavigate } from "react-router-dom";

const SaleActions = ({ isLoading }) => {
 const navigate = useNavigate()
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
      <button
           disabled={isLoading}
        type="submit"
        className="w-full cursor-pointer rounded-md bg-[#27624f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1d4e3e] sm:w-auto"
      >
         {isLoading ? "Creating Sale..." : "Create Sale"}
      </button>

      <button
           disabled={isLoading}
        type="button"
        onClick={()=>{navigate('/dashboard')}}
        className="w-full cursor-pointer rounded-md bg-[#293b33] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#202a27] sm:w-auto"
      >
        Return To Dashboard
      </button>
    </div>
  );
};

export default SaleActions;