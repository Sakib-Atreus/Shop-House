import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className="navbar bg-sky-300">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium">
                    <li><a>Home</a></li>
                    <li><a>Feature</a></li>
                    <li><a>Blog</a></li>
                    <li><a>About</a></li>
                </ul>
                </div>
                <img className='w-16 h-16' src="https://freepngimg.com/save/158223-photos-mall-shopping-store-free-clipart-hq/512x512" alt="" />
                <a href='/' className="btn btn-ghost normal-case text-2xl font-bold">Shop House</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-medium">
                    <li><a>Home</a></li>
                    <li><a>Feature</a></li>
                    <li><a>Blog</a></li>
                    <li><a>About</a></li>
                </ul>
            </div>
            <div className="flex-none gap-2 navbar-end">
                <p><FaSearch size={25}/></p>
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Login/Logout</a></li>
                </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;