import React from "react";
import { Link } from "react-router-dom";

const QuickActionCard = ({ title, description, to }) => {
  return (
    // Single quick action card
    <Link
      to={to}
      className="block rounded-xl border border-gray-200 bg-white p-5 transition hover:border-gray-300 hover:shadow-sm"
    >
      {/* Action title */}
      <h3 className="text-base font-semibold text-gray-900">
        {title}
      </h3>

      {/* Action description */}
      <p className="mt-2 text-sm leading-6 text-gray-500">
        {description}
      </p>
    </Link>
  );
};

export default QuickActionCard;