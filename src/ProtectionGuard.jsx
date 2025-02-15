import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from './firebase'
import { Navigate } from 'react-router-dom'

const ProtectionGuard = ({children}) => {
    const[user,setUser]=useState(null)
    const[loading,setLoading]=useState(true)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentuser)=>{
            setUser(currentuser)
            setLoading(false)
        })
        return ()=>unsubscribe();
    },[])
if(loading){
    return <p>Loading...</p>
}

    return user ? children:<Navigate to="/login"></Navigate>
}

export default ProtectionGuard