import React from "react";
import { useNavigate } from "react-router-dom";

const FormActions = ({ isLoading , onCancel }) => {
  const navigate = useNavigate()
  return (
    <div className="mt-8 flex flex-col-reverse gap-3 border-t border-gray-200 pt-6 sm:flex-row sm:justify-end">
      {/* Cancel button */}
      <button
        type="button"
        onClick={onCancel}
        disabled={isLoading}
       className=" cursor-pointer rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
      >
        Cancel
      </button>

      {/* Submit button */}
      <button
        type="submit"
          disabled={isLoading}
        className=" cursor-pointer rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800  disabled:cursor-not-allowed"
      >
      {isLoading ? "Adding Product..." : "Add Product"}
      </button>

      <button
        type="button"
          disabled={isLoading}
          onClick={()=>{navigate('/dashboard')}}
        className=" cursor-pointer rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800  disabled:cursor-not-allowed"
      >
     Return to Dashboard
      </button>
    </div>
  );
};

export default FormActions;