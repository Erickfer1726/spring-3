// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTtgkvV1cQeP8FcdFnIVhybn_ESPTLgI8",
  authDomain: "sprint-3-1b300.firebaseapp.com",
  projectId: "sprint-3-1b300",
  storageBucket: "sprint-3-1b300.appspot.com",
  messagingSenderId: "265697427686",
  appId: "1:265697427686:web:7ede2d90a4a6c2e8007b27",
  measurementId: "G-R7NDW7K7W9",
};

// Initialize Firebase
const auth = getAuth();
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
