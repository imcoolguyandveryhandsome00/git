import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './page/home.jsx'
import Pet from './page/pet.jsx'
import Accommodation from './page/accommodation.jsx'
import Status from './page/status.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "home",
    element: <Home />
  },
  {
    path: "pet",
    element: <Pet />
  },
  {
    path: "accommodation",
    element: <Accommodation />
  },
  {
    path: "status",
    element: <Status />
  }

]) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
