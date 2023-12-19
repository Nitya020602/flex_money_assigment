import React from 'react'
import image from './bckgrd.jpg'
import './App.css'
import Header from './Header/Header'
import Admin from './AdmissionForm/Admin';
const HomePage = () => {
  return (
    <div className='background'>
      <div className='overlay'></div>
      <img className='bckgrd' src={image} alt='background'/>
      <div className='contents'><Header/></div>
        <div className='content1'><Admin/></div>
    </div>
  )
}

export default HomePage;