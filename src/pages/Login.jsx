import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
} from "react-icons/fa";

const Login = () => {
  const { googleSignIn, signInUser } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state || "/";

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    const form = e.target;

    const password = form.password.value;

    signInUser(email, password)
      .then(() => {
        toast.success("Welcome Back 👋");
        navigate(from);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        toast.success("Google Login Successful");
        navigate(from);
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        background:
          "linear-gradient(135deg,#2747d6 0%,#4834d4 50%,#6c5ce7 100%)",
      }}
    >
      <div
        className="w-full max-w-md rounded-3xl p-8"
        style={{
          background: "rgba(255,255,255,.12)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,.25)",
          boxShadow: "0 20px 50px rgba(0,0,0,.25)",
        }}
      >
        <h2 className="text-5xl font-bold text-white text-center">
          Welcome Back
        </h2>

        <p className="text-center text-gray-200 mt-2 mb-8">
          Sign in to your account
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="text-white font-semibold mb-2 block">
              Email
            </label>

            <div className="relative">
              <FaEnvelope className="absolute left-4 top-4 text-gray-300" />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 outline-none focus:border-white"
              />
            </div>
          </div>

          <div>
            <label className="text-white font-semibold mb-2 block">
              Password
            </label>

            <div className="relative">
              <FaLock className="absolute left-4 top-4 text-gray-300" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                required
                className="w-full pl-12 pr-12 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 outline-none focus:border-white"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-4 text-white"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center text-white text-sm">
            <label className="flex gap-2 items-center">
              <input type="checkbox" className="checkbox checkbox-sm" />
              Remember me
            </label>

            <Link
              to="/forgot-password"
              state={{ email }}
              className="hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {error && (
            <p className="text-red-300 text-sm">{error}</p>
          )}

          <button
            className="w-full py-4 rounded-xl font-bold text-white"
            style={{
              background:
                "linear-gradient(to right,#3b82f6,#7c3aed)",
            }}
          >
            Sign In
          </button>

          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-white/30"></div>

            <span className="text-gray-200 text-sm">
              Or continue with
            </span>

            <div className="flex-1 h-px bg-white/30"></div>
          </div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex justify-center items-center gap-3 py-4 rounded-xl border border-white/20 bg-white/10 text-white hover:bg-white/20"
          >
            <FaGoogle />
            Continue with Google
          </button>

          <p className="text-center text-gray-200 pt-2">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-bold text-white hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;