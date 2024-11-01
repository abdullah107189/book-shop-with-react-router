import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
    const { id } = useParams()
    const bId = parseInt(id)
    const LoadBooks = useLoaderData()
    const book = LoadBooks.find(book => book.bookId === bId)
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    return (
        <div className='md:flex gap-10 my-10'>
            <div className=' md:w-1/2 bg-gray-200 flex items-center justify-center rounded-3xl'>
                <div className='w-[425px] h-[564px]'>
                    <img className='w-full h-full object-contain' src={image} alt="" />
                </div>
            </div>
            <div className='space-y-3 md:w-1/2'>
                <h1 className='font-serif text-5xl font-bold'>{bookName}</h1>
                <p className=''>By : {author}</p>
                <hr />
                <p className=''>Fiction</p>
                <hr />
                <p>
                    <span className='font-extrabold'>Review : </span>
                    <span className='text-gray-600'>{review}</span>
                </p>

                <div className='flex items-center gap-4'>
                    <span className='font-extrabold'>Tag : </span>
                    {
                        tags.map((item, idx) => <p className='badge bg-[#23BE0A] bg-opacity-10 text-[#23BE0A] font-bold' key={idx}>{item}</p>)
                    }
                </div>
                <hr />
                <div className='flex gap-20'>
                    <div className='space-y-2'>
                        <p className='text-gray-600'>Number of Pages :</p>
                        <p className='text-gray-600'>Publisher : </p>
                        <p className='text-gray-600'>Year of Publishing: : </p>
                        <p className='text-gray-600'>Rating : </p>

                    </div>
                    <div className='space-y-2'>
                        <p className='font-bold text-black'>{totalPages}</p>
                        <p className='font-bold text-black'>{publisher}</p>
                        <p className='font-bold text-black'>{yearOfPublishing}</p>
                        <p className='font-bold text-black'>{rating}</p>
                    </div>
                </div>
                <div className='space-x-3 pt-2'>
                    <button className=' hover:greenBtn px-5 py-3 rounded-md border font-bold'>Read</button>
                    <button className=' hover:greenBtn px-5 py-3 rounded-md border font-bold bg-[#50B1C9] text-white'>Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;