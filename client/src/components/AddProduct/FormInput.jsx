import React from "react";

const FormInput = ({label,name,type = "text",placeholder,}) => {
  return (
    <div>
      {/* Input label */}
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-gray-700"
      >
        {label}
      </label>

      {/* Input field */}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
      />
    </div>
  );
};

export default FormInput;