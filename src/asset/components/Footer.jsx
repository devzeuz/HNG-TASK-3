import React from "react";

export default function Footer() {
  return (
    <>
      {/* FOOTER */}
      <footer className="bg-[#578C85] p-5 sm:space-y-5">
        <p className="text-[#385F71] flex justify-center ">
          Sign up for BuyIt News & Special Offers
        </p>
        {/* INPUT SECTION */}
        <div className="sm:space-y-3 md:space-x-3 flex sm:flex-col md:flex-row md:items-center md:mx-auto md:w-3/6 ">
          <div className="flex justify-between p-3 items-center  border border-white rounded-lg w-11/12 h-12  ">
            <input
              type="text"
              placeholder="Enter Your Email"
              className=" bg-transparent outline-none"
            />
            <img src="/image/envelope.png" alt="envelope" className="w-7" />
          </div>
          <button className="bg-transparent  border border-white rounded-lg sm:w-11/12 h-12 md:w-24">
            Sign Up
          </button>
        </div>

        <div className="space-y-5 md:flex md:justify-between md:mx-auto md:w-10/12 md:items-center">
          <div className="space-y-5">
            <p className="text-xl text-[#1B2F37] font-bold">
              Customer Service & Help
            </p>
            <ul className="text-[#C3DAD7] text-lg">
              <li>Return Policy</li>
              <li>Track/ Request A Return</li>
              <li>Manage Catalog Subscription</li>
              <li>Payments</li>
              <li>Ship By Brand</li>
            </ul>
          </div>
          <div className="space-y-5">
            <p className="text-xl text-[#1B2F37] font-bold">About BuyIt</p>
            <ul className="text-[#C3DAD7] text-lg">
              <li>About Us</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Flash Sales</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
