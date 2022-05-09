import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDLDFidgQ5lLTVCmyMNIVg9Fb2VF6WiNjA",
    authDomain: "manabi-3117f.firebaseapp.com",
    projectId: "manabi-3117f",
    storageBucket: "manabi-3117f.appspot.com",
    messagingSenderId: "355917125009",
    appId: "1:355917125009:web:fa94c502c078571909f630",
    measurementId: "G-36CJQTE0L8"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);