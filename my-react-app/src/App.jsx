import { useState } from 'react'
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
  const [showModal, setShowModal] = useState(false);

  const handleRegisterClick = (e) => {
    e.preventDefault();
    setIsActive(true);
  };

  const handleLoginClick = (e) => {
    if (e) e.preventDefault();
    setIsActive(false);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Header onLoginClick={handleLoginClick} />
      <HeaderImage />
      <Cards />
      <hr />
      <Footer />

      {showModal && (
        <div className={`wrapper ${showModal ? 'active-popup' : ''} ${isActive ? 'active' : ''}`}>
          <span className='icon-close' onClick={handleCloseModal}>
            <img src={close} alt='close' />
          </span>

          <div className='form-box login'>
            <h2>Login</h2>
            <form action='#'>
              <div className='input-box'>
                <span className='icon'><img src={mail} alt="email" /></span>
                <input type='email' required />
                <label>Email</label>
              </div>
              <div className='input-box'>
                <span className='icon'><img src={lock} alt="lock" /></span>
                <input type='password' required />
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
                <span className='icon'><img src={user} alt="user" /></span>
                <input type='text' required />
                <label>Username</label>
              </div>
              <div className='input-box'>
                <span className='icon'><img src={mail} alt="email" /></span>
                <input type='email' required />
                <label>Email</label>
              </div>
              <div className='input-box'>
                <span className='icon'><img src={lock} alt="lock" /></span>
                <input type='password' required />
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
      )}
    </div>
  )
}

export default App