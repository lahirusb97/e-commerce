import React, { useEffect, useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { getFirestore, doc, onSnapshot } from "firebase/firestore";
import Menu from "../../assets/Icons/menu.svg";
export default function CatNav({ curentCate }) {
  const [isOpen, setIsOpen] = useState(false);

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
        <span>
          <img src={Menu} alt="Menu Icon" />
        </span>
      </button>

      <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
        {" "}
        <button
          onClick={() => {
            setIsOpen(false);
          }}
          className="float-right p-2 font-bold text-3xl text-red-600"
        >
          X
        </button>
        <div className="font-semibold capitalize">
          <ul className="mt-20">
            {CategoryList.map((e) => (
              <li
                onClick={() => {
                  curentCate(e);
                  setIsOpen(false);
                }}
                className="p-2 border-2 border-gray-300 my-2 cursor-pointer"
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
