import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'; 

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "olx-clone-38dd6.firebaseapp.com",
    projectId: "olx-clone-38dd6",
    storageBucket: "olx-clone-38dd6.appspot.com",
    messagingSenderId: "974068993182",
    appId: "1:974068993182:web:9215ef91ab3c80a0617f8f",
    measurementId: "G-4QMMQW8PS3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;