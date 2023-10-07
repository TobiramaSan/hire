// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcGnj4KKz-J4iO1tZ4fSoQlIbp7o6hJT8",
  authDomain: "hire-bf9ef.firebaseapp.com",
  projectId: "hire-bf9ef",
  storageBucket: "hire-bf9ef.appspot.com",
  messagingSenderId: "1026959004374",
  appId: "1:1026959004374:web:8ed0f416dbbf707dcd2f77",
  measurementId: "G-N5DLYG790W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();
