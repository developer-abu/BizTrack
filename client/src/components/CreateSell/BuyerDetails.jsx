import React from "react";

const BuyerDetails = () => {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">
          Buyer Details
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Enter the buyer information.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-gray-700">
            Buyer Name
          </label>

          <input
            type="text"
            name="buyerName"
            placeholder="Enter buyer name"
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-gray-900"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">
            Mobile Number
          </label>

          <input
            type="tel"
            name="buyerPhone"
            placeholder="Enter mobile number"
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-gray-900"
          />
        </div>

        <div className="md:col-span-2">
          <label className="text-sm font-medium text-gray-700">
            Address
          </label>

          <textarea
            name="buyerAddress"
            rows="3"
            placeholder="Enter buyer address"
            className="mt-2 w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-gray-900"
          />
        </div>
      </div>
    </section>
  );
};

export default BuyerDetails;