import React from "react";
import MainNav from "../Components/MainNav";
import shop from "../assets/shop.jpg";
import Footer from "../Components/Footer";
import FlipMobileImage from "../assets/shop.jpg";
export default function About() {
  return (
    <div>
      <MainNav />
      <h1 className="text-6xl font-bold px-4 py-10 bg-slate-300">About</h1>
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">FlipMobile</h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img
                src={FlipMobileImage}
                alt="FlipMobile"
                className="w-full mb-4"
              />
              <p className="text-gray-700">
                Welcome to FlipMobile, your premier online destination for the
                latest mobile devices and accessories. We are dedicated to
                providing you with a seamless and convenient shopping
                experience.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
              <span className="material-symbols-outlined text-blue-500 text-8xl w-8 h-8">
                follow_the_signs
              </span>
              <p className="text-gray-700">
                At FlipMobile, we are committed to delivering top-quality
                products and exceptional customer service. We curate our
                inventory to offer a wide range of mobile devices, including
                smartphones, tablets, smartwatches, and more, from leading
                brands in the industry.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                Convenient Online Shopping
              </h3>
              <span class="material-symbols-outlined  text-green-500 text-8xl w-8 h-8">
                shopping_bag
              </span>
              <p className="text-gray-700">
                With FlipMobile, you can enjoy the convenience of shopping for
                your favorite devices from the comfort of your home. Our
                user-friendly mobile shop platform allows you to easily browse,
                compare products, read customer reviews, and make your selection
                with just a few clicks.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                Authenticity and Quality
              </h3>
              <span class="material-symbols-outlined text-gray-500 text-8xl w-8 h-8">
                high_quality
              </span>
              <p className="text-gray-700">
                We understand the importance of authenticity when it comes to
                purchasing mobile devices. Rest assured, all our products are
                100% genuine and sourced directly from authorized distributors
                and manufacturers. We provide you with authentic devices that
                come with manufacturer warranties.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                Expert Customer Support
              </h3>
              <span class="material-symbols-outlined text-blue-500 text-8xl w-8 h-8">
                support_agent
              </span>
              <p className="text-gray-700">
                At FlipMobile, your satisfaction is our priority. Our dedicated
                customer support team is available to assist you with any
                queries or concerns you may have. We aim to provide prompt and
                effective solutions to ensure your shopping experience is
                exceptional.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                Secure Payment and Fast Shipping
              </h3>
              <span class="material-symbols-outlined text-red-500 text-8xl w-8 h-8">
                speed
              </span>
              <p className="text-gray-700">
                Your security is important to us. FlipMobile employs
                industry-leading encryption technologies to ensure the safety of
                your transactions and personal information. We offer fast
                shipping options to get your chosen device delivered to your
                doorstep as quickly as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
