import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import Profle from "../Pages/Profle";
import Register from "../Pages/Register";
import Login from "../Pages/Login";


const router = createBrowserRouter([
    {
        path: '/',
        Component : RootLayout,
        children:[
            {
                index: true,
                Component: Home,
            },
            {
                path: '/aboutus',
                Component: AboutUs
            },
            {
                path: '/profile',
                Component: Profle
            },
            {
                path:'/signin',
                Component: Register
            },
            {
                path: '/login',
                Component: Login
            }

        ] 
    }
])


export default router ;