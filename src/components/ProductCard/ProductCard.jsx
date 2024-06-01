import React from 'react';
import './ProductCard.css'; // Custom CSS for styling
import { Link } from 'react-router-dom';

const ProductCard = ({title, description, id, user_id,   created_at, price, image, deleteProduct}) => {
  return (
    <div className="col-md-4 product-card-container">
      
          <div className="product-card">
            <div className="product-image" style={{backgroundImage: `url('${image}')`}}></div>
            <div className="product-details">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">Created At: {created_at}</p>
              <p className="card-text">Price: ${price}</p>
              <div className="text-center">
                <Link to={`/editproduct/${id}`}>
                <button className="btn btn-primary mr-2">Edit</button>
                </Link>
                <button className="btn btn-danger" onClick={() => deleteProduct(id, user_id)}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      
    
  );
}

export default ProductCard;
