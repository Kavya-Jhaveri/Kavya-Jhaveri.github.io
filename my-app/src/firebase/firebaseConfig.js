// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZVhupUpMlZRdinPxnAaTUeu95kmEY6OA",
  authDomain: "budgeting-1123.firebaseapp.com",
  projectId: "budgeting-1123",
  storageBucket: "budgeting-1123.firebasestorage.app",
  messagingSenderId: "500058186341",
  appId: "1:500058186341:web:1be0d9d074db4d53f79c8c",
  measurementId: "G-3B0PRK0BQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);



