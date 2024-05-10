import React from "react";
import data from "../../components/Data/DummyData";
import "./products.css";

const Products = ({handleAddProduct, handleWishList}) => {
 

  const productItems = data;


  return (
    <div className="container">
        <h2>View all products</h2>
      <div className="products">
        {productItems.map((item, id) => {
          return (
            <div className="card border-0 " key={id}>
              <div>
                <img
                  className="product-image"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div>
                <span className="product-name" style={{fontWeight:"500"}}> {item.name}</span><br/>
                <span className="product-name" style={{color:"#0088dd"}}> ${item.price}.00</span>
                <span style={{color:"#666666", textDecoration:"line-through", marginLeft:"10px", fontWeight:"600"}}>${item.price}.00</span>
              </div>



              <div className="card-bottom-btn w-75 d-flex justify-content-between">
                <button className=" add-cart-btn"  onClick ={() => {handleAddProduct(item)}}>Add to Cart</button>
                <button className="product-card-btn-icon"><i className='bi bi-repeat'></i></button>
                <button className="product-card-btn-icon" onClick ={() => {handleWishList(item)}}><i className='bi bi-heart'></i></button>
             </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
