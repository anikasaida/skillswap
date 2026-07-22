import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged Out Successfully");
      })
      .catch(() => {});
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/profile">My Profile</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-lg px-5 sticky top-0 z-50">

      <div className="navbar-start">

        <div className="dropdown">

          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            ☰
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50"
          >
            {navLinks}
          </ul>

        </div>

        <Link
          to="/"
          className="text-3xl font-extrabold text-indigo-600"
        >
          SkillSwap
        </Link>

      </div>

      <div className="navbar-center hidden lg:flex">

        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>

      </div>

      <div className="navbar-end gap-3">

        {user ? (
          <>
            <div
              className="tooltip tooltip-bottom"
              data-tip={user.displayName}
            >
              <img
                src={
                  user.photoURL ||
                  "https://i.ibb.co/4pDNDk1/avatar.png"
                }
                alt=""
                className="w-11 h-11 rounded-full border-2 border-indigo-500 object-cover"
              />
            </div>

            <button
              onClick={handleLogout}
              className="btn btn-error text-white"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="btn btn-outline btn-primary"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="btn btn-primary"
            >
              Register
            </Link>
          </>
        )}

      </div>

    </div>
  );
};

export default Navbar;