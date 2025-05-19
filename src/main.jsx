import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Layouts/MainLayout.jsx';
import Home from './Components/Home.jsx';
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import CoffeeDetails from './Components/CoffeeDetails.jsx';
import SignIn from './Components/SignIn.jsx';
import SignUp from './Components/SignUp.jsx';
import AuthProveder from './Context/AuthProveder.jsx';
import Users from './Components/Users.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
      {
        index:true,
        loader:()=> fetch('https://coffee-store-server-mu-three.vercel.app/coffees'),
        Component:Home
      },
      {
        path:'coffee/:id',
        Component:CoffeeDetails
      },
      {
        path:'addcoffee',
        Component:AddCoffee
      },
      {
        path:'updatecoffee/:id',
        loader:({params})=> fetch(`https://coffee-store-server-mu-three.vercel.app/coffees/${params.id}`),
        Component:UpdateCoffee
      },
      {
        path:'signin',
        Component:SignIn
      },
      {
        path:'signup',
        Component:SignUp
      },
      {
        path:'users',
        loader:()=>fetch('https://coffee-store-server-mu-three.vercel.app/users'),
        Component:Users
      }
    ]
  },
]);






createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProveder>
      <RouterProvider router={router} />
     </AuthProveder>
  </StrictMode>,
)
