import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Male from "./components/male";
import Female from "./components/female";
import Cart from "./components/cart";

function App() {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/male">Male</Link>
        <Link to="/female">Female</Link>
        <Link to="/cart">Cart</Link>

      </div>
      <Routes>
        <Route path="/" element ={<div>Home</div>}/>
        <Route path="/male" element={<Male/>} />
        <Route path="/female" element={<Female/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
