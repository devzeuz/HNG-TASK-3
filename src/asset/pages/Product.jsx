import React, { useContext } from "react";
import { ShopContext } from "../components/ShopContext";

export const Products = (props) => {
  const { id, name, price, promoprice, image } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  console.log(cartItems);
  const cartItemsNum = cartItems[id];
  return (
    <>
      <div
        key={id}
        className="bg-[#E2ECF1] flex justify-center items-start flex-col p-3 rounded-lg min-w-0 h-auto space-y-2"
      >
        <img src={image} alt="" />
        <h2 className="text-xs">{name}</h2>

        <p className="font-bold">{price}</p>
        <p className="text-xs line-through">{promoprice}</p>

        <button onClick={() => addToCart(id)}>
          Add to Cart {cartItemsNum > 0 && <> {cartItemsNum}</>}
        </button>
        <div className="flex  ">
          <img src="/image/star (2).png" alt="" className="w-6" />
          <img src="/image/star (2).png" alt="" className="w-6" />
          <img src="/image/star (2).png" alt="" className="w-6" />
          <img src="/image/star (2).png" alt="" className="w-6" />
          <img src="/image/star (1).png" alt="" className="w-6" />
        </div>
      </div>
    </>
  );
};

export default Products;
