import React from "react";
import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  const features = [
    {
      title: "Product Management",
      description:
        "Add and update products, including their prices and stock details.",
    },
    {
      title: "Stock Updates",
      description:
        "Add stock to existing products and keep your inventory up to date.",
    },
    {
      title: "Low-Stock List",
      description:
        "See which products are running low so you know what may need restocking.",
    },
    {
      title: "Sales & Receipts",
      description:
        "Create sales, record payments, and access previous sales and receipts.",
    },
    {
      title: "Due Payments",
      description:
        "Update payments for sales with outstanding balances.",
    },
    {
      title: "Full Product List",
      description:
        "Browse the products you have added to your shop.",
    },
  ];

  return (
    // Features section
    <section id="features" className="bg-[#fbfaf7] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section heading */}
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl leading-tight text-[#202a27] sm:text-5xl">
            Everything You Need to Manage Your Business
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-[#65716c]">
            BizTrack brings your everyday business operations together in one
            simple and organized system.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-[#e5e1d8] bg-[#e5e1d8] sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;