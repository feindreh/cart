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
        <Route path="/:type" element={<Show warehouse={warehouse}/>} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/buy/:id" element={<Buy/>}/>
      </Routes>
    </div>
  );
}

export default App;
