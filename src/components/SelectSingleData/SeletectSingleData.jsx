import React from 'react';
import { FaFileAlt, FaUsers } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const SeletectSingleData = ({ data }) => {
    console.log(data);
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = data;
    return (
        <div className='flex gap-10 p-6 border rounded-3xl mb-3 items-center '>
            <div className='w-[250px] h-[250px] bg-gray-100 py-8 px-3 rounded-2xl'>
                <img className='w-full h-full object-contain' src={image} alt="" />
            </div>
            <div className='space-y-2  w-full'>
                <h1 className='text-2xl font-bold font-serif'>{bookName}</h1>
                <p>By : {author}</p>
                <div className='flex items-center gap-3 justify-start'>
                    <div className='flex items-center gap-4'>
                        <span className='font-extrabold'>Tag : </span>
                        {
                            tags?.map((item, idx) => <p className='badge p-3 bg-[#23BE0A] bg-opacity-10 text-[#23BE0A] font-bold' key={idx}>{item}</p>)
                        }
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaLocationDot></FaLocationDot>
                        <p className='text-gray-500'>Year of Publishing: {yearOfPublishing}</p>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-2'>
                        <FaUsers />
                        <p className='text-gray-500'>Publisher: {publisher}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaFileAlt />
                        <p className='text-gray-500'>Page {totalPages}</p>
                    </div>
                </div>
                <div className='border-t my-3 border-gray-400'></div>
                <div className='flex gap-2'>
                    <div className='greenBtn rounded-full bg-[#328EFF26] text-[#328EFF]'>Categroy : {category}</div>
                    <div className='greenBtn rounded-full bg-[#FFAC3326] text-[#FFAC33]'>Reting : {rating}</div>
                    <Link to={`/bookDetails/${bookId}`} className='greenBtn rounded-full'>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default SeletectSingleData;