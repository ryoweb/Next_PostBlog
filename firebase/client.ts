// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCWdoa0IaecCkB7B4sC_quXmODtiAX515o",
    authDomain: "postblog-851c6.firebaseapp.com",
    projectId: "postblog-851c6",
    storageBucket: "postblog-851c6.appspot.com",
    messagingSenderId: "62351448083",
    appId: "1:62351448083:web:521e624ac6d4caa770c7e6",
    measurementId: "G-9BL1PSQ82D"
};

// Initialize Firebase

if (!getApps()?.length) {
    initializeApp(firebaseConfig);
}
export const storage = getStorage();
export const auth = getAuth();
export const db = getFirestore();