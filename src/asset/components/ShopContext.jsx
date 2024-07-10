import React, { createContext } from "react";
import { useState } from "react";
import { PRODUCTS } from "../pages/Products";

export const ShopContext = createContext(null);
const defaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
export default function ShopContextProvider(props) {
  const [cartItems, setCartItems] = useState(defaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const subTotal = () => {
    let total = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        if (itemInfo) {
          let itemPrice = Number(itemInfo.price.replace(/[^0-9.-]+/g, ""));
          total += cartItems[item] * itemPrice;
        }
      }
    }

    return total;
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartCount,
    subTotal,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}
