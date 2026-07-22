import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaUser, FaImage } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;

    const name = form.name.value;
    const photo = form.photo.value;

    try {
      await updateUserProfile(name, photo);

      toast.success("Profile Updated Successfully 🎉");

      navigate("/profile");
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
          Update Profile
        </h2>

        <p className="text-center text-gray-200 mt-2 mb-8">
          Update your information
        </p>

        <form onSubmit={handleUpdate} className="space-y-5">

          {/* Name */}
          <div className="relative">
            <FaUser className="absolute left-4 top-4 text-gray-300" />

            <input
              type="text"
              name="name"
              defaultValue={user?.displayName || ""}
              placeholder="Your Name"
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
              defaultValue={user?.photoURL || ""}
              placeholder="Photo URL"
              required
              className="w-full pl-12 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 outline-none"
            />
          </div>

          {error && (
            <p className="text-red-300 text-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full py-4 rounded-xl font-bold text-white transition hover:scale-105"
            style={{
              background:
                "linear-gradient(to right,#3b82f6,#7c3aed)",
            }}
          >
            Save Changes
          </button>

        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;