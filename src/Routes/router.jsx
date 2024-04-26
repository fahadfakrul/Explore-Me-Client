import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Components/Home";
import AllTouristsSpot from "../Components/AllTouristsSpot";
import AddTouristsSpot from "../Components/AddTouristsSpot";
import MyList from "../Components/MyList";
import Login from "../Components/Login";
import Register from "../Components/Register";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element:<Home></Home> ,
            
          },
        {
            path: "/alltouristsspot",
            element:<AllTouristsSpot></AllTouristsSpot> ,
            
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
      ],
    },
  ]);

export default router;