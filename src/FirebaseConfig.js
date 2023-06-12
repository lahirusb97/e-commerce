// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBXLZvtj_vJRFBfUOH_lZM6Qs6bjtQy33g",
  authDomain: "e-commerce-9774a.firebaseapp.com",
  projectId: "e-commerce-9774a",
  storageBucket: "e-commerce-9774a.appspot.com",
  messagingSenderId: "825100389207",
  appId: "1:825100389207:web:902c4e04e4b1aba6128c12",
  measurementId: "G-9N7DREDJ44",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const dbStore = getStorage(app);
