import React from "react";
import { Link } from "react-router-dom";
import facebook from "../assets/Icons/facebook.svg";
import youtube from "../assets/Icons/youtube.svg";
import twitter from "../assets/Icons/twitter.svg";
import instagram from "../assets/Icons/instagram.svg";
export default function Footer() {
  return (
    <div>
      <footer class="bg-gray-900 text-white">
        <div class="container mx-auto py-8 px-4">
          <div class="flex flex-col md:flex-row justify-center">
            <div class="mb-8 md:mb-0">
              <div class="mb-8 md:mb-0">
                <div class="flex space-x-4 my-4">
                  <a href="#" class="text-white hover:text-gray-300">
                    <img src={facebook} />
                  </a>
                  <a href="#" class="text-white hover:text-gray-300">
                    <img src={youtube} />
                  </a>
                  <a href="#" class="text-white hover:text-gray-300">
                    <img src={instagram} />
                  </a>
                  <a href="#" class="text-white hover:text-gray-300">
                    <img src={twitter} />
                  </a>
                </div>
              </div>
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
