import React, { useEffect, useState } from "react";
import CatNav from "./CatNav";
import ItemBox from "./ItemBox";
import { motion } from "framer-motion";
import {
  getFirestore,
  collection,
  query,
  where,
  getDoc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
export default function CategoryList() {
  const [selectedCat, setSelectedCat] = useState("");
  const [items, setItems] = useState([]);

  const openAddItem = (data) => {
    setSelectedCat(data);
  };
  useEffect(() => {
    const db = getFirestore();
    const citiesRef = collection(db, "Product");
    const q = query(citiesRef, where("Category", "==", selectedCat));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setItems(items);
    });

    // Cleanup the listener when the value changes
    return () => unsubscribe();
  }, [selectedCat]);

  return (
    <div className="">
      <hr className="bg-black w-full h-2" />

      <CatNav curentCate={openAddItem} />
      <h1 className="text-6xl font-bold px-4 py-10 bg-slate-300 capitalize">
        {selectedCat}
      </h1>
      <div className="flex justify-center flex-wrap">
        {items.map((e) => (
          <motion.div whileHover={{ scale: 1.1 }}>
            <ItemBox items={e} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
