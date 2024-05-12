import React from 'react'
import './signup.css'
import Footer from "../../components/Footer/Footer";
const SignUp = () => {
  return (
    <div className="container log-in-container seller-form sign-up-form">
      <h2>Register</h2>
      <a href="/"> <span style={{color:"grey", position:"relative", top:"-90px"}}> Home</span></a>
      <form action="" className="form-control log-form">
        <h3>Create Account</h3>
        <label htmlFor="">Owner Name</label>
        <input type="text" placeholder="Owner Name" />
        <label htmlFor="">Business Name</label>
        <input type="text" placeholder="Business Name" />
        <label htmlFor="">Email</label>
        <input type="email" placeholder="email" />
        <label htmlFor="">Username</label>
        <input type="text" placeholder="username" />
        <label htmlFor="">Password</label>
        <input type="password" placeholder="Password" />
        <label htmlFor="">Confirm Password</label>
        <input type="password" placeholder="Confirm Password" />
        <label htmlFor="">Business Category</label>
        <input type="text" placeholder="Business Category" />
        <label htmlFor="">Description</label>
        <textarea id="textArea" name="textArea" rows="4" cols="50"></textarea>
      </form>
      {/* form bottom */}
      <div className="form-bottom d-flex">
        <input type="checkbox" />{" "}
        <strong>Accept all  <span style={{color:"#006058"}}>Terms and Conditions & Privacy Policy.</span></strong>
      </div>
      <button className="form-btn"> Register</button>
<span>Already have account?  <strong><a href='/login'  style={{color:"grey"}}>Log in</a></strong></span>
      <Footer />
    </div>
  )
}

export default SignUp
