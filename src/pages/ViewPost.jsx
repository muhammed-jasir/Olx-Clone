import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import View from '../components/View'
import { FirebaseContext } from '../store/firebaseContext'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import { PostContext } from '../store/postContext'
import Spinner from '../components/Spinner'

const ViewPost = () => {
    const { postDetails, setPostDetails } = useContext(PostContext);
    const { db } = useContext(FirebaseContext);
    const { postId } = useParams();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
            try {
                const docRef = doc(db, "posts", postId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setPostDetails({ ...docSnap.data(), id: docSnap.id });
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error fetching post: ", error);
            } finally {
                setLoading(false);
            }
        };

        if (!postDetails || !postDetails.id) {
            fetchPost();
        }

    }, [postId]);
    return (
        <div>
            <Header />

            {loading
                ? (
                    <div className='min-h-screen flex items-center justify-center'>
                        <Spinner />
                    </div>
                ) : (
                    postDetails && <View />
                )
            }

            <Footer />
        </div>
    )
}

export default ViewPost