import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../register/FormInput";
import PasswordInput from "../register/PasswordInput";
import api from "../../api/axios.js";


const LoginInput = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");


  const handleSubmit = async (e)=>{

 e.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      setIsLoading(true);

      const response = await api.post("/login", data);

      setSuccessMessage(response.data.message);

  setTimeout(() => {
  navigate("/dashboard");
}, 2000);

        } catch (error) {
      setErrorMessage(
        error.response?.data?.message ||
        "Login failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  
  return (
    // Login form
    <form onSubmit={handleSubmit} className="surface-shadow space-y-5 rounded-lg border border-[#dedbd3] bg-white p-6 sm:p-8">

      {/* Email */}
      <FormInput
        label="Email Address"
        type="email"
        name="email"
        placeholder="Enter your email"
      />

      {/* Password */}
      <PasswordInput
        label="Password"
        name="password"
        placeholder="Enter your password"
      />

      {/* showing any error message */}
  {errorMessage && (
        <p className="mt-3 text-sm text-red-600">
          {errorMessage}
        </p>
      )}
{/* showing login success message */}
      {successMessage && (
        <p className="mt-3 text-sm text-[#34715f]">
          {successMessage}
        </p>
      )}
      {/* Forgot password */}
      <div className="flex justify-end">
        <Link
          to="/forgot-password"
          className="text-sm font-medium text-[#65716c] hover:text-[#27624f] hover:underline"
        >
          Forgot password?
        </Link>
      </div>

      {/* Login button */}
      <button
        type="submit"
         disabled={isLoading}
        className="w-full cursor-pointer rounded-md bg-[#27624f] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1d4e3e] focus:outline-none focus:ring-2 focus:ring-[#34715f] focus:ring-offset-2 disabled:cursor-not-allowed"
      >
  {isLoading ? "Logging in..." : "Login"}
      </button>

    </form>
  );
};

export default LoginInput;