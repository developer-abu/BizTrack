import React from "react";

const BuyerDetails = () => {
  return (
    <section className="surface-shadow rounded-lg border border-[#dedbd3] bg-white p-5 sm:p-6">
      <div>
        <h2 className="font-serif text-xl font-semibold text-[#202a27]">
          Buyer Details
        </h2>

        <p className="mt-1 text-sm text-[#65716c]">
          Enter the buyer information.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-[#34443d]">
            Buyer Name
          </label>

          <input
            type="text"
            name="buyerName"
            placeholder="Enter buyer name"
            className="mt-2 w-full rounded-md border border-[#d8d8d0] px-4 py-3 text-sm outline-none focus:border-[#34715f] focus:ring-2 focus:ring-[#edf3ee]"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-[#34443d]">
            Mobile Number
          </label>

          <input
            type="tel"
            name="buyerPhone"
            placeholder="Enter mobile number"
            className="mt-2 w-full rounded-md border border-[#d8d8d0] px-4 py-3 text-sm outline-none focus:border-[#34715f] focus:ring-2 focus:ring-[#edf3ee]"
          />
        </div>

        <div className="md:col-span-2">
          <label className="text-sm font-semibold text-[#34443d]">
            Address
          </label>

          <textarea
            name="buyerAddress"
            rows="3"
            placeholder="Enter buyer address"
            className="mt-2 w-full resize-none rounded-md border border-[#d8d8d0] px-4 py-3 text-sm outline-none focus:border-[#34715f] focus:ring-2 focus:ring-[#edf3ee]"
          />
        </div>
      </div>
    </section>
  );
};

export default BuyerDetails;