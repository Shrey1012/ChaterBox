import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyC0o1tWvApV_5Lh8lks84BYQvB9yIOGCkY",
    authDomain: "chatterbox-292d7.firebaseapp.com",
    projectId: "chatterbox-292d7",
    storageBucket: "chatterbox-292d7.appspot.com",
    messagingSenderId: "838666340311",
    appId: "1:838666340311:web:20f316403737277151ad92",
  })
  .auth();
