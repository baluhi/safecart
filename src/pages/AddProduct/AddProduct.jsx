import { useNavigate } from "react-router-dom";
import { getCookie } from "../../helpers/utils";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useContext, useState } from "react";
import { CartContext } from "../../context/context";

export default function AddProduct() {
  const navigate = useNavigate();
  const [image, setImage] = useState('');
  const [limitMessage, setLimitMessage] = useState('');
  const {user, setProducts, setSellerProducts} = useContext(CartContext); 
  if(!user.isSellerLogedIn) {
    return navigate('/');
  }
  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();

    reader.onload = () => {
      const base64String = reader.result;
      setImage(base64String);
    };
    // Read the image file as a data URL
    reader.readAsDataURL(file);
  }
  const handleFormData = async (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    const token = getCookie('token');
    const sellerData = jwtDecode(token);
    data.user_id = sellerData.data[0].id
    console.log('sellerData: ', sellerData);
    console.log('AddProductDetails: ', data);
    data.image = image;
    if(image.length  === 0) {
      window.alert('Upload image');
    } else {

      data.sellerName = sellerData.data[0].owner_name ;
      const config = {
          headers: {
            Authorization: `Bearer ${token}`, // Include user ID from JWT token in the Authorization header
          },
        };
  
      await axios.post('http://localhost:4000/addproduct', data, config )
      .then(response => {
        if(response?.data?.sucess) {

          // console.log(response?.data)
          setSellerProducts(response?.data?.sellerProducts)
          window.alert('Product added succesfully.')
          setProducts(response?.data?.data);
          navigate('/');
        } if(response?.data?.message === 'Upload small size photo') {
          setLimitMessage('Upload small size photo max(16mb)')
        }
      }
      )
      .catch(err => {
        console.log(err);
        window.alert('Failed to save the product');
      })
    }

    
  };
  
  return (
    <div className="container log-in-container seller-form">
      
      <form
        onSubmit={handleFormData}
        className="form-control log-form"
        id="form-btn-addProduct"
      >
      <h1>Add Product</h1>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="Title"
          name="title"
          required
        />
        <label htmlFor="price">Price</label>
        <input type="number" placeholder="price" name="price" required />
        <label htmlFor="category">Category</label>
        <input type="text" placeholder="category" name="category" required />
        <label htmlFor="image">Image</label>
        <input
                type="file"
                className="form-control"
                accept="image/png, image/jpeg"
                id="image"
                name="image"
                onChange={handleImageChange}
                required
              />
            <span>{limitMessage}</span>
            
        <label htmlFor="">Description</label>
        <textarea
          id="textArea"
          rows="4"
          cols="50"
          name="description"
          required
        ></textarea>
        <button className="form-btn" type="submit">Add</button>
      </form>
    </div>
  );
}
