import {createBrowserRouter} from "react-router-dom";
import {Login,Dashboard} from '../pages'
import {LayoutDash} from "../layouts";

const rootsApp=createBrowserRouter([
    {
        path:'/',
        element: <Login/>
    },
    {
        element:<LayoutDash/>,
        children:[
            {
                path:'/home',
                element:<Dashboard/>
            },
        ]
    }
])


export default rootsApp