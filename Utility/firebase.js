// import { initializeApp } from "firebase/compat/app";
import firebase from 'firebase/compat/app'
// auth
import {getAuth} from 'firebase/auth'
// import 'firebase/compat/firestore'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHHBZcq7N0ZGrayZm2jyx1c_x6L5WwbFA",
  authDomain: "clone-cf6ad.firebaseapp.com",
  projectId: "clone-cf6ad",
  storageBucket: "clone-cf6ad.appspot.com",
  messagingSenderId: "548088792381",
  appId: "1:548088792381:web:9de443b21f6c7ba9727154",
};

const app = firebase.initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const db = app.firestore()
