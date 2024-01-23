import React, { useContext, useEffect } from 'react'
import ss from "../../assets/ss.png"
import { AuthContext } from '../../authProvider/AuthProvider'

const Home = () => {
  const { user,loading } = useContext(AuthContext);

 
  return (
    <div className='bg-white dark:bg-gray-900 text-center py-10'>
     <h1>this is home page</h1>
     {
      user?.email &&  <div className='mx-auto '>
      <img className='mx-auto ' src={ss} alt="" />
     </div>

     }
    
      
    </div>
  )
}

export default Home
