import React from 'react'
import { Link } from 'react-router-dom';

const LoginFooter = () => {
  return (
      // Authentication footer
    <div className="mt-6 text-center text-sm text-[#65716c]">

      <span>No registered account? </span>

      {/* Login link */}
      <Link
        to="/register"
        className="font-semibold text-[#27624f] hover:underline"
      >
        Register
      </Link>

    </div>
  );
  
}

export default LoginFooter
