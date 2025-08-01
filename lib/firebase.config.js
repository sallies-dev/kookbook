// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.AUTH_FIREBASE_API_KEY,
  authDomain: "kookbook-ff8d9.firebaseapp.com",
  projectId: "kookbook-ff8d9",
  storageBucket: "kookbook-ff8d9.firebasestorage.app",
  messagingSenderId: "649560974024",
  appId: "1:649560974024:web:566b244b18abf282eebbfd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}