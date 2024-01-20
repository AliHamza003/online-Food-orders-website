import React from "react";
import logo from "../assets/images/logo.png";
const Navbar = () => {
  return (
    <>
      <header className="header">
        <a href="#" className="logo"></a>
        <img src={logo} alt="" srcset="" />

        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#products">Products</a>
          <a href="#review">Review</a>
          <a href="#contact">Contact</a>
          <a href="#blog">Blogs</a>
        </nav>

        <div className="icons">
          <div className="fas fa-search">
            <div className="fas fa-shopping-cart"></div>
            <div className="fas fa-bars" id="menu-btn"></div>
          </div>
        </div>
        <div>
            <input type="search" name="" id="" placeholder="Search Here"/>
        </div>
      </header>
    </>
  );
};

export default Navbar;
