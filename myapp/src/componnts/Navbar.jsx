
import React from "react";
import logo from"../assets/images/logo.png"
const Navbar = ()=>{
    return(
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
        </header>
        </>
    );
}

export default Navbar