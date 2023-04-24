import React, { useEffect, useState } from "react";
import MainNav from "../Components/MainNav";
import samplehero from "../assets/samplehero.png";
import SpecialOffer from "../Components/SpecialOffer";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import "../FirebaseConfig";
import { motion } from "framer-motion";
export default function HeroSlide() {
  const [offerData, setOfferData] = useState([]);
  const [currentHero, setCurrentHero] = useState(0);
  const [isSelect, setIsSelect] = useState(false);
  const variants = {
    hide: { opacity: 0 },
    show: { opacity: 1 },
  };
  const btnVariants = {
    gray: { backgroundColor: "#ADADAD" }, // gray color
    mainc: { backgroundColor: "#EC442D" }, // purple color
  };
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

  useEffect(() => {
    if (offerData.length > 0) {
      const intervalId = setInterval(() => {
        setCurrentHero((prevHero) => {
          if (prevHero === offerData.length - 1) {
            return 0;
          } else {
            return prevHero + 1;
          }
        });
        setIsSelect(true);
      }, 5000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [currentHero, offerData]);

  return (
    <div>
      {offerData.length > 0 ? (
        <div className="relative">
          <div className="w-full h-auto relative">
            <motion.img
              // style={{ opacity: isSelect ? "1" : "0" }}
              animate={isSelect ? "hide" : "show"}
              variants={variants}
              transition={{ duration: isSelect ? 0 : 0.5 }}
              className="object-contain m-auto"
              src={offerData[currentHero]["Img"]}
              onLoad={() => {
                const intervalId = setInterval(() => {
                  setIsSelect(false);
                }, 500);

                // Clean up the interval when the button is clicked again or when count reaches a certain value
                const stopInterval = () => {
                  clearInterval(intervalId);
                };
                setTimeout(stopInterval, 1000);
              }}
            />
            <div className="absolute bottom-0 left-0">
              <SpecialOffer />
            </div>
          </div>
          <div className="flex justify-center flex-row pt-2 absolute left-1/2 -translate-x-1/2 bottom-0 tra z-30">
            {offerData.length > 0 ? (
              offerData.map((Item, index) => (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  variants={btnVariants}
                  animate={currentHero == index ? "mainc" : "gray"}
                  transition={{ duration: 0.5 }}
                  onClick={() => {
                    currentHero !== index
                      ? setIsSelect(true)
                      : setIsSelect(false);
                    setCurrentHero(index);
                  }}
                  key={"heronav" + index}
                  className={`w-2 h-2 sm:w-4 sm:h-4 rounded-full
                     
                     mx-1`}
                ></motion.button>
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
