import React, { useContext } from "react";
import { ShopContext } from "../components/ShopContext";

export default function CartData(props) {
  const { id, name, price, promoprice, image } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartCount } =
    useContext(ShopContext);

  return (
    <div key={id}>
      <div className="flex items-center w-auto  p-5 ">
        <img src={image} className="w-60" />
        <div className="space-y-3">
          <div className="flex flex-col flex-wrap font-bold ">
            <p>{name}</p>
          </div>
          <div className="font-bold">
            <p>{price}</p>
          </div>
          <div className="flex space-x-5 font-bold">
            <p>S</p>
            <p>M</p>
            <p>L</p>
            <p>XL</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between p-5 container mx-auto space-x-10">
        <div>
          <p className="text-lg font-bold">Remove</p>
        </div>
        <div className=" flex ">
          <button className=" text-4xl mr-5" onClick={() => removeFromCart(id)}>
            -
          </button>
          <input
            type="number"
            className=" text-2xl w-10"
            value={cartItems[id]}
            onChange={(e) => updateCartCount(Number(e.target.value), id)}
          />
          <button className=" text-4xl" onClick={() => addToCart(id)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
