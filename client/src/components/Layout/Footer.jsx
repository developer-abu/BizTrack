import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // Main footer
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Footer top section */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="text-2xl font-bold tracking-tight text-gray-900"
            >
              BizTrack
            </Link>

            <p className="mt-3 max-w-xs text-sm leading-6 text-gray-500">
              Manage your products, inventory, sales, customers, and payments
              in one place.
            </p>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              Product
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-500 transition-colors hover:text-gray-900"
                >
                  Features
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-500 transition-colors hover:text-gray-900"
                >
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Account links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              Account
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  to="/login"
                  className="text-sm text-gray-500 transition-colors hover:text-gray-900"
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  to="/register"
                  className="text-sm text-gray-500 transition-colors hover:text-gray-900"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / information */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              BizTrack
            </h3>

            <p className="mt-4 text-sm leading-6 text-gray-500">
              A simple business management system built for small businesses.
            </p>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} BizTrack. All rights reserved.
          </p>

          {/* Bottom links */}
          <div className="flex gap-5">
            <Link
              to="/"
              className="text-sm text-gray-500 transition-colors hover:text-gray-900"
            >
              Privacy
            </Link>

            <Link
              to="/"
              className="text-sm text-gray-500 transition-colors hover:text-gray-900"
            >
              Terms
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;