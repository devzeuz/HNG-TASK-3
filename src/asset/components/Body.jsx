import React from "react";

export default function MainBody() {
  return (
    <>
      <div>
        <div className="flex justify-center flex-col ml-5 mr-5 items-center">
          <img
            src="./public/image/headerimage.png"
            alt=""
            className="md:hidden"
          />
          {/* FIRST BODY HEADER */}
          <div className="md:flex flex-col justify-center items-center space-y-5 mt-5 sm:hidden">
            <div className="flex space-x-5 ">
              {/* PRICE POOL 1 */}

              <div>
                <img src="./public/image/Group 2.jpg" alt="" className="w-52" />
              </div>

              {/* SEARCH */}
              <div className="flex items-center bg-[#E2ECF1] p-2 rounded-full">
                <img
                  src="./public/image/search (1).png"
                  alt=""
                  className="w-5"
                />
                <input type="text" className="bg-transparent outline-none" />
                <p className="text-[#8DB4C7]">Search</p>
              </div>

              {/* PRICE POOL 2 */}

              <div className="">
                <img src="./public/image/Group 1.jpg" alt="" className="w-52" />
              </div>
            </div>

            <div>
              <img src="./public/image/RunDown.jpg" alt="" />
            </div>

            {/* THREE LINES */}
            <div>
              <img src="./public/image/Frame 36.jpg" alt="" />
            </div>
          </div>

          {/* SECOND BODY HEADER WITH THE SHIRT */}
          <div className=" justify-between space-x-5 sm:hidden md:flex mx-auto mt-10">
            <div className="space-y-5">
              <div className="border border-dashed border-black">
                <img src="./public/image/HeroSmall1.jpg" alt="" />
              </div>
              <img src="./public/image/HeroSmall3.jpg" alt="" />
              <img src="./public/image/HeroSmall2.jpg" alt="" />
            </div>

            {/* BIG SHIRT */}
            <div className="border border-solid p-1 border-black flex-0">
              <img src="./public/image/HeroLarge.jpg" alt="" />
            </div>
            <div className="space-y-3 flex-1 mt-auto">
              <p className="text-lg font-bold">Men's Solid Polo Shirt</p>
              <p className="font-bold">Product details</p>
              <p className="">
                The Classic Men's Polo Shirt is more than just a wardrobe
                staple; it's a statement of style and sophistication. With its
                superior fabric, impeccable design, and wide range of colors, it
                promises to elevate your fashion game while providing the utmost
                comfort.
              </p>
              <div className="font-extrabold text-2xl flex space-x-5 ">
                <p>S</p>
                <p>M</p>
                <p>L</p>
                <p>XL</p>
              </div>
            </div>
          </div>

          <div>
            {/* SMALL SCREEN MENS WEAR DISPLAY */}
            <div className="bg-[#E2ECF1] p-5 rounded-lg md:hidden">
              <img src="./public/image/firstbodyimage.jpg" alt="" />
              <p className="font-bold mt-2">Men's Solid Polo Shirt</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
