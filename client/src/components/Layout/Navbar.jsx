import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // Main navbar
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-gray-900"
        >
          BizTrack
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-2 sm:gap-4">

          {/* Login button */}
          <Link
            to="/login"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
          >
            Login
          </Link>

          {/* Register button */}
          <Link
            to="/register"
            className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
          >
            Get Started
          </Link>

        </nav>
      </div>
    </header>
  );
};

export default Navbar;