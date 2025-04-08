import React, { useState } from 'react'
import Header from './Components/Header/Header'
import HeaderImage from './Components/HeaderImage/HeaderImage'
import Cards from './Components/Cards/Cards.jsx'
import Footer from './Components/Footer/Footer'
import mail from '../src/assets/envelope-solid-24.png'
import lock from '../src/assets/lock-alt-solid-24.png'
import close from '../src/assets/x-regular-24.png'
import user from '../src/assets/user-solid-24.png'
import './App.css'

const App = () => {
  const [isActive, setIsActive] = useState(false);
  
  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div>
      <Header />
      <HeaderImage />
      <Cards />
      <hr />
      <Footer />
      <div className={`wrapper ${isActive ? 'active' : ''}`}>
        <span className='icon-close'><img src={close}/></span>
        <div className='form-box login'>
          <h2>Login</h2>
          <form action='#'>
            <div className='input-box'>
              <span className='icon'><img src={mail}/></span>
              <input type='email' required></input>
              <label>Email</label>
            </div>
            <div className='input-box'>
              <span className='icon'><img src={lock}/></span>
              <input type='password' required></input>
              <label>Password</label>
            </div>
            <div className='remember-forgot'>
              <label><input type='checkbox' /> Remember me</label>
              <a href='#'>Forgot Password?</a>
            </div>
            <button type='submit' className='btn'>Login</button>
            <div className='login-register'>
              <p>Don't have an account? <a href='#' className='register-link' onClick={handleRegisterClick}>Register</a></p>
            </div>
          </form>
        </div>

        <div className='form-box register'>
          <h2>Registration</h2>
          <form action='#'>
           <div className='input-box'>
              <span className='icon'><img src={user}/></span>
              <input type='text' required></input>
              <label>Username</label>
            </div>
            <div className='input-box'>
              <span className='icon'><img src={mail}/></span>
              <input type='email' required></input>
              <label>Email</label>
            </div>
            <div className='input-box'>
              <span className='icon'><img src={lock}/></span>
              <input type='password' required></input>
              <label>Password</label>
            </div>
            <div className='remember-forgot'>
              <label><input type='checkbox' /> I agree to the terms & conditions</label>
            </div>
            <button type='submit' className='btn'>Register</button>
            <div className='login-register'>
              <p>Already have an account? <a href='#' className='login-link' onClick={handleLoginClick}>Login</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
