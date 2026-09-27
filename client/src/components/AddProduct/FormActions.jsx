import React from "react";
import { useNavigate } from "react-router-dom";

const FormActions = ({ isLoading , onCancel }) => {
  const navigate = useNavigate()
  return (
    <div className="mt-8 flex flex-col-reverse gap-3 border-t border-[#eeeae2] pt-6 sm:flex-row sm:justify-end">
      {/* Cancel button */}
      <button
        type="button"
        onClick={onCancel}
        disabled={isLoading}
       className="cursor-pointer rounded-md border border-[#c9cec6] px-5 py-3 text-sm font-medium text-[#33443d] transition-colors hover:bg-[#fbfaf7] disabled:cursor-not-allowed disabled:opacity-60"
      >
        Cancel
      </button>

      {/* Submit button */}
      <button
        type="submit"
          disabled={isLoading}
        className="cursor-pointer rounded-md bg-[#27624f] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1d4e3e] disabled:cursor-not-allowed"
      >
      {isLoading ? "Adding Product..." : "Add Product"}
      </button>

      <button
        type="button"
          disabled={isLoading}
          onClick={()=>{navigate('/dashboard')}}
        className="cursor-pointer rounded-md bg-[#293b33] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#202a27] disabled:cursor-not-allowed"
      >
     Return to Dashboard
      </button>
    </div>
  );
};

export default FormActions;