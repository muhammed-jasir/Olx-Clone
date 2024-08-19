import { createContext } from "react";
import { auth, db } from "../firebase";

export const FirebaseContext = createContext(null);

export const FirebaseProvider = ({ children }) => {
    return (
        <FirebaseContext.Provider value={{ auth, db }}>
            {children}
        </FirebaseContext.Provider>
    );
}