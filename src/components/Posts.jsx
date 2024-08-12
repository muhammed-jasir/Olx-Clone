import React from 'react'
import Heart from '../assets/Heart'

const Posts = () => {
    return (
        <div>
            <div className='mx-4 mt-4 mb-6 px-4 pt-4 pb-8 bg-slate-100 rounded'>
                <div className='flex justify-between items-center w-full mb-3'>
                    <span className='text-2xl text-[#002f34]'>Quick Menu</span>
                    <span className='text-md text-[#002f34] cursor-pointer'>View More</span>
                </div>
                <div className='overflow-x-auto whitespace-nowrap overflow-y-hidden'>
                    <div className='flex flex-col gap-3 mr-3 p-3 max-w-56 w-56 h-[290px] cursor-pointer bg-white rounded border'>
                        <div className='flex justify-end items-center'>
                            <Heart />
                        </div>
                        <div className='flex justify-center items-center'>
                            <img
                                src='../../public/images/R15V3.jpg'
                                alt='bike'
                                className='h-[100px] max-w-full max-h-full min-h-full text-center'
                            />
                        </div>
                        <div>
                            <p className="mt-2.5 text-lg font-bold">&#x20B9; 250000</p>
                            <span className="text-md font-medium line-clamp-1">Two Wheeler</span>
                            <p className="text-sm font-medium line-clamp-1"> YAMAHA R15V3</p>
                        </div>
                        <div className="flex justify-end text-sm">
                            <span>Tue May 04 2021</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-4 mx-4 mb-6">
                <div className='flex justify-between items-center w-full'>
                    <span className='text-2xl text-[#002f34] font-bold'>Fresh recommendations</span>
                </div>
                <div className='overflow-x-auto whitespace-nowrap overflow-y-hidden mt-3'>
                    <div className='flex flex-col gap-3 mr-3 p-3 max-w-56 w-56 h-[290px] cursor-pointer bg-white rounded border'>
                        <div className='flex justify-end items-center'>
                            <Heart />
                        </div>
                        <div className='flex justify-center items-center'>
                            <img
                                src='../../public/images/R15V3.jpg'
                                alt='bike'
                                className='h-[100px] max-w-full max-h-full min-h-full text-center'
                            />
                        </div>
                        <div>
                            <p className="mt-2.5 text-lg font-bold">&#x20B9; 250000</p>
                            <span className="text-md font-medium line-clamp-1">Two Wheeler</span>
                            <p className="text-sm font-medium line-clamp-1"> YAMAHA R15V3</p>
                        </div>
                        <div className="flex justify-end text-sm">
                            <span>Tue May 04 2021</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts