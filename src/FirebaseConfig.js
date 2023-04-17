// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDGeqzqnGEygzEo4ffYnYvQid9tLvelMAs",
  authDomain: "e-commerce-6eb76.firebaseapp.com",
  projectId: "e-commerce-6eb76",
  storageBucket: "e-commerce-6eb76.appspot.com",
  messagingSenderId: "118125107000",
  appId: "1:118125107000:web:432ebfa0f19018b92553cd",
  measurementId: "G-2RN8H1ZNTN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
