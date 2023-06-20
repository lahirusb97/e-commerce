import React from "react";
import logo from "../assets/logo.jpg";
import { NavLink } from "react-router-dom";
import Mail from "../assets/Icons/mail.svg";
import mobile from "../assets/Icons/mobile.svg";
import cart from "../assets/Icons/cart.svg";
export default function MainNav() {
  const scrollToTop = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex items-center justify-center flex-wrap h-14 bg-black bg-opacity-70 backdrop-filter backdrop-blur-lg shadow-lg">
      <nav className="max-w-screen-xl m-auto px-4 flex justify-between items-center w-full">
        <NavLink to={"/"} end activeClassName="active">
          <img className="w-14" src={logo} alt="Logo" />
        </NavLink>
        <ul className="flex font-medium space-x-8 text-white">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Special Offers</NavLink>
          </li>
          <li>
            <a onClick={scrollToTop} href="#">
              Category
            </a>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
        {/* <div className="flex bg-white text-black p-2">
          <h1 className="flex items-center font-semibold">
            <img className="w-12 px-2 " src={Mail} />
            erandi@gmail.com |
          </h1>
          <h1 className="flex items-center font-semibold">
            <img className="w-12  px-2" src={mobile} />
            (+71)9876543109 |
          </h1>

          <h1 className="flex items-center font-semibold">
            <img className="w-12 px-2 " src={cart} />
            Cart(0)
          </h1>
        </div> */}
      </nav>
    </div>
  );
}
