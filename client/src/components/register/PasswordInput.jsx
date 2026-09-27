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
        className="mb-2 block text-sm font-semibold text-[#34443d]"
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
          className="w-full rounded-md border border-[#d8d8d0] bg-white px-4 py-3 pr-20 text-sm text-[#202a27] outline-none transition placeholder:text-[#9aa29c] focus:border-[#34715f] focus:ring-2 focus:ring-[#edf3ee]"
        />

        {/* Show / hide password */}
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-[#7b8780] hover:text-[#27624f]"
        >
          {showPassword ? "Hide" : "Show"}
        </button>

      </div>

    </div>
  );
};

export default PasswordInput;