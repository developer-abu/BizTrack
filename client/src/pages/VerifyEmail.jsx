import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
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
    <div className="flex min-h-screen items-center justify-center bg-[#f7f4ed] px-4">
      <Helmet>
        <title>
          {isLoading
            ? "Verifying Email | BizTrack"
            : isSuccess
              ? "Email Verified | BizTrack"
              : "Email Verification Failed | BizTrack"}
        </title>
      </Helmet>
      <div className="surface-shadow w-full max-w-md rounded-lg border border-[#dedbd3] bg-white p-8 text-center">

        {isLoading ? (
          <>
            <h1 className="font-serif text-2xl font-semibold text-[#202a27]">
              Verifying your email...
            </h1>

            <p className="mt-3 text-[#65716c]">
              Please wait while we verify your email address.
            </p>
          </>
        ) : (
          <>
            <h1 className="font-serif text-2xl font-semibold text-[#202a27]">
              {isSuccess
                ? "Email Verified"
                : "Verification Failed"}
            </h1>

            <p className="mt-3 text-[#65716c]">
              {message}
            </p>

            {isSuccess && (
              <button
                onClick={() => navigate("/login")}
                className="mt-6 rounded-md bg-[#27624f] px-6 py-3 text-white hover:bg-[#1d4e3e]"
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