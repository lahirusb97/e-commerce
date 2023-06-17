import React, { useState } from "react";

export default function ItemBox({ items }) {
  const [select, setSelect] = useState(false);
  return (
    <div className="m-4">
      <div
        onMouseOver={() => {
          setSelect(true);
        }}
        onMouseLeave={() => {
          setSelect(false);
        }}
        className={` max-w-xs rounded overflow-hidden  ${
          select ? "shadow-darker" : "shadow-lg"
        }`}
      >
        <div className="w-56 h-56 relative">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={items["Img"]}
            alt={items.Name}
          />
        </div>
        <div className="px-6 text-center">
          <h2 className="font-bold text-xl mb-2">{items.Name}</h2>
          <p className="text-gray-700 text-base">{items.Discription}</p>
        </div>
        <div className="px-6 text-center">
          <p className="text-gray-700 text-base">Rs: {items.Price}</p>
          <button className="bg-blue-500 mb-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
