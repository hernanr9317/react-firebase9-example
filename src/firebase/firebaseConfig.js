import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDOYhvTOVH39NL8JLC5U3G6TC8kXm3julY",
    authDomain: "sql-demos-ed12a.firebaseapp.com",
    projectId: "sql-demos-ed12a",
    storageBucket: "sql-demos-ed12a.appspot.com",
    messagingSenderId: "796617012444",
    appId: "1:796617012444:web:d8b56d3b37b4cfc86eb019",
    measurementId: "G-5LPZ4JF8YL"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;