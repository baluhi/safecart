import { jwtDecode } from "jwt-decode";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCookie } from "../../helpers/utils";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "./order.css";
import { CartContext } from "../../context/context";

export default function Order() {
  const {user} = useContext(CartContext)
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardHolder, setCardHolder] = useState("");


  const handleSubmit = (e) => {
    
    e.preventDefault();
    // Handle payment processing logic here
    console.log("Payment Details:", {
      cardNumber,
      expiryDate,
      cvv,
      cardHolder,
    });
  };

  const handleClick = () => {
    toast.success("Your Order placed..");
  };
  const navigate = useNavigate();

  if (!user.isUserLogedIn) {
    navigate("/");
  }


  // on the basis of product id make a request on /product/productId then there you will get all the detail
  return (
    <>
      <div className="payment-container">
        <h2>Payment Details</h2>
        <form className="payment-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date</label>
            <input
              type="date"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="MM/YY"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardHolder">Card Holder Name</label>
            <input
              type="text"
              id="cardHolder"
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="payment-button"
            onClick={handleClick}
          >
            <Link style ={{color:"black"}} to="/success">Submit Payment </Link>
          </button>
         
          <ToastContainer />
        </form>
      </div>
    </>
  );
}
