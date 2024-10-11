import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Firebase Storage uchun kerakli funksiya
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEyh5Bw-620mIRl5jh_FKTXsDAxVwAexg",
  authDomain: "new-splush-app-b363c.firebaseapp.com",
  projectId: "new-splush-app-b363c",
  storageBucket: "new-splush-app-b363c.appspot.com",
  messagingSenderId: "590452327326",
  appId: "1:590452327326:web:269866b7d382d805b64c8f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage(app);
//db
export const db = getFirestore();
