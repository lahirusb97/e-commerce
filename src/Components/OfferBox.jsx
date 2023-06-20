import { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
import { TextField, TextareaAutosize } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CircularProgress from "@mui/material/CircularProgress";
export default function OfferBox({ itemData }) {
  const [countdown, setCountdown] = useState("");
  const [select, setSelect] = useState(false);
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [inputError, setinputError] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

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
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOrder = async () => {
    if (
      message.length > 0 &&
      name.length > 0 &&
      address.length > 0 &&
      mobile.length > 0
    ) {
      setLoading(true);
      setinputError(false);
      try {
        const db = getFirestore();
        const docRef = await addDoc(collection(db, "Orders"), {
          Name: name,
          Address: address,
          Mobile: mobile,
          Message: message,
          Product_Id: itemData.Id, // Use itemData.Id instead of items["Id"]
        });

        setOpen(false);
        setinputError(false);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    } else {
      setinputError(true);
    }
  };

  useEffect(() => {
    const offerList = () => {
      const db = getFirestore();
      const collectionRef = collection(db, "offers");

      onSnapshot(collectionRef, (snapshot) => {
        const items = [];

        snapshot.forEach((doc) => {
          items.push(doc.data());
        });
        setItems(items);
      });
    };
    offerList();
  }, []);
  return (
    <div className=" p-4 bg-white shadow-lg ">
      <div className="relative">
        <img
          className="object-contain bg-center w-96 h-40 "
          src={itemData.Img}
          alt="Product"
        />
        <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded">
          {itemData["Precentage"]}% off
        </div>
      </div>
      <div className="text-center mt-1">
        <h3 className="font-semibold text-xl bg-white text-black m-2">
          {countdown}
        </h3>
        <h2 className="font-semibold text-lg text-black">{itemData.Name}</h2>
        <h3 className="font-black text-2xl text-red-600 ">
          RS:{" "}
          {itemData["Price"] - (itemData.Price * itemData["Precentage"]) / 100}
          .00
        </h3>
        <p className="text-white ">{itemData["Discription"]}</p>
        <button
          onClick={() => {
            setOpen(true);
          }}
          className="bg-orange-600 text-white px-4 py-2 rounded font-semibold"
        >
          Order Now
        </button>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Order Products"}</DialogTitle>
        <DialogContent>
          <div className="m-2">
            <TextField
              onChange={(e) => setName(e.target.value)}
              className="w-full"
              id="outlined-basic"
              label="Product Name"
              type="text"
              variant="outlined"
            />
            <TextField
              style={{ paddingTop: ".5rem" }}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full"
              id="outlined-basic"
              label="Mobile Number"
              type="number"
              variant="outlined"
            />
            <textarea
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
              className="w-full border p-3 border-gray-400 rounded-md my-2 h-24"
            ></textarea>

            <textarea
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              className="w-full border p-3 border-gray-400 rounded-md h-24"
            ></textarea>
            {inputError ? (
              <span className="text-red-600 font-bold italic">
                ** Fill All The Inputs **
              </span>
            ) : (
              <></>
            )}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          {loading ? (
            <CircularProgress />
          ) : (
            <Button onClick={handleOrder}>Order Now</Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
