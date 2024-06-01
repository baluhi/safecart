import React, { useContext } from 'react'
import './signup.css'
import Footer from "../../components/Footer/Footer";
import { CartContext } from '../../context/context';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  const navigate = useNavigate();
  const {user, userRegistration} =  useContext(CartContext)
  if(user.isSellerLogedIn || user.isUserLogedIn) {
    return navigate('/');
  }
  return (
    <div className=" container-fluid">
      <h2 className='text-center'>Register</h2>
    <div className="container justify-content-center d-flex">
      <form className="form-control log-form" onSubmit={(event) => userRegistration(event)} id='signup-form' style={{backgroundColor:'#f7f7f7'}}>
        <h3>Create Account</h3>
        <label htmlFor="">Name</label>
        <input type="text" className='border' placeholder="Name" name='name' required/>
        <label htmlFor="">Name</label>
        <input type="text" className='border' placeholder="Username" name='name' required/>
        <label htmlFor="">Email</label>
        <input type="email"className='border' placeholder="Email"  name='email' required/>
        <label htmlFor="">Mobile Number</label>
        <input type="number"className='border' placeholder="Mobile Number" name='mobileNumber' required/>
        <label htmlFor="">Password</label>
        <input type="password"className='border' placeholder="Password" name='password' required/>
        <label htmlFor="">Confirm Password</label>
        <input type="password"className='border' placeholder="Confirm Password"/>
      </form>
      </div>


      {/* form bottom */}
      <div className="form-btm mt-3">
      <div className="form-bottom d-flex">
        <input type="checkbox" />{" "}
        <strong>Accept all  <span style={{color:"#006058"}}>Terms and Conditions & Privacy Policy.</span></strong>
      </div>
      <button className="form-btn" form='signup-form'> Register</button>
<span>Already have account?  <strong><a href='/login'  style={{color:"grey"}}>Log in</a></strong></span>
      </div>
     
      <Footer />
    </div>
  )
}

export default SignUp
