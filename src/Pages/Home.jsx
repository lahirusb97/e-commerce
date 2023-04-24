import React, { useEffect, useState } from "react";
import MainNav from "../Components/MainNav";
import samplehero from "../assets/samplehero.png";
import SpecialOffer from "../Components/SpecialOffer";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import "../FirebaseConfig";
import { motion } from "framer-motion";
import SubNav from "../Components/SubNav";
import HeroSlide from "../Components/HeroSlide";
import ItemBox from "../Components/ItemBox";
export default function Home() {
  return (
    <div>
      <MainNav />

      <HeroSlide />
      <SubNav />
      <ItemBox />
    </div>
  );
}
