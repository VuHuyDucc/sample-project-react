import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCDPUP2KeZ2YLBmLVxPdkjudqFSReemWUg",
  authDomain: "sample-project-e06fc.firebaseapp.com",
  projectId: "sample-project-e06fc",
  storageBucket: "sample-project-e06fc.appspot.com",
  messagingSenderId: "456746284354",
  appId: "1:456746284354:web:7da0473abd1397028004db",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
