// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrPCwgsOla_8f3Xu4PkArumQzVKLGuMos",
  authDomain: "imoveis-28518.firebaseapp.com",
  projectId: "imoveis-28518",
  storageBucket: "imoveis-28518.appspot.com",
  messagingSenderId: "125633909950",
  appId: "1:125633909950:web:b288bf5452c252380b3aef",
  measurementId: "G-P7GQJQJ6D4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app }