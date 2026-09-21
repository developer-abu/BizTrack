import React from "react";

const ShopDetails = () => {
  return (
    <section className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* Section heading */}
      <div>
        <h2 className="text-xl font-bold text-gray-900">
          Shop Details
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Your shop information.
        </p>
      </div>

      {/* Shop information */}
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

        {/* Shop Name */}
        <div>
          <p className="text-sm font-medium text-gray-500">
            Shop Name
          </p>

          <p className="mt-1 text-base font-semibold text-gray-900">
            My Shop
          </p>
        </div>

        {/* Email */}
        <div>
          <p className="text-sm font-medium text-gray-500">
            Email
          </p>

          <p className="mt-1 text-base font-semibold text-gray-900">
            shop@example.com
          </p>
        </div>

        {/* Phone */}
        <div>
          <p className="text-sm font-medium text-gray-500">
            Phone
          </p>

          <p className="mt-1 text-base font-semibold text-gray-900">
            9876543210
          </p>
        </div>

      </div>
    </section>
  );
};

export default ShopDetails;