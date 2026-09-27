import React from "react";

const LoginHeader = () => {
  return (
    // Register page header
    <div className="mb-8 text-center">

      {/* Logo */}
      <h1 className="brand-mark font-serif text-3xl font-bold tracking-tight text-[#202a27]">
        BizTrack
      </h1>

      {/* Heading */}
      <h2 className="mt-6 font-serif text-3xl font-bold text-[#202a27]">
     Login Your Account
      </h2>

      {/* Description */}
      <p className="mt-2 text-sm text-[#65716c]">
        Start managing your business with BizTrack.
      </p>

    </div>
  );
};

export default LoginHeader;