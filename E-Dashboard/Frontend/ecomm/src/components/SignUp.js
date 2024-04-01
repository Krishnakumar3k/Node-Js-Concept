import React, { useState, useEffect } from 'react';
import{useNavigate} from 'react-router-dom'  /* it is hook for use to navigate page */
function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); /* navigating */

    useEffect(()=>{
       const auth = localStorage.getItem('user');
       if(auth){
         navigate("/")
       }
    })

    const signupData = async ()=>{
        console.log(name,email, password)
        let result = await fetch("http://localhost:5000/signup",{
          method: "post",
          body:JSON.stringify({name,email, password}),  //inside the body it is goes to data. --> API always takes the data in json strigfy
          headers:{
            'Content-Type':'application/json'
          }
        });
        result = await result.json()
        console.log(result);
        localStorage.setItem("user", JSON.stringify(result)) // It use to store data in localstorage
        if(result){
          navigate('/');  /*  it is navigating the page and rendring to on the homepage */
        }
    }
  return (
    <>
       <div className='signup'>
        <h1>Signup</h1>
        <input className='signup-input' type='text' value={name} onChange={(e) => { setName(e.target.value) }} placeholder='Enter Name'/>
        <input className='signup-input' type='text' value={email}  onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter Email'/>
        <input className='signup-input' type='password' value={password}  onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter Password'/>
        <button onClick={signupData} className='signup-button' type='button'>Sign Up</button>
       </div>
    </>
  )
}

export default SignUp;
