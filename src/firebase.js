import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDTtgkvV1cQeP8FcdFnIVhybn_ESPTLgI8",
    authDomain: "sprint-3-1b300.firebaseapp.com",
    projectId: "sprint-3-1b300",
    storageBucket: "sprint-3-1b300.appspot.com",
    messagingSenderId: "265697427686",
    appId: "1:265697427686:web:7ede2d90a4a6c2e8007b27",
    measurementId: "G-R7NDW7K7W9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };