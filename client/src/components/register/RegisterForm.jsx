import React from "react";
import FormInput from "./FormInput";
import PasswordInput from "./PasswordInput";

const RegisterForm = () => {
  return (
    // Register form
    <form className="space-y-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

      {/* Business name */}
      <FormInput
        label="Business Name"
        type="text"
        name="shopName"
        placeholder="Enter your business name"
      />

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

      {/* Password */}
      <PasswordInput
        label="Password"
        name="password"
        placeholder="Create a password"
      />

      {/* Confirm password */}
      <PasswordInput
        label="Confirm Password"
        name="confirmPassword"
        placeholder="Confirm your password"
      />

      {/* Submit button */}
      <button
        type="submit"
        className="w-full rounded-lg bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
      >
        Create Account
      </button>

    </form>
  );
};

export default RegisterForm;