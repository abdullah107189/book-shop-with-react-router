import React from 'react';
import Book from '../Book/Book';

const Books = ({ books }) => {
    return (
        <div className='py-10' id='books'>
            <h1 className='text-center text-2xl font-bold mb-8 sticky top-10'>Books</h1>
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-3'>
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;