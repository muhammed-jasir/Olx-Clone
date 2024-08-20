import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useContext } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FirebaseContext } from "../store/firebaseContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { collection, setDoc, getDoc, doc } from "firebase/firestore";

const OAuth = () => {
    const {auth, db} = useContext(FirebaseContext);
    const navigate = useNavigate();

    const handleGoogle = async () => {
        try {
            const googleProvider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            const userRef = doc(db, "users", user.uid);
            const userDoc = await getDoc(userRef);

            if (!userDoc.exists()) {
                await setDoc(userRef, {
                    id: user.uid,
                    name: user.displayName,
                    email: user.email,
                    phone: user.phoneNumber || "",
                });
            }

            toast.success('Login successful');
            navigate('/');
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <button
            type='button'
            onClick={handleGoogle}
            className="mt-2 mb-4 w-full h-10 text-lg bg-gray-200 text-gray-950 font-bold hover:bg-[#002f34] hover:text-white border-2 border-[#002f34] rounded-md transition duration-200"
        >
            <div className='flex items-center justify-center gap-3'>
            <FcGoogle  className='w-6 h-6 '/>
            <span>
                Continue with Google
            </span>
            </div>
        </button>
    )
}

export default OAuth