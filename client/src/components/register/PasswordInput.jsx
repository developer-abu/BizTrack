import React, { useState } from "react";

const PasswordInput = ({label,name,placeholder,}) => {
  // Password visibility state
  const [showPassword, setShowPassword] = useState(false);

  return (
    // Password input
    <div>

      {/* Input label */}
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-gray-700"
      >
        {label}
      </label>

      {/* Password field wrapper */}
      <div className="relative">

        {/* Password input */}
        <input
          id={name}
          name={name}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 pr-20 text-sm text-gray-900 outline-none transition focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
        />

        {/* Show / hide password */}
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-500 hover:text-gray-900"
        >
          {showPassword ? "Hide" : "Show"}
        </button>

      </div>

    </div>
  );
};

export default PasswordInput;