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

      toast.success("Profile Updated Successfully");

      navigate("/profile");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-700 to-purple-700 flex justify-center items-center p-6">

      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8">

        <h2 className="text-5xl font-bold text-center text-white">
          Update Profile
        </h2>

        <p className="text-center text-gray-200 mt-2 mb-8">
          Update your personal information
        </p>

        <form onSubmit={handleUpdate} className="space-y-5">

          <label className="input input-bordered flex items-center gap-2 bg-white/10 text-white">
            <FaUser />
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="Your Name"
              className="grow bg-transparent"
            />
          </label>

          <label className="input input-bordered flex items-center gap-2 bg-white/10 text-white">
            <FaImage />
            <input
              type="text"
              name="photo"
              defaultValue={user?.photoURL}
              placeholder="Photo URL"
              className="grow bg-transparent"
            />
          </label>

          {error && (
            <p className="text-red-300 text-sm">
              {error}
            </p>
          )}

          <button className="btn w-full bg-gradient-to-r from-blue-500 to-purple-600 border-0 text-white text-lg hover:scale-105 transition">
            Save Changes
          </button>

        </form>

      </div>

    </div>
  );
};

export default UpdateProfile;