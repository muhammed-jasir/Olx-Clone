import React, { useContext, useEffect, useState } from 'react'
import Heart from '../assets/Heart'
import { FirebaseContext } from '../store/firebaseContext';
import { collection, getDocs } from 'firebase/firestore';
import Spinner from './Spinner';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const { db } = useContext(FirebaseContext);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const snapshot = await getDocs(collection(db, "posts"));

                const allPosts = snapshot.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                });

                setPosts(allPosts);
            } catch (error) {
                console.error("Error fetching posts: ", error);
            } finally {
                setLoading(false);
            }
        }

        fetchPosts();
    }, []);

    return (
        <div>
            <div className='mx-4 mt-4 mb-6 px-4 pt-4 pb-8 bg-slate-50 rounded-md'>
                <div className='flex justify-between items-center w-full mb-4 font-semibold'>
                    <span className='text-2xl text-[#002f34]'>Quick Menu</span>
                    <span className='text-md text-[#002f34] cursor-pointer'>View More</span>
                </div>
                {loading ? (
                    <Spinner />
                ) : (
                    <div className='flex overflow-x-auto whitespace-nowrap overflow-y-hidden scrollbar-hide'>
                        {posts.map((post) => (
                            <div key={post.id} className='flex flex-col gap-3 mr-3 p-3 w-56 h-[290px] cursor-pointer bg-white rounded-lg border border-gray-300 shadow-sm'>
                                <div className='flex justify-end items-center'>
                                    <Heart />
                                </div>
                                <div className='flex justify-center items-center'>
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className='h-[100px] w-full object-contain'
                                    />
                                </div>
                                <div>
                                    <p className="mt-2.5 text-lg font-bold">&#x20B9; {post.price}</p>
                                    <span className="text-md font-medium line-clamp-1">{post.category}</span>
                                    <p className="text-sm font-medium line-clamp-1">{post.title}</p>
                                </div>
                                <div className="flex justify-end text-sm text-gray-500">
                                    <span>{post.createdAt}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="flex flex-col mt-4 mx-4 mb-6 px-1 sm:px-5">
                <div className='flex justify-between items-center w-full mb-6'>
                    <span className='text-2xl sm:text-3xl text-[#002f34] font-bold'>Fresh recommendations</span>
                </div>
                {loading ? (
                    <Spinner />
                ) : (
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:px-3'>
                        {posts.map((post, index) => (
                            <div className='flex flex-col gap-3 cursor-pointer bg-white rounded-md border border-gray-300 shadow-lg transition-transform duration-300 hover:scale-105'>
                                <div className='relative'>
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className='w-full h-[150px] sm:h-[180px] md:h-[200px] object-contain'
                                    />
                                    <div className='absolute top-2 right-2'>
                                        <Heart />
                                    </div>
                                </div>
                                <div className='px-4 sm:px-5 pt-4 sm:pt-5'>
                                    <p className="text-lg font-bold">&#x20B9; {post.price}</p>
                                    <span className="text-md font-medium line-clamp-1">{post.category}</span>
                                    <p className="text-sm font-medium line-clamp-1">{post.title}</p>
                                </div>
                                <div className="flex sm:justify-end px-5 pb-5 pt-2 text-sm text-gray-500">
                                    <span>{post.createdAt}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Posts