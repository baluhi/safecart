import axios from "axios";
import { createContext, useState, useEffect } from "react";
import {
  deleteCookie,
  getCookie,
  getUserCartProduct,
  getUserWishListProducts,
  isSellerLogedIn,
  isTokenValid,
  isUserLogedIn,
  setCookie,
} from "../helpers/utils";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import { fetchProducts } from "../http/http";

export const CartContext = createContext({
  login: (userType, email, password) => {},
  userRegistration : (event) => {},
  sellerLogin: (event) => {},
  user: {
    userName: "",
    isUserLogedIn: false,
    isSellerLogedIn: false,
  },
  products: [],
  setProducts: [],
  wishListProducts: [],
  cartProducts: [],
  updateCart: (product_id, update) => {},
  addToCart: (product) => {},
  addToWishList: (product) => {},
  wishListLength: 0,
  logout: () => {},
  removeFromWishList: (product_id) => {},
  deleteProduct: (id)  => {}, 
  sellerProducts: [],
  setSellerProducts: () => {},
  alertMessage: {},
});

export default function CartProvider({ children }) {
  const navigate = useNavigate();
  const [cartProducts, setCartProducts] = useState([]);
  const [alertMessage, setAlertMessage] = useState({});
  const [sellerProducts, setSellerProducts] = useState([]);
  const [wishListProducts, setWishListProducts] = useState([]);
  const [wishListLength, setWishListLength] = useState(0);
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState({
    userName: "",
    isUserLogedIn: false,
    isSellerLogedIn: false,
  });

  useEffect(() => {
    // get all the products
    const getProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
        }
        getProducts();

    const token = getCookie("token");
    if (isTokenValid()) {
      setUser((prevData) => ({ ...prevData, isUserLogedIn: true }));
    }

    if (isSellerLogedIn()) {
      if (isTokenValid()) {
        // Setting user state to seller.
        const decodedData = jwtDecode(token);
        const name = decodedData?.data[0]?.owner_name;
        setUser({
          isSellerLogedIn: true,
          userName: name,
          isUserLogedIn: false,
        });

        // fetch sellerProducts 

        axios.get(`http://localhost:4000/productby/${name}`)
        .then(response => {
          setSellerProducts(response?.data?.productDetail);
        })
        .catch(err => {
          console.log('got an error while fetching seller Product: ', err);
        })
      }

      
    }
    // is User Loged In
    if (isUserLogedIn()) {
      const fetchUserData = async () => {
        const cartProducts = await  getUserCartProduct(token);
        setCartProducts(cartProducts);
        const wishListProducts = await getUserWishListProducts(token);
        setWishListProducts(wishListProducts)

      }
      fetchUserData();
      
    }
  }, []);

  const login = async (userType, email, password) => {
    console.log('i just got clicked')
    if (userType === "buyer") {
      //for buyer;
      axios
        .post("http://localhost:4000/login", { email, password })
        .then((response) => {
          console.log(response);
          console.log("response?.data: ", response?.data);
          const resData = response?.data;
          if (resData.success) {
            setCookie("token", resData.token);
            const fetchUserData = async () => {
              const cartProducts = await  getUserCartProduct(resData.token);
              console.log('cartProducts: ', cartProducts);
              setCartProducts(cartProducts);
              const wishListProducts = await getUserWishListProducts(resData.token);
              console.log('wishListProducts', wishListProducts)
              setWishListProducts(wishListProducts)
      
            }
            fetchUserData();
            const userData = jwtDecode(resData.token);
            alert("User Loged in sucesfull.");
            setUser((prevData) => ({
              ...prevData,
              isUserLogedIn: true,
              userName: userData?.data[0].name,
            }));
            navigate("/");
          } else {
            alert('Failed to login');
            // toast.error("failed to login");
          }
        })
        .catch((err) => {
          // alert(err?.response?.data?.message)
          setAlertMessage({userLoginError: err?.response?.data?.message})
          toast.error(err?.response?.data?.message, {autoClose: 5000});
          console.log(err);
        });
    } else if (userType === "seller") {
      // for seller;
    } else {
      alert("Provide UserType");
    }
  };

  const userRegistration = async(event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
     data.userType = 'buyer';
    try {
      await axios.post('http://localhost:4000/signup', data)
      .then(response => {
        toast.success(response?.data?.message, {autoClose: 3000});
        console.log(response?.data);
        navigate('/login')
      })
      .catch(err => {
        console.log('err: ', err);
      })
    }catch(err) {
      console.log('Error in SignUp: ', err);
    }
  }

  const sellerLogin = async (event) => {
    //sellerLogin code
    event.preventDefault();
    const fd = new FormData(event.target);
    const email = fd.get("email");
    const password = fd.get("password");
    try {
      const response = await axios.post("http://localhost:4000/seller-login", {
        email,
        password,
      });
      if (response.status === 200) {
        console.log("Sucesfully Loged in.");
        setCookie("token", response.data.token);
        const decodedData = jwtDecode(response.data.token);
        setUser({
          isUserLogedIn: false,
          isSellerLogedIn: true,
          userName: decodedData.data[0].owner_name,
        });
        setSellerProducts(response?.data?.sellerProducts);
        navigate("/seller");
      }
      if (!response.data.success) {
        window.alert("Invalid Credentials.");
      }
      console.log("response.response", response.data);
    } catch (err) {
      // alert(err?.response?.data?.message);
      setAlertMessage({sellerLoginError: err?.response?.data?.message})
      console.log("Got the erro in login.", err?.response?.data?.message);
    }
  };

  const addToCart = async (product) => {
    const token = getCookie("token");
    if (token) {
      const tokenData = jwtDecode(token);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Include user ID from JWT token in the Authorization header
        },
      };
      const toSend = {
        user_id: tokenData.data[0].id,
        product_id: product.id,
      };
      await axios
        .post("http://localhost:4000/add-to-cart", toSend, config)
        .then((response) => {
          alert(response.data.message);
          console.log("addtocart/data: ", response.data);
          setCartProducts(response?.data?.updatedCart);
        })
        .catch((err) => {
          alert("Try again later.");
          console.log(err);
        });
      console.log("userID: ", tokenData.data[0].id);

      console.log("id :", product);
    }
  };

  const removeFromWishList = async (product_id) => {
    const token = getCookie("token");
    if (!token) {
      navigate("/");
    } else {
      const decodedData = jwtDecode(token);
      const user_id = decodedData.data[0].id;
      console.log(user_id);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Include user ID from JWT token in the Authorization header
        },
      };

      axios
        .post(
          "http://localhost:4000/delete-wishlist",
          { user_id, product_id },
          config
        )
        .then((response) => {
          alert('delete.')
          console.log("delete-wishList: ", response.data);
          setWishListProducts(response?.data?.updatedWishList);
        })
        .catch((err) => {
          console.log("Error while delete from cart.");
          console.log(err);
        });
    }
  };

  const updateCart = async (product_id, update) => {
    const token = getCookie("token");
    if (!token) {
      navigate("/");
    } else {
      const decodedData = jwtDecode(token);
      const user_id = decodedData.data[0].id;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      axios
        .post(
          "http://localhost:4000/add-to-cart",
          { user_id, product_id, update },
          config
        )
        .then((response) => {
          console.log("updateCart: ", response?.data?.updatedCart);
          setCartProducts(response?.data?.updatedCart);
        })
        .catch((err) => {
          console.log("Error while updating the cart.");
          console.log(err);
        });
    }
  };

  const addToWishList = async (product) => {
    const token = getCookie("token");
    if (token) {
      const tokenData = jwtDecode(token);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Include user ID from JWT token in the Authorization header
        },
      };
      const toSend = {
        user_id: tokenData.data[0].id,
        product_id: product.id,
      };
      axios
        .post("http://localhost:4000/add-to-whishlist", toSend, config)
        .then((response) => {
          alert(response.data.message);
          // toast(response?.data?.message || 'Added To Cart Succsefully.', {autoClose: 5000});
          console.log("add-to-wishList: ", response?.data?.updatedWishList);
          const updatedWishList = response?.data?.updatedWishList;
          setWishListProducts(updatedWishList);
          setWishListLength(updatedWishList.length);
        })
        .catch((err) => {
          alert("Try again later.");
          console.log(err);
        });
      console.log("userID: ", tokenData.data[0].id);

      console.log("id :", product);
    }
  };
  const logout = async () => {
    // empty everyting
    setUser({ isUserLogedIn: false,isSellerLogedIn: false, userName: '' });
    setCartProducts([]);
    setWishListLength(0)
    setWishListProducts([]);
    setCartProducts([]);
    deleteCookie("token", "delete-this");
  };

  // Methods for seller

  const deleteProduct = async (id, user_id) => {
    const token = getCookie("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Include user ID from JWT token in the Authorization header
      },
    };

    axios
      .post("http://localhost:4000/deleteproduct", { id, user_id }, config)
      .then((response) => {
        setSellerProducts(response?.data?.updatedSellerProducts);
        setProducts(response?.data?.data)
      })
      .catch((err) => alert("Something Went Wrong."));
  };
  

  return (
    <CartContext.Provider
      value={{
        login,
        userRegistration,
        sellerLogin,
        user,
        products,
        sellerProducts,
        setProducts,
        wishListProducts,
        cartProducts,
        updateCart,
        addToCart,
        addToWishList,
        wishListLength,
        logout,
        removeFromWishList,
        deleteProduct,
        setSellerProducts,
        alertMessage
        
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
