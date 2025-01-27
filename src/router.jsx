import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "./views/LP";
import Seller from "./Layout/seller";
import Dashboard from "./views/seller/dashboard";
import Order from "./views/seller/order";
import Not_Found from "./views/Not-found/Not-Found";
import Login from "./Authentication/seller/login";
import Card from "./components/general/Authcard";
import SignUp from "./Authentication/seller/signup";
import ForgetPassword from "./Authentication/seller/forget_password";
import ChangePassword from "./Authentication/seller/ChangePassword";
const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/seller',
        element:<Seller/>,
        children:[
          
            {
                path:'/seller/dashboard',
                element:<Dashboard/>
    },
    {
        path:'/seller/order',
        element:<Order/>
    }
]

},
{
    path:'/auth',
    element:<Card/>,
    children:[
        {
            path:'/auth/seller',
            element:<Login/>
        },
        {
            path:'/auth/seller/signup',
            element:<SignUp/>
        },
        {
            path:'/auth/seller/password-reset',
            element:<ForgetPassword/>
        },
        {
            path:'/auth/seller/change-password',
            element:<ChangePassword/>
        }
    ]
},



{
    path:'*',
    element: <Not_Found/>
}
]);
export default router
