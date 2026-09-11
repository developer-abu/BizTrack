import React from "react";
import { Link } from "react-router-dom";
import FormInput from "../register/FormInput";
import PasswordInput from "../register/PasswordInput";


const LoginInput = () => {
  return (
    // Login form
    <form className="space-y-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

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
        className="w-full rounded-lg bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
      >
        Login
      </button>

    </form>
  );
};

export default LoginInput;