import React from 'react'
import './header.css'
import Logo from '../Logo/Logo'
import SearchBar from '../SearchBar/SearchBar'

const Header = () => {
  return (
    <div className='header d-flex  justify-content-around'>
      <Logo/>
      <SearchBar/>
   <a style={{color:"grey"}} href='/trackingorder' className='bi bi-geo-alt'>Order Tracking</a>
    </div>
  )
}

export default Header
