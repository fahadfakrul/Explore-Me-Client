import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AllTouristsSpot from "../Pages/AllTouristsSpot";
import AddTouristsSpot from "../Pages/AddTouristsSpot";
import MyList from "../Components/MyList";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/Error-page";
import SpotDetails from "../Components/SpotDetails";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element:<Home></Home> ,
            loader: () => fetch("/tourguides.json"),
            
          },
        {
            path: "/alltouristsspot",
            element:<AllTouristsSpot></AllTouristsSpot> ,
            loader: () => fetch("http://localhost:5000/spots"),
            
          },
        {
            path: "/addtouristsspot",
            element: <AddTouristsSpot></AddTouristsSpot>,
            
          },
        {
            path: "/mylist",
            element: <MyList></MyList>,
            
          },
          {
            path: '/login',
            element: <Login></Login>,
          },
          {
            path: '/register',
            element: <Register></Register>,
          },
          {
            path: '/spotdetails/:id',
            element: <SpotDetails></SpotDetails>,
            loader: () => fetch("http://localhost:5000/spots"),
          },
      ],
    },
  ]);

export default router;