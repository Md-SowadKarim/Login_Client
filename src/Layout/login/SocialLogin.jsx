import React, { useContext } from 'react'
import { AuthContext } from '../../authProvider/AuthProvider';
import { useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { saveUser } from '../../api/auth';

const SocialLogin = () => {
  const navigate=useNavigate()
  const location=useLocation()
  const { googleLogin } = useContext(AuthContext); 
    // Handle Google Signin
    const handleGoogleSignIn = async () => {
      try {
        //2. User Registration using google
        const result = await googleLogin()
        console.log(result)
  
        //4. save user data in database
        const dbResponse = await saveUser(result?.user)
        console.log(dbResponse)
  

     
        toast.success('login Sucessfully');
      navigate(location?.state ? location.state: '/')
      } catch (err) {
        console.log(err)
        toast.error(err?.message)
      }
    }

  return (
    <div>
      <div >
        <button
          onClick={ handleGoogleSignIn}
          type="submit"
          className="w-full text-white bg-red-400 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Google Sign in
        </button>
       
      </div>
    </div>
  );
}

export default SocialLogin
