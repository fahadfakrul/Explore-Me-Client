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
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdateSpots from "../Pages/UpdateSpots";
import CountrywiseSpot from "../Pages/CountrywiseSpot";

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
            loader: () => fetch("https://tourism-assignment-server.vercel.app/spots"),
            
          },
        {
            path: "/addtouristsspot",
            element:<PrivateRoute> <AddTouristsSpot></AddTouristsSpot></PrivateRoute>,
            
          },
        {
            path: "/mylist",
            element: <PrivateRoute><MyList></MyList></PrivateRoute>,
            
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
            element: <PrivateRoute> <SpotDetails></SpotDetails></PrivateRoute>,
            loader: () => fetch("https://tourism-assignment-server.vercel.app/spots"),
          },
          {
            path: '/updatespots/:id',
            element: <PrivateRoute> <UpdateSpots></UpdateSpots></PrivateRoute>,
            loader: () => fetch("https://tourism-assignment-server.vercel.app/spots"),
          },
          {
            path: '/countrywisespot/:country_name',
            element:  <CountrywiseSpot></CountrywiseSpot>,
            loader: () => fetch("https://tourism-assignment-server.vercel.app/spots"),
          },
      ],
    },
  ]);

export default router;