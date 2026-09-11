import React from "react";
import StateCard from "./StateCard";


const DashboardStats = () => {
  // Static dashboard data for now
  // Later this data will come from the backend/database
  const stats = [
    {
      title: "Total Products",
      value: "120",
      description: "Products in your inventory",
    },
    {
      title: "Today's Sales",
      value: "24",
      description: "Sales completed today",
    },
    {
      title: "Today's Revenue",
      value: "₹12,500",
      description: "Revenue generated today",
    },
    {
      title: "Outstanding Due",
      value: "₹3,500",
      description: "Total unpaid amount",
    },
  ];

  return (
    // Dashboard statistics section
    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <StateCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          description={stat.description}
        />
      ))}
    </section>
  );
};

export default DashboardStats;