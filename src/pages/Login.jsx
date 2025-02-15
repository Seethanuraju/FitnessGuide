import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { Button } from '@mui/material';
import style from '../styles/Login.module.css'
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const navigate=useNavigate();

    const onlogin=()=>{
      if(email.length<16 ||password.length<8){
        alert("Please make sure that you are entering a genuine email and your password consists of 8 digits")
      }
      else{
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => { 
            const user = userCredential.user;
            navigate("/fitness")
          })
          .catch((error) => {
            alert("User not found.")
            setEmail("")
            setPassword("")
          });
        }
    }
  return (
   <>
        <div className={style.login}>
            <div className={style.main}>
              <h1 className={style.login_1}>Login</h1>
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
                        <Button onClick={onlogin} variant="contained">Login</Button>
                        </form>
                    <br/><br/>
                    <NavLink to='/signup'>Dont't have an account?</NavLink>

            </div>
        </div>
   </>
  )
}

export default Login