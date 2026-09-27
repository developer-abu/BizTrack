import React from "react";
import { Link } from "react-router-dom";

const QuickActionCard = ({ title, description, to }) => {
  return (
    // Single quick action card
    <Link
      to={to}
      className="group block rounded-lg border border-[#dedbd3] bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#76968a] hover:shadow-lg hover:shadow-[#202a27]/5"
    >
      {/* Action title */}
      <h3 className="text-base font-bold text-[#25342e] group-hover:text-[#27624f]">
        {title}
      </h3>

      {/* Action description */}
      <p className="mt-2 text-sm leading-6 text-[#69756f]">
        {description}
      </p>
    </Link>
  );
};

export default QuickActionCard;