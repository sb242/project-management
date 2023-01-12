import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCI9XZ815JQ4N6trE4B7GN4vAJ1lxTq5Ig",
  authDomain: "projectmanagement-2a8af.firebaseapp.com",
  projectId: "projectmanagement-2a8af",
  storageBucket: "projectmanagement-2a8af.appspot.com",
  messagingSenderId: "250772108442",
  appId: "1:250772108442:web:03263e5eb284b70db8db23",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
