import React from 'react'

const Footer = () => {
    return (
        <div className='w-full'>
            <div className='flex flex-col sm:flex-row justify-between max-sm:text-center items-center bg-gray-100 py-6 px-2 sm:px-10 gap-8 sm:gap-0'>
                <div className='flex flex-col gap-2'>
                    <div className='text-xl font-bold'>
                        <p>POPULAR LOCATIONS</p>
                    </div>
                    <div className='text-gray-800 text-md'>
                        <ul>
                            <li className='hover:underline hover:underline-offset-4'>Mumbai</li>
                            <li className='hover:underline hover:underline-offset-4'>Delhi</li>
                            <li className='hover:underline hover:underline-offset-4'>Kolkata</li>
                            <li className='hover:underline hover:underline-offset-4'>Chennai</li>
                            <li className='hover:underline hover:underline-offset-4'>Bangalore</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='text-xl font-bold'>
                        <p>ABOUT US</p>
                    </div>
                    <div className='text-gray-800 text-md'>
                        <ul>
                            <li className='hover:underline hover:underline-offset-4'>About OLX Group</li>
                            <li className='hover:underline hover:underline-offset-4'>Careers</li>
                            <li className='hover:underline hover:underline-offset-4'>Contact Us</li>
                            <li className='hover:underline hover:underline-offset-4'>OLXPeople</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='text-xl font-bold'>
                        <p>OLX</p>
                    </div>
                    <div className='text-gray-800 text-md'>
                        <ul>
                            <li className='hover:underline hover:underline-offset-4'>Help</li>
                            <li className='hover:underline hover:underline-offset-4'>Sitemap</li>
                            <li className='hover:underline hover:underline-offset-4'>Legal & Privacy information</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row justify-between items-center p-5 bg-[#002f34] text-white gap-4 sm:gap-0'>
                <p className='text-center'>Other Countries Pakistan - South Africa - Indonesia</p>
                <p className='text-center'>Free Classifieds in India. © 2006-2024 OLX</p>
            </div>
        </div>
    )
}

export default Footer