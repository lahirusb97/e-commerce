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
import { getFirestore, doc, onSnapshot } from "firebase/firestore";

export default function OfferSlide() {
  const [itemlist, setItemlist] = useState([]);

  // useEffect(() => {
  //   const db = getFirestore();
  //   const unsub = onSnapshot(doc(db, "/offers/"), (doc) => {
  //     if (doc.exists()) {
  //     } else {
  //     }
  //   });
  // }, []);

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
        <div className="xl:w-1/2 h-screen">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className="mobile:w-72 w-56  text-center p-4 bg-gray-800 rounded-2xl">
                <img
                  className="object-cover mobile:w-56 mobile:h-56"
                  src={item1}
                />
                <h2 className="font-semibold text-lg text-white">Relame 15C</h2>

                <h3 className="text-white text-center">
                  RS 20 000 <br />
                  20% off
                </h3>
                <button className="bg-red-600 p-2 text-white font-semibold">
                  Order Now
                </button>
                <h3 className="font-semibold text-xl text-white custom-outline">
                  D01:H02:M03:S01
                </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mobile:w-72 w-56  text-center p-4 bg-gray-800 rounded-2xl">
                <img
                  className="object-cover mobile:w-56 mobile:h-56 m-auto"
                  src={item1}
                />
                <h2 className="font-semibold text-lg text-white">Relame 15C</h2>

                <h3 className="text-white text-center">
                  RS 20 000 <br />
                  20% off
                </h3>
                <button className="bg-red-600 p-2 text-white font-semibold">
                  Order Now
                </button>
                <h3 className="font-semibold text-xl text-white custom-outline">
                  D01:H02:M03:S01
                </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mobile:w-72 w-56  text-center p-4 bg-gray-800 rounded-2xl">
                <img
                  className="object-cover mobile:w-56 mobile:h-56 m-auto"
                  src={item1}
                />
                <h2 className="font-semibold text-lg text-white">Relame 15C</h2>

                <h3 className="text-white text-center">
                  RS 20 000 <br />
                  20% off
                </h3>
                <button className="bg-red-600 p-2 text-white font-semibold">
                  Order Now
                </button>
                <h3 className="font-semibold text-xl text-white custom-outline">
                  D01:H02:M03:S01
                </h3>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
