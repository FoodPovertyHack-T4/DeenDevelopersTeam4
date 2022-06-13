// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDO5VG8fYiof6lZ84la1WH5bxjQ_mYwUYo",
  authDomain: "deendevelopersteam4.firebaseapp.com",
  projectId: "deendevelopersteam4",
  storageBucket: "deendevelopersteam4.appspot.com",
  messagingSenderId: "425062758259",
  appId: "1:425062758259:web:313b8cc77883ebb52f7706"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)