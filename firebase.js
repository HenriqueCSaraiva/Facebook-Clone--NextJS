import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApacrIRHyx4jU-icepYDC9Y9lxFRUd35I",
  authDomain: "facebook-nextjs-78e14.firebaseapp.com",
  projectId: "facebook-nextjs-78e14",
  storageBucket: "facebook-nextjs-78e14.appspot.com",
  messagingSenderId: "12355152929",
  appId: "1:12355152929:web:3791ce47e6d128383f0760",
  measurementId: "G-J1MC9N41S1",
};

// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, db, provider, storage };
