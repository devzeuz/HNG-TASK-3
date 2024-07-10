import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import App from "../../App";
import CartItem from "../pages/Cart";
import ShopContextProvider from "./ShopContext";
import CheckOut from "../pages/CheckOut";

export default function MainRouter() {
  return (
    <ShopContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/cart" element={<CartItem />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </Router>
    </ShopContextProvider>
  );
}
