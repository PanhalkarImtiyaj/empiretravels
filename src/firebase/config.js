import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAk-TKC89U_7Un2yP5uo-tZYIZzc_ZY1VA",
    authDomain: "empire-2e03e.firebaseapp.com",
    projectId: "empire-2e03e",
    storageBucket: "empire-2e03e.firebasestorage.app",
    messagingSenderId: "602123747402",
    appId: "1:602123747402:web:c5d27c742ef8f52e3766b3",
    measurementId: "G-W4WXKD9K6K"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
