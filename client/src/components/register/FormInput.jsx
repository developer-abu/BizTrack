import React from "react";

const FormInput = ({label,type = "text",name,placeholder}) => {
    
    
    return (
    // Reusable form input
    <div>

      {/* Input label */}
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold text-[#34443d]"
      >
        {label}
      </label>

      {/* Input field */}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md border border-[#d8d8d0] bg-white px-4 py-3 text-sm text-[#202a27] outline-none transition placeholder:text-[#9aa29c] focus:border-[#34715f] focus:ring-2 focus:ring-[#edf3ee]"
      />

    </div>
  );
};

export default FormInput;