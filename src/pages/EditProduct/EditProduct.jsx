import { useNavigate, useParams } from "react-router-dom";
import { getCookie } from "../../helpers/utils";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/context";

export default function EditProduct() {
  const navigate =  useNavigate()
  const {id} =  useParams();
  const {user, setProducts, setSellerProducts} = useContext(CartContext); 

  if(!user.isSellerLogedIn) {
    navigate('/');
  }
  const [defaultData, setDefaultData] = useState({})
  const [image, setImage] = useState('');
  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();

    reader.onload = () => {
      const base64String = reader.result;
      setImage(base64String);
      setDefaultData((prevData => ({...prevData, image:base64String})))
    };
    // Read the image file as a data URL
    reader.readAsDataURL(file);
  }
  useEffect(() => {
    const fetchData = async () => {
        axios.get(`http://localhost:4000/product/${id}`)
        .then(response => {
            setDefaultData(response?.data?.productDetail[0])
        })
        .catch(err => {
          setDefaultData([]);
            console.log(err);
        })
    }
    fetchData();
  }, [id])

  const handleFormData = async (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    const token = getCookie('token');
    const sellerData = jwtDecode(token);
    data.user_id = sellerData.data[0].id;
    data.id = id;
    data.sellerName = user.userName

    
    data.image = image;
    if(image === '') {
      data.image = defaultData?.image
    }

    const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Include user ID from JWT token in the Authorization header
        },
      };
      console.log('data: ', data)
    axios.post('http://localhost:4000/addproduct', data, config )
    .then(response => {
      console.log(response?.data);
      setProducts(response?.data?.data)
      setSellerProducts(response?.data?.updatedSellerProducts);
      alert('data update successfull');
      navigate('/seller');
    }).catch(err => {
      console.log('got an error', err)
    })
  };
  
  return (
    <div className="container log-in-container seller-form">
      
      <form
        onSubmit={handleFormData}
        className="form-control log-form"
      >
      <h1>Add Product</h1>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="Title"
          name="title"
          defaultValue={defaultData.title}          
          required
        />
        <label htmlFor="price">Price</label>
        <input type="number" placeholder="price" name="price" defaultValue={defaultData.price} required />
        <label htmlFor="category">Category</label>
        <input type="text" placeholder="category" name="category" defaultValue={defaultData.category} required />
        <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Images
              </label>
              <input
                type="file"
                className="form-control"
                id="image"
                name="image"
                onChange={handleImageChange}
              />
            </div>

            {defaultData.image !== "" && ( // Check if image data is available
              <div className="mb-3">
                <label className="form-label">Uploaded Image:</label>
                <div className="uploaded-image-container">
                  <img
                    src={defaultData.image ? defaultData.image : undefined}
                    alt="Uploaded"
                    className="img-fluid uploaded-image"
                  />
                </div>
              </div>
            )}
        <label htmlFor="">Description</label>
        <textarea
          id="textArea"
          rows="4"
          cols="50"
          name="description"
          defaultValue={defaultData.description}
          required
        ></textarea>
        <button className="form-btn">Update</button>
      </form>
    </div>
  );
}
