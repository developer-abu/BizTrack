import React from "react";

const StateCard = ({ title, value, description }) => {
  return (
    // Single dashboard statistic card
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

      {/* Stat title */}
      <p className="text-sm font-medium text-gray-500">
        {title}
      </p>

      {/* Stat value */}
      <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
        {value}
      </h2>

      {/* Optional description */}
      {description && (
        <p className="mt-2 text-xs text-gray-500">
          {description}
        </p>
      )}

    </div>
  );
};

export default StateCard;