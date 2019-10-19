import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD87pKpfXX2PjrGmeHHFdNoJ9DX9E8D8Js",
  authDomain: "fitness-db-2b105.firebaseapp.com",
  databaseURL: "https://fitness-db-2b105.firebaseio.com",
  projectId: "fitness-db-2b105",
  storageBucket: "fitness-db-2b105.appspot.com",
  messagingSenderId: "67462398188",
  appId: "1:67462398188:web:a5df99c9e94b851e80e5c9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
