import React from "react";
import { Link } from "react-router-dom";

export default function Header({}) {
  return (
    <>
      <div className="flex justify-between h-24 items-center p-5">
        <h1 className="font-extrabold text-xl">Buyit</h1>

        <div className=" space-x-5 font-bold sm:hidden md:flex ">
          <p>New Arrival </p>
          <p>Explore </p>
        </div>
        <div className="flex space-x-5 items-center ">
          <img src="./public/image/List.jpg" alt="now" className="md:hidden" />
          <Link to={"/cart"}>
            <div className="relative">
              <img src="./public/image/ShoppingCart.jpg" alt="images" />

              <p className="absolute bg-red-700 p-1 rounded-full text-white top-0 right-0 bottom-2 flex  items-center">
                0
              </p>
            </div>
          </Link>

          <div className="items-center space-x-2 sm:hidden md:flex ">
            <div className="border border-[#1B2F37] rounded-full p-2">
              <img src="./public/image/head.png" alt="" className="w-7" />
            </div>

            <p className="font-extrabold text-xl">My Account</p>
          </div>
        </div>
      </div>
    </>
  );
}
