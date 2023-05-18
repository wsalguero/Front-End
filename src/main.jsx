import React from 'react'
import ReactDOM from 'react-dom/client'
import { Principal } from './Principal'
import NotFoundPage from './pages/NotFoundPages/NotFound'
import Login from './pages/LoginPages/Login'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navar_aHotel from './components/Navars/Navar_aHotel'
import Navar_user from './components/Navars/Navar_user'

import App  from './App'
import CardUser from './elements/Cards/CardUser'
import Footer from './components/footer/Footer'
import { Acount } from './pages/AcountPage/Acount'
import Favorits from './pages/FavoritsPages/Favorits'
import UserVeiw from './pages/UserPage/UserVeiw'
import VistaAdmin from './pages/AdminPages/AdminVeiw'
import Estadisticas from './pages/AdminPages/Estadisticas'
import Reports from './pages/AdminPages/Reports'
import HotelVeiw from './pages/AdminHotel/HotelVeiw'
import Events from './pages/UserPage/Events'




const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      
      {
        path: '/',
        element: <UserVeiw />
      },      
      {
        path: '/login',
        element: <Login />,
        
      },
      {
        path: '/acount',
        element: <Acount />
      },
      {
        path: '/favorits',
        element: <Favorits />
      },
      
      
        
        
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <RouterProvider router={routes} ></RouterProvider>
  
  </React.StrictMode>,
)
