import React, { useState } from 'react';
import { FaRegStar, FaInfo } from "react-icons/fa";

const Book = ({ book }) => {
    // const obj = {
    //     "bookId": 7,
    //     "bookName": "Harry Potter and the Sorcerer's Stone",
    //     "author": "J.K. Rowling",
    //     "image": "https://i.ibb.co.com/989qMRW/42844155.jpg",
    //     "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
    //     "totalPages": 309,
    //     "rating": 4.8,
    //     "category": "Fantasy",
    //     "tags": [
    //         "Magic",
    //         "Young Adult"
    //     ],
    //     "publisher": "Bloomsbury",
    //     "yearOfPublishing": 1997
    // }
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book
    return (
        <div className="card bg-base-100 shadow-xl border">
            <div className="mt-4 w-[300px] h-[200px] mx-auto relative group duration-300 hover:-translate-y-1">
                <img
                    className={`rounded-xl object-contain w-full h-full`}
                    src={image}
                    alt="Shoes"
                />
                <button className={`group-hover:flex hidden absolute top-0 right-0 hover:bg-gray-300 z-10 rounded-full p-5`}>
                    <FaInfo></FaInfo>
                </button>
            </div>
            <div className="card-body">
                <div className='flex items-center gap-4 mb-3'>
                    {tags.map((item, idx) => <p key={idx} className=' text-center p-1 rounded-full bg-gray-100 text-[#23BE0A]'>{item}</p>)}
                </div>
                <div className='flex-grow'>
                    <h1 className='text-xl font-bold'>{bookName}</h1>
                    <p className='pb-3 border-b border-dashed'>By : {author}</p>
                </div>
                <div className='flex items-center justify-between'>
                    <p>Fiction</p>
                    <p className='flex items-center gap-2 justify-end pt-2'>{rating} <FaRegStar /></p>
                </div>
            </div>
        </div>
    );
};

export default Book;