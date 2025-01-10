import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Classes from "./pages/Classes";
import Quiz from "./pages/Quest";
import CourseIntro from "./pages/CourseIntro";

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
          path:"/courses/:id",
          element:<Courses/>
        },
        {
          path:"/classes",
          element:<Classes/>
        },
        {
          path:"/quest/:id",
          element:<Quiz/>
        },
        {
          path:"/courseIntro",
          element:<CourseIntro/>
        }

      ],
        },
  ])
  return (
    <RouterProvider router={router}/>
  
  );
};

export default App;
