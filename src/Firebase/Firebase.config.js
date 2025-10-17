// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKE0hQov5h9ioipxa0sQKuRN1GordN4rc",
  authDomain: "fir-sassions.firebaseapp.com",
  projectId: "fir-sassions",
  storageBucket: "fir-sassions.firebasestorage.app",
  messagingSenderId: "383192093161",
  appId: "1:383192093161:web:f9b851baa1b1395f93fb78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);