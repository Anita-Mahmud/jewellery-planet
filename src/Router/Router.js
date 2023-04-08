import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/shared/Error";
import Main from "../layout/Main";
import Home from "../pages/shared/Home/Home";
const router = createBrowserRouter([
    {
        path:'/',
        errorElement:<Error></Error>,
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
        ]}
])

export default router;