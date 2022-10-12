
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Router';
// import {toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// toast.configure();


function App() {
  return (
    <div className="App">

      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
