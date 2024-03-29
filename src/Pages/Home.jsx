import React, { useEffect, useState } from "react";
import MainNav from "../Components/MainNav";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import "../FirebaseConfig";
import { motion } from "framer-motion";
import SubNav from "../Components/SubNav";
import HeroSlide from "../Components/HeroSlide";
import Footer from "../Components/Footer";
import OfferSlide from "../Components/OfferSlide";
import CategoryList from "../Components/Categories/CategoryList";
export default function Home() {
  useEffect(() => {}, []);

  return (
    <div>
      <OfferSlide />
      {/* <HeroSlide /> */}

      {/* <div className="flex flex-wrap justify-around">
        <ItemBox />
      </div> */}
      <div style={{ height: "450px" }} className="w-full bg-slate-800"></div>

      <CategoryList />
      <Footer />
    </div>
  );
}
