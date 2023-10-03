// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDGFAXYpmmX6T7iHIs3Tk5HSdDJFHHsdC0",
  authDomain: "park-nxt.firebaseapp.com",
  projectId: "park-nxt",
  storageBucket: "park-nxt.appspot.com",
  messagingSenderId: "460089560439",
  appId: "1:460089560439:web:8b4b8610268e5d1081e572",
  measurementId: "G-53LESTSP7D"
};
const app = initializeApp(firebaseConfig);
const auth=getAuth();

export {app,auth};