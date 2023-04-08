import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/shared/Error";
import Main from "../layout/Main";
import Home from "../pages/shared/Home/Home";
import Categories from "../pages/Categories/Categories";
import About from "../pages/About/About";
const router = createBrowserRouter([
    {
        path:'/',
        errorElement:<Error></Error>,
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('http://localhost:5000/categories')
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/categories',
                element:<Categories></Categories>,
                loader:()=>fetch('http://localhost:5000/categories')
            },
        ]}
])

export default router;