import React ,{useState}from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Cart from './pages/Cart/Cart.jsx'
import TopBar from "./components/TopBar/TopBar";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import TrackingOrder from './pages/TrackingOrder/TrackingOrder'
const App = () => {

  const [cartItems, setCartItems] = useState([]);
  const [wishList, setWishList] = useState([]);

  const handleAddProduct = (productId) => {
    const productExist = cartItems.find((item) => item.id === productId);
    setCartItems((prev) => [...prev, productId]);
  };

  const handleWishList = (productId) => {
    const itemExist = wishList.find((item) => item.id === productId);
  setWishList((prev) => [...prev, productId]);
  };
 console.log("Cart",wishList)

  return (
    <>
      <div>
        <BrowserRouter>
          <TopBar />
          <Header />
          <Navbar />
          <Routes>
            <Route path='/' element={<Home handleAddProduct={handleAddProduct}
              handleWishList={handleWishList} />} />
            <Route path = '/login' element={<Login/>}/>
            <Route path = '/trackingorder' element={<TrackingOrder/>}/>
            <Route path = '/cart' element ={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
