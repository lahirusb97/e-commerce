import React, { useState } from "react";
import HeroSlider, { Slide, ButtonsNav, Overlay, Nav } from "hero-slider";
import logo from "../assets/sample.jpg";
import banner from "../assets/Mainimg/banner.jpg";
import banner1 from "../assets/Mainimg/banner1.png";
import banner2 from "../assets/Mainimg/banner2.jpg";
import banner3 from "../assets/Mainimg/banner3.jpg";
import fb from "../assets/Icons/fb.svg";
import tw from "../assets/Icons/tw.svg";
import ty from "../assets/Icons/ty.svg";
import insta from "../assets/Icons/insta.svg";

export default function HeroSliderComponent() {
  return (
    <div>
      <HeroSlider
        height={"100vh"}
        autoplay
        controller={{
          initialSlide: 1,
          slidingDuration: 500,
          slidingDelay: 100,

          onBeforeSliding: (previousSlide, nextSlide) =>
            console.debug(
              "onBeforeSliding(previousSlide, nextSlide): ",
              previousSlide,
              nextSlide
            ),
          onAfterSliding: (nextSlide) =>
            console.debug("onAfterSliding(nextSlide): ", nextSlide),
        }}
      >
        <Slide>
          <div className="relative h-screen">
            <img className="h-full w-full object-cover" src={banner} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black opacity-50 absolute inset-0"></div>
              <div className="flex flex-col items-center text-white text-center relative z-50">
                <h2 className="font-black text-5xl sm:text-6xl leading-tight sm:leading-snug mobile:mt-40  text-yellow-400 custom-outline text-center">
                  All Type of Mobile Devices & Accessories
                </h2>
                <h3 className="text-3xl text-white">
                  Shop the Latest Smartphones and Accessories
                </h3>
                <p className="text-white  max-w-md text-center font-thin">
                  Discover a wide range of mobile devices and accessories, from
                  the latest smartphones to stylish cases, headphones, chargers,
                  and more. Stay connected in style!
                </p>
                <div className="flex">
                  <img className="px-2 my-4" src={fb} />
                  <img className="px-2 my-4" src={tw} />
                  <img className="px-2 my-4" src={ty} />
                  <img className="px-2 my-4" src={insta} />
                </div>
                <button className="bg-red-600 p-4 rounded-md font-bold text-white mt-6">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </Slide>{" "}
        <Slide
          background={{
            backgroundAnimation: "zoom",
          }}
        >
          <div className="relative h-screen">
            <img className="h-full w-full object-cover" src={banner2} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black opacity-50 absolute inset-0"></div>
              <div className="flex flex-col items-center text-white text-center relative z-50">
                <h2 className="font-black text-5xl sm:text-6xl leading-tight sm:leading-snug mobile:mt-40  text-white custom-outline text-center">
                  All New Phones up to{" "}
                  <span className="text-yellow-400"> 25% </span> Flat Sale
                </h2>
                <h3 className="text-3xl text-white font-normal">
                  Discover the Latest Mobile Devices at Unbeatable Prices
                </h3>
                <p className="text-white  max-w-md text-center font-thin">
                  Upgrade your smartphone to the latest models from top brands
                  and enjoy incredible discounts of up to 25% off. Don't miss
                  this limited-time offer to get your hands on cutting-edge
                  technology at unbeatable prices.
                </p>
                <div className="flex">
                  <img className="px-2 my-4" src={fb} />
                  <img className="px-2 my-4" src={tw} />
                  <img className="px-2 my-4" src={ty} />
                  <img className="px-2 my-4" src={insta} />
                </div>
                <button className="bg-red-600 p-4 rounded-md font-bold text-white mt-6">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </Slide>
        <Slide
          background={{
            backgroundAnimation: "zoom",
          }}
        >
          <div className="relative h-screen">
            <img className="h-full w-full object-cover" src={banner3} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black opacity-50 absolute inset-0"></div>
              <div className="flex flex-col items-center text-white text-center relative z-50">
                <h2 className="font-black text-5xl sm:text-6xl leading-tight sm:leading-snug mobile:mt-40  text-white custom-outline text-center">
                  <span className="text-yellow-400">Extra Fast</span> Product
                  Delivery with in 24h
                </h2>
                <h3 className="text-3xl text-white font-normal">
                  Get Your Favorite Products Delivered Quickly
                </h3>
                <p className="text-white max-w-md text-center font-thin">
                  Shop with confidence and experience our lightning-fast
                  delivery service. From electronics to fashion, home decor to
                  accessories, we'll deliver your purchases straight to your
                  doorstep in no time. Get ready to enjoy your new products
                  without delay!
                </p>
                <div className="flex">
                  <img className="px-2 my-4" src={fb} />
                  <img className="px-2 my-4" src={tw} />
                  <img className="px-2 my-4" src={ty} />
                  <img className="px-2 my-4" src={insta} />
                </div>
                <button className="bg-red-600 p-4 rounded-md font-bold text-white mt-6">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </Slide>
        <Nav />
      </HeroSlider>
    </div>
  );
}
