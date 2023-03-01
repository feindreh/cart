import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./App.css"
import Home from "./components/Home";
import Cart from "./components/Cart";
import Show from "./components/Show";

import Buy from "./components/buy";

import warehouse from "./warehouse";


function App() {

  function makeEmptyCart(wHouse){
    const newCart = {};
    for(let key in wHouse){
      newCart[wHouse[key].id] = {
        name:wHouse[key].name,
        count:0,
        price:wHouse[key].price,
      }
    }
    return newCart
  }

  const [cart,setCart] = useState(makeEmptyCart(warehouse))

  function addToCart(id){
    const item = warehouse.filter((ware)=> ware.id === +id)[0]
    const newCart = JSON.parse(JSON.stringify(cart))
    newCart[item.id].count += 1
    setCart(newCart)
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
        <Route path="/buy/:id" element={<Buy add={addToCart} cart={cart}/>}/>
      </Routes>
    </div>
  );
}

export default App;
