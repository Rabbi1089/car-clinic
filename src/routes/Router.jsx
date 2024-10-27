import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/sign-up/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/signUp",
          element: <SignUp></SignUp>
        },
      ],

    },
  ]);

export default router;