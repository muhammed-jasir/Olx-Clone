import React from 'react'
import Heart from '../assets/Heart'

const Posts = () => {
    return (
        <div>
            <div className='mx-4 mt-4 mb-6 px-4 pt-4 pb-8 bg-slate-50 rounded-md'>
                <div className='flex justify-between items-center w-full mb-3 font-semibold'>
                    <span className='text-2xl text-[#002f34]'>Quick Menu</span>
                    <span className='text-md text-[#002f34] cursor-pointer'>View More</span>
                </div>
                <div className='overflow-x-auto whitespace-nowrap overflow-y-hidden'>
                    <div className='flex flex-col gap-3 mr-3 p-3 w-56 h-[290px] cursor-pointer bg-white rounded-lg border border-gray-300 shadow-sm'>
                        <div className='flex justify-end items-center'>
                            <Heart />
                        </div>
                        <div className='flex justify-center items-center'>
                            <img
                                src='/images/R15V3.jpg'
                                alt='bike'
                                className='h-[100px] max-w-full max-h-full min-h-full text-center'
                            />
                        </div>
                        <div>
                            <p className="mt-2.5 text-lg font-bold">&#x20B9; 250000</p>
                            <span className="text-md font-medium line-clamp-1">Two Wheeler</span>
                            <p className="text-sm font-medium line-clamp-1"> YAMAHA R15V3</p>
                        </div>
                        <div className="flex justify-end text-sm text-gray-500">
                            <span>Tue May 04 2021</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-4 mx-4 mb-6">
                <div className='flex justify-between items-center w-full'>
                    <span className='text-2xl text-[#002f34] font-bold'>Fresh recommendations</span>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4'>
                    <div className='flex flex-col gap-3 cursor-pointer bg-white rounded-md border border-gray-300 shadow-lg transition-transform duration-300 hover:scale-105'>
                        <div className='relative'>
                            <img
                                src='/images/R15V3.jpg'
                                alt='bike'
                                className='w-full h-[200px] object-cover'
                            />
                            <div className='absolute top-2 right-2'>
                                <Heart />
                            </div>
                        </div>
                        <div className='px-5 pt-5'>
                            <p className="text-lg font-bold">&#x20B9; 250000</p>
                            <span className="text-md font-medium line-clamp-1">Two Wheeler</span>
                            <p className="text-sm font-medium line-clamp-1"> YAMAHA R15V3</p>
                        </div>
                        <div className="flex justify-end px-5 pb-5 pt-2 text-sm text-gray-500">
                            <span>Tue May 04 2021</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts