import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import LinChart from "../Components/Blog/LineChart/LinChart";

import CardDetail from "../Components/CartDetails/CardDetail";

import Home from "../Components/Home/Home";
import Root from "./Root/Root";

const router = createBrowserRouter([
{path:'/',

element:<Root></Root>,

children:[
    // {path:'*', element:<p>Not Found any data</p>},

{
    path:'/', 
 element:<Home></Home>,
},
{ 
 path:'home',

 element:<Home></Home>,
 loader: ()=>fetch('https://openapi.programming-hero.com/api/quiz'),
},


{path: "/cart/:id",
element:<CardDetail></CardDetail>,
loader:async({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)},
{path:'linechart',
element:<LinChart></LinChart>,
loader:()=>fetch('https://openapi.programming-hero.com/api/quiz')},
{path:'blog',element:<Blog></Blog>}


]}

])
export default router;