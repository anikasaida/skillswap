import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import {
  FaUser,
  FaEnvelope,
  FaImage,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    setError("");

    const form = e.target;

    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!/[A-Z]/.test(password)) {
      return setError("Password must contain at least one uppercase letter.");
    }

    if (!/[a-z]/.test(password)) {
      return setError("Password must contain at least one lowercase letter.");
    }

    if (password.length < 6) {
      return setError("Password must be at least 6 characters.");
    }

    try {
      await createUser(email, password);

      await updateUserProfile(name, photo);

      toast.success("Registration Successful 🎉");

      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-10"
      style={{
        background:
          "linear-gradient(135deg,#2563eb 0%,#4f46e5 50%,#7c3aed 100%)",
      }}
    >
      <div
        className="w-full max-w-md rounded-3xl p-8"
        style={{
          background: "rgba(255,255,255,.12)",
          backdropFilter: "blur(18px)",
          border: "1px solid rgba(255,255,255,.2)",
          boxShadow: "0 20px 40px rgba(0,0,0,.25)",
        }}
      >
        <h2 className="text-4xl font-bold text-center text-white">
          Create Account
        </h2>

        <p className="text-center text-gray-200 mt-2 mb-8">
          Join SkillSwap Today
        </p>

        <form onSubmit={handleRegister} className="space-y-5">

          {/* Name */}
          <div className="relative">
            <FaUser className="absolute left-4 top-4 text-gray-300" />

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full pl-12 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 outline-none"
            />
          </div>

          {/* Photo URL */}
          <div className="relative">
            <FaImage className="absolute left-4 top-4 text-gray-300" />

            <input
              type="url"
              name="photo"
              placeholder="Photo URL (https://...)"
              required
              className="w-full pl-12 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 outline-none"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-4 text-gray-300" />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full pl-12 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 outline-none"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute left-4 top-4 text-gray-300" />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
              className="w-full pl-12 pr-12 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 outline-none"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-4 text-white"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {error && (
            <p className="text-red-300 text-sm">{error}</p>
          )}

          <button
            type="submit"
            className="w-full py-4 rounded-xl font-bold text-white transition hover:scale-105"
            style={{
              background:
                "linear-gradient(to right,#3b82f6,#7c3aed)",
            }}
          >
            Create Account
          </button>

          <p className="text-center text-gray-200">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-bold text-white hover:underline"
            >
              Login
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
};

export default Register;