import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { TextField } from "@mui/material";
import { BiSearchAlt2 } from "react-icons/bi";
import { getStorage } from "firebase/storage";
export default function SubNav() {
  const [categoryNav, setCategoryNav] = useState([]);
  useEffect(() => {
    const db = getFirestore();

    const getCategory = async () => {
      const offerDataArray = [];
      const offerCollectionRef = collection(db, "Category");

      // Get all documents within the "offer" collection
      const querySnapshot = await getDocs(offerCollectionRef);

      // Loop through each document in the query snapshot
      querySnapshot.forEach((doc) => {
        // Access the data of each document using doc.data()
        const offerData = doc.data();
        setCategoryNav(offerData["Category_list"]);
      });

      // Set the state with the array of offer data
    };
    getCategory();
  }, []);

  return (
    <div className="mt-4">
      <nav>
        <ul className="flex justify-center">
          <li className="px-2 cursor-pointer">
            <a className="">All Items</a>
          </li>
          {categoryNav.map((e, index) => (
            <li className="px-2 cursor-pointer" key={"subNav" + index}>
              <a className="capitalize">{e}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="my-4" style={{ position: "relative" }}>
        <input
          type="text"
          placeholder="Search"
          className="border border-cblack p-2 pl-10 w-80 rounded-lg"
        />
        <BiSearchAlt2
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
          }}
        />
        {/* <FontAwesomeIcon
          icon={faSearch}
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
          }}
        /> */}
      </div>
    </div>
  );
}
