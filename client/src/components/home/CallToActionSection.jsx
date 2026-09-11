import React from "react";
import { Link } from "react-router-dom";

const CallToActionSection = () => {
  return (
    // Call to action section
    <section className="bg-gray-900 py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">

        {/* CTA heading */}
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to Manage Your Business Better?
        </h2>

        {/* CTA description */}
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-300">
          Start organizing your products, inventory, sales, customers, and
          payments with BizTrack.
        </p>

        {/* CTA button */}
        <div className="mt-8">
          <Link
            to="/register"
            className="inline-flex rounded-lg bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-100"
          >
            Get Started
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CallToActionSection;