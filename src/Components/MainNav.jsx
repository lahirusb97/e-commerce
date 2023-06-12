import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
export default function MainNav() {
  return (
    <nav className="flex justify-between items-center h-14">
      <NavLink to={"/"} end activeclassname="active">
        <img src={logo} />
      </NavLink>
      <ul className="flex font-medium">
        <li className="pr-8">
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li className="pr-8">
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li className="pr-8">
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
      <button className="px-4 py-2 bg-cblack text-white">Login</button>
    </nav>
  );
}
