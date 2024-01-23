

import React from "react";
import Navbar from "./componnts/Navbar";
import "../src/assets/css/style.css"
import Home from "./componnts/Home";
import About from "./componnts/About"
import Menu from "./componnts/Menu";
import Products from "./componnts/Products";
const App = ()=>{
  return(
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Menu/>
    <Products/>
    </>
  )
}

export default App;