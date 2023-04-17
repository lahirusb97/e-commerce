import React from "react";
export default function SpecialOffer() {
  return (
    <div className="bg-white sm:w-64 w-50">
      <h1 className="px-2 font-bold md:text-lg text-center">Traxxas X-Maxx</h1>

      <div className="flex justify-between ">
        <div className="flex">
          <p className="font-medium line-through px-2 text-xs">Rs: 20 000</p>
          <p className="font-medium text-xs">Rs: 15 000</p>
        </div>
        <h3 className="font-semibold text-cmain text-xs px-2">20% off</h3>
      </div>
      <div className="flex items-center w-full">
        <h6 className="w-1/2 text-center font-semibold ">00:01:06</h6>
        <button
          onClick={() => {
            // Use setDoc() to set data to Firestore
          }}
          className="p-2 bg-cmain w-1/2 font-semibold text-white text-xs sm:text-base"
        >
          Order Now
        </button>
      </div>
    </div>
  );
}
