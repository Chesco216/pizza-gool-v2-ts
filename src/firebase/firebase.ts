// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-nGXP2CaNz98uwC24RHFdPLFF6MbOeYM",
  authDomain: "nobbie-a209f.firebaseapp.com",
  projectId: "nobbie-a209f",
  storageBucket: "nobbie-a209f.appspot.com",
  messagingSenderId: "325615988267",
  appId: "1:325615988267:web:672254595718b35dcac46e",
  measurementId: "G-0631PY82LQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
