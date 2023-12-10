import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Home.jsx'
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom"
import {ComponentPreviews, useInitial} from "./dev/index.js";
import {DevSupport} from "@react-buddy/ide-toolbox";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <RouterProvider router={router}/>
        </DevSupport>
    </React.StrictMode>,
)
