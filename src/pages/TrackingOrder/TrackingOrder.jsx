import React from 'react'
import './trackingorder.css'
import Footer from'../../components/Footer/Footer'
const TrackingOrder = () => {
  return (
    <div className="container log-in-container">
    <h2>Order Tracking</h2>
    <div className="track-order d-flex">
   
    <form action="" className="form-control log-form">
      <h3>Order Tracking</h3>
      <label htmlFor="">Order Id</label>
      <input  type="text" placeholder='Order Id' />
      <label htmlFor="">Billing Email</label>
      <input  type="email" placeholder='Billing Email' />
      <button >Track your order</button>
    </form>
    <img src="https://safecart.bytesed.com/assets/img/tracking/treaking-image.webp" alt="" />
    </div>
   
    <Footer/>
  </div>
  )
}

export default TrackingOrder
