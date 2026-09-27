import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <header className="border-b border-[#dedbd3] bg-[#f7f4ed]">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* Logo */}
        <Link
          to="/"
            className="brand-mark text-[1.35rem] font-extrabold text-[#202a27]"
        >
          BizTrack
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-2 sm:gap-5">

          {/* Login button */}
          <Link
            to="/login"
              className="rounded-md px-4 py-2.5 text-sm font-bold text-[#53645b] hover:text-[#27624f]"
          >
            Login
          </Link>

          {/* Register button */}
          <Link
            to="/register"
              className="rounded-md bg-[#27624f] px-4 py-2.5 text-sm font-bold text-white hover:bg-[#1d4e3e]"
          >
            Get Started
          </Link>

        </nav>
      </div>
    </header>
  );
};

export default Navbar;