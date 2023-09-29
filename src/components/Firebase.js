// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3q5CthUQt6lzwjRHJnMkm689EeoNjfdE",
  authDomain: "event-management-fc523.firebaseapp.com",
  projectId: "event-management-fc523",
  storageBucket: "event-management-fc523.appspot.com",
  messagingSenderId: "659233361054",
  appId: "1:659233361054:web:a9d52290e53811b7e5ff8f",
  measurementId: "G-D94MC0MHLY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);