import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FB_APIKEY, 
    authDomain: import.meta.env.VITE_FB_AUTHDOMAIN,
    projectId: import.meta.env.VITE_FB_PROJECTID,
    storageBucket: import.meta.env.VITE_FB_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_FB_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_FB_APPID
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection("users");

export {
    auth,
    db,
    usersCollection,
    storage
};
