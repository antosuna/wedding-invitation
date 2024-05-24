// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "",
    authDomain: ".firebaseapp.com",
    databaseURL: ".firebasedatabase.app",
    projectId: "",
    storageBucket: ".appspot.com",
    messagingSenderId: "",
    appId: ""
};

const app = initializeApp(firebaseConfig);
const db = getDatabase (app);
const storage = getStorage(app);

export { db, storage };
