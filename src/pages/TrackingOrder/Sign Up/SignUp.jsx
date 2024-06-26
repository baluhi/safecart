import React from 'react'
import './signup.css';
import Footer from '../../components/Footer/Footer';

const SignUp = () => {
  return (
    <div>
      <h2
        style={{ backgroundColor: "#f4f4f4", padding: "50px" }}
        className="text-center"
      >
        Register
     </h2>
     <a href="/"> <span  style={{ color:"grey",position:"relative" ,left:"49%", bottom:"50px"}}>Home</span></a> 
      
      <form
        style={{ height: "800px" }}
        action=""
        className="form-control log-form seller-form sign-up-form"
      >
        <h3>Create Account</h3>
        <label htmlFor="">Owner Name</label>
        <input type="text" placeholder="Owner Name" />
        <label htmlFor="">Business Name</label>
        <input type="text" placeholder="Business Name" />
        <label htmlFor="">Username</label>
        <input type="password" placeholder="Username" />
        <label htmlFor="">Password</label>
        <input type="password" placeholder="Password" />
        <label htmlFor="">Confirm Password</label>
        <input type="password" placeholder="Confirm Password" />
        <label htmlFor="">Business Category</label>
        <input type="text" placeholder="Business Category" />
        <label htmlFor="">Description</label>
        <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
        <div className="checkbox">
          <input type="checkbox" />
          <strong style={{ color: "grey" }}>
            Accept all{" "}
            <span style={{ color: "#006045" }}>
              Terms and Conditions & Privacy Policy.
            </span>
          </strong>
        </div>
        <button>Create Account</button>
      </form>
      <p style={{color:"grey",position:"relative", bottom:"100px" }} className="text-center">Already have account? <a href="/login"><span style={{color:"#006045"}}>Log in</span></a></p>
      <Footer/>
    </div>
  )
}

export default SignUp
