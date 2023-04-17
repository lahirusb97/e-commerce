import React, { useEffect, useState } from "react";
import MainNav from "../Components/MainNav";
import samplehero from "../assets/samplehero.png";
import SpecialOffer from "../Components/SpecialOffer";
import {
  getFirestore,
  setDoc,
  doc,
  getDoc,
  collection,
  query,
  getDocs,
  where,
} from "firebase/firestore";
import "../FirebaseConfig";

export default function Home() {
  const [offerData, setOfferData] = useState([]);
  const [currentHero, setCurrentHero] = useState(0);
  useEffect(() => {
    const db = getFirestore();

    const getoffers = async () => {
      const offerDataArray = [];
      const offerCollectionRef = collection(db, "offers");

      // Get all documents within the "offer" collection
      const querySnapshot = await getDocs(offerCollectionRef);

      // Loop through each document in the query snapshot
      querySnapshot.forEach((doc) => {
        // Access the data of each document using doc.data()
        const offerData = doc.data();
        // Add the offer data to the array
        offerDataArray.push(offerData);
      });

      // Set the state with the array of offer data
      setOfferData(offerDataArray);
    };
    getoffers();
  }, []);

  return (
    <div>
      <MainNav />
      {offerData.length > 0 ? (
        <div>
          <div className="w-full h-auto relative">
            <img className="object-contain m-auto " src={samplehero} />
            <div className="absolute bottom-0 left-0">
              <SpecialOffer />
            </div>
            {console.log(offerData.length)}
          </div>
          <div className="flex justify-center flex-row pt-2">
            {offerData.length > 1 ? (
              offerData.map((Item) => (
                <div className="w-2 h-2 sm:w-4 sm:h-4 rounded-full bg-gray-600 mx-1"></div>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
