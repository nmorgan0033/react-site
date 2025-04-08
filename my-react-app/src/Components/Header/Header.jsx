//import React from 'react'
import React, { useState } from 'react'
import './Header.css'
import user1 from '../../assets/user-regular-24 (2).png'
//import user2 from '../../assets/log-in-circle-regular-24.png'

const Header = () => {
  const handleLoginClick = () => {
    const wrapper = document.querySelector('.wrapper');
    wrapper.classList.add('active-popup');
  };

  return (
    <div>
      <nav>
        <div className='icon'>
        <a className='btnLogin-popup' href='#' title='Sign in' onClick={handleLoginClick}><img src={user1} alt="user icon"/></a> <br></br>
        </div> 
        <a href='#'><span className='logo'>Ventures</span></a>
        <ul className='links'>
          <li><a href='#blog'>Blog</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Services</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
