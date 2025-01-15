import React from "react";
import "./App.css";
import ProductList from "./pages/products";
import { Route, Routes, useNavigate } from "react-router-dom";
import SingleProduct from "./pages/singleProduct";
import Cart from "./pages/Cart";

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/productlist/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
