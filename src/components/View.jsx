import React from 'react'

const View = () => {
    return (
        <div className='p-6 flex flex-col lg:flex-row bg-slate-50 rounded-md shadow-lg'>
            <div className='p-4 lg:w-9/12 bg-slate-50'>
                <img
                    src='/images/R15V3.jpg'
                    alt='bike'
                    className='w-full h64 lg:h-96 object-contain rounded-md bg-white shadow-md'
                />
                <div className='mt-4 p-4 bg-white rounded-md shadow-lg'>
                    <h3 className='text-xl font-bold text-[#002f34]'>Description</h3>
                    <p className='mt-2 text-gray-700'>
                        This YAMAHA R15V3 is in excellent condition and has been well-maintained.
                        It offers a smooth ride with powerful performance, making it a great choice
                        for bike enthusiasts. The bike is available at a reasonable price, and it is
                        equipped with all the necessary features you need for a safe and enjoyable ride.
                    </p>
                </div>
            </div>
            <div className='p-4 lg:mt-5 lg:w-3/12'>
                <div className='font-bold mb-5 text-[#002f34] text-[24px] lg:text-[34px] leading-9'>
                    <div className='border p-4 rounded-md mb-5 bg-white shadow-md'>
                    <p className='text-3xl'>&#x20B9; 2,50,000</p>
                    <h2 className='text-2xl mt-2'>YAMAHA R15V3</h2>
                        <p className='text-lg mt-1 text-gray-600'>Two Wheeler</p>
                        <p className='text-sm mt-1 text-gray-500'>Tue May 04 2021</p>
                    </div>
                    <div className='border p-4 rounded-md bg-white shadow-md'>
                        <p className='text-xl leading-6 font-bold text-[#002f34]'>Seller details</p>
                        <p className='text-lg mt-2'>No name</p>
                        <p className='text-lg mt-1'>Email</p>
                        <p className='text-lg mt-1'>1234567890</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View