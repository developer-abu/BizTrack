import React from "react";

const FormActions = () => {
  return (
    <div className="mt-8 flex flex-col-reverse gap-3 border-t border-gray-200 pt-6 sm:flex-row sm:justify-end">
      {/* Cancel button */}
      <button
        type="button"
        className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
      >
        Cancel
      </button>

      {/* Submit button */}
      <button
        type="submit"
        className="rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
      >
        Add Product
      </button>
    </div>
  );
};

export default FormActions;