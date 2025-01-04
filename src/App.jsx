import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Classes from "./pages/Classes";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index:true,
          element:<Home/>
        },
        {
          path:"courses",
          element:<Courses/>
        },
        {
          path:"classes",
          element:<Classes/>
        }

      ],
        },
  ])
  return (
    <RouterProvider router={router}/>
  
  );
};

export default App;
