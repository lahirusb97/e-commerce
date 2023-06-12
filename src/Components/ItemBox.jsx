import React, { useEffect, useState } from "react";
import { getStorage, ref, listAll, deleteObject } from "firebase/storage";
import img1 from "../assets/Product/1.jpg";
import { motion } from "framer-motion";
export default function ItemBox() {
  const [tx, setx] =
    useState(`RC Car RC Off Road Car Remote Control 2022 LAND ROVER DEFENDER
  Licensed Version 2.4G 1:12 RC car D99s 4x4 Defender with Signal Light
  Crawler Model car Hobby Toy car Toys RC Vehicle four wheel Games Rc
  Vehicle`);
  const maxLength = 40;
  useEffect(() => {
    const storage = getStorage();
    const listRef = ref(storage, "/Product/FZfpLffLYVcHSijr5I3W");

    // Find all the prefixes and items.
    listAll(listRef)
      .then((res) => {
        res.prefixes.forEach((folderRef) => {
          // All the prefixes under listRef.
          // You may call listAll() recursively on them.
          // console.log(folderRef);
        });
        res.items.forEach((itemRef) => {
          // All the items under listRef.
        });
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
        console.log(error);
      });
  }, []);

  return (
    <motion.div className=" min-w-boxw max-w-boxw ml-2 my-2 hover:shadow-lg">
      <div className="min-w-boxw max-w-boxw min-h-boxh ">
        <img src={img1} className="object-contain" />
      </div>
      <div className="p-1">
        <h3 className="font-semibold mt-1">
          {tx.length <= 40 ? tx : `${tx.substring(0, 40 - 3)}...`}
        </h3>

        <h3 className="font-semibold text-cmain text-xl mb-2">RS 25 000.00</h3>
      </div>
    </motion.div>
  );
}
