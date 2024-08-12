import React from 'react'
import Arrow from '../assets/Arrow'
const Banner = () => {
    return (
        <div className='pt-20'>
            <div className=''>
                <div className='flex py-2 px-4 gap-5 border-2 border-x-0 mb-2 overflow-x-auto whitespace-nowrap scrollbar-hide'>
                    <div className='flex gap-2 font-bold cursor-pointer'>
                        <span>ALL CATEGORIES</span>
                        <Arrow />
                    </div>
                    <div className='flex gap-4 cursor-pointer'>
                        <span>Cars</span>
                        <span>Motorcycles</span>
                        <span>Mobile Phones</span>
                        <span>For Sale:Houses & Apartments</span>
                        <span>Scooters</span>
                        <span>Commercial & Other Vehicles</span>
                        <span>For Rent: House & Apartments</span>
                    </div>
                </div>
                <div className='relative w-full'>
                    <img 
                        src='../../public/images/banner copy.png'
                        alt='banner'
                        className='w-full object-cover h-48 sm:h-64 md:h-80'
                    />
                </div>
            </div>
        </div>
    )
}

export default Banner