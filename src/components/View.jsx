import React, { useContext, useEffect, useState } from 'react'
import { PostContext } from '../store/postContext'
import { FirebaseContext } from '../store/firebaseContext';
import { collection, query, where, getDocs } from "firebase/firestore";
import { toast } from 'react-toastify';
import Spinner from './Spinner';

const View = () => {
    const { postDetails } = useContext(PostContext);
    const { db } = useContext(FirebaseContext);

    const [userDetails, setUserDetails] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchUserDetails = async () => {
            setLoading(true);
            try {
                const q = query(collection(db, "users"), where("id", "==", postDetails.userId));
                const querySnapshot = await getDocs(q);

                if (querySnapshot.empty) {
                    toast.error("User not found");
                    return;
                }

                const user = querySnapshot.docs[0].data();
                setUserDetails(user);

            } catch (error) {
                toast.error("Error fetching user details");
                console.error("Error fetching user details: ", error);
            } finally {
                setLoading(false);
            }
        }

        if (postDetails.userId) {
            fetchUserDetails();
        }

    }, [postDetails.userId]);

    return (
        <div className='p-6 flex flex-col lg:flex-row bg-slate-50 rounded-md shadow-lg'>
            {loading ? (
                <div className="flex justify-center items-center min-h-screen w-full">
                    <Spinner />
                </div>
            ) : (
                <>

                    <div className='p-4 lg:w-8/12 bg-slate-50'>
                        <img
                            src={postDetails.image}
                            alt={postDetails.title}
                            className='w-full h64 lg:h-96 object-contain rounded-md bg-white shadow-md'
                        />
                        <div className='mt-4 p-4 bg-white rounded-md shadow-lg'>
                            <h3 className='text-lg font-bold text-[#002f34]'>Description</h3>
                            <p className='mt-2 text-gray-700'>
                                {postDetails.description}
                            </p>
                        </div>
                    </div>
                    <div className='p-4 lg:mt-5 lg:w-4/12'>
                        <div className='font-bold mb-5 text-[#002f34] text-[24px] lg:text-[34px] leading-9'>
                            <div className='border p-4 rounded-md mb-5 bg-white shadow-md'>
                                <p className='text-3xl'>&#x20B9; {postDetails.price}</p>
                                <h2 className='text-2xl mt-2'>{postDetails.title}</h2>
                                <p className='text-lg mt-1 text-gray-600'>{postDetails.category}</p>
                                <p className='text-[20px] mt-1 text-gray-500 text-right'>{postDetails.createdAt}</p>
                            </div>
                            <div className='border p-4 rounded-md bg-white shadow-md'>
                                <p className='text-2xl leading-6 font-bold text-[#002f34] underline underline-offset-2'>Seller details</p>
                                {userDetails && (
                                    <>
                                        <p className='text-lg mt-2'>{userDetails.name}</p>
                                        <p className='text-lg mt-1'>{userDetails.email}</p>
                                        <p className='text-lg mt-1'>{userDetails.phone}</p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default View