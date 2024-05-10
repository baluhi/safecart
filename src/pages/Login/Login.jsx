import React from "react";
import "./login.css";
import Footer from "../../components/Footer/Footer";
const Login = () => {
  return (
    <div className="container log-in-container">
      <h2>Sign In</h2>
      <form action="" className="form-control log-form">
        <h3>Sign In</h3>
        <label htmlFor="">Email Or User Name</label>
        <input  type="text" placeholder="Email Or UserName" />
        <label htmlFor="">Password</label>
        <input  type="password" placeholder="Password" />
        <button >Sign In</button>
      </form>
      <Footer/>
    </div>
  );
};

export default Login;
