// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaregZOQ2YGxqDXPcraEd2x88R2rvcKrU",
  authDomain: "rain-web-d2101.firebaseapp.com",
  projectId: "rain-web-d2101",
  storageBucket: "rain-web-d2101.appspot.com",
  messagingSenderId: "908002700432",
  appId: "1:908002700432:web:daa163a2b168267bc67c15",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
