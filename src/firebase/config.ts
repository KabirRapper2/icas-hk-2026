// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkylMad2o0XAvJrZSFhqgRNz5vLS-wveY",
  authDomain: "icas-hk-2026.firebaseapp.com",
  projectId: "icas-hk-2026",
  storageBucket: "icas-hk-2026.firebasestorage.app",
  messagingSenderId: "1028689927534",
  appId: "1:1028689927534:web:f255d3e4fc149fad34b57f",
  measurementId: "G-RBFY5FN1R4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
