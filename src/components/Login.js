import React, { useState } from 'react'
import '../styles/Login.css'
import AuthenticationService from '../service/AuthenticationService';
import { useNavigate } from 'react-router-dom';

/*
    ES7 React/Redux/GraphQL/React-Native snippets
******************************************************
    imr - Import React
    imrd - Import ReactDom
    imrc - Import React, {Component}
    imrr - Import {BrowserRouter as Router}
    rfce - Functional Component
    rcc - Class Component
    rafce - Arrow functional Component
*/
function Login() {
  const history=useNavigate(); //obj to navigate to another component
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [errorMessage,setErrorMessage] = useState('');
  const [successMessage,setSuccessMessage] = useState('');
  const handleLogin = async () => {
    if(!email || !password){
      setErrorMessage("Please enter both email and password");
      return;
    }

    const dealer = {email,password};
    try{
      const loginSuccess = await AuthenticationService.login(dealer);
      console.log("API Response: ",loginSuccess.data);

      if(loginSuccess){
        setSuccessMessage('Login Successful. Redirecting........');
        setTimeout(()=>{
          history("/product");//On successful login navigate to product component
        },200);
      }else{
        setErrorMessage('Invalid email or Password');
      }
    }
    catch(error){
      console.log('Login Error: ', error);
      setErrorMessage('Error occured during Login');
    }
  }
  return (
    <div> <br/><br/>
    <div className='container'>
        <h2 style={{color:'green'}}>DEALER LOGIN</h2>
        <div className='form-group'>
          <label><b>Email:</b></label>
          <input type='email' className='form-control'value = {email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className='form-group'>
          <label><b>Password:</b></label>
          <input type='password' className='form-control'value = {password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button className='btn btn-primary' onClick={handleLogin}>Login</button>
        {errorMessage && <p className='error-message'>{errorMessage}</p>}
        {successMessage && <p className='success-message'>{successMessage}</p>}
        </div>
    </div>
  )
}

export default Login