// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEByHAoFO-Sp7Xi2lUh_VbADr0JdshoT0",
  authDomain: "devlinketree.firebaseapp.com",
  projectId: "devlinketree",
  storageBucket: "devlinketree.firebasestorage.app",
  messagingSenderId: "225788407248",
  appId: "1:225788407248:web:a87c5d6f80af9be8cb5dd5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
