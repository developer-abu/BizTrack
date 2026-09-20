import React, { useState } from "react";
import FormInput from "./FormInput";
import PasswordInput from "./PasswordInput";
import api from "../../api/axios";

const RegisterForm = () => {
  // showing success or failure message from backend and working on button
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // handle registration submit 
  const handleSubmit = async(e)=>{
  e.preventDefault();
    // Clear previous messages
    setErrorMessage("");
    setSuccessMessage("");
  // Collect all form values
  const formData = new FormData(e.target);

  // Convert FormData into normal JavaScript object
  const data = Object.fromEntries(formData);



  try {
         // Disable button while request is running
      setIsLoading(true);
    const response = await api.post(
      "/register",
      data
    );

     // Show success message
      setSuccessMessage(response.data.message);

      // Clear form
      e.target.reset();

 setIsLoading(false);
    // Remove success message after 5 seconds
    setTimeout(() => {
      setSuccessMessage("");
    }, 5000);

  } catch (error) {
    setErrorMessage(error.response?.data?.message)
     setIsLoading(false);
         // Remove error message after 5 seconds
    setTimeout(() => {
      setErrorMessage("");
    }, 5000);
  }

  }
  return (
    // Register form
    <form onSubmit={handleSubmit} className="space-y-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

      {/* Business name */}
      <FormInput
        label="Business Name"
        type="text"
        name="shopName"
        placeholder="Enter your business name"
      />
<p className="mt-1 text-sm text-gray-800 font-[poppins]">
  At least 5 characters. Only letters and spaces are allowed.
</p>
      {/* Email */}
      <FormInput
        label="Email Address"
        type="email"
        name="email"
        placeholder="Enter your email"
      />

      {/* Phone */}
      <FormInput
        label="Phone Number"
        type="tel"
        name="phone"
        placeholder="Enter your phone number"
      />
<p className="mt-1 text-sm text-gray-800 font-[poppins]">
 Mobile number must be exactly 10 digits.
</p>
      {/* Password */}
      <PasswordInput
        label="Password"
        name="password"
        placeholder="Create a password"
      />
<p className="mt-1 text-sm text-gray-800 font-[poppins]">
  Must be at least 6 character,<br/>
  Max 12 characters are allowed, <br/>
  At least one uppercase , one lowercase and one special character.
</p>
      {/* Confirm password */}
      <PasswordInput
        label="Confirm Password"
        name="confirmPassword"
        placeholder="Confirm your password"
      />
<p className="mt-1 text-sm text-gray-800 font-[poppins]">
  Must match your password.
</p>
{/* showing error or success message */}

{/* Error message */}
      {errorMessage && (
        <p className="mt-4 text-sm text-red-600">
          {errorMessage}
        </p>
      )}

      {/* Success message */}
      {successMessage && (
        <p className="mt-4 text-sm text-green-600">
          {successMessage}
        </p>
      )}

      {/* Submit button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-lg bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
      >
    {isLoading ? "Creating Account..." : "Create Account"}
      </button>

    </form>
  );
};

export default RegisterForm;