import {createBrowserRouter} from "react-router-dom";
import {Login, Dashboard, StateUsage} from '../pages'
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
            {
                path:'/state/usage',
                element: <StateUsage/>
            }
        ]
    }
])


export default rootsApp