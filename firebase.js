// Import the functions you need from the SDKs you need
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBXorWZ93j43ni7KVpV4oBwWo7u_bSE6hg",
  authDomain: "amzn-2-clone-a9587.firebaseapp.com",
  projectId: "amzn-2-clone-a9587",
  storageBucket: "amzn-2-clone-a9587.appspot.com",
  messagingSenderId: "204040622129",
  appId: "1:204040622129:web:cb08d5970783d073514510",
  measurementId: "G-R0LHJ08PTY",
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = firebaseApp.firestore();

export default db ;
