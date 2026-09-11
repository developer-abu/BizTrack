import React from 'react'
import { Link } from 'react-router-dom';

const LoginFooter = () => {
  return (
      // Authentication footer
    <div className="mt-6 text-center text-sm text-gray-600">

      <span>No registered account? </span>

      {/* Login link */}
      <Link
        to="/register"
        className="font-semibold text-gray-900 hover:underline"
      >
        Register
      </Link>

    </div>
  );
  
}

export default LoginFooter
