import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/sign-up/SignUp";
import CheckOut from "../pages/CheckOut";
import AllBooking from "../pages/all booking/AllBooking";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/checkOut/:id",
        element: (
          <PrivateRoute>
            {" "}
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/Services/${params.id}`),
      },
      {
        path: "/allBooking",

        element: (
          <PrivateRoute>
            <AllBooking />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
