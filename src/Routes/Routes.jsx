import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Home/Home";
import NotFound from "../pages/NotFoundPage/NotFound";
import SignUp from "../pages/Forms/SignUp";
import Teachers from "../pages/Teachers/Teachers";
import Dashboard from "../Dashboard/Dashboard";
import StudentDashboard from "../Dashboard/StudentDashboard";
import InstructorsDashboard from "../Dashboard/InstructorsDashboard";
import Admin from "../Dashboard/Admin";
import Login from "../pages/Forms/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/instructors",
        element: <Teachers />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
          path: 'student',
          element:<StudentDashboard/>
          },
          {
          path: 'instructor',
          element:<InstructorsDashboard/>
          },
          {
          path: 'admin',
          element:<Admin/>
          },
        ],
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);
