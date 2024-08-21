import React, { useContext, useEffect, useState } from 'react'
import Heart from '../assets/Heart'
import { FirebaseContext } from '../store/firebaseContext';
import { collection, getDocs } from 'firebase/firestore';
import Spinner from './Spinner';
import { PostContext } from '../store/postContext';
import { useNavigate } from 'react-router-dom';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [visiblePosts, setVisiblePosts] = useState(8);

    const { db } = useContext(FirebaseContext);
    const { setPostDetails } = useContext(PostContext);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const querySnapshot = await getDocs(collection(db, "posts"));

                const allPosts = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

                setPosts(allPosts);
            } catch (error) {
                console.error("Error fetching posts: ", error);
            } finally {
                setLoading(false);
            }
        }

        fetchPosts();
    }, []);

    const handleShowMore = () => {
        setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 8);
    };

    return (
        <div>
            <div className='mx-4 mt-4 mb-6 px-4 pt-4 pb-8 bg-slate-50 rounded-md'>
                <div className='flex justify-between items-center w-full mb-4 font-semibold'>
                    <span className='text-2xl sm:text-3xl font-semibold text-[#002f34]'>Quick Menu</span>
                    <span className='text-md sm:text-lg font-semibold text-[#002f34] cursor-pointer'>View More</span>
                </div>
                {loading ? (
                    <Spinner />
                ) : (
                    <div className='flex overflow-x-auto whitespace-nowrap overflow-y-hidden scrollbar-hide sm:px-3'>
                        {posts.map((post) => (
                            <div
                                key={post.id}
                                className='flex flex-col gap-3 mr-3 p-3 min-w-56 h-[320px] cursor-pointer bg-white rounded-lg border border-gray-300 shadow-sm'
                                onClick={() => {
                                    setPostDetails(post);
                                    navigate(`/view-post/${post.id}`);
                                }}
                            >
                                <div className='flex justify-end items-center'>
                                    <Heart />
                                </div>
                                <div className='flex justify-center items-center'>
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className='w-56 h-32 object-contain'
                                    />
                                </div>
                                <div className='flex flex-col justify-between flex-grow'>
                                    <div>
                                        <p className="mt-2.5 text-lg font-bold">&#x20B9; {post.price}</p>
                                        <span className="text-md font-medium line-clamp-1">{post.category}</span>
                                        <p className="text-sm font-medium line-clamp-1">{post.title}</p>
                                    </div>
                                    <div className="flex justify-end text-sm text-gray-500 mt-auto">
                                        <span>{post.createdAt}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="flex flex-col mt-4 mx-4 mb-6 px-1 sm:px-5">
                <div className='flex justify-between items-center w-full mb-6'>
                    <span className='text-2xl sm:text-3xl text-[#002f34] font-semibold'>Fresh recommendations</span>
                </div>
                {loading ? (
                    <div className="flex justify-center items-center min-h-screen w-full">
                        <Spinner />
                    </div>
                ) : (
                    <>
                        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:px-3'>
                            {posts.slice(0, visiblePosts).map((post) => (
                                <div
                                    key={post.id}
                                    className='flex flex-col gap-3 cursor-pointer bg-white rounded-md border border-gray-300 shadow-lg transition-transform duration-300 hover:scale-105'
                                    onClick={() => {
                                        setPostDetails(post);
                                        navigate(`/view-post/${post.id}`);
                                    }}
                                >
                                    <div className='relative'>
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className='w-full h-[150px] sm:h-[180px] md:h-[200px] object-contain' />
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
                        <div>
                            {posts.length > visiblePosts && (
                                <div className="flex justify-center mt-4">
                                    <button
                                        onClick={handleShowMore}
                                        className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                                    >
                                        Show More
                                    </button>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Posts