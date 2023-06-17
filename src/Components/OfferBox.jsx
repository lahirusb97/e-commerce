import { useEffect, useState } from "react";
import {
  getFirestore,
  doc,
  deleteDoc,
  collection,
  addDoc,
  updateDoc,
} from "firebase/firestore";

import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
export default function OfferBox({ itemData }) {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    // Calculate the remaining time until the end date
    const endDate = new Date(itemData.End_date.seconds * 1000);
    const now = new Date();
    const difference = endDate - now;

    // Update the countdown every second
    const interval = setInterval(() => {
      const remainingTime = endDate - new Date();
      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

      // Format the countdown string
      const countdownString = `D:${days.toString().padStart(2, "0")} H:${hours
        .toString()
        .padStart(2, "0")} M:${minutes.toString().padStart(2, "0")} S:${seconds
        .toString()
        .padStart(2, "0")}`;

      setCountdown(countdownString);

      // Clear the interval when the countdown reaches zero
      if (remainingTime <= 0) {
        clearInterval(interval);
        setCountdown("Expired");
      }
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="w-72 p-4 bg-gray-800 rounded-2xl shadow-lg">
      <div className="relative">
        <img
          className="object-cover bg-center w-72 h-40 rounded-t-xl"
          src={itemData.Img}
          alt="Product"
        />
        <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded">
          {itemData["Precentage"]}% off
        </div>
      </div>
      <div className="text-center mt-1">
        <h2 className="font-semibold text-lg text-white">{itemData.Name}</h2>
        <h3 className="text-white ">
          RS{" "}
          {itemData["Price"] - (itemData.Price * itemData["Precentage"]) / 100}
        </h3>

        <button
          onClick={() => {}}
          className="bg-red-600 text-white px-4 py-2 rounded font-semibold"
        >
          Order Now
        </button>
        <h3 className="font-semibold text-xl bg-white text-black m-2">
          {countdown}
        </h3>
      </div>
    </div>
  );
}
