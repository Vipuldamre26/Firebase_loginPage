// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjrwTGCA4bpx_St3O6ZWkBvpb1Uu1LQ50",
  authDomain: "geekster-b7fab.firebaseapp.com",
  projectId: "geekster-b7fab",
  storageBucket: "geekster-b7fab.appspot.com",
  messagingSenderId: "259840971864",
  appId: "1:259840971864:web:bccf3d709cd2e70736662d",
  measurementId: "G-01BQNCT44L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;