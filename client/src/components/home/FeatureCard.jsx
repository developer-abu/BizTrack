import React from "react";

const FeatureCard = ({ title, description }) => {
  return (
    <div className="group min-h-52 bg-[#fbfaf7] p-6 transition-colors hover:bg-white sm:p-8">

      {/* Feature title */}
      <span className="mb-8 block h-1 w-9 bg-[#d8795b] transition-all group-hover:w-14" />
      <h3 className="text-lg font-bold text-[#25342e]">
        {title}
      </h3>

      {/* Feature description */}
      <p className="mt-3 max-w-sm text-sm leading-7 text-[#69756f]">
        {description}
      </p>

    </div>
  );
};

export default FeatureCard;