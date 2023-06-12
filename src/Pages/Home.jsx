import React, { useEffect, useState } from "react";
import MainNav from "../Components/MainNav";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import "../FirebaseConfig";
import { motion } from "framer-motion";
import SubNav from "../Components/SubNav";
import HeroSlide from "../Components/HeroSlide";
import ItemBox from "../Components/ItemBox";
export default function Home() {
  useEffect(() => {}, []);

  return (
    <div>
      <MainNav />

      <HeroSlide />
      <SubNav />
      <div className="flex flex-wrap justify-around">
        <ItemBox />
      </div>
    </div>
  );
}
