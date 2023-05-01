import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from 'firebase/storage';
// import {getDatabase} from 'firebase/database'
// import 'firebase/database';
// import 'firebase/compat/storage';
import firebase from 'firebase/compat/app'

const firebaseConfig = {
    apiKey: "AIzaSyBl30UkJJ-c6rASBQtbWnqpbzsd6FDLm-U",
    authDomain: "finalapp-f210f.firebaseapp.com",
    projectId: "finalapp-f210f",
    storageBucket: "finalapp-f210f.appspot.com",
    messagingSenderId: "1017575278671",
    appId: "1:1017575278671:web:3e415bca2b8fb8f1b3423a",
    measurementId: "G-CEH0KBDL27"
  };

  const app = initializeApp(firebaseConfig)

  export const auth = getAuth(app)
  export const storage= getStorage(app);

  // export const db = getDatabase(app);

