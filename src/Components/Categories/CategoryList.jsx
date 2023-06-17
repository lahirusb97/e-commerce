import React, { useEffect, useState } from "react";
import CatNav from "./CatNav";
import ItemBox from "./ItemBox";
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
  console.log(items);
  return (
    <div className="">
      <hr className="bg-black w-full h-2" />
      <CatNav curentCate={openAddItem} />
      <div className="flex justify-center flex-wrap">
        {items.map((e) => (
          <div>
            <ItemBox items={e} />
          </div>
        ))}
      </div>
    </div>
  );
}
