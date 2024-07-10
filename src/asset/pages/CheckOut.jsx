import React from "react";

export default function CheckOut() {
  return (
    <>
      <div className="sm:flex justify-center absolute top-2/4 md:hidden">
        <img src="/image/success.png" alt="" />
      </div>

      <div className="sm:hidden md:flex justify-center text-2xl text-green-700">
        Thank you!!! Your request has been submitted.
      </div>
    </>
  );
}
