import React from 'react'
import Navbar from '../../components/nav/Navbar'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'


const MainLayout = () => {
  return (
    <div className=''>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Toaster/>
    </div>
  )
}

export default MainLayout
