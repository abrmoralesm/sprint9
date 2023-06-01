// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBwo5k3WT8W7R6vM6XBx60uhduwlWEFLY",
  authDomain: "react-login-174b8.firebaseapp.com",
  projectId: "react-login-174b8",
  storageBucket: "react-login-174b8.appspot.com",
  messagingSenderId: "105725118407",
  appId: "1:105725118407:web:c99d89435f7ca7ce98bbe2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);