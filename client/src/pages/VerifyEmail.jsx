import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import api from '../api/axios.js';

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const verifyUserEmail = async () => {
      const token = searchParams.get("token");

      if (!token) {
        setMessage("Invalid verification link.");
        setIsLoading(false);
        return;
      }

      try {
      const response = await api.post("/verify-email", {
     token,
});

        setMessage(response.data.message);
        setIsSuccess(true);

      } catch (error) {
        setMessage(
          error.response?.data?.message ||
          "Email verification failed."
        );
      } finally {
        setIsLoading(false);
      }
    };

    verifyUserEmail();
  }, [searchParams]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-xl border p-8 text-center">

        {isLoading ? (
          <>
            <h1 className="text-2xl font-semibold">
              Verifying your email...
            </h1>

            <p className="mt-3 text-gray-500">
              Please wait while we verify your email address.
            </p>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-semibold">
              {isSuccess
                ? "Email Verified"
                : "Verification Failed"}
            </h1>

            <p className="mt-3 text-gray-600">
              {message}
            </p>

            {isSuccess && (
              <button
                onClick={() => navigate("/login")}
                className="mt-6 rounded-lg bg-black px-6 py-3 text-white"
              >
                Go to Login
              </button>
            )}
          </>
        )}

      </div>
    </div>
  );
};

export default VerifyEmail;