import React from 'react'
import OlxLogo from '/images/olx-logo.png'

const Login = () => {
    return (
        <div className='p-6 sm:p-10 flex justify-center bg-slate-50'>
            <div className="flex flex-col border border-[#002f34] p-5 rounded-md bg-white shadow-lg max-w-md w-full">
                <h1 className='text-xl font-semibold text-center'>Login</h1>
                <div className='flex flex-col items-center w-full'>
                    <img
                        src={OlxLogo}
                        width='200px'
                        height='200px'
                        alt='olx logo'
                        className=''
                    />
                </div>
                <form className='flex flex-col w-full'>
                    <div className="mb-4">
                        <label htmlFor='email' className="flex text-gray-700 font-bold mb-2">Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            required
                            className="w-full border-2 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#002f34]"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor='password' className="flex text-gray-700 font-bold mb-2">Password</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            required
                            className="w-full border-2 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#002f34]"
                        />
                    </div>

                    <button 
                        type='submit'
                        className="mt-5 mb-4 w-full h-10 bg-[#002f34] text-white font-bold hover:bg-slate-50 hover:text-[#002f34] border-2 border-[#002f34] rounded-md transition duration-200"
                    >
                        Login
                    </button>

                    <p className='text-md font-medium text-center hover:underline hover:underline-offset-4'>
                        Signup
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login