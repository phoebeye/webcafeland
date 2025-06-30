// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsOo849BFIevgMaz7CGz9ksiF4ugviiyc",
  authDomain: "webcafelanding-a2aa8.firebaseapp.com",
  projectId: "webcafelanding-a2aa8",
  storageBucket: "webcafelanding-a2aa8.firebasestorage.app",
  messagingSenderId: "467265924605",
  appId: "1:467265924605:web:6d0b0fe60b0e10337c3d94",
  measurementId: "G-EMF1XQSQ3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);