import { Routes, Route, Link } from "react-router-dom";
import "./App.css"
import Home from "./components/Home";
import Wolle from "./components/Wolle";
import Strick from "./components/Strick";
import Haeckel from "./components/Haeckel";
import Stoff from "./components/Stoff";
import Cart from "./components/Cart";

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
        <Route path="/Wolle" element={<Wolle warehouse={warehouse}/>} />
        <Route path="/Strick" element={<Strick warehouse={warehouse}/>}/>
        <Route path="/Haeckel" element={<Haeckel warehouse={warehouse}/>}/>
        <Route path="/Stoff" element={<Stoff warehouse={warehouse}/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/buy/:id" element={<Buy/>}/>
      </Routes>
    </div>
  );
}

export default App;
