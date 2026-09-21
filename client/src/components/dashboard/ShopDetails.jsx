import React from "react";

const ShopDetails = ({ shop }) => {
  return (
    <section className="mt-6 rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
      {/* Section heading */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
          Shop Details
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Your shop information.
        </p>
      </div>

      {/* Shop information */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Shop Name */}
        <div className="rounded-lg bg-gray-50 p-4">
          <p className="text-sm font-medium text-gray-500">
            Shop Name
          </p>

          <p className="mt-1 break-words text-base font-semibold text-gray-900">
            {shop?.shopName || "Not available"}
          </p>
        </div>

        {/* Email */}
        <div className="rounded-lg bg-gray-50 p-4">
          <p className="text-sm font-medium text-gray-500">
            Email
          </p>

          <p className="mt-1 break-all text-base font-semibold text-gray-900">
            {shop?.email || "Not available"}
          </p>
        </div>

        {/* Phone */}
        <div className="rounded-lg bg-gray-50 p-4">
          <p className="text-sm font-medium text-gray-500">
            Phone
          </p>

          <p className="mt-1 text-base font-semibold text-gray-900">
            {shop?.phone || "Not available"}
          </p>
        </div>

        {/* Shop ID */}
        <div className="rounded-lg bg-gray-50 p-4 sm:col-span-2 lg:col-span-3">
          <p className="text-sm font-medium text-gray-500">
            Shop ID
          </p>

          <p className="mt-1 break-all text-sm font-semibold text-gray-900">
            {shop?._id || shop?.id || "Not available"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShopDetails;