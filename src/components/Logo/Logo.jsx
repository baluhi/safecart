import React from 'react'
import './logo.css'
const Logo = () => {
    const logoImg = "https://safecart.bytesed.com/assets/uploads/media-uploader/logo1698825016.webp"
  return (
    <div className='logo'>
      <img src={logoImg} alt="SafeCart" />
    </div>
  )
}

export default Logo
