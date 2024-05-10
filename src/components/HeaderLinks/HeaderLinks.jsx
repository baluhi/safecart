import React from 'react'
import {Link} from 'react-router-dom'
import './headerlinks.css'
const HeaderLinks = () => {
  return (
    <div className='HeaderLinks'>
      <ul className="Links d-flex">
        <li><Link to = "/becomeseller" style={{color:"black"}}>Become a seller</Link></li>
        <li><Link to ="/sellerlogin"> Seller login</Link></li>
        <li><Link to ="/faq">FAQ</Link></li>
        <li><Link to ="/contact">Contact </Link></li>
        <li><Link to = "/trackingorder">Tracking Order</Link></li>
      </ul>
    </div>
  )
}

export default HeaderLinks
