import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"
import { getCookie } from "../../helpers/utils";
import { jwtDecode } from "jwt-decode";

export default function SellerProduct(){
    const {sellerName} =  useParams();
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:4000/productby/${sellerName}`)
        .then(res => {
            console.log('data-by-ambani', res?.data)
            setData(res?.data?.productDetail);
        })
        .catch(err => {
            console.log(err);
        })

    }, [sellerName])
    console.log(data);

    const handleAddToCart = (product) => {
        const token = getCookie('token');
        if(token) {
          const tokenData =  jwtDecode(token);
          const config = {
            headers: {
              Authorization: `Bearer ${token}`, // Include user ID from JWT token in the Authorization header
            },
          };
          const toSend = {
            user_id: tokenData.data[0].id,
            product_id: product.id
          }
          axios.post('http://localhost:4000/add-to-cart', toSend, config ) 
          .then(response => {        
            alert(response.data.message) 
          })
          .catch(err => {
            alert('Try again later.')
            console.log(err)
          })
          console.log('userID: ', tokenData.data[0].id)
          
          console.log('id :', product)
    
        }
        
      };
      const handleAddToWishlist = (product) => {
        const token = getCookie('token'); 
        if(token) {
          const tokenData =  jwtDecode(token); 
          const config = {
            headers: {
              Authorization: `Bearer ${token}`, // Include user ID from JWT token in the Authorization header
            },
          };
          const toSend = {
            user_id: tokenData.data[0].id,
            product_id: product.id
          }
          axios.post('http://localhost:4000/add-to-whishlist', toSend, config ) 
          .then(response => {        
            alert(response.data.message) 
          })
          .catch(err => {
            alert('Try again later.')
            console.log(err)
          })
          console.log('userID: ', tokenData.data[0].id)
          
          console.log('id :', product)
    
        }
      };
return <div className="container">
<h2>View all products</h2>
<div className="products">
  {data?.map((item, id) => {
    return (
      <div className="card border-0 " key={id}>
        <div>
          <img
            className="product-image"
            src={item.image}
            alt={item.title}
          />
        </div>
        <div>
          <span className="product-name" style={{ fontWeight: "500" }}>
            {" "}
            {item.title}
          </span>
          
          <br />
          <span className="product-name" style={{ color: "#0088dd" }}>
            {" "}
            ${item.price}.00
           
          </span>
          <span
            style={{
              color: "#666666",
              textDecoration: "line-through",
              marginLeft: "10px",
              fontWeight: "600",
            }}
          >
            ${item.price}.00
          </span>
        </div>

        <div className="card-bottom-btn w-75 d-flex justify-content-between">
          <button
            className=" add-cart-btn"
            onClick={() => handleAddToCart(item)}
          >
            Add to Cart
          </button>
          <button className="product-card-btn-icon">
            <i className="bi bi-repeat"></i>
          </button>
          <button
            className="product-card-btn-icon"
            onClick={() => handleAddToWishlist(item)}
          >
            <i className="bi bi-heart"></i>
          </button>
        </div>
        <p className="text-dark"><Link to={`/product/${item.sellerName}`} className="text-dark">  {item.sellerName}  </Link></p>
      </div>
    );
  })}
</div>
</div>

}