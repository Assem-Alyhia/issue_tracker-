import { createBrowserRouter } from "react-router-dom";
import Home from './pages/home';
import Login from './auth/login/Login';
import Register from './auth/register/Register';
import Layout from "./layout/layout";
import ForgetPassword from "./auth/forgetPassword/forgetPassword";






export const routes = [
    {
        path: '/',
        element: <Home />,
      },
];




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <p>not found page</p>,
    children: routes,
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
