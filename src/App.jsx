import "./App.css";
import Header from "./components/header";
import Cart from "./components/pages/cart";
import Home from "./components/pages/home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
