

import React from "react";
import Navbar from "./componnts/Navbar";
import "../src/assets/css/style.css"
import Home from "./componnts/Home";
import About from "./componnts/About"
import Menu from "./componnts/Menu";
const App = ()=>{
  return(
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Menu/>
    </>
  )
}

export default App;