import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-700 to-purple-700 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 text-white text-center">

        <img
          src={
            user?.photoURL ||
            "https://i.ibb.co/4pDNDk1/avatar.png"
          }
          alt="Profile"
          className="w-28 h-28 rounded-full mx-auto border-4 border-white object-cover"
        />

        <h2 className="text-3xl font-bold mt-5">
          {user?.displayName || "No Name"}
        </h2>

        <p className="text-gray-200 mt-2">
          {user?.email}
        </p>

        <div className="mt-8">
          <Link
            to="/update-profile"
            className="btn w-full bg-gradient-to-r from-blue-500 to-purple-600 border-0 text-white hover:scale-105 transition"
          >
            Update Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;