

import React from "react";
import Navbar from "./componnts/Navbar";
import "../src/assets/css/style.css"
import Home from "./componnts/Home";
import About from "./componnts/About"
import Menu from "./componnts/Menu";
import Products from "./componnts/Products";
import Review from "./componnts/Review";
import Contact from "./componnts/contact";
const App = ()=>{
  return(
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Menu/>
    <Products/>
    <Review/>
    <Contact/>
    </>
  )
}

export default App;