import React, { useEffect, useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { getFirestore, doc, onSnapshot } from "firebase/firestore";
import Menu from "../../assets/Icons/menu.svg";
import { motion } from "framer-motion";
export default function CatNav({ curentCate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [select, setSelect] = useState(0);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
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
    if (CategoryList.length > 0) {
      curentCate(CategoryList[0]);
    }
  }, [CategoryList]);

  return (
    <div className="relative z-50">
      <button className="p-4 cursor-pointer" onClick={toggleDrawer}>
        <span className="flex items-center font-semibold text-lg">
          <img src={Menu} alt="Menu Icon" />
          Menu
        </span>
      </button>
      <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
        <button
          onClick={() => {
            setIsOpen(false);
          }}
          className="float-right p-2 font-bold text-3xl text-red-600"
        >
          X
        </button>

        <div className="font-semibold capitalize">
          <h1 className="text-center top-10 left-1/2 -translate-x-1/2 text-xl font-semibold absolute">
            categories
          </h1>
          <ul className="mt-20">
            {CategoryList.map((e, i) => (
              <li
                key={"q" + i}
                onClick={() => {
                  curentCate(e);
                  setIsOpen(false);
                  setSelect(i);
                }}
                className={`${
                  i == select ? "bg-black text-white" : "bg-white text-black"
                } p-2 border-2  hover:bg-black hover:text-white border-gray-300 my-2 cursor-pointer`}
              >
                <a>{e}</a>
              </li>
            ))}
          </ul>
        </div>
      </Drawer>
    </div>
  );
}
