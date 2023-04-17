import React from "react";
import logo from "../assets/logo.png";
export default function MainNav() {
  return (
    <nav className="flex justify-between items-center h-14">
      <a href="">
        <img src={logo} />
      </a>
      <ul className="flex font-medium">
        <li className="pr-2">
          <a>Home</a>
        </li>
        <li className="pr-2">
          <a>About</a>
        </li>
        <li className="pr-2">
          <a>Contact</a>
        </li>
      </ul>
      <button className="px-4 py-2 bg-cblack text-white">Login</button>
    </nav>
  );
}
