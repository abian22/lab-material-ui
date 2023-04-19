import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    ekement: <Root />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home/>
      }
    ],
  },
]);

export default router