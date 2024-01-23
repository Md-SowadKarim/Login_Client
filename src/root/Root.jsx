import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './../Layout/mainlayout/MainLayout';
import Error from './../Layout/error/Error';
import Home from '../Layout/home/Home';

import Login from '../Layout/login/Login';
import Register from './../Layout/login/Register';
import PrivateRoute from '../privateRoute/PrivateRoute';


const Root = createBrowserRouter([
 {
  path:"/",
  element:<MainLayout></MainLayout>,
  errorElement:<Error></Error>,
  children:[
    {
      path:"/",
      element:<Home/>,
     
    },
    
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/signUp",
      element:<Register/>
    },
   
  ]

  
 }

])

export default Root
