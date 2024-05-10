import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="container">
      <div className="footer-container">
        {/* footer-top start */}
        <div className="footer-top">
          <div className="footer-top-content d-flex justify-content-around ">
            <div className="counter_item text-center">
              <div className="counter_item-icon">
                <img
                  src="https://safecart.bytesed.com/assets/uploads/media-uploader/svg/icon1699176811.svg"
                  alt=""
                />
                <h4>1,900+ Vendors</h4>
                <p>1,900 Vendors are working with us around the US</p>
              </div>
            </div>
            <div className="counter_item text-center">
              <div className="counter_item-icon">
                <img
                  src="https://safecart.bytesed.com/assets/uploads/media-uploader/svg/icon-21699176810.svg"
                  alt=""
                />
                <h4>9,102+ Customers</h4>
                <p>
                  9,102+ Customers are making retained purchases every now &
                  then
                </p>
              </div>
            </div>
            <div className="counter_item text-center">
              <div className="counter_item-icon">
                <img
                  src="https://safecart.bytesed.com/assets/uploads/media-uploader/svg/icon-11699176810.svg"
                  alt=""
                />
                <h4>12 Awards</h4>
                <p>We won 12 awards for excellency in customer service</p>
              </div>
            </div>
          </div>
        </div>
        {/* footer-top-end */}

        {/* footer-bottom-start */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-social bottom">
              <ul>
                <img
                  src="https://safecart.bytesed.com/assets/uploads/media-uploader/image-3601699785184.png"
                  alt=""
                />
                <p>
                  The best multi-vendor ecommerce website for you. You can
                  easily buy your product according to your choice.
                </p>
              </ul>
              <div className="footer-icons d-flex justify-content-evenly w-50">
                <button> <i className="bi bi-twitter"></i></button>
                <button> <i className="bi bi-facebook"></i></button>
                <button> <i className="bi bi-person-wheelchair"></i></button>
                <button> <i className="bi bi-instagram"></i></button>
              </div>
            </div>
            <div className="footer-links  bottom">
              <ul>
                <p style={{ fontWeight: "600" }}>Helpful Links</p>
                <p>Home</p>
                <p>Blog</p>
                <p>Contact</p>
                <p>Shop Page</p>
              </ul>
            </div>
            <div className="footer-info  bottom">
              <ul>
                <p style={{ fontWeight: "600" }}>Store info</p>
                <p className="bi bi-geo-alt">Dhaka, Bangladesh</p>
                <p className="bi bi-phone"> 0113213131322</p>
                <p className="bi bi-envelope">support@safecart.com</p>
              </ul>
            </div>
            <div className="footer-msg  bottom">
              <ul>
                <p>GET IN TOUCH</p>
                <p>Sign up to our mailing list now!</p>
                <p>
                  <input type="text" placeholder="Your mail here" />{" "}
                  <button>
                    <i className="bi bi-send-fill"></i>
                  </button>
                </p>
              </ul>
            </div>
          </div><hr />
        </div>
      </div>
      {/* footer-bottom-end */}
      <p className="copy-right">© 2024 All right reserved by Bytesed MN</p>
    </footer>
  );
};

export default Footer;
