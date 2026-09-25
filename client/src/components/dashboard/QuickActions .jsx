import React from "react";
import QuickActionCard from "./QuickActionCard ";

const QuickActions = () => {
  // Static quick actions for now
  // These routes can be connected to the actual pages later
  const actions = [
    {
      title: "Create Sale",
      description: "Create a new sale and generate a receipt.",
      to: "/sales/create",
    },
    {
      title: "Add Product",
      description: "Add a new product to your inventory.",
      to: "/products/create",
    },
 
    {
      title: "Available Products",
      description: "Record and track of all available product.",
      to: "/see-products",
    },
    {
      title: "Sales History",
      description: "View your previous sales and receipts.",
      to: "/sales",
    },
    {
      title: "Low Stock Reminder",
      description: "View your less stock product.",
      to: "/less-stock",
    },
  ];

  return (
    // Quick actions section
    <section className="mt-10">

      {/* Section heading */}
      <div>
        <h2 className="text-xl font-bold text-gray-900">
          Quick Actions
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Quickly access your most important business tasks.
        </p>
      </div>

      {/* Action cards */}
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {actions.map((action) => (
          <QuickActionCard
            key={action.title}
            title={action.title}
            description={action.description}
            to={action.to}
          />
        ))}
      </div>

    </section>
  );
};

export default QuickActions;