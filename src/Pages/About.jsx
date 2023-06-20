import React from "react";
import MainNav from "../Components/MainNav";
import shop from "../assets/shop.jpg";
import Footer from "../Components/Footer";
import FlipMobileImage from "../assets/shop.jpg";
import abps from "../assets/3.jpg";
export default function About() {
  return (
    <div>
      <MainNav />
      <h1 className="text-6xl font-bold px-4 py-10 bg-slate-300">About</h1>
      <div className="flex items-center p-2 ">
        <img src={abps} alt="FlipMobile" className="w-full mb-4" />
        <div className="text-center text-center">
          <h2 className="text-3xl font-bold mb-4">FlipMobile</h2>

          <p className="text-gray-600 mb-8 font-bold m-2">
            Welcome to FlipMobile, your go-to destination for all your mobile
            device needs. At FlipMobile, we understand the importance of staying
            connected in today's fast-paced world, and we are here to help you
            find the perfect mobile accessories to enhance your device and
            elevate your mobile experience. With a wide range of high-quality
            accessories and cutting-edge mobile devices, FlipMobile is committed
            to offering you the latest and most innovative products on the
            market. Whether you're looking for stylish phone cases to protect
            your device, durable screen protectors to safeguard your screen, or
            trendy pop sockets to add a touch of personalization, we have it
            all.
          </p>
          <p className="text-gray-600 mb-8 font-bold mt-2">
            We take pride in curating a diverse selection of accessories from
            reputable brands, ensuring that every product we offer meets our
            strict quality standards. From renowned smartphone manufacturers to
            up-and-coming accessory designers, we have carefully handpicked our
            inventory to bring you the best options available.
          </p>
        </div>
      </div>
      <h1 className="text-3xl font-bold text-center">Why US! </h1>
      <div className=" flex items-center flex-wrap justify-evenly">
        <div className="w-96 text-center">
          <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
          <span className="material-symbols-outlined text-blue-500 text-8xl w-8 h-8">
            follow_the_signs
          </span>
          <p className="text-gray-700">
            At FlipMobile, we are committed to delivering top-quality products
            and exceptional customer service. We curate our inventory to offer a
            wide range of mobile devices, including smartphones, tablets,
            smartwatches, and more, from leading brands in the industry.
          </p>
        </div>

        <div className="w-96 text-center">
          <h3 className="text-2xl font-bold mb-4 mt-8">
            Convenient Online Shopping
          </h3>
          <span class="material-symbols-outlined  text-green-500 text-8xl w-8 h-8">
            shopping_bag
          </span>
          <p className="text-gray-700">
            With FlipMobile, you can enjoy the convenience of shopping for your
            favorite devices from the comfort of your home. Our user-friendly
            mobile shop platform allows you to easily browse, compare products,
            read customer reviews, and make your selection with just a few
            clicks.
          </p>
        </div>
        <div className="w-96 text-center">
          <h3 className="text-2xl font-bold mb-4 mt-8">
            Authenticity and Quality
          </h3>
          <span class="material-symbols-outlined text-gray-500 text-8xl w-8 h-8">
            high_quality
          </span>
          <p className="text-gray-700">
            We understand the importance of authenticity when it comes to
            purchasing mobile devices. Rest assured, all our products are 100%
            genuine and sourced directly from authorized distributors and
            manufacturers. We provide you with authentic devices that come with
            manufacturer warranties.
          </p>
        </div>
        <div className="w-96 text-center">
          <h3 className="text-2xl font-bold mb-4 mt-8">
            Expert Customer Support
          </h3>
          <span class="material-symbols-outlined text-blue-500 text-8xl w-8 h-8">
            support_agent
          </span>
          <p className="text-gray-700">
            At FlipMobile, your satisfaction is our priority. Our dedicated
            customer support team is available to assist you with any queries or
            concerns you may have. We aim to provide prompt and effective
            solutions to ensure your shopping experience is exceptional.
          </p>
        </div>

        <div className="w-96">
          <h3 className="text-2xl font-bold mb-4 mt-8">
            Secure Payment and Fast Shipping
          </h3>
          <span class="material-symbols-outlined text-red-500 text-8xl w-8 h-8">
            speed
          </span>
          <p className="text-gray-700">
            Your security is important to us. FlipMobile employs
            industry-leading encryption technologies to ensure the safety of
            your transactions and personal information. We offer fast shipping
            options to get your chosen device delivered to your doorstep as
            quickly as possible.
          </p>
        </div>
      </div>
      <h1 className="text-center text-3xl font-bold my-4">
        Frequently Asked Questions
      </h1>
      <div className="p-2">
        <h1 className="text-2xl font-semibold">
          1. “What Shipping Methods Are Available?”
        </h1>
        <p className="font-semibold text-lg">Local & Kleeq Courier Service</p>
      </div>
      <div className="p-2">
        <h1 className="text-2xl font-semibold">
          2. “How Long Will it Take To Get My Package?”
        </h1>
        <p className="font-semibold text-lg">
          Order before 1:00pm and get it delivered the same day.
        </p>
      </div>{" "}
      <div className="p-2">
        <h1 className="text-2xl font-semibold">
          3. “How Do I Track My Order?”
        </h1>
        <p className="font-semibold text-lg">
          With your Order ID or Email Address
        </p>
      </div>{" "}
      <div className="p-2">
        <h1 className="text-2xl font-semibold">
          4. “How Do I Place an Order?”
        </h1>
        <p className="font-semibold text-lg">
          Through the Website or by messaging us on WhatsApp if you want any
          help.
        </p>
      </div>
      <Footer />
    </div>
  );
}
