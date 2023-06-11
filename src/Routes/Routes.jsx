import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Home/Home";
import NotFound from "../pages/NotFoundPage/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [{ path: "/", element: <Home /> }],
  }, {
    path: '/*',
    element:<NotFound/>
  }
]);
