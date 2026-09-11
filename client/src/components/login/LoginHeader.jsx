import React from "react";

const LoginHeader = () => {
  return (
    // Register page header
    <div className="mb-8 text-center">

      {/* Logo */}
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        BizTrack
      </h1>

      {/* Heading */}
      <h2 className="mt-6 text-2xl font-bold text-gray-900">
     Login Your Account
      </h2>

      {/* Description */}
      <p className="mt-2 text-sm text-gray-600">
        Start managing your business with BizTrack.
      </p>

    </div>
  );
};

export default LoginHeader;