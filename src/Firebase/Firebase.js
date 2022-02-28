import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzODrfp1ayNdkBbMqQ2tXw4gekYQSgf5k",
  authDomain: "lowspec-website.firebaseapp.com",
  projectId: "lowspec-website",
  storageBucket: "lowspec-website.appspot.com",
  messagingSenderId: "907885301698",
  appId: "1:907885301698:web:8125968a4a7168f845505b",
  measurementId: "G-P9FN3CMZVG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
