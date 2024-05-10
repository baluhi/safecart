import React from "react";
import { Link } from "react-scroll";
import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="nav navbar">
        <div className="navbar-left">
          <ul className="nav-items">
            <div className="dropdown ">
              <Link to="/">
                {" "}
                <i className="bi bi-list"></i>Categories
              </Link>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>

            <div className="dropdown">
              <a className="text-dark" href="/">
                {" "}
                Home Pages <i className="bi bi-chevron-down"></i>
              </a>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <div className="dropdown">
              <Link to="/"> About</Link>
            </div>
            <div className="dropdown">
              <Link to="/">
                Shop Page <i className="bi bi-chevron-down"></i>
              </Link>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <div className="dropdown">
              <Link to="/">
                Pages <i className="bi bi-chevron-down"></i>
              </Link>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <div className="dropdown">
              <Link to="/">
                {" "}
                Blog <i className="bi bi-chevron-down"></i>
              </Link>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <div className="dropdown">
              <Link to="/"> Contact</Link>
            </div>
          </ul>
        </div>
        <div className="navbarRight ">
          <ul className="nav-items-right d-flex  justify-content-evenly">
            <li style={{ background: "white" }}>
              <Link to="/wishlist">
                <i className="bi bi-heart"></i>
              </Link>
            </li>
            <li>
              <a href='/cart'>
                {" "}
                <i className="bi bi-cart text-dark"></i>
              </a>
            </li>
            <li className="dropdown ">
              <Link
                to="/login"
                style={{ color: "rgb(154, 154, 154)", fontWeight: "600" }}
              >
                {" "}
                <i className="bi bi-person"></i>Login/Register
              </Link>
              <div className="dropdown-content">
                <a href="/login">Sign In</a>
                <a href="#">Sign Up</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
