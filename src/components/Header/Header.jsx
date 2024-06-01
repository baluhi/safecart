import React from 'react'
// import './header.css'
import Logo from '../Logo/Logo'
import SearchBar from '../SearchBar/SearchBar'
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a className="navbar-brand" href="#">
        <Logo/>
    </a>
    
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav d-none d-lg-block">
        <SearchBar/>
        
      </ul>
    </div>
    <a href='/trackingorder'> <span className="bi bi-geo"></span>Tracking Order</a>
  </div>
</nav>
  )
}

export default Header
