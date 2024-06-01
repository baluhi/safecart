import React, { useContext, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from 'axios';

import Footer from "../../components/Footer/Footer";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/context";


const SellerLogin = () => {
  const {sellerLogin, user, alertMessage} = useContext(CartContext); 
  const navigate =  useNavigate()
  useEffect(() => {
   if(user.isSellerLogedIn) {
     navigate('/seller');
   }
  })
  return (
    <div className=" container">
      <h2 className="text-center" style={{marginTop:"50px"}}>Sign In</h2>
      <div className="container-fluid d-flex justify-content-center">
      <form action="" className="form-control log-form" onSubmit={sellerLogin}>
        <h3>Sign In</h3>
        {alertMessage?.sellerLoginError !== '' && <p style={{color: "red"}}> {alertMessage?.sellerLoginError} </p>}
        <label htmlFor="">Email Or User Name</label>
        <input
          type="text"
          placeholder="Email Or UserName"
          name="email"
          required
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <button>Sign In</button>
      </form>
      </div>
      <Footer />
    </div>
  );
};

export default SellerLogin;
