// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7gmvG-Nx0zFBJjQX6urk7-M6QqVGp38Q",
  authDomain: "react-disney-plus-app-6f4a9.firebaseapp.com",
  projectId: "react-disney-plus-app-6f4a9",
  storageBucket: "react-disney-plus-app-6f4a9.appspot.com",
  messagingSenderId: "668838473836",
  appId: "1:668838473836:web:ce7d956d4fe80e7d49e849"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;