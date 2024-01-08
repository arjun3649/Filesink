// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1X57YEofHMmJ7S1JmP7T0cst9lLNwjj8",
  authDomain: "dropbox-clone-170b7.firebaseapp.com",
  projectId: "dropbox-clone-170b7",
  storageBucket: "dropbox-clone-170b7.appspot.com",
  messagingSenderId: "975793205129",
  appId: "1:975793205129:web:7adb00ead04cca68ae3b58",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

const storage = getStorage(app);
export {db,storage}