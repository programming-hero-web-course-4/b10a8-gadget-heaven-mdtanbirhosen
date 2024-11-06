import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/HomePage/Home';
import Statistics from './components/Statistics/Statistics';
import Dashboard from './components/Dashboard/Dashboard';
import Products from './components/Products/Products';
import CategoryProducts from './components/categoryProducts/CategoryProducts';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Cart from './components/Dashboard/Cart/Cart';
import Wishlist from './components/Dashboard/Wishlist/Wishlist';
import Account from './components/Account/Account';
import LoginForm from './components/Account/LoginForm/LoginForm';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        children: [
          {
            path: '/',
            loader: () => fetch('/products.json'),
            element: <Products></Products>,

          },
          {
            path: 'categories/:category',
            loader: () => fetch('/products.json'),
            element: <CategoryProducts></CategoryProducts>
          }
        ]
      },

      {
        path: '/statistics',
        loader: ()=> fetch('/products.json'),
        element: <Statistics></Statistics>
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: '/dashboard',
            element: <Cart></Cart>
          },
          {
            path: '/dashboard/wishlist',
            element: <Wishlist></Wishlist>

          },

        ]
      },
      {
        path: '/account',
        element: <Account></Account>,
        children:[
          {
            path:'/account',
            element:<LoginForm></LoginForm>
          }
        ]
      }
    ]

  },
  {
    path: '/product-details/:id',
    loader: () => fetch('/products.json'),
    element: <ProductDetails></ProductDetails>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />

  </StrictMode>,
)
