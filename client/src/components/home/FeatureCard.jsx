import React from "react";

const FeatureCard = ({ title, description }) => {
  return (
    // Feature card
    <div className="rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md">

      {/* Feature title */}
      <h3 className="text-lg font-semibold text-gray-900">
        {title}
      </h3>

      {/* Feature description */}
      <p className="mt-3 text-sm leading-6 text-gray-600">
        {description}
      </p>

    </div>
  );
};

export default FeatureCard;