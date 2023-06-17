import React from "react";
import MainNav from "../Components/MainNav";
import shop from "../assets/shop.jpg";
import Footer from "../Components/Footer";
export default function About() {
  return (
    <div>
      <MainNav />
      <h1 className="text-6xl font-bold px-4 py-10 bg-slate-300">About</h1>
      <div>
        <div className="flex items-center justify-center flex-wrap">
          <img className="w-imgwidth p-4" src={shop} />
          <div>
            <h3 className="text-3xl font-bold text-center p-4">
              Our Mobile Shop
            </h3>
            <p className="max-w-md p-4 font-medium">
              Welcome to Hi Mobile - Your Ultimate Destination for Mobile Phones
              and Accessories! At Hi Mobile, we understand the importance of
              staying connected in today's fast-paced world. That's why we have
              curated a wide range of mobile phones and accessories to cater to
              your every need. Whether you're a tech enthusiast, a professional
              on the go, or someone who simply appreciates the convenience of
              modern communication, we have everything you need to enhance your
              mobile experience.
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex items-center justify-center text-center flex-wrap">
            <div>
              <h1 className=" bg-black text-white font-black text-6xl rounded-t-full">
                1
              </h1>
              <h3 className="text-lg font-black">
                Explore our Extensive Collection
              </h3>
              <p className="w-96 p-4">
                Our website boasts an extensive collection of mobile phones from
                all the top brands. Whether you're an Apple aficionado, a
                Samsung supporter, or a fan of other leading brands, we have the
                latest models to suit your preferences. From cutting-edge
                smartphones with stunning displays and powerful processors to
                feature-packed budget-friendly options, we have it all. Stay
                ahead of the curve with our range of 5G-enabled devices and
                unlock the true potential of high-speed connectivity.
              </p>
            </div>

            <div>
              <h1 className=" bg-black text-white font-black text-6xl rounded-t-full">
                2
              </h1>
              <h3 className="text-lg font-black">Why Choose Us?</h3>
              <p className="w-96 p-4">
                At "Hi mobile", we prioritize customer satisfaction above all
                else. We strive to provide an unparalleled shopping experience
                by offering a user-friendly interface, secure payment options,
                and reliable shipping. Our knowledgeable customer support team
                is always ready to assist you with any queries or concerns,
                ensuring that you have a seamless experience from start to
                finish. So, what are you waiting for? Explore our website now
                and discover the perfect mobile phone and accessories that suit
                your style, needs, and budget. Upgrade your mobile experience
                with "Hi mobile" today!
              </p>
            </div>
            <div>
              <h1 className=" bg-black text-white font-black text-6xl rounded-t-full">
                3
              </h1>
              <h3 className="text-lg font-black">
                Enhance Your Mobile Experience
              </h3>
              <p className="w-96 p-4">
                Apart from mobile phones, we offer an impressive array of
                accessories to elevate your smartphone experience. Discover a
                wide range of stylish cases and covers that not only protect
                your device but also reflect your unique style. From rugged
                cases for the adventurer in you to sleek and sophisticated
                options for the fashion-conscious, we have something for
                everyone.{" "}
                <span className="py-4">
                  Never miss a beat with our selection of high-quality
                  headphones and earphones. Immerse yourself in crystal-clear
                  audio and enjoy your favorite music, podcasts, and videos on
                  the go. Choose from a variety of wireless options for ultimate
                  freedom or go for the classic wired headsets if you prefer.
                  Capture memories like a pro with our range of smartphone
                  photography accessories. From versatile tripods and
                  stabilizers to lenses that unlock new creative possibilities,
                  we have everything you need to take your mobile photography to
                  the next level.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
