import React, { useState } from 'react'
import style from '../styles/Home.module.css'
import Button from '@mui/material/Button';
import { NavLink, useNavigate } from 'react-router';
const Home = () => {
    const [feet,setFeet]=useState(5)
    const [inches,setInches]=useState(5)
    const [weight,setWeight]=useState(50)
    const[bmi,setBmi]=useState(0)
    const[bmiresult,setBmiResult]=useState()

    const navigate=useNavigate();

    const calBMI=()=>{
      let f=parseInt(feet);
      let i=parseInt(inches);
      let height=(f*12+i)*0.0254;
      let w=parseInt(weight);
      let bmi=w/(height*height);
      setBmi(bmi.toFixed(2));
      if(bmi<18.5){
        setBmiResult("Underweight")
      }
      else if(bmi>18.5 && bmi<24.9){
        setBmiResult("Normal weight")
      }
      else{
        setBmiResult("Overweight")
      }
    }

    const onsignup=()=>{
    navigate("/signup")
    }
  return (
    <div className={style.main}>
        <div className={style.bmi}>

            <h1>Bmi Calculator</h1>

            <div className={style.bmi_first}>

                <h2>Height {feet} ft</h2>

            <input type='range'
            id={style.inp}
            value={feet}
            min='2'
            max='7'
            onChange={(e)=>setFeet(e.target.value)}
             ></input>

             <h2>Inches {inches} in</h2>

             <input type='range' 
             id={style.inp}
             value={inches}
             min='0'
             max='11'
             onChange={(e)=>setInches(e.target.value)} > 
             </input>

            <h2>Weight {weight} kg</h2>

             <input type='range' 
             id={style.inp}
             value={weight}
             min='0'
             max='120'
             step='0.1'
             onChange={(e)=>setWeight(e.target.value)}>
             </input>

             <Button onClick={calBMI} variant="contained">Calculate BMI</Button>
            
            </div>
            <h1>BMI:{bmi}</h1>
            <p>{bmiresult}</p>
        </div>
        <div className={style.fitness}>
         <h1>Continue To Application</h1>
         <br/>
         <Button onClick={onsignup} variant="contained">SignUp</Button>
        </div>
    </div>
  )
}

export default Home