import React, {useContext} from "react";
import { CartContext } from "../../context/context";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
/* import "./login.css"; */

const Login = ({isAuthenticated}) => {
  const navigate = useNavigate();
  const { login, user, alertMessage } = useContext(CartContext);


  if(user.isUserLogedIn) {
    return navigate('/');
  }
  const handleLogin = async (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const email = fd.get('email')
    const password = fd.get('password')

    login('buyer', email, password);
  }
  return (
    <>
  
    <div className="container-fluid ">
    <h2 style ={{marginTop:"60px"}}  className="text-center">Sign In</h2>
<div className="container d-flex justify-content-center mt-5">

      <form action="" className="form-control log-form" onSubmit={handleLogin}>
      {alertMessage?.userLoginError !== '' && <p style={{color: "red"}}> {alertMessage?.userLoginError} </p>}
        <h3>Sign In</h3>
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
     
    </div>
    <Footer />
    </>
  );
};

export default Login;
