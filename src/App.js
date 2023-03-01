import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./App.css"
import Home from "./components/Home";
import Cart from "./components/Cart";
import Show from "./components/Show";

import Buy from "./components/buy";

import warehouse from "./warehouse";


function App() {

  const [cart,setCart] = useState({})

  function addToCart(id){
    console.log("Add id",id,"to Cart")
  }

  return (
    <div>
      <div id="nav">
        <Link to="/">Home</Link>
        <Link to="/cart">Einkaufswagen</Link>

      </div>
      <Routes>
        <Route path="/" element ={<div><Home/></div>}/>
        <Route path="/:type" element={<Show warehouse={warehouse}/>} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/buy/:id" element={<Buy add={addToCart}/>}/>
      </Routes>
    </div>
  );
}

export default App;
