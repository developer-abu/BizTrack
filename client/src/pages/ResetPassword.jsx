
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import api from "../api/axios.js";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (!token) {
      setError("Invalid password reset link.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const response = await api.post("/reset-password", {
        token,
        password,
        confirmPassword,
      });

      setMessage(response.data.message);
      setSuccess(true);

      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          err.response?.data?.errors?.[0]?.message ||
          "Unable to reset password. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (!token) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f7f4ed] px-4 py-10 sm:px-6 lg:px-8">
        <Helmet>
          <title>Invalid Reset Link | BizTrack</title>
        </Helmet>
        <div className="w-full max-w-lg">
          <div className="mb-8 text-center">
            <Link
              to="/"
              className="brand-mark inline-block font-serif text-3xl font-extrabold tracking-tight text-[#202a27]"
            >
              BizTrack
            </Link>
          </div>

          <div className="surface-shadow rounded-lg border border-[#dedbd3] bg-white p-6 text-center sm:p-8">
            <h1 className="font-serif text-3xl font-extrabold text-[#202a27]">
              Invalid reset link
            </h1>

            <p className="mt-3 text-sm leading-6 text-[#65716c]">
              This password reset link is invalid or missing its token.
            </p>

            <Link
              to="/forgot-password"
              className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-[#27624f] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1d4e3e] focus:outline-none focus:ring-2 focus:ring-[#34715f] focus:ring-offset-2"
            >
              Request a New Reset Link
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f7f4ed] px-4 py-10 sm:px-6 lg:px-8">
      <Helmet>
        <title>{success ? "Password Reset | BizTrack" : "Reset Password | BizTrack"}</title>
      </Helmet>
      <div className="w-full max-w-lg">
        <div className="mb-8 text-center">
          <Link
            to="/"
            className="brand-mark inline-block font-serif text-3xl font-extrabold tracking-tight text-[#202a27]"
          >
            BizTrack
          </Link>

          <h1 className="mt-6 font-serif text-3xl font-extrabold text-[#202a27]">
            Reset Password
          </h1>

          <p className="mt-2 text-sm leading-6 text-[#65716c]">
            Create a new password for your BizTrack account.
          </p>
        </div>

        {message && (
          <div
            className="mb-5 rounded-md border border-[#cce2d5] bg-[#eff7f1] p-4 text-sm text-[#27624f]"
            role="status"
          >
            {message}
          </div>
        )}

        {error && (
          <div
            className="mb-5 rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-700"
            role="alert"
          >
            {error}
          </div>
        )}

        {!success ? (
          <form
            onSubmit={handleSubmit}
            className="surface-shadow space-y-5 rounded-lg border border-[#dedbd3] bg-white p-6 sm:p-8"
          >
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-[#34443d]"
              >
                New Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter new password"
                  autoComplete="new-password"
                  minLength={6}
                  maxLength={12}
                  required
                  disabled={loading}
                  className="w-full rounded-md border border-[#d8d8d0] bg-white px-4 py-3 pr-20 text-sm text-[#202a27] outline-none transition placeholder:text-[#9aa29c] focus:border-[#34715f] focus:ring-2 focus:ring-[#edf3ee] disabled:bg-gray-100"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((visible) => !visible)}
                  aria-label={showPassword ? "Hide new password" : "Show new password"}
                  aria-pressed={showPassword}
                  disabled={loading}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-[#7b8780] hover:text-[#27624f] focus:outline-none focus:ring-2 focus:ring-[#34715f] disabled:cursor-not-allowed"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              <p className="mt-2 text-xs leading-5 text-[#65716c]">
                6–12 characters, including uppercase, lowercase, and a special character.
              </p>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-semibold text-[#34443d]"
              >
                Confirm New Password
              </label>

              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  autoComplete="new-password"
                  required
                  disabled={loading}
                  className="w-full rounded-md border border-[#d8d8d0] bg-white px-4 py-3 pr-20 text-sm text-[#202a27] outline-none transition placeholder:text-[#9aa29c] focus:border-[#34715f] focus:ring-2 focus:ring-[#edf3ee] disabled:bg-gray-100"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((visible) => !visible)}
                  aria-label={
                    showConfirmPassword
                      ? "Hide password confirmation"
                      : "Show password confirmation"
                  }
                  aria-pressed={showConfirmPassword}
                  disabled={loading}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-[#7b8780] hover:text-[#27624f] focus:outline-none focus:ring-2 focus:ring-[#34715f] disabled:cursor-not-allowed"
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || !password || !confirmPassword}
              className="w-full cursor-pointer rounded-md bg-[#27624f] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1d4e3e] focus:outline-none focus:ring-2 focus:ring-[#34715f] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="surface-shadow w-full cursor-pointer rounded-md border border-[#dedbd3] bg-[#27624f] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1d4e3e] focus:outline-none focus:ring-2 focus:ring-[#34715f] focus:ring-offset-2"
          >
            Go to Login
          </button>
        )}

        {!success && (
          <div className="mt-6 text-center text-sm text-[#65716c]">
            <Link
              to="/login"
              className="font-semibold text-[#27624f] hover:underline"
            >
              Back to Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;