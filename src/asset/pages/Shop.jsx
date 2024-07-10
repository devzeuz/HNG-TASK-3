import React from "react";
import { PRODUCTS } from "./Products";
import Products from "./Product";

export default function Shop() {
  return (
    <>
      <div className="mt-10 container mx-auto">
        <h1 className="font-extrabold text-2xl">New Arrival</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3">
          {PRODUCTS.map((product) => (
            <Products data={product} key={product.id} />
          ))}
        </div>

        {/* CARET MOVEMENT */}
      </div>
      <div className="flex items-center justify-center sm:space-x-5 md:space-x-16 mt-10 mb-20">
        <p>
          <img src="/image/CaretLineLeft.png" alt="" />
        </p>
        <p>
          <img src="/image/CaretLeft.png" alt="" />
        </p>
        <p className="text-3xl">1</p>
        <p className="text-3xl">2</p>
        <p className="text-3xl">3</p>
        <p>
          <img src="/image/CaretRight.png" alt="" />
        </p>
        <p>
          <img src="/image/CaretLineRight.png" alt="" />
        </p>
      </div>
    </>
  );
}
