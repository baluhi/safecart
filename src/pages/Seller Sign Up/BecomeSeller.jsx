import React from "react";
import axios from "axios";
import "./becomeseller.css";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const BecomeSeller = () => {
  const navigate =  useNavigate();
  const handleFormData = async (event) => {

    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());

    try {
      const response = await axios.post('http://localhost:4000/seller-signup', data);
      if(response.status === 200) {
        console.log('SignUp succesfully.')
        window.alert('User Created succesfully.')
        navigate('/sellerlogin');
      }
    }catch(err) {
      console.log('Error in Seller Signup', err);
    }
    console.log(data);

  }

  return (
    <div className=" container-fluid ">
      <h2 className="text-center">Vendor Registration</h2>
      <a href="/"> <span  className="text-center "> Home</span></a>
      <div className="container d-flex justify-content-center">
      <form onSubmit={handleFormData} className="form-control log-form" id='seller-signup'>
        <h3>Basic Info</h3>
        <label htmlFor="">Owner Name</label>
        <input className="border" type="text" placeholder="Owner Name" name="owner_name"  required/>
        <label htmlFor="">Business Name</label>
        <input className="border" type="text" placeholder="Business Name" name="business_name"  required/>
        <label htmlFor="">Email</label>
        <input className="border" type="email" placeholder="email" name="email"  required/>
        <label htmlFor="">Username</label>
        <input className="border" type="text" placeholder="username" name="username"  required/>
        <label htmlFor="">Password</label>
        <input className="border" type="password" placeholder="Password" name="password"  required/>
        <label htmlFor="">Confirm Password</label>
        <input className="border" type="password" placeholder="Confirm Password"  />
        <label htmlFor="">Business Category</label>
        <input className="border" type="text" placeholder="Business Category" name="business_category"  required/>
        <label htmlFor="">Description</label>
        <textarea id="textArea"  rows="4" cols="50" name="description" ></textarea>
      </form>
      </div>
      {/* form bottom */}
      <div className="d-flex  flex-column align-items-center  justify-content-center">
      <div className="  ">
        <input type="checkbox"  required/>{" "}
        <strong>Accept all  <span style={{color:"#006058"}}>Terms and Conditions & Privacy Policy.</span></strong>
      </div>
      <div className=" ">
      <button className="form-btn" form="seller-signup"> Submit For Registration</button>
      <p  className="text-center">Already have account?  <strong className="ml-1"><a href='/login'  style={{color:"grey"}}>Log in</a></strong></p>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default BecomeSeller;
