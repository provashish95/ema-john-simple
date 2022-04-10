// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDYBtQTe0oJCQThQK1QqyVyAxS0hG3bKI0",
    authDomain: "ema-john-simple-bd85a.firebaseapp.com",
    projectId: "ema-john-simple-bd85a",
    storageBucket: "ema-john-simple-bd85a.appspot.com",
    messagingSenderId: "240652499694",
    appId: "1:240652499694:web:ebc2880b3bce84d44b51ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

