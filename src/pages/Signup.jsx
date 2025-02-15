import React, { useState } from 'react'
import style from '../styles/Signup.module.css'
import { Button } from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

const Signup = () => {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const navigate=useNavigate();

    const onsignup= ()=>{
      if(email.length<16 || password.length<8){
        alert("Please make sure that you are entering a genuine email and your password consists of 8 digits ")
        setEmail("")
        setPassword("")
      }
else{
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    alert("Account is created")
    navigate("/login")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Invalid input / User already exist.")
    setEmail("")
    setPassword("")
  });
}
  }
  return (
    <>
       <div className={style.signup}>
        <div className={style.main}>
            <h1 className={style.signup_1}>Signup</h1>
            <br/>
            <form method='POST'>
            <label>Email:</label>
            <input type='email' placeholder='Enter the email'
            minLength='16'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}></input>
           
            <br/>
            <br></br>

            <label>Password:</label>
            <input type='password' placeholder='Enter the password'
            minLength='8'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}></input>
          
           <br/><br/>
         <Button onClick={onsignup} variant="contained">SignUp</Button>
         </form>
         <br/>
         <br/>
         <NavLink to='/login'>Already have an account?</NavLink>
        </div>
       </div>
    </>
  )
}

export default Signup