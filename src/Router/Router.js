import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import CardDetail from "../Components/CartDetails/CardDetail";
import Cart from "../Components/Home/Cart/Cart";
import Home from "../Components/Home/Home";
import Root from "./Root/Root";

const router = createBrowserRouter([
{path:'/',element:<Root></Root>,
children:[

 {path:'/', element:<Home></Home>
},

 {path:'/home', element:<Home></Home>,
 loader: ()=>fetch('https://openapi.programming-hero.com/api/quiz')
},
{path:"blog",
element:<Blog></Blog>},
{
    path:'cartdetails/:id',
    element:<CardDetail></CardDetail>,
    loader:({params})=> fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
}

]}

])
export default router;