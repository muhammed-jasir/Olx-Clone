import React, { useContext, useState } from 'react'
import OlxLogo from '../assets/OlxLogo'
import Search from '../assets/Search'
import Arrow from '../assets/Arrow'
import SellButton from '../assets/SellButton'
import SellButtonPlus from '../assets/SellButtonPlus'
import { FirebaseContext } from '../store/firebaseContext'
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'

const Header = () => {
    const { user, auth } = useContext(FirebaseContext);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const toggleDropdown = () => {
        setDropdownOpen(prevState => !prevState);
    };

    const handleLogout = () => {
        signOut(auth);
        navigate('/login');
    };

    return (
        <header className='py-2.5 px-4 sm:px-8 bg-slate-100 w-full z-50'>
            <div className='w-full flex justify-between items-center'>
                <div>
                    <OlxLogo />
                </div>
                <div className='hidden md:flex items-center px-2 max-w-sm lg:w-[250px] h-12 bg-white rounded border-[2px] border-[#002f34] placeSearch'>
                    <Search />
                    <input type="text" className='pl-3 border-transparent outline-none' />
                    <Arrow />
                </div>
                <div className="hidden md:flex item-center justify-between h-12 border-[2px] max-w-lg lg:w-[620px] border-[#002f34] rounded bg-slate-50">
                    <div className="w-full h-full flex">
                        <input
                            type='text'
                            placeholder="Find car,mobile phone and more..."
                            className='border-transparent outline-none w-full items-center pl-2'
                        />
                    </div>
                    <div className='min-w-[48px] h-[46px] relative flex cursor-pointer bg-[#002f34] rounded-r-[0px]'>
                        <Search color="#ffffff" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fill-white' />
                    </div>
                </div>
                <div className='h-12 hidden sm:flex items-center cursor-pointer'>
                    <span className='text-[15px] whitespace-normal font-bold mr-[5px] text-ellipsis'> ENGLISH </span>
                    <Arrow />
                </div>
                <div className='relative flex items-center gap-2 text-[16px] whitespace-normal mr-[5px] font-bold underline underline-offset-8 decoration-2 hover:no-underline cursor-pointer'>
                    {user
                        ? (
                            <div onClick={toggleDropdown} className='flex gap-2 items-center cursor-pointer'>
                                <span>{user.displayName}</span>
                                <Arrow />
                                {dropdownOpen && (
                                    <div className='absolute top-full right-0 mt-2 w-36 bg-white border border-gray-300 rounded shadow-lg z-20'>
                                        <ul className='list-none p-2'>
                                            <li className='p-2 hover:bg-gray-100 cursor-pointer' onClick={handleLogout}>Logout</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link to='/login'>
                                <span>
                                    Login
                                </span>
                            </Link>
                        )
                    }
                </div>
                <div className='relative cursor-pointer'>
                    <SellButton />
                    <div className='absolute flex gap-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[14px] font-bold leading-none text-[#002f34]'>
                        <SellButtonPlus />
                        <span>SELL</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header