import { createBrowserRouter } from "react-router-dom";
import Home from './pages/home';
import Login from './auth/login/Login';
import Register from './auth/register/Register';
import Layout from "./layout/layout";
import ForgetPassword from "./auth/forgetPassword/forgetPassword";


import MiniDrawer from "./layout/userDashboard/drawer";

import Accounts_ from "./pages/userDashboard/Accounts";






export const routes = [
    {
        path: '/',
        element: <Home />,
      },
];



export const dashboardRoutes = [

  {
    path: '/user/dashboard',
    element: <Accounts_ />,
  },

]



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <p>not found page</p>,
    children: routes,
  },
  {
    path: "/user/dashboard",
    element: <MiniDrawer />,
    errorElement: <p>not found page</p>,
    children: dashboardRoutes,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/forgetPassword',
    element: <ForgetPassword />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);
