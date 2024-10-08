import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"; // Firebase Storage uchun kerakli funksiya

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB--fIKJAI0_8qd6A54QByrj5IPM4obSnE",
  authDomain: "my-splush.firebaseapp.com",
  projectId: "my-splush",
  storageBucket: "my-splush.appspot.com",
  messagingSenderId: "1083352454254",
  appId: "1:1083352454254:web:76ad62478d4cb28b20c27f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage(app); // Storage'ni shu yerda olish kerak
