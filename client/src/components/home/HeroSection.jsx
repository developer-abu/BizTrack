import React from "react";

const HeroSection = () => {
  return (
    // Hero section
    <section className="bg-white">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">

        <div className="max-w-3xl">

          {/* Hero heading */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Manage Your Business
            <span className="block text-gray-600">
              Simply and Efficiently
            </span>
          </h1>

          {/* Hero description */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            BizTrack helps small businesses manage products, inventory, sales,
            customers, payments, and outstanding dues in one place.
          </p>

          {/* Hero actions */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            {/* Primary action */}
            <a
              href="/register"
              className="rounded-lg bg-gray-900 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-gray-800"
            >
              Get Started
            </a>

            {/* Secondary action */}
            <a
              href="#features"
              className="rounded-lg border border-gray-300 px-6 py-3 text-center text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            >
              Explore Features
            </a>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;