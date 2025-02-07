import { createBrowserRouter } from "react-router-dom";
import Home from './pages/home';
import Login from './auth/login/Login';
import Register from './auth/register/Register';
import Layout from "./layout/layout";
import ForgetPassword from "./auth/forgetPassword/forgetPassword";



import MiniDrawer from "./layout/userDashboard/drawer";

import Accounts_ from "./pages/userDashboard/Accounts";

import Indexissespage from "../src/components/userDashboard/Accounts/Indexissespage";
import Indexissescard from "./components/userDashboard/Accounts/IndexissesCard";












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

  {
    path: "/user/dashboard/issues",
    element: <Indexissespage />,
  },
   {
    path: "/user/dashboard/issuescard",
    element: <Indexissescard/>,
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
