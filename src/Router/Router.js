import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Root from "./Root/Root";

const router = createBrowserRouter([
{path:'/',element:<Root></Root>,
children:[

 {path:'/', element:<Home></Home>
},

 {path:'/home', element:<Home></Home>,
 loader: ()=>fetch('https://openapi.programming-hero.com/api/quiz')
}
]}

])
export default router;