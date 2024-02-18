import { createBrowserRouter } from "react-router-dom";
import NotFound from "../Pages/NotFound/NotFound";
import Root from "../Layout/Root";
import Courses from "../Pages/Courses/Courses";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";


const Router = createBrowserRouter([
    {path: '*' , element: <NotFound/>},
    {path: '/', element: <Root/> , children: [
        {path: '/', element: <NotFound/>},
        {path: '/courses', element: <Courses/>},
        {path: '/blogs', element: <NotFound/>},
        {path: '/contact', element: <NotFound/>},
        {path: '/account', element: <NotFound/>}, 
        {path: '/register', element: <Register/>},
        {path: '/login', element: <Login/>}
    ]}
])
export default Router;