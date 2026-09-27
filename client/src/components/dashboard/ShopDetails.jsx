import React from "react";

const ShopDetails = ({ shop }) => {
    if (!shop) {
    return (
      <p className="mt-8 text-center text-[#65716c]">
        Shop details unavailable.
      </p>
    );
  }

  return (
    <section className="surface-shadow mt-8 rounded-lg border border-[#dedbd3] bg-white p-4 sm:p-6">
      {/* Section heading */}
      <div>
        <h2 className="font-serif text-xl font-extrabold text-[#202a27] sm:text-2xl">
          Shop Details
        </h2>

        <p className="mt-1 text-sm text-[#65716c]">
          Your shop information.
        </p>
      </div>

      {/* Shop information */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Shop Name */}
        <div className="rounded-md border border-[#eeeae2] bg-[#fbfaf7] p-4">
          <p className="text-sm font-medium text-[#7b8780]">
            Shop Name
          </p>

          <p className="mt-1 break-words text-base font-semibold text-[#34443d]">
            {shop?.shopName}
          </p>
        </div>

        {/* Email */}
        <div className="rounded-md border border-[#eeeae2] bg-[#fbfaf7] p-4">
          <p className="text-sm font-medium text-[#7b8780]">
            Email
          </p>

          <p className="mt-1 break-all text-base font-semibold text-[#34443d]">
            {shop?.email}
          </p>
        </div>

        {/* Phone */}
        <div className="rounded-md border border-[#eeeae2] bg-[#fbfaf7] p-4">
          <p className="text-sm font-medium text-[#7b8780]">
            Phone
          </p>

          <p className="mt-1 text-base font-semibold text-[#34443d]">
            {shop?.phone }
          </p>
        </div>

        {/* Shop ID */}
        <div className="rounded-md border border-[#eeeae2] bg-[#fbfaf7] p-4 sm:col-span-2 lg:col-span-3">
          <p className="text-sm font-medium text-[#7b8780]">
            Shop ID
          </p>

          <p className="mt-1 break-all text-sm font-semibold text-[#34443d]">
            {shop?._id || shop?.id}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShopDetails;