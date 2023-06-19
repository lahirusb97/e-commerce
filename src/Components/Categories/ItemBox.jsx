import React, { useState } from "react";
import { TextField, TextareaAutosize } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import CircularProgress from "@mui/material/CircularProgress";
export default function ItemBox({ items }) {
  const [select, setSelect] = useState(false);
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [inputError, setinputError] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
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
      mobile.length > 0 &&
      message.length > 0
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
          Product_Id: items["Id"],
        });

        setOpen(false);
        setinputError(false);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    } else {
      setinputError(true);
    }
  };
  return (
    <div className="m-4">
      <div
        onMouseOver={() => {
          setSelect(true);
        }}
        onMouseLeave={() => {
          setSelect(false);
        }}
        className={` max-w-xs rounded overflow-hidden  ${
          select ? "shadow-darker" : "shadow-lg"
        }`}
      >
        <div className="w-56 h-56 relative">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={items["Img"]}
            alt={items.Name}
          />
        </div>
        <div className="px-6 text-center">
          <h2 className="font-bold text-xl mb-2">{items.Name}</h2>
          <p className="text-gray-700 text-base">{items.Discription}</p>
        </div>
        <div className="px-6 text-center">
          <p className=" text-base font-semibold italic text-red-500">
            Rs: {items.Price}
          </p>
          <button
            onClick={() => setOpen(true)}
            className="bg-blue-500 mb-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Buy Now
          </button>
        </div>
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
