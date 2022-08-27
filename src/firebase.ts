// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdQ5WnyZQ_75pNSk3hNchNavms1kQL3y4",
  authDomain: "online-shop-alexandra.firebaseapp.com",
  projectId: "online-shop-alexandra",
  storageBucket: "online-shop-alexandra.appspot.com",
  messagingSenderId: "996047773789",
  appId: "1:996047773789:web:ba321ed9edf851c669adb4",
  measurementId: "G-E4RWBTY1MV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);