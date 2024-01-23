

import React from "react";
import Navbar from "./componnts/Navbar";
import "../src/assets/css/style.css"
import Home from "./componnts/Home";
import About from "./componnts/About"
const App = ()=>{
  return(
    <>
    <Navbar/>
    <Home/>
    <About/>
    </>
  )
}

export default App;