// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzOLG7WjESCN85gQzTRzgkWH2W6SC9YDk",
  authDomain: "a-crowd-funding-application.firebaseapp.com",
  projectId: "a-crowd-funding-application",
  storageBucket: "a-crowd-funding-application.firebasestorage.app",
  messagingSenderId: "629121777879",
  appId: "1:629121777879:web:26e18b378b3672ed1d3092"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);