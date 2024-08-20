import { createContext, useEffect, useState } from "react";
import { auth, db, storage } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export const FirebaseContext = createContext(null);

export const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <FirebaseContext.Provider value={{ auth, db, user, storage }}>
            {children}
        </FirebaseContext.Provider>
    );
}