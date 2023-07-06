import React from "react";
import { Link } from "react-router-dom";
import facebook from "../assets/Icons/facebook.svg";
import youtube from "../assets/Icons/youtube.svg";
import twitter from "../assets/Icons/twitter.svg";
import instagram from "../assets/Icons/instagram.svg";
import fb from "../assets/Icons/fb.svg";
import tw from "../assets/Icons/tw.svg";
import ty from "../assets/Icons/ty.svg";
import insta from "../assets/Icons/insta.svg";
export default function Footer() {
  return (
    <div>
      <footer class="bg-gray-900 text-white font-mono">
        <div class="container mx-auto py-8 px-4">
          <div class="flex flex-col md:flex-row justify-evenly">
            <ul>
              <li className="py-1 text-lg ">
                <Link to={"/"} href="#" class="text-white hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li className="py-1 text-lg ">
                <Link
                  to={"/about"}
                  href="#"
                  class="text-white hover:text-gray-300"
                >
                  About Us
                </Link>
              </li>
              <li className="py-1 text-lg ">
                <Link
                  to={"/offers"}
                  href="#"
                  class="text-white hover:text-gray-300"
                >
                  Special Offers
                </Link>
              </li>
              <li className="py-1 text-lg ">
                <a href="#" class="text-white hover:text-gray-300">
                  Category
                </a>
              </li>
              <li className="py-1 text-lg ">
                <Link
                  to={"/contact"}
                  href="#"
                  class="text-white hover:text-gray-300"
                >
                  Contact{" "}
                </Link>
              </li>{" "}
            </ul>
            <div class="mb-8 md:mb-0">
              <h3 class="text-lg font-bold mb-4">Customer Support</h3>
              <ul class="space-y-2">
                <li>
                  <Link
                    to={"/contact"}
                    href="#"
                    class="text-white hover:text-gray-300"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a href="#" class="text-white hover:text-gray-300">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" class="text-white hover:text-gray-300">
                    Shipping Information
                  </a>
                </li>
                <li>
                  <a href="#" class="text-white hover:text-gray-300">
                    Return Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="mb-8 md:mb-0 flex justify-center">
            <div className="flex">
              <img className="px-2 my-4" src={fb} />
              <img className="px-2 my-4" src={tw} />
              <img className="px-2 my-4" src={ty} />
              <img className="px-2 my-4" src={insta} />
            </div>
          </div>
          <div class="mt-8 border-t border-gray-800 pt-4 text-center">
            <p class="text-gray-500">
              &copy; 2023 Your E-commerce Website. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
