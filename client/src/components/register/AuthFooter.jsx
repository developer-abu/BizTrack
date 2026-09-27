import React from "react";
import { Link } from "react-router-dom";

const AuthFooter = () => {
  return (
    // Authentication footer
    <div className="mt-6 text-center text-sm text-[#65716c]">

      <span>Already have an account? </span>

      {/* Login link */}
      <Link
        to="/login"
        className="font-semibold text-[#27624f] hover:underline"
      >
        Login
      </Link>

    </div>
  );
};

export default AuthFooter;