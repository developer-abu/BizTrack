import React from "react";

const AccountActions = () => {
  return (
    // Account actions section
    <section className="mt-10 rounded-xl border border-gray-200 bg-white p-6">
      {/* Section heading */}
      <h2 className="text-xl font-bold text-gray-900">
        Account
      </h2>

      <p className="mt-1 text-sm text-gray-500">
        Manage your account.
      </p>

      {/* Account buttons */}
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">

        {/* Logout */}
        <button
          type="button"
          className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
        >
          Logout
        </button>

        {/* Permanent account deletion */}
        <button
          type="button"
          className="rounded-lg bg-red-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-red-700"
        >
          Delete Account Permanently
        </button>

      </div>
    </section>
  );
};

export default AccountActions;