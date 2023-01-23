import React from 'react'
import { LanguageIcon } from "@heroicons/react/24/solid"
import Link from 'next/link'

function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href='/'>Home</Link></li>
                        <li><a>Destination</a></li>
                        <li><a>Blog</a></li>
                    </ul>
                </div>
                <a className="">
                    <img src='/img/logo.png' className='w-24 h-auto' />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex px-1">
                    <li>
                        <Link href='/'>
                            <div className='font-semibold mx-2 hover:bg-slate-200 px-4 py-2 cursor-pointer rounded-lg transition duration-300'>Home</div>
                        </Link>
                    </li>
                    <li><div className='font-semibold mx-2 hover:bg-slate-200 px-4 py-2 cursor-pointer rounded-lg transition duration-300'>Destination</div></li>
                    <li><div className='font-semibold mx-2 hover:bg-slate-200 px-4 py-2 cursor-pointer rounded-lg transition duration-300'>Blog</div></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn mr-4">Login</a>
                <a className="p-2 rounded-xl hover:bg-slate-100 transition duration-200 cursor-pointer ">
                    <LanguageIcon className='w-6 h-6' />
                </a>
            </div>
        </div>
    )
}

export default Navbar