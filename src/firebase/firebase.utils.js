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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
