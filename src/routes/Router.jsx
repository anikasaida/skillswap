import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import SkillDetails from "../pages/SkillDetails";
import ForgotPassword from "../pages/ForgotPassword";
import UpdateProfile from "../pages/UpdateProfile";
import ErrorPage from "../pages/ErrorPage";
import AllSkills from "../pages/AllSkills";
import AddSkill from "../pages/AddSkill";
import MySkills from "../pages/MySkills";
import UpdateSkill from "../pages/UpdateSkill";
import PrivateRoute from "../components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "all-skills",
        element: <AllSkills />,
      },
      {
  path: "update-skill/:id",
  element: (
    <PrivateRoute>
      <UpdateSkill />
    </PrivateRoute>
  ),
},

      {
        path: "login",
        element: <Login />,
      },

      {
        path: "register",
        element: <Register />,
      },

      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },

      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },

      {
        path: "update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },

      {
        path: "skill/:id",
        element: (
          <PrivateRoute>
            <SkillDetails />
          </PrivateRoute>
        ),
      },

      {
        path: "add-skill",
        element: (
          <PrivateRoute>
            <AddSkill />
          </PrivateRoute>
        ),
      },

      {
        path: "my-skills",
        element: (
          <PrivateRoute>
            <MySkills />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;