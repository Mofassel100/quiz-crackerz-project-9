import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Router';


function App() {
  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>
    
    </div>
  );
}

export default App;
