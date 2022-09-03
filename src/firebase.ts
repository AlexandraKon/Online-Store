import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyCdQ5WnyZQ_75pNSk3hNchNavms1kQL3y4',
  authDomain: 'online-shop-alexandra.firebaseapp.com',
  projectId: 'online-shop-alexandra',
  storageBucket: 'online-shop-alexandra.appspot.com',
  messagingSenderId: '996047773789',
  appId: '1:996047773789:web:ba321ed9edf851c669adb4'
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);