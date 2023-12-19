import React from 'react'
import logo from './logo2.png'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='head'>
        <img src={logo} alt='logo'/>
        <div className='content'>
            <Link to='/'>
              <button className='Button'>Admission Form</button>
            </Link>
            <Link to='/'>
              <button className='Button'>Contact Us</button>
            </Link>
        </div>
    </div>
  )
}

export default Header