import './Header.css'
import user1 from '../../assets/user-regular-24 (2).png'

const Header = ({ onLoginClick }) => {
  return (
    <div>
      <nav>
        <div className='icon'>
          <a
            className='btnLogin-popup'
            href='#'
            title='Sign in'
            onClick={(e) => {
              e.preventDefault(); 
              onLoginClick(); 
            }}
          >
            <img src={user1} alt='user icon' />
          </a>
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
