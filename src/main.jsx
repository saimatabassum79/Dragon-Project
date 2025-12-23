import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Root/Root';
import Home from './Home/Home';
import News from './Home/HomeComponent/News';
import About from './About/About';
import AuthLayout from './Auth/AuthLayout';
import Career from './Career/Career';
import Login from './Login/Login';
import Register from './Register/Register';
import AuthProvider from './provider/AuthProvider';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",          // Home layout route
        element: <Home />,
        children: [
           {
            index: true,
            element: <Navigate to="/category/01" />
          },
          {
            path: "category/:id",   // 🔥 nested route
            element: <News />,
            loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
          }
        ]
      },
      {
        path:"auth",
        element:<AuthLayout></AuthLayout>,
        children:[
          {
            path:"/auth/login",
            element:<Login></Login>
          },
          {
            path:"/auth/register",
            element:<Register></Register>
          }
        ]
      },
      {
        path:"/career",
        element:<Career></Career>
      },
      {
        path:"/about",
        element:<About></About>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
