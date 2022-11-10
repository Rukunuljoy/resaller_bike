import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import PrivateRoute from "../../Router/PrivateRoute/PrivateRoute";
import Reviews from "../../Pages/Reviews/Reviews";
import SignUp from "../../Pages/SignUp/SignUp";

import Service from "../../Pages/Home/Service.js/Service";
import AddService from "../../Pages/Home/AddService/AddService";
import Detail from "../../Pages/Details/Detail";
import Blog from "../../Blog/Blog";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
        },
        {
          path:'/login',
          element:<Login></Login>,
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>,
        },
        {
          path:'/myReview/:id',
          element:<PrivateRoute><MyReview></MyReview></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/reviews',
          element:<PrivateRoute><Reviews></Reviews></PrivateRoute>
        },
        {
          path:'/detail/:id',
          element:<Detail></Detail>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/addServices',
          element:<PrivateRoute><Service></Service></PrivateRoute>
        },
        {
          path:'/addService',
          element:<AddService></AddService>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        }
      ]
    }
  ])

  export default router;