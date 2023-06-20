import React, { useState, useEffect } from "react";
import hero from "../assets/hero.jpg";
import MainNav from "./MainNav";
import item1 from "../assets/item1.jpg";
import item2 from "../assets/sample.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import {
  getFirestore,
  doc,
  onSnapshot,
  getDoc,
  collection,
} from "firebase/firestore";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";
import OfferBox from "./OfferBox";
import facebook from "../assets/Icons/facebook.svg";
import youtube from "../assets/Icons/youtube.svg";
import twitter from "../assets/Icons/twitter.svg";
import instagram from "../assets/Icons/instagram.svg";
import HeroSlicer from "./HeroSlicer";
export default function OfferSlide() {
  const [items, setItems] = useState([]);

  const [countdown, setCountdown] = useState("");

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => {
    const offerList = () => {
      const db = getFirestore();
      const collectionRef = collection(db, "offers");

      onSnapshot(collectionRef, (snapshot) => {
        const items = [];

        snapshot.forEach((doc) => {
          items.push(doc.data());
        });
        setItems(items);
      });
    };
    offerList();
  }, []);
  return (
    <div className="w-full h-screen relative">
      <div className="absolute top-0 w-full z-10">
        <MainNav />
      </div>
      <div>
        <HeroSlicer />
        <div className="">
          <h1 className="pt-2 text-yellow-500 font-semibold text-lg text-center">
            Hot Deals
          </h1>
          <div className="px-12">
            <Slider {...settings}>
              {items.map((e, i) => (
                <div className="" key={"s" + i}>
                  <OfferBox itemData={e} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
