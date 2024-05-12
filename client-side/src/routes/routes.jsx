import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root"
import Home from "../pages/Home";
import UpdateProfile from "../pages/UpdateProfile";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PriviteRouts from "./PriviteRouts";
import AddTouristSpot from "../pages/AddTouristSpot";
import MyList from "../pages/MyList";
import AllTouristsSpot from "../pages/AllTouristsSpot";
import TouristSpotDetail from "../pages/TouristSpotDetail";
import UpdateMyList from "../pages/UpdateMyList";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/update',
            element: <PriviteRouts> <UpdateProfile></UpdateProfile> </PriviteRouts>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/all-tourist-sport',
            element:<AllTouristsSpot></AllTouristsSpot>,
            loader: () => fetch('http://localhost:5000/tourists')
        },
        {
            path: "/tourists/:id",
            element: <PriviteRouts> <TouristSpotDetail></TouristSpotDetail> </PriviteRouts>,
            loader: ({ params }) =>
                fetch(`http://localhost:5000/tourists/${params.id}`),
        },
        {
            path: '/add-tourist-sport',
            element: <PriviteRouts> <AddTouristSpot></AddTouristSpot> </PriviteRouts>
        },
        {
            path: '/my-list/:email',
            element: <PriviteRouts> <MyList></MyList> </PriviteRouts>,
            loader: ({ params }) => fetch(`http://localhost:5000/mylist/${params.email}`)
        },
        {
            path: '/update-mylist/:id',
            element: <PriviteRouts> <UpdateMyList></UpdateMyList> </PriviteRouts>,
            loader: ({ params }) => fetch(`http://localhost:5000/update-mylist/${params.id}`)
        },
        {
            path: '/register',
            element: <Register></Register>
        },
      ]
    },
  ]);

  export default router;