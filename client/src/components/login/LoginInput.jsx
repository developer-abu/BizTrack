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
    <form onSubmit={handleSubmit} className="space-y-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

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
        <p className="mt-3 text-sm text-red-500">
          {errorMessage}
        </p>
      )}
{/* showing login success message */}
      {successMessage && (
        <p className="mt-3 text-sm text-green-600">
          {successMessage}
        </p>
      )}
      {/* Forgot password */}
      <div className="flex justify-end">
        <Link
          to="/forgot-password"
          className="text-sm font-medium text-gray-600 hover:text-gray-900 hover:underline"
        >
          Forgot password?
        </Link>
      </div>

      {/* Login button */}
      <button
        type="submit"
         disabled={isLoading}
        className="cursor-pointer w-full rounded-lg bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
      >
  {isLoading ? "Logging in..." : "Login"}
      </button>

    </form>
  );
};

export default LoginInput;