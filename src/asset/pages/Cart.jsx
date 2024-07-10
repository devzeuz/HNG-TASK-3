import React from "react";
import Header from "../components/Header";
import { PRODUCTS } from "./Products";
import { useContext, useState } from "react";
import CartData from "./CartData";
import { ShopContext } from "../components/ShopContext";
import CheckOut from "./CheckOut";
export default function CartItem() {
  const { cartItems, subTotal } = useContext(ShopContext);
  const newTotalAmount = subTotal();
  const [checkOutClicked, setCheckOutClicked] = useState(false);

  const handleCheckOut = () => {
    console.log("clicked");
    setCheckOutClicked(true);
  };
  return (
    <>
      <Header />
      <div className="bg-[#E2ECF1] h-20 flex items-center font-extrabold p-5">
        <h1>My Cart</h1>
      </div>
      <div>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartData data={product} />;
          }
        })}
      </div>

      <div>
        <p className="text-lg font-bold">Subtotal: ₦{newTotalAmount}</p>

        <button className="text-lg mt-10 font-bold" onClick={handleCheckOut}>
          Checkout
        </button>

        {checkOutClicked &&
          (newTotalAmount === 0 ? (
            <p className="font-bold text-red-900">
              Your cart is empty... Select an item to continue
            </p>
          ) : (
            <CheckOut />
          ))}
      </div>
    </>
  );
}
