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
      title: "Track Your Business",
      description:
        "Monitor customers, payments, outstanding dues, sales, inventory, and business reports.",
    },
  ];

  return (
    // How it works section
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How BizTrack Works
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600">
            Start managing your business in a few simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative">

              {/* Step number */}
              <span className="text-sm font-bold text-gray-400">
                {step.number}
              </span>

              {/* Step title */}
              <h3 className="mt-3 text-lg font-semibold text-gray-900">
                {step.title}
              </h3>

              {/* Step description */}
              <p className="mt-3 text-sm leading-6 text-gray-600">
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