import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter, 
  RouterProvider, 
  Route
} from 'react-router-dom'
import Home from './components/Home/Home.jsx'


const Router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path:"Home",
    element : <Home/>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {Router}/>
  </StrictMode>,
)
