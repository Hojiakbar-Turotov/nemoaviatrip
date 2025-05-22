import { createBrowserRouter } from "react-router-dom";
import AppUz from "../pages/Uz";
import AppRu from "../pages/AppRu";

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <AppUz />
    },
    {
        path: '/ru',
        element: <AppRu />
    }, {
        path: '*',
        element: <AppUz />
    }
])
