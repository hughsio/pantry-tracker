// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLXz-8u1LbR7ICLax4Y9033EpvimTel9E",
  authDomain: "inventory-management-26b5a.firebaseapp.com",
  projectId: "inventory-management-26b5a",
  storageBucket: "inventory-management-26b5a.appspot.com",
  messagingSenderId: "259511976728",
  appId: "1:259511976728:web:a05c8d4a68353e4cffd46d",
  measurementId: "G-XJSXVBMDLR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
