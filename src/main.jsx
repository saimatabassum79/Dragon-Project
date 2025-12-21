import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Root/Root';
import Home from './Home/Home';
import News from './Home/HomeComponent/News';


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
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
