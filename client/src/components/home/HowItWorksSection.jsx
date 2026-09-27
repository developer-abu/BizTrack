import React from "react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Create Your Account",
      description:
        "Register your business and verify your email to get started with BizTrack.",
    },
    {
      number: "02",
      title: "Add Your Products",
      description:
        "Set up your products with purchase price, selling price, stock, and low-stock thresholds.",
    },
    {
      number: "03",
      title: "Manage Your Sales",
      description:
        "Create sales, track payments, generate receipts, and let BizTrack automatically update your stock.",
    },
    {
      number: "04",
      title: "Keep Things Up to Date",
      description:
        "Browse your products and low-stock list, add stock, and update outstanding payments.",
    },
  ];

  return (
    // How it works section
    <section className="bg-[#edf1eb] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section heading */}
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl leading-tight text-[#202a27] sm:text-5xl">
            How BizTrack Works
          </h2>

          <p className="mt-5 text-base leading-8 text-[#65716c]">
            Start managing your business in a few simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-14 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative border-t border-[#cbd5ca] py-6 pr-6 sm:min-h-56 sm:py-7 lg:border-l lg:border-t-0 lg:pl-6">

              {/* Step number */}
              <span className="font-serif text-4xl text-[#d8795b]">
                {step.number}
              </span>

              {/* Step title */}
              <h3 className="mt-7 text-lg font-bold text-[#25342e]">
                {step.title}
              </h3>

              {/* Step description */}
              <p className="mt-3 text-sm leading-7 text-[#69756f]">
                {step.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;