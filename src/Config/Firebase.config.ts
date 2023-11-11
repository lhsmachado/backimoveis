// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAY7t4f9RmZdtwDFG6SZ60iF7TyoRJll0Q",
  authDomain: "imobiliaria-82ef3.firebaseapp.com",
  projectId: "imobiliaria-82ef3",
  storageBucket: "imobiliaria-82ef3.appspot.com",
  messagingSenderId: "944996238925",
  appId: "1:944996238925:web:5327a10f2dc1297aa0fe04",
  measurementId: "G-Z11PSVMPMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app }