import React from 'react'
import './topbar.css';
import Icons from '../Icons/Icons';
import HeaderLinks from '../HeaderLinks/HeaderLinks';

const TopBar = () => {
  return (
    <div className=' container-fluid d-flex justify-content-between'>
      <Icons/>
      <HeaderLinks/>
    
    </div>
  )
}

export default TopBar
