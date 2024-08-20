import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { FirebaseContext } from '../store/firebaseContext';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';

const CreateForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        price: '',
    });

    const [imageFile, setImageFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const { user, storage, db } = useContext(FirebaseContext);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    }

    const handleImage = (e) => {
        const file = e.target.files[0];

        if (file) {
            if (file.size > 5000000) {
                return toast.error('File size must be less than 5 MB');
            }

            if (!file.type.startsWith('image/')) {
                return toast.error('Please select an image file');
            }

            setImageFile(file);
        }
    }

    const uploadImage = async (imageFile) => {
        setLoading(true);

        try {
            const fileName = new Date().getTime() + '-' + imageFile.name;
            const storageRef = ref(storage, `images/${fileName}`);

            const uploadTask = await uploadBytes(storageRef, imageFile);
            const downloadURL = await getDownloadURL(uploadTask.ref);

            return downloadURL;
        } catch (error) {
            return toast.error('Error uploading image');
        } finally {
            setLoading(false);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.title) {
            return toast.error('Title is required');
        } else if (formData.title.length < 3) {
            return toast.error('Title must include atleast 3 characters');
        }

        if (!formData.description) {
            return toast.error('Description is required');
        } else if (formData.description.length < 10) {
            return toast.error('Description must include atleast 10 characters');
        }

        if (!formData.category) {
            return toast.error('Category is required');
        }

        if (!imageFile) {
            return toast.error('Image is required');
        }

        if (!formData.price) {
            return toast.error('Price is required');
        } else if (isNaN(formData.price) || formData.price <= 0) {
            return toast.error('Price must be a valid number greater than 0');
        }

        setLoading(true);

        try {
            const imageUrl = await uploadImage(imageFile);

            if (!imageUrl) return;

            await addDoc(collection(db, "posts"), {
                title: formData.title,
                description: formData.description,
                category: formData.category,
                price: formData.price,
                image: imageUrl,
                userId: user.uid,
                createdAt: new Date().toLocaleString(),
            })

            setFormData({
                title: '',
                description: '',
                category: '',
                price: '',
            });

            setImageFile(null);
            document.getElementById('image').value = '';

            toast.success('Post created successfully');
        } catch (error) {
            toast.error('An error occurred while creating the post');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='p-6 sm:p-10 flex justify-center bg-gray-50'>
            <div className="flex flex-col border p-5 rounded-md bg-white shadow-lg max-w-xl w-full">
                <form className='flex flex-col w-full' onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="flex text-gray-700 font-bold mb-2">Title</label>
                        <input
                            className="w-full border-2 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#002f34]"
                            type="text"
                            id="title"
                            name="title"
                            onChange={handleChange}
                            placeholder="Enter your product title..."
                            value={formData.title || ''}
                        />
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="description" className="flex text-gray-700 font-bold mb-2">Description</label>
                        <textarea
                            className="w-full border-2 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#002f34]"
                            id="description"
                            name="description"
                            rows="5"
                            placeholder="Describe your product here..."
                            onChange={handleChange}
                            value={formData.description || ''}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="category" className="flex text-gray-700 font-bold mb-2">Category</label>
                        <input
                            className="w-full border-2 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#002f34]"
                            type="text"
                            id="category"
                            name="category"
                            onChange={handleChange}
                            placeholder="Enter your product category..."
                            value={formData.category || ''}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="price" className="flex text-gray-700 font-bold mb-2">Price</label>
                        <input
                            className="w-full border-2 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#002f34]"
                            type="number"
                            id="price"
                            name="price"
                            onChange={handleChange}
                            placeholder="Enter your product price..."
                            value={formData.price || ''}
                        />
                    </div>

                    <label htmlFor="image" className="flex text-gray-700 font-bold mb-2">Image</label>

                    {imageFile && (
                        <div className="mb-4 flex justify-center">
                            <img
                                alt="Posts"
                                className="object-cover border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#002f34]"
                                width="200px"
                                height="200px"
                                src={URL.createObjectURL(imageFile)}
                            />
                        </div>
                    )}

                    <div className="mb-4">
                        <input
                            type="file"
                            accept='image/*'
                            id='image'
                            className="w-full text-gray-700 p-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#002f34]"
                            onChange={handleImage}
                        />
                    </div>

                    <button
                        type='submit'
                        disabled={loading}
                        className="mt-2 w-full h-10 bg-[#002f34] text-white font-bold hover:bg-slate-50 hover:text-[#002f34] border-2 border-[#002f34] rounded-md transition duration-200"
                    >
                        {loading ? 'Uploading...' : 'Upload and Submit'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateForm;
