// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';  // Import Firebase Auth
import 'firebase/compat/firestore'; // Import Firestore
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3hE4lvqu4M77JRHlrDzQwz7B1oFPFZiE",
  authDomain: "firbase-auth-flow.firebaseapp.com",
  projectId: "firbase-auth-flow",
  storageBucket: "firbase-auth-flow.firebasestorage.app",
  messagingSenderId: "358752183673",
  appId: "1:358752183673:web:50eb90afcd2f0326d27ba8",
  measurementId: "G-94Z76JK6PY"
};

// Initialize Firebase only once
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
