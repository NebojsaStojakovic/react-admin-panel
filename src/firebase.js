import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  //   apiKey: process.env.REACT_APP_FIREBASE_KEY,
  apiKey: "AIzaSyCFCWMxdJfAaW8jhsxfBAVDIMMWzwe9mrg",
  authDomain: "admintutorial-cc5d4.firebaseapp.com",
  projectId: "admintutorial-cc5d4",
  storageBucket: "admintutorial-cc5d4.appspot.com",
  messagingSenderId: "17126368170",
  appId: "1:17126368170:web:37bf7ee6a5a582e8e581d3",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
