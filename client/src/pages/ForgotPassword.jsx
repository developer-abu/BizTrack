
import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios.js";


const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");
    setLoading(true);

    try {
      const response = await api.post("/forgot-password", {
        email,
      });

      setMessage(response.data.message);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to process your request. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f7f4ed] px-4 py-10 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg">
        <div className="mb-8 text-center">
          <Link
            to="/"
            className="brand-mark inline-block font-serif text-3xl font-extrabold tracking-tight text-[#202a27]"
          >
            BizTrack
          </Link>

          <h1 className="mt-6 font-serif text-3xl font-extrabold text-[#202a27]">
            Forgot your password?
          </h1>

          <p className="mt-2 text-sm leading-6 text-[#65716c]">
            Enter your registered email address and we will send you a link to
            reset your password.
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

        <form
          onSubmit={handleSubmit}
          className="surface-shadow space-y-5 rounded-lg border border-[#dedbd3] bg-white p-6 sm:p-8"
        >
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-[#34443d]"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              required
              disabled={loading}
              className="w-full rounded-md border border-[#d8d8d0] bg-white px-4 py-3 text-sm text-[#202a27] outline-none transition placeholder:text-[#9aa29c] focus:border-[#34715f] focus:ring-2 focus:ring-[#edf3ee] disabled:bg-gray-100"
            />
          </div>

          <button
            type="submit"
            disabled={loading || !email.trim()}
            className="w-full cursor-pointer rounded-md bg-[#27624f] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1d4e3e] focus:outline-none focus:ring-2 focus:ring-[#34715f] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-[#65716c]">
          <Link
            to="/login"
            className="font-semibold text-[#27624f] hover:underline"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;