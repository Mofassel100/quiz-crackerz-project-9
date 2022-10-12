import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import LinChart from "../Components/Blog/LineChart/LinChart";
import CardDetail from "../Components/CartDetails/CardDetail";
import Home from "../Components/Home/Home";
import ErrorHandle from "../ErroHandle/ErrorHandle";
import Root from "./Root/Root";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorHandle></ErrorHandle>,
        children: [
            { path: '*', element: <p>Not Found any data</p> },
            {
                path: '/',
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Home></Home>,
            },
            {
                path: 'home',
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Home></Home>
            },
            {
                path: "/cart/:id",
                loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
                element: <CardDetail></CardDetail>,
            },
            {
                path: 'linechart',
                element: <LinChart></LinChart>,
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
            },
            { path: 'blog', element: <Blog></Blog> }
        ]
    }
])
export default router;