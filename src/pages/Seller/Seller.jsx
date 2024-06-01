import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useContext } from "react";
import { CartContext } from "../../context/context";

export default function Seller({ isAuthenticated }) {
  const navigate = useNavigate();
  const {user, sellerProducts, deleteProduct} = useContext(CartContext); 
  if (!user.isSellerLogedIn) {
    navigate("/");
    
  } 

  return (
    <div>
      <h1 style ={{backgroundColor:"#f7f7f7", textAlign:"center", padding:"30px"}}>Your Products</h1>
      <div className="container">
        <div className="row">
          {sellerProducts.map((item) => (
            <ProductCard key={item.id} {...item} deleteProduct={deleteProduct}/>
          ))}
        </div>
      </div>
    </div>
  );
}
