import React, { useContext } from 'react'
import { AuthContext } from '../../authProvider/AuthProvider'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast';
import { saveUser } from '../../api/auth';

const Register = () => {
  const navigate=useNavigate()
  const location=useLocation()
  const {createUser,handleUpdateProfile}=useContext(AuthContext)

  const handdleSubmit=async(e)=>{
      const email=e.target.email.value
      const password=e.target.password.value
      const name=e.target.name.value
      e.preventDefault()
      console.log(email,password,name)

    
    
      try {

        //2. User Registration
        const result = await createUser(email, password)
  
        //3. Save username & profile photo
        await handleUpdateProfile(name)
        console.log(result)
  
        //4. save user data in database
        const dbResponse = await saveUser(result?.user)
        console.log(dbResponse)
        // result.user.email
  
  
        toast.success('Successfully Registerd and LogedIn');
        navigate(location?.state ? location.state: '/')
      } catch (err) {
        console.log(err)
        toast.error(err?.message)
      }
     
  }
return (
  <div>
   <section className="bg-gray-400 white:bg-gray-900">
<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign Up to your account
            </h1>
            <form onSubmit={handdleSubmit} className="space-y-4 md:space-y-6" action="#">
            <div>
                    <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                    <input  type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Md Sowad Karim" required=""/>
                </div>
                <div>
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input  type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                </div>
                <div>
                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input  type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                </div>
                <div className="flex items-center justify-between">
                    
                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                </div>
                <button type="submit" className="w-full text-white bg-red-400 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign Up</button>
             
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet? <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign In</a>
                </p>
            </form>
        </div>
    </div>
</div>
</section>
  </div>
)
}

export default Register
