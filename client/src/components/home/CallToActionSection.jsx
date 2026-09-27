import React from "react";
import { Link } from "react-router-dom";

const CallToActionSection = () => {
  return (
    // Call to action section
    <section className="bg-[#293b33] py-20 sm:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">

        {/* CTA heading */}
        <h2 className="max-w-2xl font-serif text-4xl leading-tight text-white sm:text-5xl">
          Ready to Manage Your Business Better?
        </h2>

        {/* CTA description */}
        <p className="mt-4 max-w-xl text-base leading-8 text-[#d1ddd4]">
          Start organizing your products, inventory, sales, customers, and
          payments with BizTrack.
        </p>

        {/* CTA button */}
        <div className="shrink-0">
          <Link
            to="/register"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#e9b35c] px-7 text-sm font-bold text-[#25342e] hover:bg-[#f2c779]"
          >
            Get Started
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CallToActionSection;