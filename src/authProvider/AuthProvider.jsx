import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import {auth} from "../firebaseConfig/FirebaseConfig"

export const AuthContext=createContext(null)
const googleProvider=new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading, setloading] = useState(true)
    const googleLogin=()=>{
        setloading(true);
        return signInWithPopup(auth,googleProvider)
    }

    const createUser=(email,password)=>{
        setloading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn=(email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    const handleUpdateProfile = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }
    const logOut=()=>{
        setloading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            setUser(user)
            setloading(false)
        })
    },[])
    const authentication={
        googleLogin,
        signIn,
        createUser,
        user,
        logOut,
        handleUpdateProfile,
        loading
    }
  return (
    <AuthContext.Provider value={authentication}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
