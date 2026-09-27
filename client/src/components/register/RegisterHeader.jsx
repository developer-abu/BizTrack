import React from "react";

const RegisterHeader = () => {
  return (
    // Register page header
    <div className="mb-8 text-center">

      {/* Logo */}
      <h1 className="brand-mark font-serif text-3xl font-extrabold tracking-tight text-[#202a27]">
        BizTrack
      </h1>

      {/* Heading */}
      <h2 className="mt-6 font-serif text-3xl font-extrabold text-[#202a27]">
        Create your account
      </h2>

      {/* Description */}
      <p className="mt-2 text-sm text-[#65716c]">
        Start managing your business with BizTrack.
      </p>

    </div>
  );
};

export default RegisterHeader;