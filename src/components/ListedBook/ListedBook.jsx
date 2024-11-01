import React from 'react';
import SelectBooks from '../SelectBooks/SelectBooks';
import { useLoaderData } from 'react-router-dom';

const ListedBook = () => {
    const loadAllData = useLoaderData()
    return (
        <div>
            <div className='bg-gray-200 p-7 rounded-xl text-center font-bold text-2xl mb-6'>
                Books
            </div>
            <SelectBooks loadAllData={loadAllData}></SelectBooks>
        </div>
    );
};

export default ListedBook;