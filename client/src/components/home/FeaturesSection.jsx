import React from "react";
import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  const features = [
    {
      title: "Product Management",
      description:
        "Add, update, and manage your business products with prices, stock, and low-stock thresholds.",
    },
    {
      title: "Inventory Management",
      description:
        "Keep track of available stock and automatically update inventory when sales are completed.",
    },
    {
      title: "Sales Management",
      description:
        "Create multi-product sales, calculate totals, record payments, and generate receipts.",
    },
    {
      title: "Customer Management",
      description:
        "Manage registered customers, view purchase history, and keep track of outstanding balances.",
    },
    {
      title: "Payment Tracking",
      description:
        "Record customer payments and easily track paid, partial, and outstanding dues.",
    },
    {
      title: "Dashboard & Reports",
      description:
        "View important business metrics, recent sales, revenue, stock status, and outstanding dues.",
    },
  ];

  return (
    // Features section
    <section id="features" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything You Need to Manage Your Business
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600">
            BizTrack brings your everyday business operations together in one
            simple and organized system.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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