import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Home/Home";
import NotFound from "../pages/NotFoundPage/NotFound";
import SignUp from "../pages/Forms/SignUp";
import Teachers from "../pages/Teachers/Teachers";

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
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);
