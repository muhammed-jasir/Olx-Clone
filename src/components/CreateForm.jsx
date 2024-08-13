import React from 'react';

const CreateForm = () => {
    return (
        <div className='p-6 sm:p-10 flex justify-center bg-gray-50'>
            <div className="flex flex-col border p-5 rounded-md bg-white shadow-lg max-w-xl w-full">
                <form className='flex flex-col w-full'>
                    <div className="mb-4">
                        <label htmlFor="name" className="flex text-gray-700 font-bold mb-2">Name</label>
                        <input
                            className="w-full border-2 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#002f34]"
                            type="text"
                            id="name"
                            name="name"
                            defaultValue="John"
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
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="category" className="flex text-gray-700 font-bold mb-2">Category</label>
                        <input
                            className="w-full border-2 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#002f34]"
                            type="text"
                            id="category"
                            name="category"
                            defaultValue="mobile"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="price" className="flex text-gray-700 font-bold mb-2">Price</label>
                        <input
                            className="w-full border-2 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#002f34]"
                            type="number"
                            id="price"
                            name="price"
                        />
                    </div>
                </form>

                <div className="mb-4 flex justify-center">
                    <img
                        alt="Posts"
                        className="object-cover border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#002f34]"
                        width="200px"
                        height="200px"
                        src="/images/R15V3.jpg"
                    />
                </div>

                <form className='flex flex-col'>
                    <div className="mb-4">
                        <input
                            type="file"
                            className="w-full text-gray-700 p-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#002f34]"
                        />
                    </div>

                    <button
                        className="mt-2 w-full h-10 bg-[#002f34] text-white font-bold hover:bg-slate-50 hover:text-[#002f34] border-2 border-[#002f34] rounded-md transition duration-200"
                    >
                        Upload and Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateForm;
