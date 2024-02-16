import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './page/home.jsx'
import Pet from './page/pet.jsx'
import Status from './page/status.jsx'
import Profile from './page/profile.jsx'
import Order from './page/order.jsx'
import ShippingStatus from './page/shipping.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/pet",
    element: <Pet />
  },
  {
    path: "/Profile",
    element: <Profile />
  },
  {
    path: "/order",
    element: <Order />
  },
  {
    path: "/status",
    element: <Status/>
  },
  {
    path: "/shippingstatus",
    element: <ShippingStatus/>
  }

]) 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
);

