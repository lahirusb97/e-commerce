import React, { useState, useEffect } from "react";
import MainNav from "../Components/MainNav";
import Footer from "../Components/Footer";
import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import CircularProgress from "@mui/material/CircularProgress";
import contactus from "../assets/contact.jpg";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handlemessage = async (e) => {
    e.preventDefault();
    if (message.length > 0 && email.length > 0 && name.length > 0) {
      try {
        setLoading(true);

        const db = getFirestore();
        const docRef = await addDoc(collection(db, "Messages"), {
          Name: name,
          Email: email,
          Message: message,
        });

        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    } else {
      setinputError(true);
    }
  };

  return (
    <div>
      <MainNav />
      <section class="bg-gray-100 py-12">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto text-center">
            <img src={contactus} />

            <p className="text-gray-600 mb-8 font-bold mt-2">
              Have any questions or inquiries? We'd love to hear from you. Fill
              out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
          <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
            <form onSubmit={handlemessage}>
              <div className="mb-6">
                <label for="name" class="block text-gray-700 font-bold mb-2">
                  Name
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div className="mb-6">
                <label for="email" class="block text-gray-700 font-bold mb-2">
                  Email Address
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div class="mb-6">
                <label
                  for="message"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                ></textarea>
              </div>
              <div class="text-center">
                {loading ? (
                  <CircularProgress />
                ) : (
                  <button
                    type="submit"
                    className="bg-indigo-500 text-white px-6 py-3 rounded-full font-bold hover:bg-indigo-600 transition duration-200"
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
