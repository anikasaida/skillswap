import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaEnvelope } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

const ForgotPassword = () => {
  const { resetPassword } = useAuth();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();

    if (!email) {
      return toast.error("Enter your email");
    }

    try {
      await resetPassword(email);

      toast.success("Password reset email sent.");

      window.open("https://mail.google.com", "_blank");

      navigate("/login");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-700 to-purple-700 flex justify-center items-center">

      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8">

        <h2 className="text-5xl font-bold text-white text-center">
          Reset Password
        </h2>

        <p className="text-center text-gray-200 mt-2 mb-8">
          Enter your email address
        </p>

        <form onSubmit={handleReset}>

          <label className="input input-bordered flex items-center gap-2 bg-white/10 text-white mb-6">

            <FaEnvelope />

            <input
              type="email"
              placeholder="Email"
              className="grow bg-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

          </label>

          <button className="btn w-full bg-gradient-to-r from-blue-500 to-purple-600 border-0 text-white">
            Send Reset Link
          </button>

        </form>

      </div>

    </div>
  );
};

export default ForgotPassword;