// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAawp6ZrqNxQ8sUixhYBjDyumJzTUsnqTE",
  authDomain: "coffee-store-app-5b7a3.firebaseapp.com",
  projectId: "coffee-store-app-5b7a3",
  storageBucket: "coffee-store-app-5b7a3.firebasestorage.app",
  messagingSenderId: "514999015437",
  appId: "1:514999015437:web:205af73723735448c01d44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);