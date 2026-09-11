import React from "react";
import { Link } from "react-router-dom";

const DashboardHeader = () => {
  return (
    // Dashboard header
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Brand */}
        <Link
          to="/dashboard"
          className="text-2xl font-bold tracking-tight text-gray-900"
        >
          BizTrack
        </Link>

        {/* Dashboard title */}
        <div className="hidden sm:block">
          <h1 className="text-lg font-semibold text-gray-900">
            Dashboard
          </h1>
        </div>

        {/* Logout button */}
        <button
          type="button"
          className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
        >
          Logout
        </button>

      </div>
    </header>
  );
};

export default DashboardHeader;