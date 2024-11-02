import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet, ScrollRestoration } from 'react-router-dom';

const Roots = () => {
    return (
        <div className='max-w-[1440px] mx-auto font-sans'>
            <ScrollRestoration />
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;