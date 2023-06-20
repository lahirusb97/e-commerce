import React from "react";
import MainNav from "../Components/MainNav";
import Slider from "react-slick";
import {
  getFirestore,
  doc,
  onSnapshot,
  getDoc,
  collection,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import OfferBox from "../Components/OfferBox";
import offer from "../assets/offer.jpg";
export default function Offers() {
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
    <div className="bg-gray-950 h-screen w-full">
      <MainNav />
      <div className="px-12 mt-8">
        <Slider {...settings}>
          {items.map((e, i) => (
            <div className="" key={"s" + i}>
              <OfferBox itemData={e} />
            </div>
          ))}
        </Slider>
      </div>
      <img className="m-auto" src={offer} />
    </div>
  );
}
