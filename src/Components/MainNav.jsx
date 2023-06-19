import React from "react";
import logo from "../assets/logo.jpg";
import { NavLink } from "react-router-dom";

export default function MainNav() {
  const scrollToTop = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex items-center justify-center h-14 bg-black bg-opacity-70 backdrop-filter backdrop-blur-lg shadow-lg">
      <nav className="max-w-screen-xl m-auto px-4 flex justify-between items-center w-full">
        <NavLink to={"/"} end activeClassName="active">
          <img className="w-14" src={logo} alt="Logo" />
        </NavLink>
        <ul className="flex font-medium space-x-8 text-white">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <a onClick={scrollToTop} href="#">
              Product
            </a>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
