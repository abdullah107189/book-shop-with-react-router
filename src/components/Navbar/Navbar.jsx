import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    const allLi = <div className='text-xl alink'>
        <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Home</NavLink>
        <NavLink to="/listed-book" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Listed Book</NavLink>
        <NavLink to="/dashboard" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Pages    to Read</NavLink>
    </div>
    return (
        <div className="navbar bg-base-100 my-5 sticky top-0 z-50">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {allLi}
                    </ul>
                </div>
                <a href='/' className="font-extrabold text-3xl">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {allLi}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <button className="greenBtn ">Sign In</button>
                <button className="px-5 py-3 bg-[#59C6D2] rounded-lg text-xl text-white font-bold">Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;