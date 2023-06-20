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
  doc,
  onSnapshot,
} from "firebase/firestore";

export default function CategoryList() {
  const [selectedCat, setSelectedCat] = useState("");
  const [items, setItems] = useState([]);

  const openAddItem = (data) => {
    setSelectedCat(data);
  };
  const [CategoryList, setCategoryList] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const unsub = onSnapshot(
      doc(db, "/Category/FMjKPsKH4uZQqnwqbPHf/"),
      (doc) => {
        if (doc.exists()) {
          setCategoryList(doc.data()["Category_list"]);
        } else {
          setCategoryList([]);
        }
      }
    );
  }, []);

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
    <div className=" bg-gray-950">
      <div className="bg-white">
        <CatNav curentCate={openAddItem} />
      </div>

      <div className="flex justify-center">
        <ul className="flex">
          <li
            onClick={() => {
              setSelectedCat("mobile");
            }}
            className="text-white p-2  capitalize cursor-pointer text-xl"
          >
            <p>Mobile</p>
          </li>
          <li
            onClick={() => {
              setSelectedCat("Tablets");
            }}
            className="text-white p-2  capitalize cursor-pointer text-xl"
          >
            <p>Tablets</p>
          </li>
          <li
            onClick={() => {
              setSelectedCat("MacBook & Mac");
            }}
            className="text-white p-2  capitalize cursor-pointer text-xl"
          >
            <p>MacBook & Mac</p>
          </li>
          <li
            onClick={() => {
              setSelectedCat("watch");
            }}
            className="text-white p-2  capitalize cursor-pointer text-xl"
          >
            <p>Watch</p>
          </li>
        </ul>
      </div>

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
