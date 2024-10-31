import React from 'react';
import marnStackBook from '../../../public/mern-stack.png'
import Books from '../Books/Books';
import { useLoaderData } from 'react-router-dom';
// import Loading from '../utilities/Loading';
const Home = () => {
    const books = useLoaderData()
    return (
        <div>
            {/* banner section  */}
            <div className='md:flex items-center bg-[#1313130D] px-14 py-10 rounded-3xl mb-10'>
                <div className='md:w-1/2 pl-10'>
                    <h1 className='text-6xl font-serif'>Books to freshen up your bookshelf</h1>
                    <a href="#books">
                        <button className='greenBtn mt-10'>View The List</button>
                    </a>
                </div>
                <div className='md:w-1/2 flex items-center justify-center'>
                    <img className='w-[500px] h-[500px] object-cover' src={marnStackBook} alt="" />
                </div>
            </div>

            {/* books section  */}
            {/* <Loading ></Loading> */}
            <Books books={books}></Books>
        </div>
    );
};

export default Home;