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

export default function OfferSlide() {
  const [items, setItems] = useState([]);

  const [countdown, setCountdown] = useState("");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
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
      <div className="relative z-10">
        <MainNav />
      </div>
      <div className="h-screen max-w-screen-xl m-auto px-4 flex items-center justify-center flex-col">
        <img
          className="w-full h-screen object-cover bg-center absolute top-0 left-0"
          src={hero}
        />
        <h2 className="z-20 relative font-black text-5xl sm:text-6xl leading-tight sm:leading-snug mobile:mt-40  text-white custom-outline text-center">
          All Type of
          <br /> Mobile Deviced & <br /> Assessories
        </h2>
        <div class="flex space-x-4 my-4 relative z-50 ">
          <a href="#" class="text-white hover:text-gray-300">
            <motion.img
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.9 }}
              src={facebook}
              className="scale-150 px-2"
            />
          </a>
          <a href="#" class="text-white hover:text-gray-300">
            <motion.img
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.9 }}
              src={youtube}
              className="scale-150 px-2"
            />
          </a>
          <a href="#" class="text-white hover:text-gray-300">
            <motion.img
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.9 }}
              src={instagram}
              className="scale-150 px-2"
            />
          </a>
          <a href="#" class="text-white hover:text-gray-300">
            <motion.img
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.9 }}
              src={twitter}
              className="scale-150 px-2"
            />
          </a>
        </div>
        <div className="mobile:w-3/4 2xl:w-boxmaxw w-screen">
          <Slider {...settings}>
            {items.map((e, i) => (
              <div className="m-4" key={"s" + i}>
                <OfferBox itemData={e} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
