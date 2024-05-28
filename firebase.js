// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import { getFirestore, collection } from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyYryuzMvVhViLXqctyNAx1iWhBwMgYrc",
  authDomain: "react-notes-48561.firebaseapp.com",
  projectId: "react-notes-48561",
  storageBucket: "react-notes-48561.appspot.com",
  messagingSenderId: "709665645739",
  appId: "1:709665645739:web:8047a85c84b08ea4b783ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")