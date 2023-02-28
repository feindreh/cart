import { Routes, Route, Link } from "react-router-dom";
import "./App.css"
import Home from "./components/Home";
import Cart from "./components/Cart";
import Show from "./components/Show";

import Buy from "./components/buy";

import warehouse from "./warehouse";


function App() {
  const cart = {}
  return (
    <div>
      <div id="nav">
        <Link to="/">Home</Link>
        <Link to="/cart">Einkaufswagen</Link>

      </div>
      <Routes>
        <Route path="/" element ={<div><Home/></div>}/>
        <Route path="/Wolle" element={<Show warehouse={warehouse} type="wolle"/>} />
        <Route path="/Strick" element={<Show warehouse={warehouse} type="stricken"/>}/>
        <Route path="/Haeckel" element={<Show warehouse={warehouse} type="hackeln"/>}/>
        <Route path="/Stoff" element={<Show warehouse={warehouse} type="stoff"/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/buy/:id" element={<Buy/>}/>
      </Routes>
    </div>
  );
}

export default App;
