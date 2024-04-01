import React, { useEffect } from 'react';
import{useNavigate} from 'react-router-dom'  /* it is hook for use to navigate page */
const Login = ()=>{
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate("/")
        }
    })


    const loginHandle =async ()=>{
        console.log("email, password", email, password)
        let result = await fetch('http://localhost:5000/login',{
            method : 'POST',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
              }
        });
        result = await result.json();
        console.log(result);
        if(result.name){
            /*  localStorage.set("user",)    */
            localStorage.setItem("user", JSON.stringify(result)); // Storing user data in localStorage
            navigate("/")
        }else{
            alert("please Enter Correct Details")
        }
    }
    return(
        <>
            <div className="login">
                <h1>Admin Login</h1>
                <input type="text"  className='login-input' placeholder='Enter Email'
                value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input type="text"  className='login-input' placeholder='Enter Password'
                value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button onClick={loginHandle} type='button' className='login-button'>Login</button>
            </div>
        </>
    )
   
}
export default Login;