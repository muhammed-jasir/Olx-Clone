import React, { useContext, useState } from 'react';
import OlxLogo from '/images/olx-logo.png';
import { FirebaseContext } from '../store/firebaseContext';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import { collection, addDoc } from "firebase/firestore";
import { Link, useNavigate } from 'react-router-dom/dist';
import OAuth from './OAuth';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);
    const { auth, db } = useContext(FirebaseContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name) {
            return toast.error('Name is required')
        }

        if (!formData.email) {
            return toast.error("Email is required");
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            return toast.error("Email is invalid");
        }

        if (!formData.phone) {
            return toast.error("Phone number is required");
        } else if (!/^\d{10}$/.test(formData.phone)) {
            return toast.error("Phone number must be 10 digits");
        }

        if (!formData.password) {
            return toast.error("Password is required");
        }

        setLoading(true);

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            await updateProfile(userCredential.user, { displayName: formData.name });

            await addDoc(collection(db, "users"), {
                id: userCredential.user.uid,
                name: formData.name,
                email: formData.email,
                phone: formData.phone
            });

            toast.success("Signup successful!");

            navigate('/login');
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }


    return (
        <div className='p-6 sm:p-10 flex justify-center border bg-slate-50'>
            <div className="flex flex-col border p-5 rounded-md bg-white shadow-lg max-w-md w-full">
                <h1 className='text-xl font-semibold text-center'>Signup</h1>
                <div className='flex flex-col items-center w-full'>
                    <img
                        src={OlxLogo}
                        width='200px'
                        height='200px'
                        alt='olx logo'
                        className=''
                    />
                </div>
                <form className='flex flex-col w-full' onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor='name' className="flex text-gray-700 font-bold mb-2">Name</label>
                        <input
                            type='name'
                            id='name'
                            name='name'
                            className="w-full border-2 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#002f34]"
                            onChange={handleChange}
                            value={formData.name}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor='email' className="flex text-gray-700 font-bold mb-2">Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            className="w-full border-2 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#002f34]"
                            onChange={handleChange}
                            value={formData.email}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor='phone' className="flex text-gray-700 font-bold mb-2">Phone</label>
                        <input
                            type='tel'
                            id='phone'
                            name='phone'
                            className="w-full border-2 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#002f34]"
                            onChange={handleChange}
                            value={formData.phone}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor='password' className="flex text-gray-700 font-bold mb-2">Password</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={handleChange}
                            value={formData.password}
                        />
                    </div>

                    <button
                        type='submit'
                        disabled={loading}
                        className="mt-5 mb-4 w-full h-10 text-lg bg-[#002f34] text-white font-bold hover:bg-slate-50 hover:text-[#002f34] border-2 border-[#002f34] rounded-md transition duration-200"
                    >
                        {loading ? 'Loading...' : 'Signup'}
                    </button>

                    <OAuth />

                    <Link to='/login'>
                        <p className='text-md font-medium text-center hover:underline hover:underline-offset-4'>
                            Login
                        </p>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Signup